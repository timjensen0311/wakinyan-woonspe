// ==========================================================================
// PROGRESS TRACKING — localStorage based
// ==========================================================================

const Progress = {
  STORAGE_KEY: 'wakinyan_progress',

  _default() {
    return {
      startDate: new Date().toISOString().split('T')[0],
      sundanceDate: '2026-07-22',
      modules: {},
      vocabulary: {},
    };
  },

  load() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn('Could not load progress:', e);
    }
    return this._default();
  },

  save(data) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Could not save progress:', e);
    }
  },

  // Get module progress
  getModule(moduleId) {
    const data = this.load();
    return data.modules[moduleId] || {
      status: 'locked', // locked | active | completed
      lessonsCompleted: [],
      lessonScores: {},
      lastAccessed: null,
    };
  },

  // Complete a lesson
  completeLesson(moduleId, lessonId, score) {
    const data = this.load();
    if (!data.modules[moduleId]) {
      data.modules[moduleId] = {
        status: 'active',
        lessonsCompleted: [],
        lessonScores: {},
        lastAccessed: null,
      };
    }
    const mod = data.modules[moduleId];
    if (!mod.lessonsCompleted.includes(lessonId)) {
      mod.lessonsCompleted.push(lessonId);
    }
    mod.lessonScores[lessonId] = score;
    mod.lastAccessed = new Date().toISOString();

    // Check if module is complete
    const moduleData = MODULE_DATA.find(m => m.id === moduleId);
    if (moduleData && mod.lessonsCompleted.length >= moduleData.lessons.length) {
      mod.status = 'completed';
      // Unlock next module
      const idx = MODULE_DATA.findIndex(m => m.id === moduleId);
      if (idx < MODULE_DATA.length - 1) {
        const nextId = MODULE_DATA[idx + 1].id;
        if (!data.modules[nextId] || data.modules[nextId].status === 'locked') {
          data.modules[nextId] = {
            status: 'active',
            lessonsCompleted: [],
            lessonScores: {},
            lastAccessed: null,
          };
        }
      }
    }

    this.save(data);
    return mod;
  },

  // Get overall progress (0-1)
  getOverallProgress() {
    const data = this.load();
    let totalLessons = 0;
    let completedLessons = 0;
    MODULE_DATA.forEach(mod => {
      totalLessons += mod.lessons.length;
      const mp = data.modules[mod.id];
      if (mp) completedLessons += mp.lessonsCompleted.length;
    });
    return totalLessons > 0 ? completedLessons / totalLessons : 0;
  },

  // Get module status for display
  getModuleStatus(moduleId) {
    const data = this.load();
    const mp = data.modules[moduleId];
    if (!mp) {
      // First module is always active
      if (moduleId === MODULE_DATA[0].id) return 'active';
      return 'locked';
    }
    return mp.status;
  },

  // Get the current module (first non-completed)
  getCurrentModule() {
    const data = this.load();
    for (const mod of MODULE_DATA) {
      const status = this.getModuleStatus(mod.id);
      if (status !== 'completed') return mod;
    }
    return MODULE_DATA[MODULE_DATA.length - 1];
  },

  // Get lesson status within a module
  getLessonStatus(moduleId, lessonId) {
    const data = this.load();
    const mp = data.modules[moduleId];
    if (!mp) {
      // First lesson of first module is always active
      if (moduleId === MODULE_DATA[0].id) {
        const mod = MODULE_DATA.find(m => m.id === moduleId);
        if (mod && mod.lessons[0] && mod.lessons[0].id === lessonId) return 'active';
      }
      return 'locked';
    }
    if (mp.lessonsCompleted.includes(lessonId)) return 'completed';

    // Find the lesson index
    const mod = MODULE_DATA.find(m => m.id === moduleId);
    if (!mod) return 'locked';
    const lessonIdx = mod.lessons.findIndex(l => l.id === lessonId);

    // Active if it's the next uncompleted lesson
    if (lessonIdx === 0) return 'active';
    const prevLesson = mod.lessons[lessonIdx - 1];
    if (mp.lessonsCompleted.includes(prevLesson.id)) return 'active';

    return 'locked';
  },

  // Days until sundance
  getDaysUntilSundance() {
    const data = this.load();
    const target = new Date(data.sundanceDate + 'T00:00:00');
    const now = new Date();
    const diff = target - now;
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  },

  // =============================================
  // VOCABULARY TRACKING
  // =============================================

  // Get all vocab words from completed lessons
  getLearnedWords() {
    const data = this.load();
    const words = [];
    const seen = new Set();

    MODULE_DATA.forEach(mod => {
      const mp = data.modules[mod.id];
      if (!mp) return;

      mod.lessons.forEach(lesson => {
        if (!mp.lessonsCompleted.includes(lesson.id)) return;
        if (!lesson.exercises) return;

        lesson.exercises.forEach(ex => {
          if (ex.type === 'listen-identify' && ex.prompt && ex.meaning) {
            const key = ex.prompt.toLowerCase();
            if (!seen.has(key)) {
              seen.add(key);
              words.push({
                lakota: ex.prompt,
                english: ex.meaning,
                phonetic: ex.phonetic || '',
                module: mod.number,
                moduleTitle: mod.title,
              });
            }
          }
        });
      });
    });

    return words;
  },

  // Get total vocab count across all modules (for "X of Y")
  getTotalWords() {
    const seen = new Set();
    MODULE_DATA.forEach(mod => {
      mod.lessons.forEach(lesson => {
        if (!lesson.exercises) return;
        lesson.exercises.forEach(ex => {
          if (ex.type === 'listen-identify' && ex.prompt) {
            seen.add(ex.prompt.toLowerCase());
          }
        });
      });
    });
    return seen.size;
  },

  // Reset all progress
  reset() {
    localStorage.removeItem(this.STORAGE_KEY);
  },
};
