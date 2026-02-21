/*
 * Copyright (c) 2026@박주가리교감 All rights reserved.
 * 모듈: V2.0 업그레이드 빌드 (모바일/패드 최적화 + 학습효과 강화)
 * - 중복 출제 방지(최근 N문항 큐)
 * - 오답/힌트 기반 가중치 출제(간단 스페이싱)
 * - 정답 후 해설 카드(형태소 뜻 요약)
 * - alert 제거 → 토스트/모달로 UX 개선
 * - 성장 포인트 자동 적립(힌트 없이 맞히면 보너스)
 */

window.EduEngine = class EduEngine {
  constructor() {
    this.VERSION = '3.0.0';

    // 상태 로드(구버전 방어)
    this.state = this.loadStateSafe();

    // 설정값
    this.THRESHOLDS = { '품': 0, '꿈': 200, '힘': 500 };
    this.RECENT_AVOID_N = 8; // 최근 출제 중복 방지

    // 런타임 변수
    this.currentQuestion = null;
    this.hintsUsed = 0;

    this.initDOM();
    // 마스터(별) 상태 초기 표시
    try { this.computeMastery(); } catch (_) {}
    try { this.renderMasterUI(); } catch (_) {}
    this.loadNextQuestion();
  }

  // ----------------------
  // State
  // ----------------------
  getDefaultState() {
    return {
      version: this.VERSION,
      mileage: 0,
      tree: { phase: 'seed', growthPoints: 0 },
      stats: { streak: 0, totalSolved: 0 },
      unlockedLevel: 1,
      // 학습 최적화를 위한 통계
      perItem: {},
      recentQueue: [],
      mastery: { pum:false, kkum:false, him:false, master:false },
      masteryUpdatedAt: 0
    };
  }

  loadStateSafe() {
    try {
      const raw = localStorage.getItem('eduState');
      if (!raw) return this.getDefaultState();

      const parsed = JSON.parse(raw);
      // 최소 필수 구조 확인
      if (!parsed || !parsed.stats || parsed.stats.totalSolved === undefined) {
        console.warn('구버전/손상 데이터 감지 → 초기화');
        return this.getDefaultState();
      }

      // V2 필드 보강
      if (!parsed.version) parsed.version = this.VERSION;
      if (!parsed.unlockedLevel) parsed.unlockedLevel = 1;
      if (!parsed.perItem) parsed.perItem = {};
      if (!parsed.recentQueue) parsed.recentQueue = [];
      if (!parsed.tree) parsed.tree = { phase: '품', growthPoints: 0 };
      if (!parsed.stats) parsed.stats = { streak: 0, totalSolved: 0 };
      if (!parsed.mileage && parsed.mileage !== 0) parsed.mileage = 0;

      return parsed;
    } catch (e) {
      console.error('데이터 로드 오류 → 초기화', e);
      return this.getDefaultState();
    }
  }

  saveState() {
    try {
      localStorage.setItem('eduState', JSON.stringify(this.state));
    } catch (e) {
      console.warn('로컬 스토리지 저장 실패(용량 부족 등).');
    }
  }

  getItemStat(id) {
    if (!this.state.perItem[id]) {
      this.state.perItem[id] = {
        seen: 0,
        correct: 0,
        wrong: 0,
        hints: 0,
        lastSeen: 0,
        lastWrong: 0
      };
    }
    return this.state.perItem[id];
  }

  pushRecent(id) {
    const q = this.state.recentQueue;
    // 중복 제거 후 push
    const idx = q.indexOf(id);
    if (idx >= 0) q.splice(idx, 1);
    q.push(id);
    // 길이 제한
    while (q.length > this.RECENT_AVOID_N) q.shift();
  }

  // ----------------------
  // UI
  // ----------------------
  initDOM() {
    this.cacheDOM();
    this.bindEvents();
    this.updateStatsDOM();
  }

  cacheDOM() {
    this.el = {
      levelDisplay: document.getElementById('level-display'),
      questionText: document.getElementById('question-text'),
      hintContainer: document.getElementById('morpheme-hints'),
      answerInput: document.getElementById('answer-input'),
      submitBtn: document.getElementById('submit-btn'),
      upgradeBtn: document.getElementById('upgrade-btn'),
      mileage: document.getElementById('current-mileage'),
      streak: document.getElementById('streak-bonus'),
      treeCanvas: document.getElementById('tree-canvas'),
      toast: document.getElementById('toast'),
      modal: document.getElementById('modal'),
      modalTitle: document.getElementById('modal-title'),
      modalBody: document.getElementById('modal-body'),
      modalClose: document.getElementById('modal-close'),
      modalPrimary: document.getElementById('modal-primary')
    ,
      resetBtn: document.getElementById('reset-btn')
    };
  }

  bindEvents() {
    if (this.el.submitBtn) {
      this.el.submitBtn.addEventListener('click', () => this.checkAnswer());
    }

    if (this.el.answerInput) {
      this.el.answerInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.checkAnswer();
      });

      // 모바일: 포커스 시 살짝 스크롤 보정
      this.el.answerInput.addEventListener('focus', () => {
        setTimeout(() => {
          try { this.el.answerInput.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (_) {}
        }, 200);
      });
    }

    if (this.el.resetBtn) {
      this.el.resetBtn.addEventListener('click', () => this.resetProgress());
    }

    if (this.el.upgradeBtn) {
      this.el.upgradeBtn.addEventListener('click', () => {
        const cost = Number(this.el.upgradeBtn.dataset.cost || 50);
        this.waterTree(cost, cost); // 현재 디자인은 cost=성장값
      });
    }

    // 모달
    if (this.el.modalClose) this.el.modalClose.addEventListener('click', () => this.closeModal());
    if (this.el.modal) {
      this.el.modal.addEventListener('click', (e) => {
        if (e.target === this.el.modal) this.closeModal();
      });
    }
  }

  showToast(message) {
    if (!this.el.toast) return;
    this.el.toast.textContent = message;
    this.el.toast.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      this.el.toast.classList.remove('show');
    }, 1400);
  }

  showModal({ title = '알림', bodyHTML = '', primaryText = '다음', onPrimary = null } = {}) {
    if (!this.el.modal) return;
    this.el.modalTitle.textContent = title;
    this.el.modalBody.innerHTML = bodyHTML;
    this.el.modalPrimary.textContent = primaryText;

    // 기존 핸들러 제거
    if (this._modalPrimaryHandler) {
      this.el.modalPrimary.removeEventListener('click', this._modalPrimaryHandler);
    }

    this._modalPrimaryHandler = () => {
      if (typeof onPrimary === 'function') onPrimary();
      this.closeModal();
    };

    this.el.modalPrimary.addEventListener('click', this._modalPrimaryHandler);
    this.el.modal.classList.remove('hidden');
  }

  closeModal() {
    if (!this.el.modal) return;
    this.el.modal.classList.add('hidden');
  }

  updateStatsDOM() {
    if (this.el.mileage) this.el.mileage.innerText = `🪙 ${this.state.mileage} M`;

    if (this.el.treeCanvas) {
      const stage = this.getGrowthStage(this.state.mileage);
      this.state.tree.phase = stage;
      this.el.treeCanvas.className = `phase-${stage}`;
    }

    document.querySelectorAll('.badge').forEach(b => b.classList.remove('active'));
    const stage = this.getGrowthStage(this.state.mileage);
    const sel = stage === 'seed' ? '.seed-badge' : stage === 'sprout' ? '.sprout-badge' : stage === 'stem' ? '.stem-badge' : stage === 'tree' ? '.tree-badge' : '.star-badge';
    const b = document.querySelector(sel);
    if (b) b.classList.add('active');
  }

  // ----------------------
  // Question selection
  // ----------------------
  ensureDatabase() {
    // v3 DB 우선: window.PKHDATABASE → legacy vocabDatabase 순서
    if (!this._dbItems) this.initDB();
    if (!this._dbItems || !Array.isArray(this._dbItems) || this._dbItems.length === 0) {
      if (this.el.questionText) this.el.questionText.innerText = '데이터베이스 오류: 단어를 불러올 수 없습니다.';
      return false;
    }
    return true;
  }

  initDB() {
    // 1) PKHDATABASE가 있으면 새 스키마를 legacy 형태로 어댑트
    if (typeof window !== 'undefined' && window.PKHDATABASE && Array.isArray(window.PKHDATABASE.items)) {
      this._dbItems = this.dedupById(window.PKHDATABASE.items.map((it) => {
        const levelNum = (it.level === 'pum') ? 1 : (it.level === 'kkum' ? 2 : 3);
        const fallbackSubject = (it.packId || '').replace(/^(pum|kkum|him)-/, '') || '혼합';
        const mor = (it.morphemes || []).map(m => {
          if (m.ref && window.PKHDATABASE.lexicon && window.PKHDATABASE.lexicon[m.ref]) {
            const lx = window.PKHDATABASE.lexicon[m.ref];
            return { hanja: lx.hanja, meaning: lx.meaning };
          }
          return { hanja: m.hanja || '', meaning: m.meaning || '' };
        });
        const ctx = (it.passage && it.passage.text) ? it.passage.text.replace(/\{\s*\}/g, '[ ? ]') : '';
        return {
          id: it.id,
          word: (it.word && it.word.ko) ? it.word.ko : '',
          level: levelNum,
          subject: (it.tags && it.tags.length) ? String(it.tags[0]) : fallbackSubject,
          context: ctx,
          morphemes: mor
        };
      }));
      return;
    }

    // 2) legacy
    if (typeof vocabDatabase !== 'undefined' && Array.isArray(vocabDatabase)) {
      this._dbItems = this.dedupById(vocabDatabase);
      return;
    }

    this._dbItems = [];
  }

  getDBItems() {
    if (!this._dbItems) this.initDB();
    return this._dbItems || [];
  }

  dedupById(list) {
    const seen = new Set();
    const out = [];
    (list || []).forEach(it => {
      if (!it || !it.id) return;
      if (seen.has(it.id)) return;
      seen.add(it.id);
      out.push(it);
    });
    return out;
  }
  // ----------------------
  // Master(별) 판정 로직
  // - 단계별(품/꿈/힘) 문항의 '고유 정답률'과 '힌트 사용률'을 기준으로 판정합니다.
  // - 기준값은 교실 상황에 맞게 아래 상수만 조정하면 됩니다.
  computeMastery() {
    // v3.3: 별(마스터)은 마일리지 기반 성장 단계로 판정합니다.
    const on = (Number(this.state.mileage||0) >= 10001);
    this.state.mastery = { pum:false, kkum:false, him:false, master:on };
    this.state.masteryUpdatedAt = Date.now();
    this.saveState();
  }

  renderMasterUI() {
    const badge = document.getElementById('master-badge');
    const star = document.getElementById('master-star');

    const on = (Number(this.state.mileage||0) >= 10001);
    if (badge) badge.classList.toggle('hidden', !on);
    if (star) star.classList.toggle('hidden', !on);

    // 단계 배지(씨앗/새싹/줄기/나무/별)
    document.querySelectorAll('.badge').forEach(b => b.classList.remove('active'));
    const stage = this.getGrowthStage(this.state.mileage);
    const sel = stage === 'seed' ? '.seed-badge' : stage === 'sprout' ? '.sprout-badge' : stage === 'stem' ? '.stem-badge' : stage === 'tree' ? '.tree-badge' : '.star-badge';
    const el = document.querySelector(sel);
    if (el) el.classList.add('active');
  }

  levelLabel(lvl) {
    if (lvl === 1) return '품(무학년~2)';
    if (lvl === 2) return '꿈(3~4)';
    return '힘(5~6)';
  }

  getLevelCounts() {
    const items = this.getDBItems();
    const counts = {1:0,2:0,3:0};
    items.forEach(it => { if (counts[it.level] !== undefined) counts[it.level]++; });
    return counts;
  }


  weightedPick(candidates) {
    // 오답/힌트가 많을수록 가중치↑, 최근 출제는 가중치↓
    const recentSet = new Set(this.state.recentQueue);

    const weights = candidates.map((w) => {
      const st = this.getItemStat(w.id);
      const base = 1;
      const wrongBoost = st.wrong * 2.0;
      const hintBoost = st.hints * 1.0;
      const correctPenalty = st.correct * 0.25;
      const recentPenalty = recentSet.has(w.id) ? 0.15 : 1.0;
      const score = Math.max(0.15, (base + wrongBoost + hintBoost - correctPenalty) * recentPenalty);
      return score;
    });

    const sum = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * sum;
    for (let i = 0; i < candidates.length; i++) {
      r -= weights[i];
      if (r <= 0) return candidates[i];
    }
    return candidates[candidates.length - 1];
  }

  loadNextQuestion() {
    if (!this.ensureDatabase()) return;

    const availableWords = this.getDBItems().filter(word => word.level <= this.state.unlockedLevel);
    if (availableWords.length === 0) {
      if (this.el.questionText) this.el.questionText.innerText = '해금된 단어가 없습니다. (Level 설정 확인 필요)';
      return;
    }

    this.currentQuestion = this.weightedPick(availableWords);
    this.hintsUsed = 0;

    // 통계 업데이트
    const st = this.getItemStat(this.currentQuestion.id);
    st.seen += 1;
    st.lastSeen = Date.now();
    this.pushRecent(this.currentQuestion.id);
    this.saveState();

    // UI 렌더링
    if (this.el.levelDisplay) {
      const counts = this.getLevelCounts();
      const curLvl = this.currentQuestion.level;
      const label = this.levelLabel(curLvl);
      const mastered = (this.state.mastery && this.state.mastery.master) ? " ⭐마스터" : "";
      this.el.levelDisplay.innerText = `현재 단계: ${label} · 문항 ${counts[curLvl] || 0}개 (${this.currentQuestion.subject})${mastered}`;
    }
    if (this.el.questionText) {
      this.el.questionText.innerHTML = this.currentQuestion.context.replace('[ ? ]', '<span class="blank-box">[ ? ]</span>');
    }

    // 마스터 UI 반영(상단 배지/나무 별)
    try { this.renderMasterUI(); } catch (_) {}

    if (this.el.answerInput) {
      this.el.answerInput.value = '';
      this.el.answerInput.style.borderColor = '#E2E8F0';
      this.el.answerInput.placeholder = '추론한 단어를 입력하세요';
      try { this.el.answerInput.focus(); } catch (_) {}
    }

    this.renderHints();
  }

  renderHints() {
    if (!this.el.hintContainer) return;
    this.el.hintContainer.innerHTML = '';

    this.currentQuestion.morphemes.forEach((morph) => {
      const card = document.createElement('div');
      card.className = 'hint-card';
      card.innerHTML = `
        <span class="hanja">${morph.hanja}</span>
        <button class="reveal-btn" type="button">뜻 보기 (-10 M)</button>
        <span class="meaning hidden">${morph.meaning ?? ''}</span>
      `;

      const revealBtn = card.querySelector('.reveal-btn');
      const meaningSpan = card.querySelector('.meaning');

      revealBtn.onclick = () => {
        if (this.state.mileage >= 10) {
          this.state.mileage -= 10;
          this.hintsUsed += 1;

          // per-item 통계
          const st = this.getItemStat(this.currentQuestion.id);
          st.hints += 1;

          revealBtn.style.display = 'none';
          meaningSpan.classList.remove('hidden');
          meaningSpan.classList.add('visible');

          this.saveState();
          this.updateStatsDOM();
          this.showToast('힌트를 사용했어요 (-10 M)');
        } else {
          this.showToast('마일리지가 부족해요');
        }
      };

      this.el.hintContainer.appendChild(card);
    });
  }

  // ----------------------
  // Answer handling
  // ----------------------
  normalizeAnswer(s) {
    return String(s || '').replace(/[^가-힣a-zA-Z0-9]/g, '').trim();
  }

  checkAnswer() {
    if (!this.currentQuestion || !this.el.answerInput) return;

    const inputVal = this.normalizeAnswer(this.el.answerInput.value);
    const correctVal = this.normalizeAnswer(this.currentQuestion.word);

    if (!inputVal) {
      this.showToast('정답을 입력해 주세요');
      return;
    }

    if (inputVal === correctVal) {
      this.onCorrect();
    } else {
      this.onWrong();
    }
  }

  onCorrect() {
    // UI 피드백
    this.el.answerInput.style.borderColor = '#2ECC71';
    if (navigator.vibrate) navigator.vibrate(35);

    // 보상 계산
    const baseReward = this.currentQuestion.level * 20;
    const noHintBonus = (this.hintsUsed === 0) ? 10 : 0;

    // 스트릭
    this.state.stats.streak += 1;
    this.state.stats.totalSolved += 1;

    let finalReward = baseReward + noHintBonus;
    if (this.state.stats.streak >= 3) {
      finalReward = Math.floor(finalReward * 1.5);
      if (this.el.streak) {
        this.el.streak.innerText = `🔥 ${this.state.stats.streak}연속 정답! (1.5배)`;
        this.el.streak.style.display = 'inline';
      }
    } else if (this.el.streak) {
      this.el.streak.style.display = 'none';
    }

    // 성장 포인트: 정답 시 자동 적립(독해력 학습 루프 강화)
    const growthGain = (this.currentQuestion.level * 10) + ((this.hintsUsed === 0) ? 5 : 0);
    this.state.tree.growthPoints += growthGain;

    // 마일리지 지급
    this.state.mileage += finalReward;

    // per-item 통계
    const st = this.getItemStat(this.currentQuestion.id);
    st.correct += 1;

    // 단계 평가
    const phaseChanged = this.evaluatePhase();

    this.saveState();
    this.updateStatsDOM();

    // 마스터(별) 상태 갱신
    try { this.computeMastery(); } catch (_) {}
    try { this.renderMasterUI(); } catch (_) {}

    // 해설 카드
    const morphSummary = (this.currentQuestion.morphemes || [])
      .map(m => `${m.hanja}(${m.meaning ?? ''})`)
      .join(' · ');

    const pill = `<span class="pill">${this.currentQuestion.subject}</span>`;
    const hintLine = this.hintsUsed === 0 ? '힌트 없이 맞혔어요! ✅' : `힌트 사용: ${this.hintsUsed}회`;
    const phaseLine = phaseChanged ? `<br><b>🎉 한자나무가 '${this.state.tree.phase}' 단계로 도약!</b>` : '';

    this.showModal({
      title: '정답!',
      primaryText: '다음 문제',
      bodyHTML: `
        <div style="font-size:1.05rem;">
          ${pill}
          <div style="margin-top:10px; font-size:1.25rem;"><b>${this.currentQuestion.word}</b></div>
          <div style="margin-top:8px; color:#2C3E50;">${hintLine}</div>
          <div style="margin-top:10px;">형태소 뜻: <b>${morphSummary || '—'}</b></div>
          <div style="margin-top:10px;">획득: <b>+${finalReward} M</b> · 성장: <b>+${growthGain} P</b>${phaseLine}</div>
        </div>
      `,
      onPrimary: () => this.loadNextQuestion()
    });
  }

  onWrong() {
    this.state.stats.streak = 0;
    if (this.el.streak) this.el.streak.style.display = 'none';

    // per-item 통계
    const st = this.getItemStat(this.currentQuestion.id);
    st.wrong += 1;
    st.lastWrong = Date.now();

    this.saveState();

    // 마스터(별) 상태 갱신
    try { this.computeMastery(); } catch (_) {}
    try { this.renderMasterUI(); } catch (_) {}

    // UI 피드백
    this.el.answerInput.style.borderColor = '#E74C3C';
    if (navigator.vibrate) navigator.vibrate([40, 30, 40]);

    this.el.answerInput.animate(
      [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-6px)' },
        { transform: 'translateX(6px)' },
        { transform: 'translateX(0)' }
      ],
      { duration: 260, iterations: 2 }
    );

    this.el.answerInput.value = '';
    this.el.answerInput.placeholder = '다시 유추해 보세요!';
    this.showToast('아쉬워요! 다시 한 번');
  }

  // ----------------------
  // Tree
  // ----------------------
  waterTree(cost, growthValue) {
    if (this.state.mileage < cost) {
      this.showToast('마일리지가 부족해요');
      return;
    }

    this.state.mileage -= cost;
    this.state.tree.growthPoints += growthValue;

    const phaseChanged = this.evaluatePhase();

    this.saveState();
    this.updateStatsDOM();

    if (phaseChanged) {
      this.showModal({
        title: '성장!',
        primaryText: '계속',
        bodyHTML: `🎉 한자나무가 <b>'${this.state.tree.phase}'</b> 단계로 도약했어요!<br>이제 <b>Level ${this.state.unlockedLevel}</b> 어휘가 출제됩니다.`,
        onPrimary: () => this.loadNextQuestion()
      });
    } else {
      this.showToast(`양분 공급! (-${cost} M)`);
    }
  }

  evaluatePhase() {
    const pts = this.state.tree.growthPoints;
    let newPhase = '품';
    let newLevel = 1;

    if (pts >= this.THRESHOLDS['힘']) {
      newPhase = '힘';
      newLevel = 3;
    } else if (pts >= this.THRESHOLDS['꿈']) {
      newPhase = '꿈';
      newLevel = 2;
    }

    const changed = (this.state.tree.phase !== newPhase);
    if (changed) {
      this.state.tree.phase = newPhase;
      this.state.unlockedLevel = newLevel;
    }
    return changed;
  }
}

window.addEventListener('load', () => {
  // eslint-disable-next-line no-unused-vars
  const appEngine = new EduEngine();
});
