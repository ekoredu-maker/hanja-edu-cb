/*
 * Copyright (c) 2026@박주가리교감 All rights reserved.
 * 모듈: V3.0 업그레이드 빌드 (모바일/패드 최적화 + 학습효과 강화)
 * - [유지] 중복 출제 방지, 엔터키 중복 입력 방지 상태 잠금 적용
 * - [유지] 개발자 시그니처 이스터 에그 (1회성 특별 보상)
 * - [추가] 100,000 M 도달 시 'GOD' 궁극 등급 승급 시스템 적용
 */

window.EduEngine = class EduEngine {
  constructor() {
    this.VERSION = '3.0.0';

    this.state = this.loadStateSafe();

    this.GROWTH = { seed: 0, sprout: 501, stem: 1501, tree: 5001, star: 10001 };
    this.RECENT_AVOID_N = 8; 

    this.currentQuestion = null;
    this.hintsUsed = 0;
    this.isProcessing = false; 

    this.initDOM();
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
      mileage: 50,
      tree: { phase: 'seed', growthPoints: 0 },
      stats: { streak: 0, totalSolved: 0 },
      unlockedLevel: 1,
      perItem: {},
      recentQueue: [],
      // [수정] god 상태 변수 기본값 추가
      mastery: { pum:false, kkum:false, him:false, master:false, god:false },
      masteryUpdatedAt: 0
    };
  }

  loadStateSafe() {
    try {
      const raw = localStorage.getItem('eduState');
      if (!raw) return this.getDefaultState();

      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.stats || parsed.stats.totalSolved === undefined) {
        console.warn('구버전/손상 데이터 감지 → 초기화');
        return this.getDefaultState();
      }

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
      console.warn('로컬 스토리지 저장 실패');
    }
  }

  getItemStat(id) {
    if (!this.state.perItem[id]) {
      this.state.perItem[id] = {
        seen: 0, correct: 0, wrong: 0, hints: 0, lastSeen: 0, lastWrong: 0
      };
    }
    return this.state.perItem[id];
  }

  pushRecent(id) {
    const q = this.state.recentQueue;
    const idx = q.indexOf(id);
    if (idx >= 0) q.splice(idx, 1);
    q.push(id);
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
      modalPrimary: document.getElementById('modal-primary'),
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
        this.waterTree(cost, cost); 
      });
    }
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
      const stage = this.getGrowthStage(this.state.tree.growthPoints);
      this.state.tree.phase = stage;
      this.el.treeCanvas.className = `phase-${stage}`;
    }

    document.querySelectorAll('.badge').forEach(b => b.classList.remove('active'));
    const stage = this.getGrowthStage(this.state.tree.growthPoints);
    const sel = stage === 'seed' ? '.seed-badge' : stage === 'sprout' ? '.sprout-badge' : stage === 'stem' ? '.stem-badge' : stage === 'tree' ? '.tree-badge' : '.star-badge';
    const b = document.querySelector(sel);
    if (b) b.classList.add('active');
  }

  // ----------------------
  // Question selection
  // ----------------------
  ensureDatabase() {
    if (!this._dbItems) this.initDB();
    if (!this._dbItems || !Array.isArray(this._dbItems) || this._dbItems.length === 0) {
      if (this.el.questionText) this.el.questionText.innerText = '데이터베이스 오류: 단어를 불러올 수 없습니다.';
      return false;
    }
    return true;
  }

  initDB() {
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
          id: it.id, word: (it.word && it.word.ko) ? it.word.ko : '',
          level: levelNum, subject: (it.tags && it.tags.length) ? String(it.tags[0]) : fallbackSubject,
          context: ctx, morphemes: mor
        };
      }));
      return;
    }
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
  // Master & GOD 판정 로직
  // ----------------------
  computeMastery() {
    const mil = Number(this.state.mileage || 0);
    const isMaster = mil >= 10001;
    const isGod = mil >= 100000; // [추가] 10만 도달 여부
    this.state.mastery = { pum:false, kkum:false, him:false, master:isMaster, god:isGod };
    this.state.masteryUpdatedAt = Date.now();
    this.saveState();
  }

  renderMasterUI() {
    const badge = document.getElementById('master-badge');
    const star = document.getElementById('master-star');
    const mil = Number(this.state.mileage || 0);

    const isMaster = mil >= 10001;
    const isGod = mil >= 100000;

    if (badge) {
      badge.classList.toggle('hidden', !isMaster);
      // [추가] GOD 등급 도달 시 UI 동적 변환
      if (isGod) {
        badge.innerText = '👑 GOD';
        badge.style.background = 'linear-gradient(135deg, #FFD700, #FF8C00)';
        badge.style.color = '#fff';
        badge.style.border = 'none';
        badge.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.8)';
      } else if (isMaster) {
        badge.innerText = '⭐ 마스터';
        badge.style.background = ''; 
        badge.style.color = '';
        badge.style.border = '';
        badge.style.boxShadow = '';
      }
    }
    if (star) {
      star.classList.toggle('hidden', !isMaster);
    }

    document.querySelectorAll('.badge').forEach(b => b.classList.remove('active'));
    const stage = this.getGrowthStage(this.state.tree.growthPoints);
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
    const recentSet = new Set(this.state.recentQueue);
    const weights = candidates.map((w) => {
      const st = this.getItemStat(w.id);
      const base = 1;
      const wrongBoost = st.wrong * 2.0;
      const hintBoost = st.hints * 1.0;
      const correctPenalty = st.correct * 0.25;
      const recentPenalty = recentSet.has(w.id) ? 0.15 : 1.0;
      return Math.max(0.15, (base + wrongBoost + hintBoost - correctPenalty) * recentPenalty);
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
    this.isProcessing = false; 
    if (!this.ensureDatabase()) return;

    const availableWords = this.getDBItems().filter(word => word.level <= this.state.unlockedLevel);
    const stageNow = this.getGrowthStage(this.state.tree.growthPoints);
    const seedPool = (w) => w.level === 1 && /(숫자|양|자연|날씨|기초)/.test(String(w.subject || ''));
    const sproutPool = (w) => w.level === 1;

    let stageFiltered = availableWords;
    if (stageNow === 'seed') stageFiltered = availableWords.filter(seedPool);
    else if (stageNow === 'sprout') stageFiltered = availableWords.filter(sproutPool);

    if (!stageFiltered || stageFiltered.length < 10) stageFiltered = availableWords;
    
    if (availableWords.length === 0) {
      if (this.el.questionText) this.el.questionText.innerText = '해금된 단어가 없습니다.';
      return;
    }

    this.currentQuestion = this.weightedPick(stageFiltered); 
    this.hintsUsed = 0;

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
      
      // [수정] GOD 등급 도달 시 문구 변경
      let masteredStr = "";
      if (this.state.mastery && this.state.mastery.god) {
        masteredStr = " 👑GOD";
      } else if (this.state.mastery && this.state.mastery.master) {
        masteredStr = " ⭐마스터";
      }

      this.el.levelDisplay.innerText = `현재 단계: ${label} · 문항 ${counts[curLvl] || 0}개 (${this.currentQuestion.subject})${masteredStr}`;
    }
    if (this.el.questionText) {
      this.el.questionText.innerHTML = this.currentQuestion.context.replace('[ ? ]', '<span class="blank-box">[ ? ]</span>');
    }

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
    if (this.isProcessing) return; 

    if (!this.currentQuestion || !this.el.answerInput) return;

    const inputVal = this.normalizeAnswer(this.el.answerInput.value);

    // --- [개발자 시그니처 이스터 에그 구간] ---
    const secretCodes = [
      "교감선생님 감사합니다.", 
      "열심히하겠습니다.", 
      "힘들어요. 도와주세요."
    ];

    if (secretCodes.includes(inputVal)) {
      if (this.state.easterEggUsed) {
        this.showToast('이미 축복을 받았습니다! 이제 스스로의 힘으로 학습해 보세요. 😊');
        this.el.answerInput.value = '';
        return; 
      }
      this.state.mileage += 500;
      this.state.easterEggUsed = true; 
      this.saveState();
      this.updateStatsDOM();
      this.el.answerInput.value = ''; 
      this.showToast('🍀 개발자의 축복을 받았습니다! (+500 M)');
      return; 
    }
    // -------------------------------------------

    const correctVal = this.normalizeAnswer(this.currentQuestion.word);

    if (!inputVal) {
      this.showToast('정답을 입력해 주세요');
      return;
    }

    this.isProcessing = true; 

    if (inputVal === correctVal) {
      this.onCorrect();
    } else {
      this.onWrong();
    }
  }

  onCorrect() {
    this.el.answerInput.style.borderColor = '#2ECC71';
    if (navigator.vibrate) navigator.vibrate(35);

    const baseReward = this.currentQuestion.level * 20;
    const noHintBonus = (this.hintsUsed === 0) ? 10 : 0;

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

    const growthGain = (this.currentQuestion.level * 10) + ((this.hintsUsed === 0) ? 5 : 0);
    this.state.tree.growthPoints += growthGain;

    this.state.mileage += finalReward;
    this.state.tree.growthPoints = (this.state.tree.growthPoints || 0) + finalReward;

    const st = this.getItemStat(this.currentQuestion.id);
    st.correct += 1;

    const phaseChanged = this.evaluatePhase();

    this.saveState();
    this.updateStatsDOM();

    try { this.computeMastery(); } catch (_) {}
    try { this.renderMasterUI(); } catch (_) {}

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

    const st = this.getItemStat(this.currentQuestion.id);
    st.wrong += 1;
    st.lastWrong = Date.now();

    this.saveState();

    try { this.computeMastery(); } catch (_) {}
    try { this.renderMasterUI(); } catch (_) {}

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

    this.isProcessing = false; 
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
        bodyHTML: `🎉 한자나무가 <b>${(this.state.tree.phase==='seed'?'씨앗':this.state.tree.phase==='sprout'?'새싹':this.state.tree.phase==='stem'?'줄기':this.state.tree.phase==='tree'?'나무':'별')}</b> 단계로 도약했어요!<br>이제 <b>Level ${this.state.unlockedLevel}</b> 어휘가 출제됩니다.`,
        onPrimary: () => this.loadNextQuestion()
      });
    } else {
      this.showToast(`양분 공급! (-${cost} M)`);
    }
  }

  evaluatePhase() {
    const g = this.state.tree.growthPoints || 0;
    const newPhase = this.getGrowthStage(g);

    let newLevel = 1;
    if (newPhase === 'stem') newLevel = 2;
    if (newPhase === 'tree' || newPhase === 'star') newLevel = 3;

    const changed = (newPhase !== this.state.tree.phase) || (newLevel !== this.state.unlockedLevel);

    this.state.tree.phase = newPhase;
    this.state.unlockedLevel = newLevel;

    return changed;
  }

  getGrowthStage(points) {
    if (points >= this.GROWTH.star) return 'star';
    if (points >= this.GROWTH.tree) return 'tree';
    if (points >= this.GROWTH.stem) return 'stem';
    if (points >= this.GROWTH.sprout) return 'sprout';
    return 'seed';
  }

  resetProgress() {
    if (confirm('모든 학습 기록과 마일리지가 초기화됩니다. 계속하시겠습니까?')) {
      try {
        localStorage.removeItem('eduState');
        location.reload();
      } catch (e) {
        console.error('초기화 중 오류 발생', e);
      }
    }
  }
}

window.addEventListener('load', () => {
  // eslint-disable-next-line no-unused-vars
  const appEngine = new EduEngine();
});
