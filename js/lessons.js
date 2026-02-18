// ==========================================================================
// LESSON ENGINE
// Renders exercises and handles quiz logic
// ==========================================================================

const LessonEngine = {
  moduleId: null,
  lessonId: null,
  exercises: [],
  currentIndex: 0,
  score: 0,
  totalQuestions: 0,
  matchState: null,

  // Initialize a lesson
  start(moduleId, lessonId, exercises) {
    this.moduleId = moduleId;
    this.lessonId = lessonId;
    this.exercises = exercises;
    this.currentIndex = 0;
    this.score = 0;
    this.totalQuestions = exercises.filter(e => e.type !== 'cultural-note').length;
    this.matchState = null;
    this.renderCurrent();
  },

  // Get progress fraction
  getProgress() {
    return this.exercises.length > 0 ? this.currentIndex / this.exercises.length : 0;
  },

  // Render current exercise
  renderCurrent() {
    if (this.currentIndex >= this.exercises.length) {
      this.showComplete();
      return;
    }

    const ex = this.exercises[this.currentIndex];
    const container = document.getElementById('exercise-area');
    if (!container) return;

    // Update progress bar
    const progressFill = document.getElementById('lesson-progress-fill');
    if (progressFill) {
      progressFill.style.width = (this.getProgress() * 100) + '%';
    }

    switch (ex.type) {
      case 'cultural-note':
        container.innerHTML = this.renderCulturalNote(ex);
        this._bindContinue();
        break;
      case 'multiple-choice':
        container.innerHTML = this.renderMultipleChoice(ex);
        this.bindMultipleChoice(ex);
        break;
      case 'listen-identify':
        container.innerHTML = this.renderListenIdentify(ex);
        this.bindMultipleChoice(ex); // Same interaction model
        break;
      case 'match':
        container.innerHTML = this.renderMatch(ex);
        this.bindMatch(ex);
        break;
      case 'fill-blank':
        container.innerHTML = this.renderFillBlank(ex);
        this.bindFillBlank(ex);
        break;
      default:
        container.innerHTML = `<p>Unknown exercise type: ${ex.type}</p>`;
    }
  },

  // --- CULTURAL NOTE ---
  renderCulturalNote(ex) {
    const textHtml = ex.text.replace(/\n/g, '<br>');
    return `
      <div class="exercise" key="${this.currentIndex}">
        <div class="cultural-note">
          <div class="cultural-note-label">✦ Cultural Context</div>
          <div class="cultural-note-text">${textHtml}</div>
        </div>
        <button class="btn btn-primary btn-lg" id="continue-btn">Continue</button>
      </div>
    `;
  },

  // --- MULTIPLE CHOICE ---
  renderMultipleChoice(ex) {
    const letters = ['A', 'B', 'C', 'D'];
    const optionsHtml = ex.options.map((opt, i) => `
      <button class="option-btn" data-index="${i}">
        <span class="option-letter">${letters[i]}</span>${opt}
      </button>
    `).join('');

    return `
      <div class="exercise" key="${this.currentIndex}">
        <div class="t-label exercise-type">Choose the correct answer</div>
        <div class="exercise-prompt">${ex.prompt}</div>
        ${ex.sub ? `<div class="exercise-sub">${ex.sub}</div>` : ''}
        <div class="options-grid">${optionsHtml}</div>
        <div id="feedback-area"></div>
        <button class="btn btn-primary btn-lg" id="continue-btn" style="display:none">Continue</button>
      </div>
    `;
  },

  // --- LISTEN & IDENTIFY ---
  renderListenIdentify(ex) {
    const letters = ['A', 'B', 'C', 'D'];
    const optionsHtml = ex.options.map((opt, i) => `
      <button class="option-btn" data-index="${i}">
        <span class="option-letter">${letters[i]}</span>${opt}
      </button>
    `).join('');

    return `
      <div class="exercise" key="${this.currentIndex}">
        <div class="t-label exercise-type">Listen & Identify</div>
        <div class="lakota-display">
          ${ex.prompt}
          <span class="phonetic">${ex.phonetic}</span>
        </div>
        <button class="audio-btn" id="audio-play">
          <span class="speaker">🔊</span> Listen
        </button>
        <div class="tts-notice">Approximation — refer to phonetic guide above</div>
        <div class="exercise-sub">What does this mean?</div>
        <div class="options-grid">${optionsHtml}</div>
        <div id="feedback-area"></div>
        <button class="btn btn-primary btn-lg" id="continue-btn" style="display:none">Continue</button>
      </div>
    `;
  },

  bindMultipleChoice(ex) {
    const options = document.querySelectorAll('.option-btn');
    let answered = false;

    // Audio button
    const audioBtn = document.getElementById('audio-play');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        if (LakotaAudio.speaking) return;
        audioBtn.classList.add('playing');
        audioBtn.innerHTML = '<span class="speaker">🔊</span> Speaking...';
        LakotaAudio.speak(
          ex.prompt,
          null,
          () => {
            audioBtn.classList.remove('playing');
            audioBtn.innerHTML = '<span class="speaker">🔊</span> Listen Again';
          }
        );
      });
    }

    options.forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        const idx = parseInt(btn.dataset.index);
        const isCorrect = idx === ex.correct;

        // Disable all
        options.forEach(b => b.classList.add('disabled'));

        // Mark selected
        btn.classList.add(isCorrect ? 'correct' : 'incorrect');

        // Show correct answer if wrong
        if (!isCorrect) {
          options[ex.correct].classList.add('correct');
        }

        // Update score
        if (isCorrect) this.score++;

        // Show feedback
        const feedbackArea = document.getElementById('feedback-area');
        const explanation = ex.explanation || (isCorrect ? 'Correct!' : `The correct answer is: ${ex.options[ex.correct]}`);
        feedbackArea.innerHTML = `
          <div class="feedback ${isCorrect ? 'correct' : 'incorrect'}">
            <div class="feedback-title">${isCorrect ? 'Háŋ! Correct!' : 'Not quite'}</div>
            <div class="feedback-text">${explanation}</div>
          </div>
        `;

        // Show continue
        document.getElementById('continue-btn').style.display = '';
      });
    });

    // Continue button
    this._bindContinue();
  },

  // --- MATCH ---
  renderMatch(ex) {
    // Shuffle both columns independently
    const lakotaItems = ex.pairs.map((p, i) => ({ text: p.lakota, pairIndex: i, side: 'lakota' }));
    const englishItems = ex.pairs.map((p, i) => ({ text: p.english, pairIndex: i, side: 'english' }));
    this._shuffle(lakotaItems);
    this._shuffle(englishItems);

    this.matchState = {
      pairs: ex.pairs,
      matched: [],
      selected: null,
      lakotaItems,
      englishItems,
    };

    const leftHtml = lakotaItems.map((item, i) => `
      <div class="match-item" data-side="lakota" data-pair="${item.pairIndex}" data-idx="${i}">
        ${item.text}
      </div>
    `).join('');

    const rightHtml = englishItems.map((item, i) => `
      <div class="match-item" data-side="english" data-pair="${item.pairIndex}" data-idx="${i}">
        ${item.text}
      </div>
    `).join('');

    // Interleave for 2-column grid
    let gridHtml = '';
    const maxLen = Math.max(lakotaItems.length, englishItems.length);
    for (let i = 0; i < maxLen; i++) {
      if (i < lakotaItems.length) {
        gridHtml += `<div class="match-item" data-side="lakota" data-pair="${lakotaItems[i].pairIndex}">
          ${lakotaItems[i].text}</div>`;
      }
      if (i < englishItems.length) {
        gridHtml += `<div class="match-item" data-side="english" data-pair="${englishItems[i].pairIndex}">
          ${englishItems[i].text}</div>`;
      }
    }

    return `
      <div class="exercise" key="${this.currentIndex}">
        <div class="t-label exercise-type">Match the pairs</div>
        <div class="exercise-prompt">${ex.prompt}</div>
        <div class="match-container">${gridHtml}</div>
        <div id="feedback-area"></div>
        <button class="btn btn-primary btn-lg" id="continue-btn" style="display:none">Continue</button>
      </div>
    `;
  },

  bindMatch(ex) {
    const items = document.querySelectorAll('.match-item');
    let selected = null;
    const matched = new Set();
    let attempts = 0;
    let correctMatches = 0;

    items.forEach(item => {
      item.addEventListener('click', () => {
        const side = item.dataset.side;
        const pair = parseInt(item.dataset.pair);

        if (matched.has(pair + '-' + side)) return;

        if (!selected) {
          // First selection
          selected = { el: item, side, pair };
          item.classList.add('selected');
        } else if (selected.side === side) {
          // Same side — switch selection
          selected.el.classList.remove('selected');
          selected = { el: item, side, pair };
          item.classList.add('selected');
        } else {
          // Different side — check match
          attempts++;
          if (selected.pair === pair) {
            // Correct match!
            correctMatches++;
            selected.el.classList.remove('selected');
            selected.el.classList.add('matched');
            item.classList.add('matched');
            matched.add(pair + '-' + selected.side);
            matched.add(pair + '-' + side);
            selected = null;

            // Check if all matched
            if (correctMatches === ex.pairs.length) {
              this.score++;
              setTimeout(() => {
                document.getElementById('feedback-area').innerHTML = `
                  <div class="feedback correct">
                    <div class="feedback-title">Háŋ! All matched!</div>
                    <div class="feedback-text">You matched all ${ex.pairs.length} pairs correctly.</div>
                  </div>
                `;
                document.getElementById('continue-btn').style.display = '';
              }, 400);
            }
          } else {
            // Wrong match
            item.classList.add('wrong');
            selected.el.classList.add('wrong');
            const prevSelected = selected.el;
            selected = null;
            setTimeout(() => {
              item.classList.remove('wrong', 'selected');
              prevSelected.classList.remove('wrong', 'selected');
            }, 500);
          }
        }
      });
    });

    this._bindContinue();
  },

  // --- FILL IN THE BLANK ---
  renderFillBlank(ex) {
    return `
      <div class="exercise" key="${this.currentIndex}">
        <div class="t-label exercise-type">Complete the phrase</div>
        <div class="exercise-prompt">${ex.sentence.replace('_____', '<input type="text" class="fill-blank-input" id="fill-input" placeholder="' + (ex.hint || '...') + '" autocomplete="off" autocorrect="off" spellcheck="false">')}</div>
        ${ex.sub ? `<div class="exercise-sub">${ex.sub}</div>` : ''}
        <div id="feedback-area"></div>
        <button class="btn btn-primary btn-lg" id="submit-fill">Check</button>
        <button class="btn btn-primary btn-lg" id="continue-btn" style="display:none">Continue</button>
      </div>
    `;
  },

  bindFillBlank(ex) {
    const submitBtn = document.getElementById('submit-fill');
    const input = document.getElementById('fill-input');
    let answered = false;

    const check = () => {
      if (answered) return;
      const val = input.value.trim();
      if (!val) return;

      answered = true;
      input.disabled = true;
      submitBtn.style.display = 'none';

      // For open-ended (answer is null), always accept
      const isCorrect = ex.answer === null || val.toLowerCase() === ex.answer.toLowerCase();

      if (isCorrect) this.score++;

      const feedbackArea = document.getElementById('feedback-area');
      feedbackArea.innerHTML = `
        <div class="feedback correct">
          <div class="feedback-title">Wašté! Great!</div>
          <div class="feedback-text">${ex.explanation || 'Well done!'}</div>
        </div>
      `;

      document.getElementById('continue-btn').style.display = '';
    };

    submitBtn.addEventListener('click', check);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') check();
    });

    // Focus input
    setTimeout(() => input.focus(), 100);

    this._bindContinue();
  },

  // --- LESSON COMPLETE ---
  showComplete() {
    const pct = this.totalQuestions > 0
      ? Math.round((this.score / this.totalQuestions) * 100)
      : 100;

    // Save progress
    Progress.completeLesson(this.moduleId, this.lessonId, pct);

    const container = document.getElementById('exercise-area');
    container.innerHTML = `
      <div class="lesson-complete">
        <div class="lesson-complete-icon">${App.thunderbirdSVG(80, 'complete-bird')}</div>
        <div class="lesson-complete-title t-display">Lesson Complete</div>
        <div class="lesson-complete-sub">You've taken another step on the Red Road. Every word brings you closer to your relatives.</div>
        <div class="lesson-complete-score">${pct}<span>%</span></div>
        <div class="lesson-complete-sub">${this.score} of ${this.totalQuestions} questions correct</div>
        <div class="lesson-complete-actions">
          <button class="btn btn-primary btn-lg" id="next-lesson-btn">Continue</button>
          <button class="btn btn-ghost" id="back-to-module-btn">Back to Module</button>
        </div>
      </div>
    `;

    // Update progress bar to full
    const progressFill = document.getElementById('lesson-progress-fill');
    if (progressFill) progressFill.style.width = '100%';

    // Bind buttons
    document.getElementById('next-lesson-btn').addEventListener('click', () => {
      // Find next lesson
      const mod = MODULE_DATA.find(m => m.id === this.moduleId);
      if (mod) {
        const lessonIdx = mod.lessons.findIndex(l => l.id === this.lessonId);
        if (lessonIdx < mod.lessons.length - 1) {
          const nextLesson = mod.lessons[lessonIdx + 1];
          if (nextLesson.exercises && nextLesson.exercises.length > 0) {
            App.showLesson(this.moduleId, nextLesson.id);
          } else {
            App.showModule(this.moduleId);
          }
        } else {
          // Module complete — go back to home
          App.showHome();
        }
      }
    });

    document.getElementById('back-to-module-btn').addEventListener('click', () => {
      App.showModule(this.moduleId);
    });
  },

  // --- HELPERS ---
  _bindContinue() {
    // Defer to allow DOM to render
    setTimeout(() => {
      const btn = document.getElementById('continue-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          this.currentIndex++;
          this.renderCurrent();
          // Scroll to top of exercise
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    }, 50);
  },

  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },
};
