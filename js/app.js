// ==========================================================================
// APP CONTROLLER
// Handles routing, screen rendering, navigation
// ==========================================================================

const App = {
  container: null,

  init() {
    this.container = document.getElementById('app');
    this.generateStars();
    this.generateBgThunderbird();
    LakotaAudio.init();
    this.showHome();
  },

  // --- BACKGROUND THUNDERBIRD WATERMARK ---
  generateBgThunderbird() {
    const el = document.getElementById('bg-thunderbird');
    if (el) el.innerHTML = `<img src="images/thunderbird.png" alt="" width="500" style="width:500px;height:auto;"/>`;
  },

  // --- STAR GENERATION ---
  generateStars() {
    const el = document.getElementById('stars');
    const count = 100;
    let html = '';
    for (let i = 0; i < count; i++) {
      const size = (Math.random() * 1.8 + 0.4).toFixed(1);
      const x = (Math.random() * 100).toFixed(1);
      const y = (Math.random() * 100).toFixed(1);
      const dur = (Math.random() * 4 + 2).toFixed(1);
      const delay = (Math.random() * 5).toFixed(1);
      const oMin = (Math.random() * 0.15 + 0.08).toFixed(2);
      const oMax = (Math.random() * 0.4 + 0.35).toFixed(2);
      html += `<div class="bg-star" style="width:${size}px;height:${size}px;left:${x}%;top:${y}%;--dur:${dur}s;--delay:${delay}s;--o-min:${oMin};--o-max:${oMax}"></div>`;
    }
    el.innerHTML = html;
  },

  // --- MODULE ICON RENDERER ---
  getModuleIcon(mod, size = 42) {
    const fn = LakotaIcons[mod.iconKey];
    if (fn) return fn(size);
    return `<span style="font-size:${size * 0.5}px">⚡</span>`;
  },

  // --- THUNDERBIRD IMAGE with animated lightning bolts from wings ---
  thunderbirdSVG(size = 120, className = '') {
    // The actual thunderbird image with SVG lightning bolts overlaid on the wing tips
    const imgW = size;
    const imgH = Math.round(size * 0.87); // aspect ratio of the original
    // Lightning bolt positions are relative to the thunderbird's wing tips
    return `<div class="thunderbird-wrap ${className}" style="width:${imgW}px;height:${imgH + 40}px;position:relative">
      <img src="images/thunderbird.png" alt="Wakinyan — Thunderbird" 
           class="thunderbird-img" 
           width="${imgW}" height="${imgH}"
           style="display:block;position:relative;z-index:1"/>
      <!-- Left wing lightning bolt -->
      <svg class="wing-bolt wing-bolt-left" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg"
           style="position:absolute;left:${Math.round(imgW * 0.04)}px;top:${Math.round(imgH * 0.55)}px;width:${Math.round(imgW * 0.14)}px;z-index:2">
        <path d="M22 0 L14 24 L22 20 L8 48 L18 40 L4 72 L16 44 L6 50 L18 26 L10 30 L22 4 Z" 
              fill="url(#boltGradL)" opacity="0.9"/>
        <defs>
          <linearGradient id="boltGradL" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#dce8ff" stop-opacity="1"/>
            <stop offset="100%" stop-color="#7ab0e8" stop-opacity="0.3"/>
          </linearGradient>
        </defs>
      </svg>
      <!-- Right wing lightning bolt -->
      <svg class="wing-bolt wing-bolt-right" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg"
           style="position:absolute;right:${Math.round(imgW * 0.04)}px;top:${Math.round(imgH * 0.55)}px;width:${Math.round(imgW * 0.14)}px;z-index:2">
        <path d="M18 0 L26 24 L18 20 L32 48 L22 40 L36 72 L24 44 L34 50 L22 26 L30 30 L18 4 Z" 
              fill="url(#boltGradR)" opacity="0.9"/>
        <defs>
          <linearGradient id="boltGradR" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#dce8ff" stop-opacity="1"/>
            <stop offset="100%" stop-color="#7ab0e8" stop-opacity="0.3"/>
          </linearGradient>
        </defs>
      </svg>
    </div>`;
  },

  // Smaller version for inline use (no lightning bolts)
  thunderbirdSmall(size = 28) {
    const h = Math.round(size * 0.87);
    return `<img src="images/thunderbird-sm.png" alt="Wakinyan" class="thunderbird-sm-img" width="${size}" height="${h}"/>`;
  },

  // ========================================================================
  // HOME SCREEN
  // ========================================================================
  showHome() {
    const days = Progress.getDaysUntilSundance();
    const overall = Progress.getOverallProgress();
    const currentMod = Progress.getCurrentModule();
    const learnedWords = Progress.getLearnedWords();
    const totalWords = Progress.getTotalWords();
    const wordCount = learnedWords.length;

    // Build module cards
    let modulesHtml = '';
    MODULE_DATA.forEach(mod => {
      const status = Progress.getModuleStatus(mod.id);
      const mp = Progress.getModule(mod.id);
      const totalLessons = mod.lessons.length;
      const completedLessons = mp.lessonsCompleted ? mp.lessonsCompleted.length : 0;
      const pct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

      let statusClass = status;
      let statusBadge = '';
      if (status === 'completed') statusBadge = '<span class="check">✓</span>';
      else if (status === 'locked') statusBadge = '<span class="lock">🔒</span>';

      const hasContent = mod.lessons.some(l => l.exercises && l.exercises.length > 0);
      const clickable = status !== 'locked' && hasContent;

      modulesHtml += `
        <div class="module-card card ${statusClass} anim-fade-up" ${clickable ? `onclick="App.showModule('${mod.id}')"` : ''}>
          <div class="mc-top">
            <div class="mc-icon">${this.getModuleIcon(mod)}</div>
            <div class="mc-info">
              <div class="mc-num">Module ${mod.number} ${statusBadge}</div>
              <div class="mc-title t-display">${mod.title}</div>
              <div class="mc-lakota t-lakota">${mod.lakota}</div>
            </div>
          </div>
          <div class="mc-desc">${mod.desc}</div>
          ${status !== 'locked' ? `
            <div class="mc-progress">
              <div class="mc-progress-bar">
                <div class="mc-progress-fill" style="width:${pct}%"></div>
              </div>
              <span class="mc-progress-text">${completedLessons}/${totalLessons}</span>
            </div>
          ` : ''}
          ${!hasContent && status !== 'locked' ? '<div class="mc-desc" style="margin-top:8px;color:var(--warm-glow);font-style:italic;font-size:12px">Content coming soon</div>' : ''}
        </div>
      `;
    });

    // Current module text
    const progressText = currentMod
      ? `Module ${currentMod.number} of 8 — ${currentMod.lakota} (${currentMod.title})`
      : 'All modules completed!';

    this.container.innerHTML = `
      <header class="home-header anim-fade-up">
        <div class="thunderbird-hero">${this.thunderbirdSVG(140, 'hero-bird')}</div>
        <h1 class="home-title t-display">Thunder Being's<br>Teachings</h1>
        <p class="home-title-lakota t-lakota">Wakíŋyaŋ Wóuŋspe</p>
        <p class="home-subtitle">Walk the path of Lakȟótiyapi. Learn the language of your relatives. Arrive at Sundance ready.</p>
      </header>

      <div class="countdown-card card anim-fade-up">
        <div class="countdown-label t-label">Days Until Sundance</div>
        <div class="countdown-number">${days}</div>
        <div class="countdown-unit">days remaining</div>
      </div>

      <div class="stats-row anim-fade-up">
        <div class="stat-card card">
          <div class="stat-number">${wordCount}</div>
          <div class="stat-label">Words Learned</div>
          <div class="stat-sub">${totalWords > 0 ? `of ${totalWords} total` : ''}</div>
        </div>
        <div class="stat-card card stat-review ${wordCount === 0 ? 'disabled' : ''}" ${wordCount > 0 ? 'onclick="App.showReview()"' : ''}>
          <div class="stat-icon">${LakotaIcons.redRoad(32)}</div>
          <div class="stat-label">Review</div>
          <div class="stat-sub">Flashcards</div>
        </div>
      </div>

      <div class="red-road anim-fade-up">
        <div class="t-label">Čhaŋkú Lúta — Your Red Road</div>
        <div class="red-road-track">
          <div class="red-road-fill" style="width:${Math.max(2, overall * 100)}%">
            <div class="red-road-dot"></div>
          </div>
        </div>
        <div class="red-road-text">${progressText}</div>
      </div>

      <div class="bolt-divider anim-fade-up">
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none"><path d="M9 0L3 10H7L1 24L13 10H8L14 0H9Z" fill="currentColor" opacity="0.7"/></svg>
      </div>

      <h2 class="modules-title t-display anim-fade-up">Your Modules</h2>

      <div class="stagger">
        ${modulesHtml}
      </div>

      <div class="spirit-quote anim-fade-up">
        <div class="spirit-thunderbird">${this.thunderbirdSmall(36)}</div>
        <p class="spirit-quote-text">Mitákuye Oyásʼiŋ</p>
        <p class="spirit-quote-sub">We are all related</p>
      </div>
    `;
  },

  // ========================================================================
  // FLASHCARD REVIEW SCREEN
  // ========================================================================
  showReview() {
    const words = Progress.getLearnedWords();
    if (words.length === 0) return this.showHome();

    // Shuffle words
    const shuffled = [...words].sort(() => Math.random() - 0.5);

    this._reviewCards = shuffled;
    this._reviewIndex = 0;
    this._reviewFlipped = false;
    this._reviewCorrect = 0;
    this._reviewSeen = 0;

    this._renderReviewCard();
  },

  _renderReviewCard() {
    const cards = this._reviewCards;
    const i = this._reviewIndex;
    const total = cards.length;

    if (i >= total) {
      // Review complete
      this.container.innerHTML = `
        <div class="review-screen anim-fade-up">
          <button class="back-btn" onclick="App.showHome()">←</button>
          <div class="review-done">
            <div class="review-done-icon">⚡</div>
            <h2 class="t-display review-done-title">Review Complete!</h2>
            <p class="review-done-stat">${this._reviewCorrect} of ${total} words marked as known</p>
            <p class="review-done-sub">Keep practicing — the words you marked "Still Learning" will show up again next time.</p>
            <button class="btn btn-primary btn-lg" onclick="App.showReview()" style="margin-top:24px">Review Again</button>
            <button class="btn btn-lg" onclick="App.showHome()" style="margin-top:12px">Back to Home</button>
          </div>
        </div>
      `;
      return;
    }

    const card = cards[i];
    const pct = Math.round(((i) / total) * 100);

    this.container.innerHTML = `
      <div class="review-screen anim-fade-up">
        <div class="review-top-bar">
          <button class="back-btn" onclick="App.showHome()">←</button>
          <div class="review-counter">${i + 1} / ${total}</div>
        </div>

        <div class="review-progress-bar">
          <div class="review-progress-fill" style="width:${pct}%"></div>
        </div>

        <div class="review-module-tag">Module ${card.module} — ${card.moduleTitle}</div>

        <div class="flashcard ${this._reviewFlipped ? 'flipped' : ''}" id="flashcard" onclick="App._flipCard()">
          <div class="flashcard-inner">
            <div class="flashcard-front">
              <div class="flashcard-lakota t-display">${card.lakota}</div>
              <div class="flashcard-phonetic">${card.phonetic}</div>
              <button class="audio-btn flashcard-audio" id="fc-audio" onclick="event.stopPropagation(); App._playReviewAudio()">
                <span class="speaker">🔊</span>
              </button>
              <div class="flashcard-hint">Tap card to reveal</div>
            </div>
            <div class="flashcard-back">
              <div class="flashcard-english">${card.english}</div>
              <div class="flashcard-lakota-sm">${card.lakota}</div>
            </div>
          </div>
        </div>

        <div class="review-buttons ${this._reviewFlipped ? 'visible' : ''}">
          <button class="review-btn review-btn-learning" onclick="App._reviewNext(false)">
            <span>🔄</span> Still Learning
          </button>
          <button class="review-btn review-btn-known" onclick="App._reviewNext(true)">
            <span>✓</span> I Know This
          </button>
        </div>
      </div>
    `;
  },

  _flipCard() {
    if (this._reviewFlipped) return;
    this._reviewFlipped = true;
    this._reviewSeen++;
    this._renderReviewCard();
  },

  _playReviewAudio() {
    const card = this._reviewCards[this._reviewIndex];
    if (!card) return;
    const btn = document.getElementById('fc-audio');
    if (btn) {
      btn.classList.add('playing');
      LakotaAudio.speak(card.lakota, null, () => {
        if (btn) btn.classList.remove('playing');
      });
    }
  },

  _reviewNext(known) {
    if (known) this._reviewCorrect++;
    this._reviewIndex++;
    this._reviewFlipped = false;
    this._renderReviewCard();
  },

  // ========================================================================
  // MODULE DETAIL SCREEN
  // ========================================================================
  showModule(moduleId) {
    const mod = MODULE_DATA.find(m => m.id === moduleId);
    if (!mod) return this.showHome();

    let lessonsHtml = '';
    mod.lessons.forEach((lesson, i) => {
      const status = Progress.getLessonStatus(moduleId, lesson.id);
      const hasContent = lesson.exercises && lesson.exercises.length > 0;
      const clickable = status !== 'locked' && hasContent;

      let numberContent = '';
      if (status === 'completed') numberContent = '✓';
      else if (status === 'locked') numberContent = '🔒';
      else numberContent = i + 1;

      lessonsHtml += `
        <div class="lesson-item card ${status} anim-fade-up" ${clickable ? `onclick="App.showLesson('${moduleId}', '${lesson.id}')"` : ''}>
          <div class="li-number">${numberContent}</div>
          <div class="li-content">
            <div class="li-title">${lesson.title}</div>
            <div class="li-subtitle">${lesson.subtitle}</div>
            ${!hasContent && status !== 'locked' ? '<div class="li-subtitle" style="color:var(--warm-glow);font-style:italic;margin-top:2px">Content coming soon</div>' : ''}
          </div>
          <div class="li-arrow">${clickable ? '→' : ''}</div>
        </div>
      `;
    });

    this.container.innerHTML = `
      <div class="screen-header anim-fade-up">
        <button class="back-btn" onclick="App.showHome()">←</button>
        <div class="screen-header-text">
          <div class="mc-num">Module ${mod.number}</div>
          <div class="screen-header-title t-display">${mod.title}</div>
          <div class="screen-header-lakota t-lakota">${mod.lakota}</div>
        </div>
        <div style="color:var(--lightning)">${this.getModuleIcon(mod, 36)}</div>
      </div>

      <div class="cultural-note anim-fade-up" style="margin-bottom:20px">
        <div class="cultural-note-label">✦ About This Module</div>
        <div class="cultural-note-text">${mod.desc}</div>
      </div>

      <div class="lesson-list stagger">
        ${lessonsHtml}
      </div>

      <div style="height:48px"></div>
    `;

    window.scrollTo({ top: 0 });
  },

  // ========================================================================
  // LESSON SCREEN
  // ========================================================================
  showLesson(moduleId, lessonId) {
    const mod = MODULE_DATA.find(m => m.id === moduleId);
    if (!mod) return this.showHome();
    const lesson = mod.lessons.find(l => l.id === lessonId);
    if (!lesson || !lesson.exercises || lesson.exercises.length === 0) {
      return this.showModule(moduleId);
    }

    this.container.innerHTML = `
      <div class="screen-header anim-fade-up">
        <button class="back-btn" onclick="App.showModule('${moduleId}')">←</button>
        <div class="screen-header-text">
          <div class="mc-num">Module ${mod.number} — Lesson</div>
          <div class="screen-header-title t-display" style="font-size:18px">${lesson.title}</div>
        </div>
      </div>

      <div class="lesson-progress-bar anim-fade-up">
        <div class="lesson-progress-fill" id="lesson-progress-fill" style="width:0%"></div>
      </div>

      <div id="exercise-area"></div>

      <div style="height:48px"></div>
    `;

    window.scrollTo({ top: 0 });

    // Start the lesson engine
    LessonEngine.start(moduleId, lessonId, lesson.exercises);
  },
};

// --- BOOT ---
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
