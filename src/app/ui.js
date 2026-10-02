/*
 * Copyright (c) 2026@박주가리교감 All rights reserved.
 * 모듈: 품.꿈.힘 화면(UI) 레이어 v5
 *
 * 설계 원칙
 *  - 핵심엔진(core_engine.js)은 수정하지 않습니다.
 *  - 이 파일은 엔진(EduEngine)을 상속(extends)해서 "화면에 그리는 부분"만 바꿉니다.
 *    출제(가중치·중복방지), 보상(마일리지·연속정답), 성장(성장점수·단계·해금), 저장(eduState)은
 *    모두 엔진의 원래 메서드(super.xxx)를 그대로 호출합니다.
 *  - 엔진 파일 마지막 줄의 `new EduEngine()`은 window.EduEngine을 가리키므로,
 *    아래에서 window.EduEngine을 이 클래스로 바꿔 두면 엔진이 새 화면으로 시작됩니다.
 */
(function () {
  'use strict';

  var Base = window.EduEngine;
  if (typeof Base !== 'function') {
    console.error('[품꿈힘] core_engine.js를 먼저 불러와야 합니다.');
    return;
  }

  var STAGES = [
    { key: 'seed', name: '씨앗' },
    { key: 'sprout', name: '새싹' },
    { key: 'stem', name: '줄기' },
    { key: 'tree', name: '나무' },
    { key: 'star', name: '별' }
  ];
  var LEVEL_CHAR = { 1: '품', 2: '꿈', 3: '힘' };
  var LEVEL_GRADE = { 1: '무학년~2학년', 2: '3~4학년', 3: '5~6학년' };
  var LEVEL_UNLOCK = { 1: '처음부터', 2: '줄기 단계에서 열려요', 3: '나무 단계에서 열려요' };
  var UI_KEY = 'pkh.ui';

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function stageName(key) {
    for (var i = 0; i < STAGES.length; i++) if (STAGES[i].key === key) return STAGES[i].name;
    return key;
  }
  function josa(word, a, b) { // 받침 유무에 따른 조사 (으)로, 이/가 등
    var ch = String(word || '').charCodeAt(String(word || '').length - 1);
    if (ch < 0xAC00 || ch > 0xD7A3) return a;
    var jong = (ch - 0xAC00) % 28;
    if (a === '으로') return (jong === 0 || jong === 8) ? '로' : '으로';
    return jong ? a : b;
  }
  function readUI() { try { return JSON.parse(localStorage.getItem(UI_KEY)) || {}; } catch (_) { return {}; } }
  function writeUI(o) { try { localStorage.setItem(UI_KEY, JSON.stringify(o)); } catch (_) {} }

  // 한자나무 그림(SVG): 단계별 그룹을 CSS(phase-xxx)로 보이고 숨깁니다.
  var TREE_SVG =
    '<svg viewBox="0 0 320 200" role="img" aria-label="한자나무">' +
    '<g class="g g-seed">' +
      '<ellipse cx="160" cy="168" rx="70" ry="14" fill="#B9D3B4"/>' +
      '<path d="M120 164 Q160 140 200 164 Z" fill="#8C6A4A"/>' +
      '<ellipse cx="160" cy="150" rx="13" ry="16" fill="#7A4E2D"/>' +
      '<path d="M147 146 Q160 132 173 146" fill="#A87444"/>' +
      '<path d="M160 134 l0 -6" stroke="#5B3A20" stroke-width="3" stroke-linecap="round"/>' +
    '</g>' +
    '<g class="g g-sprout">' +
      '<ellipse cx="160" cy="168" rx="70" ry="14" fill="#B9D3B4"/>' +
      '<path d="M120 166 Q160 148 200 166 Z" fill="#8C6A4A"/>' +
      '<path d="M160 158 C160 140 160 128 160 112" stroke="#2F8F5B" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<path d="M160 118 C140 116 128 104 126 90 C144 90 158 100 160 118Z" fill="#4FB37A"/>' +
      '<path d="M160 112 C178 108 190 96 194 82 C176 82 162 92 160 112Z" fill="#3FA06B"/>' +
    '</g>' +
    '<g class="g g-stem">' +
      '<ellipse cx="160" cy="170" rx="80" ry="14" fill="#B9D3B4"/>' +
      '<path d="M160 166 C158 130 164 100 160 52" stroke="#2F8F5B" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      '<path d="M160 132 C136 132 120 118 116 100 C138 100 156 112 160 132Z" fill="#4FB37A"/>' +
      '<path d="M161 110 C184 108 198 94 202 76 C180 76 164 90 161 110Z" fill="#3FA06B"/>' +
      '<path d="M160 86 C142 84 130 72 128 58 C146 58 158 68 160 86Z" fill="#5CC089"/>' +
      '<path d="M160 60 C172 54 178 44 178 32 C166 36 160 46 160 60Z" fill="#4FB37A"/>' +
    '</g>' +
    '<g class="g g-tree">' +
      '<ellipse cx="160" cy="172" rx="96" ry="14" fill="#B9D3B4"/>' +
      '<path d="M150 170 L154 110 L140 92 M154 118 L172 96 M156 170 L166 104" stroke="#7A4E2D" stroke-width="11" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<circle cx="118" cy="84" r="36" fill="#3FA06B"/>' +
      '<circle cx="200" cy="80" r="38" fill="#2F8F5B"/>' +
      '<circle cx="160" cy="58" r="44" fill="#4FB37A"/>' +
      '<circle cx="150" cy="96" r="30" fill="#3FA06B"/>' +
      '<circle cx="178" cy="44" r="10" fill="#6ACB95" opacity=".7"/>' +
    '</g>' +
    '<g class="g g-star">' +
      '<ellipse cx="160" cy="172" rx="100" ry="14" fill="#B9D3B4"/>' +
      '<path d="M150 170 L154 110 L140 92 M154 118 L172 96 M156 170 L166 104" stroke="#7A4E2D" stroke-width="11" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<circle cx="118" cy="88" r="36" fill="#3FA06B"/>' +
      '<circle cx="202" cy="84" r="38" fill="#2F8F5B"/>' +
      '<circle cx="160" cy="62" r="44" fill="#4FB37A"/>' +
      '<circle cx="150" cy="100" r="30" fill="#3FA06B"/>' +
      '<circle cx="124" cy="78" r="7" fill="#F2B705"/><circle cx="196" cy="70" r="7" fill="#F2B705"/>' +
      '<circle cx="170" cy="96" r="7" fill="#F2B705"/><circle cx="146" cy="50" r="7" fill="#F2B705"/>' +
      '<path d="M252 22 l6 13 14 2 -10 10 2 14 -12 -7 -12 7 2 -14 -10 -10 14 -2z" fill="#F2B705"/>' +
    '</g>' +
    '</svg>';

  class PKHApp extends Base {
    constructor() {
      super();           // 엔진 초기화(상태 로드, 화면 연결) — 문제 출제는 '공부 시작'을 누를 때
      this.afterInit();
    }

    // ------------------------------------------------------------------
    // 1) 엔진이 부르는 화면 메서드들 (엔진 로직은 super로 그대로 실행)
    // ------------------------------------------------------------------
    cacheDOM() {
      super.cacheDOM(); // 엔진이 쓰는 id(answer-input, morpheme-hints, toast, modal …)를 그대로 연결
      this.ui = {
        app: $('app'),
        treeName: $('tree-stage-name'),
        growthFill: $('growth-fill'),
        growthMeter: $('growth-meter'),
        treeNext: $('tree-next'),
        levels: $('levels'),
        reviewCount: $('review-count'),
        reviewList: $('review-list'),
        quizMileage: $('quiz-mileage'),
        levelChip: $('level-chip'),
        subjectChip: $('subject-chip'),
        sessionCount: $('session-count'),
        giveupBtn: $('giveup-btn'),
        startBtn: $('start-btn'),
        startSub: $('start-sub'),
        form: $('action-area'),
        modalSecondary: $('modal-secondary'),
        hintsLabel: document.querySelector('.hints-label')
      };
      if (this.el.treeCanvas && !this.el.treeCanvas.querySelector('svg')) {
        this.el.treeCanvas.insertAdjacentHTML('afterbegin', TREE_SVG);
      }
    }

    bindEvents() {
      var self = this;
      var el = this.el, ui = this.ui;

      // 정답 제출 (한글 입력 조합 중 Enter 중복 방지 포함)
      // 한글 조합 중에 Enter를 누르면 조합이 끝난 뒤 한 번만 제출
      var composing = false, submitAfterCompose = false;
      ui.form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (composing) { submitAfterCompose = true; return; }
        self.checkAnswer();
      });
      el.answerInput.addEventListener('compositionstart', function () { composing = true; });
      el.answerInput.addEventListener('compositionend', function () {
        composing = false;
        if (submitAfterCompose) { submitAfterCompose = false; setTimeout(function () { self.checkAnswer(); }, 0); }
      });
      el.answerInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && (e.isComposing || e.keyCode === 229)) { e.preventDefault(); submitAfterCompose = true; }
      });
      // 키보드가 올라올 때 입력창이 가려지지 않도록
      el.answerInput.addEventListener('focus', function () {
        setTimeout(function () { try { el.answerInput.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (_) {} }, 280);
      });
      el.answerInput.addEventListener('input', function () { el.answerInput.classList.remove('is-wrong'); });

      // 양분 주기 (엔진과 동일: 비용 = 성장값)
      el.upgradeBtn.addEventListener('click', function () {
        var cost = Number(el.upgradeBtn.dataset.cost || 50);
        self.waterTree(cost, cost);
      });

      el.resetBtn.addEventListener('click', function () { self.resetProgress(); });

      // 시트(모달)
      el.modalPrimary.addEventListener('click', function () { self._sheetAction('primary'); });
      ui.modalSecondary.addEventListener('click', function () { self._sheetAction('secondary'); });
      el.modalClose.addEventListener('click', function () { self.closeModal(); });
      el.modal.addEventListener('click', function (e) { if (e.target === el.modal) self.closeModal(); });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !el.modal.classList.contains('hidden')) self.closeModal();
      });

      // 화면 이동
      document.querySelectorAll('[data-go]').forEach(function (b) {
        b.addEventListener('click', function () { self.go(b.getAttribute('data-go')); });
      });
      ui.startBtn.addEventListener('click', function () { self.go('quiz'); });
      ui.giveupBtn.addEventListener('click', function () { self.showAnswerAndSkip(); });

      // 복습 노트 탭
      document.querySelectorAll('.review-tabs .tab').forEach(function (t) {
        t.addEventListener('click', function () {
          document.querySelectorAll('.review-tabs .tab').forEach(function (x) {
            x.classList.toggle('active', x === t); x.setAttribute('aria-selected', x === t ? 'true' : 'false');
          });
          self.renderReview(t.getAttribute('data-filter'));
        });
      });

      // 글자 크기
      document.querySelectorAll('#font-seg button').forEach(function (b) {
        b.addEventListener('click', function () { self.setFontScale(b.getAttribute('data-size')); });
      });

      // 백업/복원
      $('backup-btn').addEventListener('click', function () { self.exportRecord(); });
      $('restore-input').addEventListener('change', function (e) { self.importRecord(e.target.files && e.target.files[0]); e.target.value = ''; });

      // 브라우저 뒤로가기 = 홈
      window.addEventListener('popstate', function (e) { self.go((e.state && e.state.v) || 'home', false); });
    }

    updateStatsDOM() {
      super.updateStatsDOM(); // 엔진: 마일리지 표시, 나무 단계 클래스, 단계 배지
      if (!this.ui) return;
      var st = this.state;
      var g = Number(st.tree.growthPoints || 0);
      var stage = this.getGrowthStage(g);
      var idx = STAGES.map(function (s) { return s.key; }).indexOf(stage);
      var G = this.GROWTH;

      if (this.el.mileage) this.el.mileage.textContent = '🪙 ' + Number(st.mileage).toLocaleString() + ' M';
      if (this.ui.quizMileage) this.ui.quizMileage.textContent = '🪙 ' + Number(st.mileage).toLocaleString();
      if (this.ui.treeName) this.ui.treeName.textContent = '한자나무 · ' + stageName(stage);

      // 다음 단계까지 진행 막대
      var pct = 100, nextText = '가장 높은 단계예요. 멋져요!';
      if (idx < STAGES.length - 1) {
        var from = G[STAGES[idx].key] || 0;
        var to = G[STAGES[idx + 1].key];
        pct = Math.max(0, Math.min(100, Math.round(((g - from) / (to - from)) * 100)));
        nextText = stageName(STAGES[idx + 1].key) + '까지 ' + Math.max(0, to - g).toLocaleString() + '점 · 지금 ' + g.toLocaleString() + '점';
      }
      if (this.ui.growthFill) this.ui.growthFill.style.width = pct + '%';
      if (this.ui.growthMeter) this.ui.growthMeter.setAttribute('aria-valuenow', String(pct));
      if (this.ui.treeNext) this.ui.treeNext.textContent = nextText;
      document.querySelectorAll('.stage-steps li').forEach(function (li, i) { li.classList.toggle('done', i < idx); });

      var cost = Number(this.el.upgradeBtn && this.el.upgradeBtn.dataset.cost || 50);
      if (this.el.upgradeBtn) this.el.upgradeBtn.classList.toggle('is-poor', st.mileage < cost);

      this.renderLevels();
      if (this.ui.reviewCount) this.ui.reviewCount.textContent = String(this.countWrong());
    }

    renderMasterUI() {
      super.renderMasterUI(); // 엔진: 마스터 배지/별 표시
    }

    loadNextQuestion() {
      if (!this._started) return; // 홈 화면에서는 출제하지 않음(학습 통계가 쌓이지 않도록)
      this._answered = false;
      this._wrongs = 0;
      super.loadNextQuestion();  // 엔진: 가중치 출제 + 통계 + 문장/힌트 표시
      this.decorateQuestion();
    }

    renderHints() {
      super.renderHints(); // 엔진: 힌트 카드 + '뜻 보기' 차감 로직
      var cards = this.el.hintContainer.querySelectorAll('.hint-card');
      cards.forEach(function (card) {
        var btn = card.querySelector('.reveal-btn');
        if (btn) {
          btn.innerHTML = '<span class="rv-t">뜻 보기</span><span class="cost">🪙10</span>';
          btn.setAttribute('aria-label', '뜻 보기, 10 마일리지 사용');
        }
        var h = card.querySelector('.hanja');
        if (h) h.setAttribute('lang', 'zh-Hant');
      });
      var n = cards.length || 1;
      this.el.hintContainer.setAttribute('data-n', String(n));
      this.el.hintContainer.style.setProperty('--n', String(n <= 4 ? n : 3));
      if (this.ui && this.ui.hintsLabel) {
        this.ui.hintsLabel.textContent = cards.length > 1 ? '이 한자들이 모여 낱말이 돼요' : '이 한자가 답의 실마리예요';
      }
    }

    onCorrect() {
      if (this._answered) return; // 정답 시트를 닫고 다시 눌러 보상이 중복되는 것 방지
      var before = this.snapshot();
      this._capture = {};
      try { super.onCorrect(); }   // 엔진: 보상·연속정답·성장·단계평가·저장
      finally { this._capture = null; }
      this._answered = true;
      this.session.solved += 1;
      var after = this.snapshot();
      this.el.answerInput.classList.add('is-right');
      this.el.answerInput.style.borderColor = '';
      var blank = this.el.questionText.querySelector('.blank-box');
      if (blank) { blank.textContent = this.currentQuestion.word; blank.classList.add('filled'); }
      if (this.el.streak && after.streak >= 3) this.el.streak.textContent = '🔥 ' + after.streak + '연속';
      this.showResult(before, after);
    }

    onWrong() {
      super.onWrong(); // 엔진: 연속정답 초기화, 오답 통계, 흔들림
      this._wrongs = (this._wrongs || 0) + 1;
      this.el.answerInput.style.borderColor = '';
      this.el.answerInput.classList.add('is-wrong');
      if (this._wrongs >= 2) this.ui.giveupBtn.classList.remove('hidden');
      if (this._wrongs === 2 && this.el.hintContainer.querySelector('.reveal-btn:not([style*="none"])')) {
        this.showToast('한자 카드의 "뜻 보기"를 눌러 봐요');
      }
    }

    waterTree(cost, growthValue) {
      var before = this.snapshot();
      this._capture = {};
      try { super.waterTree(cost, growthValue); } // 엔진: 마일리지 차감·성장·단계평가
      finally { var cap = this._capture; this._capture = null; }
      var after = this.snapshot();
      if (after.m < before.m) {
        var tc = this.el.treeCanvas;
        tc.classList.remove('watering'); void tc.offsetWidth; tc.classList.add('watering');
      }
      if (cap && cap.modal) this.showStageUp(before, after, null);
    }

    showModal(opts) {
      if (this._capture) { this._capture.modal = opts; return; } // 엔진 기본 알림 대신 새 시트 사용
      opts = opts || {};
      this.openSheet({ title: opts.title, html: opts.bodyHTML, primary: opts.primaryText, onPrimary: opts.onPrimary });
    }

    closeModal() {
      if (this.el.modal.classList.contains('hidden')) return;
      this.el.modal.classList.add('hidden');
      var fn = this._sheet && this._sheet.onClose;
      this._sheet = null;
      if (typeof fn === 'function') fn();
    }

    // 학습 기록 초기화: 엔진과 같은 동작(eduState 삭제 → 새로고침), 확인창만 새 디자인으로
    resetProgress() {
      this.openSheet({
        title: '학습 기록을 지울까요?',
        html: '<p>마일리지 <b>' + this.state.mileage + ' M</b>, 맞힌 문제 <b>' + this.state.stats.totalSolved + '개</b>, 한자나무와 복습 노트가 모두 지워져요. 되돌릴 수 없어요.</p>' +
              '<p class="set-desc small" style="margin-top:8px">지우기 전에 [기록 파일로 저장]을 해 두면 나중에 불러올 수 있어요.</p>',
        primary: '지우기',
        secondary: '취소',
        onPrimary: function () {
          try { localStorage.removeItem('eduState'); location.reload(); }
          catch (e) { console.error('초기화 중 오류 발생', e); }
        }
      });
    }

    // ------------------------------------------------------------------
    // 2) 화면 전용 기능
    // ------------------------------------------------------------------
    afterInit() {
      this.session = { solved: 0, shown: 0 };
      var prefs = readUI();
      this.setFontScale(prefs.fs || 1, true);
      try { history.replaceState({ v: 'home' }, '', location.pathname + location.search); } catch (_) {}
      this.updateStatsDOM();
      var info = (window.PKHDATABASE && window.PKHDATABASE.meta) || {};
      var n = this.getDBItems().length;
      $('db-info').textContent = '문항 ' + n + '개' + (info.contentVersion ? ' · 콘텐츠 ' + info.contentVersion : '');
      var b = window.PKH_BUILD || {};
      if (b.version && b.version.indexOf('__') !== 0) $('app-version').textContent = 'v' + b.version;
      if (!n) this.ui.startSub.textContent = '문항 데이터를 찾지 못했어요. questions.js를 확인해 주세요.';
      this.setupInstall();
      this.setupServiceWorker();
      window.PKH_UI_READY = true;
      window.PKH_APP = this; // 점검용(개발자 도구에서 상태 확인)
    }

    getGrowthStageFallback(points) {
      var G = this.GROWTH || { seed: 0, sprout: 501, stem: 1501, tree: 5001, star: 10001 };
      var g = Number(points) || 0;
      if (g >= G.star) return 'star';
      if (g >= G.tree) return 'tree';
      if (g >= G.stem) return 'stem';
      if (g >= G.sprout) return 'sprout';
      return 'seed';
    }

    snapshot() {
      var g = Number(this.state.tree.growthPoints || 0);
      return { m: Number(this.state.mileage || 0), g: g, phase: this.getGrowthStage(g), lvl: this.state.unlockedLevel, streak: this.state.stats.streak };
    }

    go(view, push) {
      if (push !== false && view !== 'home') {
        try { history.pushState({ v: view }, '', '#' + view); } catch (_) {}
      } else if (push !== false && view === 'home' && history.state && history.state.v !== 'home') {
        try { history.back(); return; } catch (_) {}
      }
      if (!this.el.modal.classList.contains('hidden')) { this._sheet = null; this.el.modal.classList.add('hidden'); }
      this.ui.app.setAttribute('data-view', view);
      window.scrollTo(0, 0);
      if (view === 'quiz') {
        if (!this._started) { this._started = true; this.loadNextQuestion(); }
        else if (this._answered || !this.currentQuestion) this.loadNextQuestion();
      } else if (view === 'review') {
        var active = document.querySelector('.review-tabs .tab.active');
        this.renderReview(active ? active.getAttribute('data-filter') : 'wrong');
      } else if (view === 'settings') {
        this.renderSettings();
      } else {
        this.updateStatsDOM();
        this.ui.startSub.textContent = this._started && this.currentQuestion && !this._answered
          ? '풀던 문제로 돌아가요' : '문장을 읽고 한자어를 맞혀 봐요';
      }
    }

    decorateQuestion() {
      var q = this.currentQuestion;
      if (!q) return;
      this.session.shown += 1;
      this.ui.levelChip.textContent = LEVEL_CHAR[q.level] || '품';
      this.ui.levelChip.setAttribute('title', (LEVEL_CHAR[q.level] || '') + ' 단계 (' + (LEVEL_GRADE[q.level] || '') + ')');
      this.ui.subjectChip.textContent = q.subject || '';
      this.ui.sessionCount.textContent = '오늘 ' + this.session.shown + '번째 문제';
      this.ui.giveupBtn.classList.add('hidden');
      var inp = this.el.answerInput;
      inp.classList.remove('is-wrong', 'is-right');
      inp.style.borderColor = '';
      inp.placeholder = '정답을 써 보세요';
      // 터치 기기에서는 키보드가 문장을 가리지 않도록 자동 포커스를 해제
      try { if (window.matchMedia('(pointer: coarse)').matches) inp.blur(); } catch (_) {}
      this.updateStatsDOM();
    }

    hanjaSquares(q, cls) {
      var n = (q.morphemes || []).length || 1;
      return '<div class="' + cls + '" lang="zh-Hant" style="--n:' + n + '">' + (q.morphemes || []).map(function (m) {
        return '<span>' + esc(m.hanja) + '</span>';
      }).join('') + '</div>';
    }

    partsList(q) {
      return '<ul class="result-parts">' + (q.morphemes || []).map(function (m) {
        return '<li><span class="p-h" lang="zh-Hant">' + esc(m.hanja) + '</span><span>' + esc(m.meaning || '') + '</span></li>';
      }).join('') + '</ul>';
    }

    filledSentence(q) {
      var parts = String(q.context || '').split('[ ? ]');
      return parts.map(esc).join('<span class="blank-box filled">' + esc(q.word) + '</span>');
    }

    showResult(before, after) {
      var self = this, q = this.currentQuestion;
      var dm = after.m - before.m, dg = after.g - before.g;
      var noHint = this.hintsUsed === 0;
      var seal = noHint
        ? '<div class="seal" aria-hidden="true">참<br>잘했어요</div>'
        : '<div class="seal" aria-hidden="true">잘했어요</div>';
      var notes = '<span class="gain gain-coin">🪙 +' + dm + '</span>' +
                  '<span class="gain gain-grow">🌱 성장 +' + dg + '</span>' +
                  '<span class="gain gain-note">' + (noHint ? '힌트 없이 맞혔어요' : '힌트 ' + this.hintsUsed + '번 사용') + '</span>';
      if (after.streak >= 3) notes += '<span class="gain gain-note">🔥 ' + after.streak + '연속 정답 · 1.5배</span>';
      var up = '';
      if (after.phase !== before.phase) {
        up = '<div class="levelup">🎉 한자나무가 ' + stageName(after.phase) + josa(stageName(after.phase), '으로') + ' 자랐어요!' +
             (after.lvl > before.lvl ? '<br>이제 ' + LEVEL_CHAR[after.lvl] + ' 단계(' + LEVEL_GRADE[after.lvl] + ') 낱말도 나와요.' : '') + '</div>';
      }
      this.openSheet({
        title: '정답이에요!',
        html: '<div class="result">' + seal +
              '<div class="result-word">' + this.hanjaSquares(q, 'result-hanja') + '<div class="result-ko">' + esc(q.word) + '</div></div>' +
              this.partsList(q) +
              '<p class="result-sentence">' + this.filledSentence(q) + '</p>' +
              '<div class="result-gain">' + notes + '</div>' + up + '</div>',
        primary: '다음 문제',
        onPrimary: function () { self.loadNextQuestion(); },
        onClose: function () { self.loadNextQuestion(); }
      });
    }

    showAnswerAndSkip() {
      var self = this, q = this.currentQuestion;
      if (!q) return;
      this._answered = true; // 보상 없이 다음 문제로
      this.openSheet({
        title: '정답은 「' + q.word + '」',
        html: '<div class="result">' +
              '<div class="result-word">' + this.hanjaSquares(q, 'result-hanja') + '<div class="result-ko">' + esc(q.word) + '</div></div>' +
              this.partsList(q) +
              '<p class="result-sentence">' + this.filledSentence(q) + '</p>' +
              '<p class="set-desc">이 낱말은 복습 노트에 담겼고, 곧 다시 나와요.</p></div>',
        primary: '다음 문제',
        onPrimary: function () { self.loadNextQuestion(); },
        onClose: function () { self.loadNextQuestion(); }
      });
    }

    showStageUp(before, after) {
      var name = stageName(after.phase);
      this.openSheet({
        title: '한자나무가 자랐어요',
        html: '<div class="result"><div class="levelup">🎉 ' + name + josa(name, '으로') + ' 자랐어요!' +
              (after.lvl > before.lvl ? '<br>이제 ' + LEVEL_CHAR[after.lvl] + ' 단계(' + LEVEL_GRADE[after.lvl] + ') 낱말도 나와요.' : '') +
              '</div></div>',
        primary: '좋아요'
      });
    }

    openSheet(o) {
      var el = this.el;
      this._sheet = { onPrimary: o.onPrimary, onSecondary: o.onSecondary, onClose: o.onClose };
      el.modalTitle.textContent = o.title || '알림';
      el.modalBody.innerHTML = o.html || '';
      el.modalPrimary.textContent = o.primary || '확인';
      if (o.secondary) { this.ui.modalSecondary.textContent = o.secondary; this.ui.modalSecondary.classList.remove('hidden'); }
      else this.ui.modalSecondary.classList.add('hidden');
      el.modal.classList.remove('hidden');
      var card = el.modal.querySelector('.modal-card');
      if (card) { card.scrollTop = 0; card.classList.toggle('scrolls', card.scrollHeight > card.clientHeight + 4); }
      if (el.toast) { el.toast.classList.remove('show'); clearTimeout(this._toastTimer); }
      try { el.answerInput.blur(); } catch (_) {}
      setTimeout(function () { try { el.modalPrimary.focus({ preventScroll: true }); } catch (_) {} }, 30);
    }

    _sheetAction(which) {
      var s = this._sheet || {};
      this._sheet = null;
      this.el.modal.classList.add('hidden');
      var fn = which === 'primary' ? s.onPrimary : s.onSecondary;
      if (typeof fn === 'function') fn();
    }

    countWrong() {
      var per = this.state.perItem || {}, n = 0;
      for (var k in per) if (per[k] && per[k].wrong > 0) n++;
      return n;
    }

    renderLevels() {
      if (!this.ui.levels) return;
      var items = this.getDBItems();
      var per = this.state.perItem || {};
      var unlocked = this.state.unlockedLevel || 1;
      var html = '';
      [1, 2, 3].forEach(function (lv) {
        var list = items.filter(function (it) { return it.level === lv; });
        var done = list.filter(function (it) { return per[it.id] && per[it.id].correct > 0; }).length;
        var pct = list.length ? Math.round(done / list.length * 100) : 0;
        var locked = lv > unlocked;
        html += '<div class="level-row' + (locked ? ' locked' : '') + '">' +
          '<span class="lv-sq">' + LEVEL_CHAR[lv] + '</span>' +
          '<div><div class="lv-name">' + LEVEL_CHAR[lv] + ' 단계<span class="lv-grade">' + LEVEL_GRADE[lv] + (locked ? ' · ' + LEVEL_UNLOCK[lv] : '') + '</span></div>' +
          (locked ? '' : '<div class="lv-bar"><span style="width:' + pct + '%"></span></div>') + '</div>' +
          (locked ? '<span class="lv-num lock" aria-label="잠김">🔒</span>' : '<span class="lv-num">' + done + ' / ' + list.length + '</span>') + '</div>';
      });
      this.ui.levels.innerHTML = html;
    }

    renderReview(filter) {
      var per = this.state.perItem || {};
      var items = this.getDBItems().filter(function (it) {
        var s = per[it.id]; if (!s) return false;
        if (filter === 'hint') return s.hints > 0;
        if (filter === 'correct') return s.correct > 0;
        return s.wrong > 0;
      });
      items.sort(function (a, b) {
        var sa = per[a.id], sb = per[b.id];
        if (filter === 'wrong') return (sb.wrong - sa.wrong) || (sb.lastWrong - sa.lastWrong);
        if (filter === 'hint') return sb.hints - sa.hints;
        return sb.correct - sa.correct;
      });
      var self = this;
      if (!items.length) {
        var msg = filter === 'wrong' ? '틀린 낱말이 아직 없어요.' : filter === 'hint' ? '힌트를 본 낱말이 아직 없어요.' : '아직 맞힌 낱말이 없어요.';
        this.ui.reviewList.innerHTML = '<li class="empty">' + msg + '<br>문제를 풀면 여기에 모여요.</li>';
        return;
      }
      this.ui.reviewList.innerHTML = items.map(function (it) {
        var s = per[it.id];
        return '<li class="review-item">' + self.hanjaSquares(it, 'rv-hanja') +
          '<div><div class="rv-word">' + esc(it.word) + '</div>' +
          '<div class="rv-mean">' + (it.morphemes || []).map(function (m) { return esc(m.meaning); }).join(' + ') + '</div>' +
          '<div class="rv-stat">' + LEVEL_CHAR[it.level] + ' · ' + esc(it.subject) + ' · 맞힘 ' + s.correct + ' / 틀림 ' + s.wrong + ' / 힌트 ' + s.hints + '</div></div></li>';
      }).join('');
    }

    renderSettings() {
      var st = this.state;
      $('record-summary').textContent = '맞힌 문제 ' + st.stats.totalSolved + '개 · 마일리지 ' + st.mileage + ' M · 성장점수 ' + Number(st.tree.growthPoints || 0).toLocaleString() + '점';
    }

    setFontScale(v, silent) {
      var n = Number(v) || 1;
      document.documentElement.style.setProperty('--fs', String(n));
      document.documentElement.setAttribute('data-fs', String(n));
      document.querySelectorAll('#font-seg button').forEach(function (b) {
        b.setAttribute('aria-checked', Number(b.getAttribute('data-size')) === n ? 'true' : 'false');
      });
      if (!silent) { var p = readUI(); p.fs = n; writeUI(p); }
    }

    exportRecord() {
      var d = new Date();
      var stamp = d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
      var data = { app: 'pumkkumhim-hanja', kind: 'eduState', exportedAt: d.toISOString(), state: this.state };
      var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'pumkkumhim-hanja-record-' + stamp + '.json';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
      this.showToast('기록 파일을 저장했어요');
    }

    importRecord(file) {
      if (!file) return;
      var self = this;
      var reader = new FileReader();
      reader.onload = function () {
        var data;
        try { data = JSON.parse(reader.result); } catch (_) { self.showToast('기록 파일을 읽을 수 없어요'); return; }
        var st = data && data.state ? data.state : data;
        if (!st || !st.stats || st.stats.totalSolved === undefined) { self.showToast('품꿈힘 한자 기록 파일이 아니에요'); return; }
        self.openSheet({
          title: '이 기록을 불러올까요?',
          html: '<p>맞힌 문제 <b>' + st.stats.totalSolved + '개</b>, 마일리지 <b>' + (st.mileage || 0) + ' M</b>인 기록이에요.<br>지금 기기의 기록은 이 기록으로 바뀌어요.</p>',
          primary: '불러오기', secondary: '취소',
          onPrimary: function () {
            try { localStorage.setItem('eduState', JSON.stringify(st)); } catch (_) {}
            self.state = self.loadStateSafe(); // 엔진의 안전 로더로 보정
            self.saveState();
            self._started = false; self.currentQuestion = null;
            try { self.evaluatePhase(); self.computeMastery(); } catch (_) {}
            self.updateStatsDOM();
            try { self.renderMasterUI(); } catch (_) {}
            self.renderSettings();
            self.showToast('기록을 불러왔어요');
          }
        });
      };
      reader.readAsText(file);
    }

    setupInstall() {
      var self = this;
      var guide = $('install-guide');
      var standalone = window.matchMedia && window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
      var ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      if (standalone) guide.textContent = '앱으로 설치되어 있어요. 인터넷이 없어도 공부할 수 있어요.';
      else if (ios) guide.innerHTML = 'Safari 아래쪽 <b>공유 버튼</b>을 누르고 <b>홈 화면에 추가</b>를 고르세요.';
      else if (location.protocol === 'file:') guide.textContent = '파일로 열면 설치할 수 없어요. 선생님이 알려 준 웹 주소로 접속해 주세요.';
      else guide.innerHTML = '브라우저 메뉴(⋮)에서 <b>앱 설치</b> 또는 <b>홈 화면에 추가</b>를 고르세요.';

      window.addEventListener('beforeinstallprompt', function (e) {
        e.preventDefault();
        self._installEvt = e;
        $('install-hint').classList.remove('hidden');
      });
      $('install-btn').addEventListener('click', function () {
        if (!self._installEvt) return;
        self._installEvt.prompt();
        self._installEvt = null;
        $('install-hint').classList.add('hidden');
      });
    }

    setupServiceWorker() {
      if (!('serviceWorker' in navigator) || window.PKH_SINGLE || !/^https?:$/.test(location.protocol)) return;
      var bar = $('update-bar'), reloading = false, wantReload = false;
      function offer(reg) {
        if (!reg.waiting) return;
        bar.classList.remove('hidden');
        $('update-btn').onclick = function () { wantReload = true; reg.waiting.postMessage({ type: 'SKIP_WAITING' }); };
      }
      navigator.serviceWorker.register('sw.js').then(function (reg) {
        if (reg.waiting && navigator.serviceWorker.controller) offer(reg);
        reg.addEventListener('updatefound', function () {
          var nw = reg.installing;
          if (!nw) return;
          nw.addEventListener('statechange', function () {
            if (nw.state === 'installed' && navigator.serviceWorker.controller) offer(reg);
          });
        });
        document.addEventListener('visibilitychange', function () {
          if (document.visibilityState === 'visible') reg.update().catch(function () {});
        });
      }).catch(function (err) { console.log('서비스워커 등록 불가:', err); });
      navigator.serviceWorker.addEventListener('controllerchange', function () {
        if (!wantReload || reloading) return;
        reloading = true;
        location.reload();
      });
    }
  }

  // 예전 엔진(v4.0.0~4.0.3)처럼 getGrowthStage가 빠진 경우에만 보완 (엔진에 있으면 엔진 것을 사용)
  if (typeof Base.prototype.getGrowthStage !== 'function') {
    PKHApp.prototype.getGrowthStage = PKHApp.prototype.getGrowthStageFallback;
  }

  window.EduEngine = PKHApp; // core_engine.js의 `new EduEngine()`이 이 클래스로 시작됩니다.
})();
