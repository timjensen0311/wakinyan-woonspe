// ==========================================================================
// AUDIO — Lakota Pronunciation System
// Uses Web Speech API with phonetic approximations as placeholder
// Will fall back to real .mp3 files when they exist in audio/ folder
// ==========================================================================

const LakotaAudio = {

  // Phonetic map: Lakota word/phrase → approximate English phonetic string
  // Hand-tuned to get Web Speech API as close as possible.
  // Not perfect — Lakota has sounds English doesn't — but gives learners
  // a starting point until real recordings replace them.
  phoneticMap: {
    // Greetings & Goodbyes
    'háu':                'how',
    'háŋ':                'hahn',
    'aŋpétu wašté':       'ahn pay too, wash tay',
    'tokša':              'tohk shah',
    'tokša akhé':         'tohk shah, ah kay',

    // Introductions
    'emáčiyapi':          'eh mah chee yah pee',
    'emátaŋhaŋ':          'eh mah tahn hahn',
    'kȟolá':              'koh lah',
    'mašké':              'mah shkay',

    // Courtesy
    'philámayaye':        'pee lah mah yah yay',
    'philámayayapi':      'pee lah mah yah yah pee',
    'hiyá':               'hee yah',
    'wašté':              'wash tay',

    // Numbers
    'waŋží':              'wahn zhee',
    'núŋpa':              'noon pah',
    'yámni':              'yahm nee',
    'tópa':               'toh pah',
    'záptaŋ':             'zahp tahn',
    'šákpe':              'shahk pay',
    'šakówiŋ':            'shah koh ween',
    'šaglóǧaŋ':          'shah gloh gahn',
    'napčíyuŋka':         'nahp chee yoon kah',
    'wikčémna':           'week chaym nah',

    // Key phrases
    'mitákuye oyásʼiŋ':   'mee tah koo yay, oh yah seen',
    'lakȟótiyapi':        'lah koh tee yah pee',

    // Module 2: Family & Kinship
    'iná':                'ee nah',
    'até':                'ah tay',
    'čhiŋkší':            'cheenk shee',
    'čhuŋkší':            'choonk shee',
    'thíblo':             'teeb loh',
    'misúŋ':              'mee soong',
    'tȟaŋkší':            'tahnk shee',
    'čhuwé':              'choo way',
    'tȟuŋkášila':         'toon kah shee lah',
    'uŋčí':               'oon chee',
    'lekší':              'lek shee',
    'tȟuŋwíŋ':            'toon ween',
    'thiyóšpaye':         'tee yoh shpah yay',
    'thiwáhe':            'tee wah hay',
    'thakóža':            'tah koh zhah',
    'oyáte':              'oh yah tay',
    'mitȟáwa':            'mee tah wah',

    // Module 3: A Day in the Life
    'haŋhépi':            'hahn hay pee',
    'híŋhaŋni':           'heen hahn nee',
    'wíyotaŋhaŋ':         'wee yoh tahn hahn',
    'ȟtayétu':            'htah yay too',
    'aŋpáo':              'ahn pow',
    'wóta':               'woh tah',
    'yatkáŋ':             'yaht kahn',
    'ištíŋma':            'eesh teen mah',
    'yá':                 'yah',
    'hí':                 'hee',
    'iyótaka':            'ee yoh tah kah',
    'tókheškhe yaúŋ he?': 'toh kesh keh, yah oon hay',
    'taŋyáŋ waúŋ':        'tahn yahn wah oon',
    'wačhíŋ waštéya waúŋ':'wah cheen wash tay yah wah oon',
    'waṫȟáka waúŋ':       'wah tah kah wah oon',
    'lóčhiŋ waúŋ':        'loh cheen wah oon',
    'mní':                'mnee',
    'agúyapi':            'ah goo yah pee',
    'tȟaló':              'tah loh',
    'wóžapi':             'woh zhah pee',
    'pȟežúta sápa':       'pay zhoo tah, sah pah',
    'wahánpi':            'wah hahn pee',
    'tukté':              'took tay',
    'lé':                 'lay',
    'hé':                 'hay',
    'thimáhel':           'tee mah hel',
    'tȟaŋkál':            'tahn kahl',

    // Module 4: The Land & The Thunder
    'wiyóhiŋyaŋpata':    'wee yoh heen yahn pah tah',
    'wazíyata':           'wah zee yah tah',
    'wiyóhpeyata':        'wee yoh pay yah tah',
    'itókağata':          'ee toh kah gah tah',
    'tȟatȟáŋka':          'tah tahn kah',
    'waŋblí':             'wahn blee',
    'šuŋgmánitu tȟáŋka':  'shoong mah nee too, tahn kah',
    'mathó':              'mah toh',
    'šúŋka':              'shoon kah',
    'šuŋgáwakȟaŋ':        'shoong ah wah kahn',
    'wakíŋyaŋ':           'wah keen yahn',
    'wakȟáŋȟežá':         'wah kahn hay zhah',
    'maȟpíya':            'mah hpee yah',
    'wičháȟpi':           'wee chah hpee',
    'haŋwí':              'hahn wee',
    'wí':                 'wee',
    'wétu':               'way too',
    'blokétu':            'bloh kay too',
    'ptaŋyétu':           'ptahn yay too',
    'waníyetu':           'wah nee yay too',
    'makȟá':              'mah kah',
    'pȟéta':              'pay tah',
    'tȟáte':              'tah tay',
    'ȟé':                 'hay',
    'čhaŋ':               'chahn',
    'iŋyáŋ':              'een yahn',

    // Module 5: Food, Sharing & Hospitality
    'wašná':              'wash nah',
    'thíŋpsiŋla':         'teenp seen lah',
    'tȟaŋíǧa':            'tahn ee gah',
    'papa':               'pah pah',
    'wóyute':             'woh yoo tay',
    'waskúyečha':         'wah skoo yay chah',
    'ȟáŋ':                'hahn',
    'čhéǧa':              'chay gah',
    'míla':               'mee lah',
    'wíčhokaya':          'wee choh kah yah',
    'ohéhaŋ':             'oh hay hahn',
    'wóta wo':            'woh tah woh',
    'yatkáŋ wo':          'yaht kahn woh',
    'lóčhiŋ he?':         'loh cheen hay',
    'wóta po':            'woh tah poh',
    'wóyute wašté':       'woh yoo tay wash tay',
    'sáŋm':               'sahnm',
    'imáǧaga':            'ee mah gah gah',
    'wópȟila':            'woh pee lah',
    'wóčhekiye':          'woh chay kee yay',
    'wóphila':            'woh pee lah',
    'wóthaŋiŋ':           'woh tah neen',

    // Module 6: Prayer & Sacred Language
    'wakȟáŋ tȟáŋka':      'wah kahn, tahn kah',
    'wakȟáŋ':             'wah kahn',
    'tȟáŋka':             'tahn kah',
    'wičhóni':            'wee choh nee',
    'óŋšimala ye':        'ohn shee mah lah yay',
    'čhekíya':            'chay kee yah',
    'ómakȟiya ye':        'oh mah kee yah yay',
    'nážiŋ':              'nah zheen',
    'hoháŋ':              'hoh hahn',
    'čhaŋnúŋpa':          'chahn noon pah',
    'čhaŋ wákȟaŋ':        'chahn wah kahn',
    'čhaŋčhéǧa':          'chahn chay gah',
    'waphéyata':          'wah pay yah tah',
    'wanáǧi':             'wah nah ghee',
    'wiwáŋyaŋg wačhípi':  'wee wahn yahng, wah chee pee',
    'wačhípi':            'wah chee pee',
    'olówaŋ':             'oh loh wahn',
    'inipi':              'ee nee pee',
    'haŋbléčheya':        'hahn blay chay yah',
    'wičháša wakȟáŋ':     'wee chah shah wah kahn',
    'takúye':             'tah koo yay',
    'oyásʼiŋ':            'oh yah seen',

    // Module 7: Conversation & Flow
    'tuwá':               'too wah',
    'táku':               'tah koo',
    'tóhaŋ':              'toh hahn',
    'tókheča':            'toh kay chah',
    'tóna':               'toh nah',
    'wóta waúŋ':          'woh tah wah oon',
    'yá waúŋ':            'yah wah oon',
    'hí waúŋ':            'hee wah oon',
    'škaŋ':               'shkahn',
    'wópilaštaya':        'woh pee lah shtah yah',
    'čhaŋtéšiča':         'chahn tay shee chah',
    'oháŋ':               'oh hahn',
    'sníya':              'snee yah',
    'lílá':               'lee lah',
    'héčhetu':            'hay chay too',
    'slolwáye šni':       'slohl wah yay shnee',
    'tókheškhe?':         'toh kesh keh',
    'hó':                 'hoh',

    // Module 8: Sundance Ready
    'óčhičhiya oyákihi he?': 'oh chee chee yah, oh yah kee hee hay',
    'táku ečhámuŋ kta he?':  'tah koo ay chah moon ktah hay',
    'mní awakú kte':      'mnee ah wah koo ktay',
    'čhaŋ awakú kte':     'chahn ah wah koo ktay',
    'hóka hé':            'HOH kah HAY',
    'íyohlate':           'ee yoh hlah tay',
    'thečhíȟila':         'tay chee hee lah',
    'wóphila tȟáŋka':     'woh pee lah tahn kah',
    'čhaŋté wašté':       'chahn tay wash tay',
  },

  speaking: false,
  hasRealAudio: {},

  // --- MAIN SPEAK FUNCTION ---
  // On mobile, speechSynthesis.speak() must run synchronously within the
  // user gesture (tap/click). An async detour (like trying to load an audio
  // file that doesn't exist) loses the gesture context and mobile browsers
  // silently block the TTS call. So we only use real audio files that have
  // already been confirmed to exist; otherwise go straight to TTS.
  speak(text, onStart, onEnd) {
    if (this.speaking) return;

    const key = text.toLowerCase().trim();

    // Use a confirmed real audio file if one exists
    const path = this.getAudioPath(key);
    if (this.hasRealAudio[path] === true) {
      this.playFile(path, onStart, onEnd);
      return;
    }

    // Go straight to TTS — keeps us in the user gesture context on mobile
    this.speakTTS(key, onStart, onEnd);
  },

  // Probe for real audio files in the background (non-blocking).
  // Call once at init so future speak() calls can use them if found.
  probeAudioFiles() {
    const keys = Object.keys(this.phoneticMap);
    keys.forEach(key => {
      const path = this.getAudioPath(key);
      if (this.hasRealAudio[path] !== undefined) return;
      this.hasRealAudio[path] = false;
      const audio = new window.Audio(path);
      audio.addEventListener('canplaythrough', () => {
        this.hasRealAudio[path] = true;
      }, { once: true });
      audio.addEventListener('error', () => {
        this.hasRealAudio[path] = false;
      }, { once: true });
      audio.load();
    });
  },

  // --- TTS PRONUNCIATION ---
  speakTTS(key, onStart, onEnd) {
    if (!window.speechSynthesis) {
      if (onStart) onStart();
      setTimeout(() => { if (onEnd) onEnd(); }, 1200);
      return;
    }

    const phonetic = this.phoneticMap[key];
    this._utterSpeak(phonetic || key, onStart, onEnd);
  },

  _utterSpeak(text, onStart, onEnd) {
    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.55;
    utter.pitch = 0.9;
    utter.volume = 1.0;
    utter.lang = 'en-US';

    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v =>
      v.name.includes('Samantha') ||
      v.name.includes('Google US English') ||
      v.name.includes('Natural') ||
      v.name.includes('Alex')
    );
    if (preferred) utter.voice = preferred;

    this.speaking = true;
    utter.onstart = () => { if (onStart) onStart(); };
    utter.onend = () => { this.speaking = false; if (onEnd) onEnd(); };
    utter.onerror = () => { this.speaking = false; if (onEnd) onEnd(); };

    window.speechSynthesis.speak(utter);

    // iOS Safari workaround: speechSynthesis can stall silently.
    // If onend/onerror never fire, reset speaking after a timeout.
    setTimeout(() => {
      if (this.speaking) {
        this.speaking = false;
        if (onEnd) onEnd();
      }
    }, 5000);
  },

  // --- REAL AUDIO FILE PLAYBACK ---
  playFile(path, onStart, onEnd) {
    this.speaking = true;
    if (onStart) onStart();

    const audio = new window.Audio(path);
    audio.playbackRate = 0.9;
    audio.onended = () => { this.speaking = false; if (onEnd) onEnd(); };
    audio.onerror = () => { this.speaking = false; if (onEnd) onEnd(); };
    audio.play().catch(() => { this.speaking = false; if (onEnd) onEnd(); });
  },

  // --- AUDIO FILE PATH ---
  getAudioPath(word) {
    const filename = word
      .toLowerCase()
      .replace(/[^a-zŋčšžȟǧáéíóú]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    return `audio/${filename}.mp3`;
  },

  // --- INIT ---
  init() {
    if (window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
    // Background-probe for real audio files so they're ready if they exist
    this.probeAudioFiles();
  },
};

// Backward compat alias
const Audio = LakotaAudio;

// ==========================================================================
// THUNDER — Ambient rolling thunder via Web Audio API
// No audio files needed. Generates low rumble synced to lightning bolts.
// ==========================================================================

const Thunder = {
  ctx: null,
  enabled: true,
  volume: 0.35,
  _lastRumble: 0,
  _minGap: 15000, // minimum ms between rumbles

  getCtx() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return this.ctx;
  },

  // Resume AudioContext on first user interaction (autoplay policy)
  unlock() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  // Generate a rolling thunder rumble
  // delay: seconds after lightning flash before thunder starts
  // intensity: 0-1, how loud/long (randomized per strike)
  rumble(delay, intensity) {
    if (!this.enabled) return;
    const now = Date.now();
    // Enforce minimum gap (8-15s randomized) between thunder rolls
    if (now - this._lastRumble < this._minGap) return;
    this._lastRumble = now;
    this._minGap = 15000 + Math.random() * 15000;

    const ctx = this.getCtx();
    if (ctx.state === 'suspended') return; // not yet unlocked

    const startTime = ctx.currentTime + (delay || 0);
    const duration = 1.5 + intensity * 3; // 1.5s to 4.5s
    const vol = this.volume * (0.5 + intensity * 0.5);

    // Create noise buffer for the rumble texture
    const bufferSize = ctx.sampleRate * Math.ceil(duration + 1);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Low-pass filter: thunder is deep and bassy
    const lpf = ctx.createBiquadFilter();
    lpf.type = 'lowpass';
    lpf.frequency.value = 80 + intensity * 60; // 80-140 Hz
    lpf.Q.value = 0.7;

    // Secondary rumble resonance
    const lpf2 = ctx.createBiquadFilter();
    lpf2.type = 'lowpass';
    lpf2.frequency.value = 150 + intensity * 100;
    lpf2.Q.value = 1.0;

    // Envelope: swell up, roll, then decay
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, startTime);
    // Quick initial crack
    gain.gain.linearRampToValueAtTime(vol * 0.7, startTime + 0.08);
    gain.gain.linearRampToValueAtTime(vol * 0.3, startTime + 0.2);
    // Rolling swell
    gain.gain.linearRampToValueAtTime(vol, startTime + 0.4 + intensity * 0.5);
    // Long decay across the plains
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    noise.connect(lpf);
    lpf.connect(lpf2);
    lpf2.connect(gain);
    gain.connect(ctx.destination);

    noise.start(startTime);
    noise.stop(startTime + duration + 0.1);
  }
};
