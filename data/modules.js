// ==========================================================================
// MODULE & LESSON DATA
// All content for Wakíŋyaŋ Wóuŋspe
// ==========================================================================

const MODULE_DATA = [
  {
    id: 'module-01',
    number: 1,
    iconKey: 'moccasin',
    title: 'First Steps',
    lakota: 'Táku Tókhiya',
    desc: 'Greetings, introductions, Lakota sounds, and the spirit of Mitákuye Oyásʼiŋ.',
    lessons: [
      {
        id: 'L1-01',
        title: 'The Lakota Sound System',
        subtitle: 'Learning to hear and speak Lakȟótiyapi',
        exercises: [
          {
            type: 'cultural-note',
            title: 'You Are Walking the Red Road',
            text: 'You\'re here because someone you love invited you into their world. That matters. Learning Lakȟótiyapi — the Lakota language — is not about perfection. It\'s about showing up, listening, and trying. Your Lakota family will see that effort and honor it.\n\nThis app won\'t make you fluent overnight. But by July, you\'ll be able to greet your relatives, introduce yourself, understand what\'s happening around you at Sundance, and participate with your heart open and your ears ready.\n\nEvery word you learn here has been spoken by Lakota people for countless generations. Treat each one with care.',
          },
          {
            type: 'cultural-note',
            title: 'How Lakota Sounds Are Written',
            text: 'Lakota wasn\'t originally a written language — it was spoken, sung, and prayed. The writing system we use is called Standard Lakota Orthography (SLO), and it includes some characters you won\'t find in English:\n\n• č — like "ch" in "church"\n• š — like "sh" in "shoe"\n• ž — like the "s" in "measure" or "vision"\n• ȟ — a breathy sound from the back of your throat, deeper than English "h"\n• ǧ — like ȟ but voiced (vibrating)\n• ŋ — the "ng" sound at the end of "sing"\n\nYou\'ll also see accent marks (á, é, í, ó, ú) that tell you which syllable to stress. Don\'t worry about memorizing all of this — you\'ll pick it up naturally as we go.',
          },
          {
            type: 'multiple-choice',
            prompt: 'The Lakota letter š makes what sound?',
            options: ['"ch" as in church', '"sh" as in shoe', '"zh" as in measure', 'A deep breathy "h"'],
            correct: 1,
            explanation: 'š makes the "sh" sound. You\'ll see it in words like wašté (good, beautiful) — one of the first words you\'ll learn!',
          },
          {
            type: 'multiple-choice',
            prompt: 'What sound does č make?',
            options: ['"sh" as in shoe', 'A deep breathy "h"', '"ch" as in church', '"ng" as in sing'],
            correct: 2,
            explanation: 'č is "ch" — you\'ll hear it in emáčiyapi (my name is) and many other common words.',
          },
          {
            type: 'multiple-choice',
            prompt: 'The letter ȟ is different from a regular "h" because it is:',
            options: [
              'Silent — you don\'t pronounce it',
              'Produced deeper in the throat, like a warm breath',
              'Pronounced like "k"',
              'The same as English "h" but louder'
            ],
            correct: 1,
            explanation: 'The ȟ comes from deeper in your throat. You\'ll hear it in the name of the language itself: Lakȟótiyapi. Listen for it — it\'s softer and deeper than you\'d expect.',
          },
          {
            type: 'multiple-choice',
            prompt: 'Lakota uses accent marks (like á or é) to show:',
            options: [
              'That the letter is silent',
              'Which syllable to stress',
              'That it\'s a question',
              'Nothing — they\'re decorative'
            ],
            correct: 1,
            explanation: 'Accent marks tell you where to put the emphasis. For example, in "wašté" (good), the stress falls on the second syllable: wash-TAY.',
          },
        ]
      },
      {
        id: 'L1-02',
        title: 'Háu & Háŋ — Hello',
        subtitle: 'Greetings and goodbyes with your relatives',
        exercises: [
          {
            type: 'cultural-note',
            title: 'Greeting Your Relatives',
            text: 'When you arrive at camp this summer, the first thing you\'ll do is greet people. In Lakota culture, greeting someone properly is an act of respect — you\'re acknowledging them as a relative. Because in the Lakota worldview, we are all related.\n\nLakota has gendered speech — some words are different depending on whether a man or woman is speaking. Greetings are one of these:\n\n• Men say: Háu (sounds like "how")\n• Women say: Háŋ (sounds like "hahn" with a nasal ending)\n\nWhen you arrive somewhere, greet the people there. When you leave, say goodbye. These small acts carry weight.',
          },
          {
            type: 'listen-identify',
            prompt: 'Háu',
            phonetic: 'HOW (rhymes with "cow")',
            meaning: 'Hello (said by men)',
            options: ['Hello (said by men)', 'Hello (said by women)', 'Goodbye', 'Thank you'],
            correct: 0,
          },
          {
            type: 'listen-identify',
            prompt: 'Háŋ',
            phonetic: 'HAHN (nasal ending)',
            meaning: 'Hello (said by women)',
            options: ['Goodbye', 'Hello (said by men)', 'Hello (said by women)', 'Yes'],
            correct: 2,
          },
          {
            type: 'listen-identify',
            prompt: 'Aŋpétu wašté',
            phonetic: 'ahn-PAY-too wash-TAY',
            meaning: 'Good day / Beautiful day',
            options: ['Good night', 'Good day', 'How are you?', 'See you later'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Tokša',
            phonetic: 'tohk-SHAH',
            meaning: 'Goodbye / See you later',
            options: ['Hello', 'Thank you', 'Goodbye', 'Good morning'],
            correct: 2,
          },
          {
            type: 'listen-identify',
            prompt: 'Tokša akhé',
            phonetic: 'tohk-SHAH ah-KAY',
            meaning: 'See you again / Until next time',
            options: ['Good day', 'See you again', 'How are you?', 'Hello friend'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            prompt: 'You\'re a woman arriving at camp. How do you greet everyone?',
            options: ['Háu', 'Háŋ', 'Tokša', 'Hiyá'],
            correct: 1,
            explanation: 'Women greet with "Háŋ." It\'s warm, simple, and respectful. You\'ll say it many times this summer.',
          },
          {
            type: 'multiple-choice',
            prompt: 'You\'re leaving camp for the night. What do you say?',
            options: ['Háu', 'Aŋpétu wašté', 'Tokša akhé', 'Philámayaye'],
            correct: 2,
            explanation: '"Tokša akhé" — see you again. A warm way to say goodbye when you know you\'ll be back.',
          },
          {
            type: 'match',
            prompt: 'Match these greetings and goodbyes:',
            pairs: [
              { lakota: 'Háu', english: 'Hello (men)' },
              { lakota: 'Háŋ', english: 'Hello (women)' },
              { lakota: 'Tokša', english: 'Goodbye' },
              { lakota: 'Aŋpétu wašté', english: 'Good day' },
            ]
          },
        ]
      },
      {
        id: 'L1-03',
        title: 'Introducing Yourself',
        subtitle: 'Your name, where you\'re from, and your first real conversation',
        exercises: [
          {
            type: 'cultural-note',
            title: 'Who Are You? Where Do You Come From?',
            text: 'When you meet someone at Sundance — and you\'ll meet many people — they\'ll want to know who you are. Not in an interrogating way, but in a relational way. "Who are your people? Where are you from?" These questions place you in the web of connection.\n\nA Lakota introduction follows a simple, beautiful pattern:\n\n1. Háu or Háŋ (your greeting)\n2. [Your name] emáčiyapi — "I am called [your name]"\n3. [Your city] emátaŋhaŋ — "I am from [your city]"\n\nThat\'s it. Three lines and you\'ve told someone exactly who you are. Practice this until it rolls off your tongue naturally.',
          },
          {
            type: 'listen-identify',
            prompt: 'emáčiyapi',
            phonetic: 'eh-MAH-chee-yah-pee',
            meaning: 'I am called / My name is',
            options: ['I am from', 'I am called', 'I live at', 'I am going to'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'emátaŋhaŋ',
            phonetic: 'eh-MAH-tahn-hahn',
            meaning: 'I am from (a place)',
            options: ['I am called', 'I live at', 'I am from', 'I want to go'],
            correct: 2,
          },
          {
            type: 'listen-identify',
            prompt: 'Kȟolá',
            phonetic: 'koh-LAH (breathy k)',
            meaning: 'Friend (said to/about a man)',
            options: ['Brother', 'Friend (male)', 'Elder', 'Relative'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Mašké',
            phonetic: 'mah-SHKAY',
            meaning: 'Friend (said to/about a woman)',
            options: ['Sister', 'Friend (female)', 'Grandmother', 'Relative'],
            correct: 1,
          },
          {
            type: 'fill-blank',
            sentence: '_____ emáčiyapi.',
            hint: 'your name',
            answer: null,
            explanation: 'Perfect! You just introduced yourself in Lakota. "[Your name] emáčiyapi" — I am called [your name]. Say it out loud a few times. Let it feel natural.',
          },
          {
            type: 'multiple-choice',
            prompt: 'To tell someone "I am from San Antonio," you say:',
            options: [
              'San Antonio emáčiyapi',
              'San Antonio emátaŋhaŋ',
              'San Antonio Kȟolá',
              'San Antonio wašté'
            ],
            correct: 1,
            explanation: '"San Antonio emátaŋhaŋ" — I am from San Antonio. Try saying your own: "[your city] emátaŋhaŋ."',
          },
          {
            type: 'multiple-choice',
            prompt: 'You meet a man at camp and want to call him "friend." You say:',
            options: ['Mašké', 'Kȟolá', 'Tokša', 'Háŋ'],
            correct: 1,
            explanation: 'Kȟolá means friend (when talking to or about a man). "Háu, Kȟolá!" — Hello, friend! You\'ll hear this a lot.',
          },
          {
            type: 'match',
            prompt: 'Match the introduction words:',
            pairs: [
              { lakota: 'emáčiyapi', english: 'I am called' },
              { lakota: 'emátaŋhaŋ', english: 'I am from' },
              { lakota: 'Kȟolá', english: 'Friend (male)' },
              { lakota: 'Mašké', english: 'Friend (female)' },
            ]
          },
        ]
      },
      {
        id: 'L1-04',
        title: 'Philámayaye — Thank You',
        subtitle: 'Gratitude, courtesy, and yes/no',
        exercises: [
          {
            type: 'cultural-note',
            title: 'Generosity and Gratitude',
            text: 'In Lakota culture, generosity (Čhaŋtógnake) is one of the highest virtues. People will feed you, give you things, help you — and they do it because it\'s the Lakota way, not because they expect anything in return.\n\nWhen someone shows you generosity, you respond with gratitude. "Philámayaye" (thank you) is a word you\'ll use constantly. At meals, when someone helps you set up camp, when an elder shares a teaching — Philámayaye.\n\nIf you\'re thanking a group of people, you say "Philámayayapi" — the "-pi" ending makes it plural.',
          },
          {
            type: 'listen-identify',
            prompt: 'Philámayaye',
            phonetic: 'pee-LAH-mah-yah-yay',
            meaning: 'Thank you (to one person)',
            options: ['Please', 'Thank you (one person)', 'You\'re welcome', 'I\'m sorry'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Philámayayapi',
            phonetic: 'pee-LAH-mah-yah-yah-pee',
            meaning: 'Thank you (to more than one person)',
            options: ['Thank you (one person)', 'Thank you (group)', 'You\'re all welcome', 'Please everyone'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Háŋ',
            phonetic: 'HAHN',
            meaning: 'Yes',
            options: ['Hello (women)', 'No', 'Yes', 'Maybe'],
            correct: 2,
          },
          {
            type: 'cultural-note',
            title: 'Háŋ Does Double Duty',
            text: 'You already learned that "Háŋ" is the women\'s greeting. But it also means "Yes" for everyone — men and women. Context makes the meaning clear: if someone asks you a question and you respond "Háŋ," it means yes. If you walk up to someone and say "Háŋ," it\'s a greeting.\n\nLakota is a context-rich language. Pay attention to the situation, not just the words.',
          },
          {
            type: 'listen-identify',
            prompt: 'Hiyá',
            phonetic: 'hee-YAH',
            meaning: 'No',
            options: ['Yes', 'No', 'Thank you', 'Goodbye'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Wašté',
            phonetic: 'wash-TAY',
            meaning: 'Good / Beautiful',
            options: ['Bad', 'Big', 'Good / Beautiful', 'Small'],
            correct: 2,
          },
          {
            type: 'multiple-choice',
            prompt: 'An elder hands you a plate of food at the community meal. What do you say?',
            options: ['Hiyá', 'Tokša', 'Philámayaye', 'Wašté'],
            correct: 2,
            explanation: '"Philámayaye" — thank you. When someone feeds you, always express gratitude. This is one of the most important things you can do at Sundance.',
          },
          {
            type: 'multiple-choice',
            prompt: 'You want to tell someone the food is good. You say:',
            options: ['Philámayaye', 'Hiyá', 'Wašté', 'Tokša'],
            correct: 2,
            explanation: '"Wašté!" — Good! Beautiful! You can use this word for almost anything positive. The food is wašté. The day is wašté. Your relatives are wašté.',
          },
          {
            type: 'multiple-choice',
            prompt: 'You\'re thanking a group of people who helped set up the arbor. You say:',
            options: ['Philámayaye', 'Philámayayapi', 'Wašté', 'Háŋ'],
            correct: 1,
            explanation: '"Philámayayapi" — thank you all. The "-pi" ending makes it plural. Use this when thanking more than one person.',
          },
          {
            type: 'match',
            prompt: 'Match these essential words:',
            pairs: [
              { lakota: 'Philámayaye', english: 'Thank you' },
              { lakota: 'Háŋ', english: 'Yes' },
              { lakota: 'Hiyá', english: 'No' },
              { lakota: 'Wašté', english: 'Good / Beautiful' },
            ]
          },
        ]
      },
      {
        id: 'L1-05',
        title: 'Numbers 1–10',
        subtitle: 'Counting in Lakota — the sacredness of four',
        exercises: [
          {
            type: 'cultural-note',
            title: 'Numbers and the Sacred Four',
            text: 'You\'ll need numbers at Sundance — counting days, counting songs, knowing when someone says "four more rounds." The Lakota number system is logical and elegant.\n\nThe number four (Tópa) is especially sacred. There are four cardinal directions, four seasons, four stages of life, and many ceremonies are organized in fours. When you hear "tópa" at Sundance, pay attention — something important is being structured.\n\nLet\'s start with 1–5. These are the foundation — unique words you need to commit to memory.',
          },
          {
            type: 'listen-identify',
            prompt: 'Waŋží',
            phonetic: 'wahn-ZHEE',
            meaning: '1 — One',
            options: ['One', 'Two', 'Three', 'Four'],
            correct: 0,
          },
          {
            type: 'listen-identify',
            prompt: 'Núŋpa',
            phonetic: 'NOON-pah',
            meaning: '2 — Two',
            options: ['One', 'Two', 'Three', 'Five'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Yámni',
            phonetic: 'YAHM-nee',
            meaning: '3 — Three',
            options: ['Two', 'Four', 'Three', 'Five'],
            correct: 2,
          },
          {
            type: 'listen-identify',
            prompt: 'Tópa',
            phonetic: 'TOH-pah',
            meaning: '4 — Four (the sacred number)',
            options: ['Three', 'Five', 'One', 'Four'],
            correct: 3,
          },
          {
            type: 'listen-identify',
            prompt: 'Záptaŋ',
            phonetic: 'ZAHP-tahn',
            meaning: '5 — Five',
            options: ['Four', 'Six', 'Five', 'Ten'],
            correct: 2,
          },
          {
            type: 'cultural-note',
            title: 'Numbers 6–10',
            text: 'Numbers 6–9 follow a pattern connected to counting on the other hand:\n\n• 6 — Šákpe (SHAHK-pay)\n• 7 — Šakówiŋ (shah-KOH-ween)\n• 8 — Šaglóǧaŋ (shah-GLOH-ghahn)\n• 9 — Napčíyuŋka (nahp-CHEE-yoon-kah)\n• 10 — Wikčémna (week-CHAYM-nah)\n\nFocus on 1–5 for now. You\'ll hear 6–10 in context and they\'ll start to stick. The most important number to know by heart is Tópa (4) — you\'ll hear it everywhere at ceremony.',
          },
          {
            type: 'listen-identify',
            prompt: 'Wikčémna',
            phonetic: 'week-CHAYM-nah',
            meaning: '10 — Ten',
            options: ['Five', 'Eight', 'Ten', 'Seven'],
            correct: 2,
          },
          {
            type: 'match',
            prompt: 'Match the Lakota numbers:',
            pairs: [
              { lakota: 'Waŋží', english: 'One (1)' },
              { lakota: 'Núŋpa', english: 'Two (2)' },
              { lakota: 'Yámni', english: 'Three (3)' },
              { lakota: 'Záptaŋ', english: 'Five (5)' },
            ]
          },
          {
            type: 'multiple-choice',
            prompt: 'What is the Lakota word for the sacred number four?',
            options: ['Yámni', 'Záptaŋ', 'Tópa', 'Wikčémna'],
            correct: 2,
            explanation: 'Tópa — four. The four directions, the four seasons, the four rounds of the sweat lodge. This number structures Lakota ceremony and life.',
          },
          {
            type: 'multiple-choice',
            prompt: 'Someone says "Wikčémna." What number are they saying?',
            options: ['Five', 'Seven', 'Nine', 'Ten'],
            correct: 3,
            explanation: 'Wikčémna is ten. Now you know 1–5 and 10 — that covers a lot of practical counting!',
          },
        ]
      },
      {
        id: 'L1-06',
        title: 'Module 1 Review',
        subtitle: 'Everything together — Mitákuye Oyásʼiŋ',
        exercises: [
          {
            type: 'cultural-note',
            title: 'Mitákuye Oyásʼiŋ — We Are All Related',
            text: 'Before we review everything, there is one phrase you need to carry with you above all others:\n\nMitákuye Oyásʼiŋ — "We are all related." or "All my relatives."\n\nYou will hear this at the end of every prayer, every ceremony, every moment of deep connection at Sundance. It means that all living things — people, animals, plants, stones, the water, the sky — are part of one family. There is no separation.\n\nWhen you learn this language, you are not an outsider picking up foreign words. You are a relative remembering something your heart already knows.\n\nSay it out loud now: Mitákuye Oyásʼiŋ.\n\nNow let\'s see how much you remember.',
          },
          {
            type: 'multiple-choice',
            prompt: 'How does a man greet someone in Lakota?',
            options: ['Háŋ', 'Háu', 'Tokša', 'Hiyá'],
            correct: 1,
            explanation: 'Háu — hello (men). Háŋ is for women.',
          },
          {
            type: 'multiple-choice',
            prompt: 'What does "Tokša akhé" mean?',
            options: ['Thank you very much', 'Good morning', 'See you again', 'I am sorry'],
            correct: 2,
            explanation: '"Tokša akhé" — see you again, until next time. A warm goodbye.',
          },
          {
            type: 'multiple-choice',
            prompt: '"Philámayaye" means:',
            options: ['Goodbye', 'Good day', 'Thank you', 'Yes'],
            correct: 2,
            explanation: 'Philámayaye means "Thank you." One of the most important words you\'ll use this summer.',
          },
          {
            type: 'multiple-choice',
            prompt: 'You meet a woman at camp and want to call her "friend." You say:',
            options: ['Kȟolá', 'Mašké', 'Wašté', 'Háu'],
            correct: 1,
            explanation: 'Mašké is "friend" for a woman. Kȟolá is "friend" for a man.',
          },
          {
            type: 'match',
            prompt: 'Match everything you\'ve learned:',
            pairs: [
              { lakota: 'Aŋpétu wašté', english: 'Good day' },
              { lakota: 'emáčiyapi', english: 'I am called' },
              { lakota: 'Hiyá', english: 'No' },
              { lakota: 'Tópa', english: 'Four' },
            ]
          },
          {
            type: 'multiple-choice',
            prompt: 'To say "I am from Denver," you would say:',
            options: [
              'Denver emáčiyapi',
              'Denver Aŋpétu wašté',
              'Denver emátaŋhaŋ',
              'Denver Philámayaye'
            ],
            correct: 2,
            explanation: '"Denver emátaŋhaŋ" — I am from Denver.',
          },
          {
            type: 'multiple-choice',
            prompt: 'What does "Wašté" mean?',
            options: ['Bad', 'Big', 'Good / Beautiful', 'Sacred'],
            correct: 2,
            explanation: 'Wašté means good, beautiful. You already know it from "Aŋpétu wašté" (good day). It\'s everywhere in Lakota!',
          },
          {
            type: 'multiple-choice',
            prompt: 'What does "Mitákuye Oyásʼiŋ" mean?',
            options: [
              'Good day to you all',
              'The Great Spirit is watching',
              'We are all related',
              'Walk in beauty'
            ],
            correct: 2,
            explanation: '"Mitákuye Oyásʼiŋ" — We are all related. This is the heart of everything. Carry it with you.',
          },
          {
            type: 'multiple-choice',
            prompt: 'What is the Lakota word for the number 3?',
            options: ['Núŋpa', 'Tópa', 'Záptaŋ', 'Yámni'],
            correct: 3,
            explanation: 'Yámni means three. Full count: Waŋží, Núŋpa, Yámni, Tópa, Záptaŋ — one through five!',
          },
        ]
      }
    ]
  },
  {
    id: 'module-02',
    number: 2,
    iconKey: 'tipi',
    title: 'Family & Kinship',
    lakota: 'Thiwáhe',
    desc: 'Learn the kinship system — how to address your Lakota relatives with respect and love.',
    lessons: [
      {
        id: 'L2-01',
        title: 'Iná & Até — Mother & Father',
        subtitle: 'Your closest relatives',
        exercises: [
          {
            type: 'cultural-note',
            title: 'Family Is Everything',
            text: 'In Lakota culture, family isn\'t just the people in your house — it\'s the center of everything. The word "thiwáhe" means family, and it extends far beyond what most English speakers mean by the word.\n\nAt Sundance, you\'ll hear people refer to each other as relatives even if they\'ve never met. This isn\'t casual — it reflects the Lakota understanding that all people are connected. When someone calls you "brother" or "sister," they mean it.\n\nLet\'s start with the words for your closest family members.',
          },
          {
            type: 'listen-identify',
            prompt: 'Iná',
            phonetic: 'ee-NAH',
            meaning: 'Mother',
            options: ['Father', 'Mother', 'Grandmother', 'Sister'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Até',
            phonetic: 'ah-TAY',
            meaning: 'Father',
            options: ['Mother', 'Brother', 'Father', 'Uncle'],
            correct: 2,
          },
          {
            type: 'listen-identify',
            prompt: 'Čhiŋkší',
            phonetic: 'cheenk-SHEE',
            meaning: 'Son (what a father calls his son)',
            options: ['Daughter', 'Son', 'Brother', 'Nephew'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Čhuŋkší',
            phonetic: 'choonk-SHEE',
            meaning: 'Daughter (what a father calls his daughter)',
            options: ['Daughter', 'Son', 'Sister', 'Niece'],
            correct: 0,
          },
          {
            type: 'cultural-note',
            title: 'Gendered Family Terms',
            text: 'Lakota family words depend on who is speaking, not just who you\'re talking about. A father calls his son "čhiŋkší" and his daughter "čhuŋkší." A mother uses different words: "čhiŋkš" for her son and "čhuŋkš" for her daughter.\n\nDon\'t stress about memorizing every variation right now. You\'ll hear them in context at camp and they\'ll start to make sense. Focus on recognizing the words when you hear them.',
          },
          {
            type: 'multiple-choice',
            prompt: 'How do you say "Mother" in Lakota?',
            options: ['Até', 'Iná', 'Uŋčí', 'Čhuŋkší'],
            correct: 1,
            explanation: 'Iná means Mother. You\'ll hear children calling out "Iná!" around camp all summer.',
          },
          {
            type: 'match',
            prompt: 'Match the family members:',
            pairs: [
              { lakota: 'Iná', english: 'Mother' },
              { lakota: 'Até', english: 'Father' },
              { lakota: 'Čhiŋkší', english: 'Son' },
              { lakota: 'Čhuŋkší', english: 'Daughter' },
            ]
          },
        ]
      },
      {
        id: 'L2-02',
        title: 'Brothers & Sisters',
        subtitle: 'Siblings and the bonds between them',
        exercises: [
          {
            type: 'cultural-note',
            title: 'More Than Blood',
            text: 'In Lakota, the words for "brother" and "sister" depend on whether you\'re older or younger AND on the gender of the person speaking. This might seem complicated at first, but it reflects something beautiful: the Lakota language encodes the specific relationship between two people in a single word.\n\nFor now, we\'ll learn the most common terms you\'ll hear and need at Sundance. A man calls his brother "thíblo" (older brother) or "misúŋ" (younger brother). Cousins of the same gender are also called brothers and sisters — because in the Lakota kinship system, they are.',
          },
          {
            type: 'listen-identify',
            prompt: 'Thíblo',
            phonetic: 'TEEB-loh',
            meaning: 'Older brother (said by a man)',
            options: ['Younger brother', 'Older brother', 'Father', 'Uncle'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Misúŋ',
            phonetic: 'mee-SOONG',
            meaning: 'Younger brother (said by a man)',
            options: ['Older brother', 'Younger brother', 'Son', 'Friend'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Tȟaŋkší',
            phonetic: 'tahnk-SHEE',
            meaning: 'Younger sister (said by a man)',
            options: ['Older sister', 'Younger sister', 'Daughter', 'Mother'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Čhuwé',
            phonetic: 'choo-WAY',
            meaning: 'Older sister (said by a woman)',
            options: ['Younger sister', 'Mother', 'Older sister', 'Aunt'],
            correct: 2,
          },
          {
            type: 'multiple-choice',
            prompt: 'A man wants to address his older brother. He says:',
            options: ['Misúŋ', 'Thíblo', 'Tȟaŋkší', 'Até'],
            correct: 1,
            explanation: 'Thíblo — older brother (from a man\'s perspective). You\'ll hear this between brothers at camp.',
          },
          {
            type: 'multiple-choice',
            prompt: 'What does "Misúŋ" mean?',
            options: ['Older brother', 'Younger brother', 'Younger sister', 'Son'],
            correct: 1,
            explanation: 'Misúŋ means younger brother (from a man\'s perspective). "Háu, Misúŋ!" — Hello, little brother!',
          },
          {
            type: 'match',
            prompt: 'Match the sibling terms:',
            pairs: [
              { lakota: 'Thíblo', english: 'Older brother (man speaking)' },
              { lakota: 'Misúŋ', english: 'Younger brother (man speaking)' },
              { lakota: 'Tȟaŋkší', english: 'Younger sister (man speaking)' },
              { lakota: 'Čhuwé', english: 'Older sister (woman speaking)' },
            ]
          },
        ]
      },
      {
        id: 'L2-03',
        title: 'Elders — Tȟuŋkášila & Uŋčí',
        subtitle: 'Grandparents and respectful address',
        exercises: [
          {
            type: 'cultural-note',
            title: 'Respecting Your Elders',
            text: 'The words for grandparents are some of the most important and frequently used in the Lakota language. At Sundance, you\'ll hear them everywhere — and not just for biological grandparents.\n\n"Tȟuŋkášila" (grandfather) and "Uŋčí" (grandmother) are used as terms of deep respect for any elder. When you call someone Tȟuŋkášila, you are honoring their wisdom and their place in the community.\n\nImportantly, "Tȟuŋkášila" is also used to address Wakȟáŋ Tȟáŋka — the Great Spirit, the Creator. When you hear prayers that begin with "Tȟuŋkášila..." they are addressing the sacred.',
          },
          {
            type: 'listen-identify',
            prompt: 'Tȟuŋkášila',
            phonetic: 'toon-KAH-shee-lah',
            meaning: 'Grandfather / Respected elder (male) / Great Spirit',
            options: ['Grandmother', 'Grandfather / Great Spirit', 'Uncle', 'Father'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Uŋčí',
            phonetic: 'oon-CHEE',
            meaning: 'Grandmother / Respected elder (female)',
            options: ['Grandfather', 'Mother', 'Grandmother', 'Aunt'],
            correct: 2,
          },
          {
            type: 'listen-identify',
            prompt: 'Lekší',
            phonetic: 'lek-SHEE',
            meaning: 'Uncle (father\'s brother or a respected man)',
            options: ['Uncle', 'Grandfather', 'Father', 'Cousin'],
            correct: 0,
          },
          {
            type: 'listen-identify',
            prompt: 'Tȟuŋwíŋ',
            phonetic: 'toon-WEEN',
            meaning: 'Aunt (father\'s sister)',
            options: ['Grandmother', 'Mother', 'Sister', 'Aunt'],
            correct: 3,
          },
          {
            type: 'multiple-choice',
            prompt: 'An elder man offers you advice at camp. To show respect, you address him as:',
            options: ['Até', 'Kȟolá', 'Tȟuŋkášila', 'Lekší'],
            correct: 2,
            explanation: '"Tȟuŋkášila" — Grandfather. This is the deepest term of respect for a male elder. It will be appreciated more than you can imagine.',
          },
          {
            type: 'multiple-choice',
            prompt: '"Tȟuŋkášila" can also be used to address:',
            options: ['Your biological father', 'The Great Spirit (Wakȟáŋ Tȟáŋka)', 'A young child', 'A woman elder'],
            correct: 1,
            explanation: '"Tȟuŋkášila" is used both for grandfathers and for the Great Spirit. In prayer, "Tȟuŋkášila, onsímala ye" means "Grandfather (Creator), have pity on me."',
          },
          {
            type: 'match',
            prompt: 'Match the elder and family terms:',
            pairs: [
              { lakota: 'Tȟuŋkášila', english: 'Grandfather / Great Spirit' },
              { lakota: 'Uŋčí', english: 'Grandmother' },
              { lakota: 'Lekší', english: 'Uncle' },
              { lakota: 'Tȟuŋwíŋ', english: 'Aunt' },
            ]
          },
        ]
      },
      {
        id: 'L2-04',
        title: 'The Thiyóšpaye',
        subtitle: 'Your extended family — the circle that holds you',
        exercises: [
          {
            type: 'cultural-note',
            title: 'Beyond the Nuclear Family',
            text: 'The Lakota word "thiyóšpaye" describes your extended family — your whole clan, your community group. This is the circle of people who camp together, eat together, and look out for each other.\n\nAt Sundance, you\'ll be part of a thiyóšpaye. You\'ll set up camp with your group, share meals, and support each other through the ceremony. Understanding this concept helps you understand why everyone treats each other like family — because they are.\n\nHere are more relational words you\'ll hear around camp:',
          },
          {
            type: 'listen-identify',
            prompt: 'Thiyóšpaye',
            phonetic: 'tee-YOH-shpah-yay',
            meaning: 'Extended family / Clan / Camp group',
            options: ['Immediate family', 'Extended family / Clan', 'Village', 'Nation'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Thiwáhe',
            phonetic: 'tee-WAH-hay',
            meaning: 'Family (immediate)',
            options: ['Home', 'Family', 'Relative', 'Clan'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Thakóža',
            phonetic: 'tah-KOH-zhah',
            meaning: 'Grandchild',
            options: ['Grandchild', 'Nephew', 'Son', 'Cousin'],
            correct: 0,
          },
          {
            type: 'listen-identify',
            prompt: 'Oyáte',
            phonetic: 'oh-YAH-tay',
            meaning: 'People / Nation / Tribe',
            options: ['Family', 'People / Nation', 'Camp', 'Land'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            prompt: 'Your camp group at Sundance — the people you eat and camp with — would be called your:',
            options: ['Oyáte', 'Thiwáhe', 'Thiyóšpaye', 'Kȟolá'],
            correct: 2,
            explanation: 'Your thiyóšpaye is your extended family unit — the people who camp together and support each other. This is the group you belong to at Sundance.',
          },
          {
            type: 'multiple-choice',
            prompt: 'What is the difference between "Thiwáhe" and "Thiyóšpaye"?',
            options: [
              'They mean the same thing',
              'Thiwáhe is immediate family; Thiyóšpaye is the extended clan',
              'Thiwáhe is for men; Thiyóšpaye is for women',
              'Thiwáhe is formal; Thiyóšpaye is casual'
            ],
            correct: 1,
            explanation: 'Thiwáhe is your close family. Thiyóšpaye is the larger circle — your clan, your extended relatives, your camp group. Both are essential.',
          },
          {
            type: 'match',
            prompt: 'Match the community words:',
            pairs: [
              { lakota: 'Thiwáhe', english: 'Family (immediate)' },
              { lakota: 'Thiyóšpaye', english: 'Extended family / Clan' },
              { lakota: 'Thakóža', english: 'Grandchild' },
              { lakota: 'Oyáte', english: 'People / Nation' },
            ]
          },
        ]
      },
      {
        id: 'L2-05',
        title: 'Talking About Your Relatives',
        subtitle: 'Putting family words into practice',
        exercises: [
          {
            type: 'cultural-note',
            title: 'Introducing Your People',
            text: 'Now that you know the family words, let\'s practice using them in sentences. At Sundance, people will ask about your family. Being able to say "This is my mother" or "My grandfather is here" shows deep respect.\n\nThe word "mitȟáwa" means "my" or "mine." You\'ll see it combined with family terms:\n• Iná mitȟáwa — My mother\n• Até mitȟáwa — My father\n• Tȟuŋkášila mitȟáwa — My grandfather',
          },
          {
            type: 'listen-identify',
            prompt: 'Mitȟáwa',
            phonetic: 'mee-TAH-wah',
            meaning: 'My / Mine',
            options: ['Your', 'My / Mine', 'Our', 'Their'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            prompt: 'How would you say "My mother" in Lakota?',
            options: ['Iná thiwáhe', 'Iná mitȟáwa', 'Iná wašté', 'Iná oyáte'],
            correct: 1,
            explanation: '"Iná mitȟáwa" — My mother. The possessive word "mitȟáwa" comes after the noun.',
          },
          {
            type: 'multiple-choice',
            prompt: 'How would you say "My grandfather"?',
            options: ['Tȟuŋkášila mitȟáwa', 'Mitȟáwa Tȟuŋkášila', 'Até mitȟáwa', 'Lekší mitȟáwa'],
            correct: 0,
            explanation: '"Tȟuŋkášila mitȟáwa" — My grandfather. Same pattern: family term + mitȟáwa.',
          },
          {
            type: 'fill-blank',
            sentence: 'Até _____ wašté.',
            hint: 'my (possessive)',
            answer: 'mitȟáwa',
            explanation: '"Até mitȟáwa wašté" — My father is good. You just built a complete Lakota sentence!',
          },
          {
            type: 'multiple-choice',
            prompt: 'Someone introduces you to an elder woman. They say "Uŋčí mitȟáwa." What are they saying?',
            options: ['My grandmother', 'Your grandmother', 'Our grandmother', 'The grandmother'],
            correct: 0,
            explanation: '"Uŋčí mitȟáwa" — My grandmother. They\'re introducing their grandmother to you.',
          },
          {
            type: 'match',
            prompt: 'Match these phrases:',
            pairs: [
              { lakota: 'Iná mitȟáwa', english: 'My mother' },
              { lakota: 'Até mitȟáwa', english: 'My father' },
              { lakota: 'Tȟuŋkášila mitȟáwa', english: 'My grandfather' },
              { lakota: 'Uŋčí mitȟáwa', english: 'My grandmother' },
            ]
          },
        ]
      },
      {
        id: 'L2-06',
        title: 'Module 2 Review',
        subtitle: 'Your Lakota family — Thiwáhe',
        exercises: [
          {
            type: 'cultural-note',
            title: 'You Now Know Your Relatives',
            text: 'You can now name your closest family members in Lakota — mother, father, grandparents, siblings, aunts, uncles. You know the words for your clan (thiyóšpaye) and your nation (oyáte). You can say "my mother" and "my grandfather."\n\nAt Sundance this summer, use these words. When you call an elder "Tȟuŋkášila" or "Uŋčí," watch their face. When you introduce your family, notice how people respond. These words carry power because they carry relationship.\n\nRemember: in the Lakota world, you are never alone. You are always part of a thiwáhe, a thiyóšpaye, an oyáte.\n\nMitákuye Oyásʼiŋ.',
          },
          {
            type: 'multiple-choice',
            prompt: 'How do you say "Mother" in Lakota?',
            options: ['Até', 'Uŋčí', 'Iná', 'Tȟuŋwíŋ'],
            correct: 2,
            explanation: 'Iná — Mother.',
          },
          {
            type: 'multiple-choice',
            prompt: 'What does "Tȟuŋkášila" mean?',
            options: ['Uncle', 'Father', 'Grandfather / Great Spirit', 'Older brother'],
            correct: 2,
            explanation: 'Tȟuŋkášila — Grandfather, and also a name for the Great Spirit.',
          },
          {
            type: 'multiple-choice',
            prompt: '"Thiyóšpaye" refers to:',
            options: ['Your immediate family only', 'Your extended family / clan', 'Your workplace', 'A ceremony'],
            correct: 1,
            explanation: 'Your thiyóšpaye is your extended family unit — the group that camps and lives together.',
          },
          {
            type: 'multiple-choice',
            prompt: 'A man addressing his older brother would say:',
            options: ['Misúŋ', 'Thíblo', 'Lekší', 'Čhiŋkší'],
            correct: 1,
            explanation: 'Thíblo — older brother (from a man\'s perspective).',
          },
          {
            type: 'match',
            prompt: 'Final review — match all the family words:',
            pairs: [
              { lakota: 'Iná', english: 'Mother' },
              { lakota: 'Lekší', english: 'Uncle' },
              { lakota: 'Uŋčí', english: 'Grandmother' },
              { lakota: 'Oyáte', english: 'People / Nation' },
            ]
          },
          {
            type: 'multiple-choice',
            prompt: 'How do you say "My father" in Lakota?',
            options: ['Mitȟáwa até', 'Até mitȟáwa', 'Até iná', 'Thiwáhe até'],
            correct: 1,
            explanation: '"Até mitȟáwa" — My father. Family term first, then "mitȟáwa" (my).',
          },
          {
            type: 'multiple-choice',
            prompt: 'What does "Uŋčí" mean?',
            options: ['Aunt', 'Mother', 'Grandmother', 'Sister'],
            correct: 2,
            explanation: 'Uŋčí — Grandmother. A term of deep respect for any elder woman.',
          },
        ]
      }
    ]
  },
  {
    id: 'module-03',
    number: 3,
    iconKey: 'morningStar',
    title: 'A Day in the Life',
    lakota: 'Aŋpétu Waŋ',
    desc: 'Daily conversation, common actions, food, and getting around.',
    lessons: [
      {
        id: 'L3-01',
        title: 'Time of Day',
        subtitle: 'Morning, afternoon, evening — the rhythm of camp',
        exercises: [
          {
            type: 'cultural-note',
            title: 'A Day at Camp',
            text: 'Life at Sundance follows the sun. You rise early — often before dawn — and the day unfolds around ceremony, meals, and community. Knowing the words for different times of day helps you understand when things are happening and follow the rhythm of camp.\n\nMornings are sacred. Many people pray at sunrise. The evening is for gathering, storytelling, and rest. Let\'s learn how to talk about the different parts of the day.',
          },
          {
            type: 'listen-identify',
            prompt: 'Haŋhépi',
            phonetic: 'hahn-HAY-pee',
            meaning: 'Night / Nighttime',
            options: ['Morning', 'Afternoon', 'Night', 'Dawn'],
            correct: 2,
          },
          {
            type: 'listen-identify',
            prompt: 'Híŋhaŋni',
            phonetic: 'HEEN-hahn-nee',
            meaning: 'Morning / This morning',
            options: ['Morning', 'Night', 'Afternoon', 'Evening'],
            correct: 0,
          },
          {
            type: 'listen-identify',
            prompt: 'Wíyotaŋhaŋ',
            phonetic: 'wee-YOH-tahn-hahn',
            meaning: 'Noon / Midday',
            options: ['Dawn', 'Noon', 'Sunset', 'Midnight'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Ȟtayétu',
            phonetic: 'htah-YAY-too',
            meaning: 'Evening',
            options: ['Morning', 'Noon', 'Evening', 'Night'],
            correct: 2,
          },
          {
            type: 'listen-identify',
            prompt: 'Aŋpáo',
            phonetic: 'ahn-POW',
            meaning: 'Dawn / Daybreak',
            options: ['Sunset', 'Dawn', 'Midnight', 'Noon'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            prompt: 'The sun is coming up and people are beginning to pray. What time of day is it?',
            options: ['Ȟtayétu', 'Haŋhépi', 'Aŋpáo', 'Wíyotaŋhaŋ'],
            correct: 2,
            explanation: 'Aŋpáo — dawn, daybreak. The most sacred time of day. Many prayers happen as the sun rises.',
          },
          {
            type: 'multiple-choice',
            prompt: 'Someone says "Híŋhaŋni wašté!" What are they saying?',
            options: ['Good night!', 'Good morning!', 'Good afternoon!', 'Good evening!'],
            correct: 1,
            explanation: '"Híŋhaŋni wašté" — Good morning! You already knew "wašté" (good). Now you can greet people at any time of day.',
          },
          {
            type: 'match',
            prompt: 'Match the times of day:',
            pairs: [
              { lakota: 'Aŋpáo', english: 'Dawn' },
              { lakota: 'Híŋhaŋni', english: 'Morning' },
              { lakota: 'Wíyotaŋhaŋ', english: 'Noon' },
              { lakota: 'Haŋhépi', english: 'Night' },
            ]
          },
        ]
      },
      {
        id: 'L3-02',
        title: 'Common Actions',
        subtitle: 'Eating, sleeping, going, coming — camp verbs',
        exercises: [
          {
            type: 'cultural-note',
            title: 'Verbs You\'ll Need Every Day',
            text: 'Lakota verbs work differently from English — the endings change depending on who is doing the action. For now, we\'ll learn the most basic forms that you\'ll hear and use constantly at camp.\n\nThese are the everyday verbs of Sundance life: eating, drinking, sleeping, going, coming, sitting. You don\'t need to conjugate them perfectly — people will understand you and appreciate the effort.',
          },
          {
            type: 'listen-identify',
            prompt: 'Wóta',
            phonetic: 'WOH-tah',
            meaning: 'To eat / He/she eats',
            options: ['To sleep', 'To eat', 'To go', 'To drink'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Yatkáŋ',
            phonetic: 'yaht-KAHN',
            meaning: 'To drink / He/she drinks',
            options: ['To eat', 'To sleep', 'To drink', 'To sit'],
            correct: 2,
          },
          {
            type: 'listen-identify',
            prompt: 'Ištíŋma',
            phonetic: 'eesh-TEEN-mah',
            meaning: 'To sleep / He/she sleeps',
            options: ['To eat', 'To drink', 'To go', 'To sleep'],
            correct: 3,
          },
          {
            type: 'listen-identify',
            prompt: 'Yá',
            phonetic: 'YAH',
            meaning: 'To go',
            options: ['To go', 'To come', 'To eat', 'To sit'],
            correct: 0,
          },
          {
            type: 'listen-identify',
            prompt: 'Hí',
            phonetic: 'HEE',
            meaning: 'To come / To arrive',
            options: ['To go', 'To eat', 'To come', 'To leave'],
            correct: 2,
          },
          {
            type: 'listen-identify',
            prompt: 'Iyótaka',
            phonetic: 'ee-YOH-tah-kah',
            meaning: 'To sit down',
            options: ['To stand up', 'To sit down', 'To lie down', 'To walk'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            prompt: 'It\'s late at night and you want to tell someone you\'re going to sleep. The verb for "to sleep" is:',
            options: ['Wóta', 'Yá', 'Ištíŋma', 'Yatkáŋ'],
            correct: 2,
            explanation: 'Ištíŋma — to sleep. After a long day at Sundance, you\'ll be saying this early!',
          },
          {
            type: 'match',
            prompt: 'Match the camp verbs:',
            pairs: [
              { lakota: 'Wóta', english: 'To eat' },
              { lakota: 'Yatkáŋ', english: 'To drink' },
              { lakota: 'Yá', english: 'To go' },
              { lakota: 'Hí', english: 'To come / arrive' },
            ]
          },
        ]
      },
      {
        id: 'L3-03',
        title: 'Tókheškhe yaúŋ he? — How Are You?',
        subtitle: 'Asking and answering about wellbeing',
        exercises: [
          {
            type: 'cultural-note',
            title: 'Checking In',
            text: 'After greetings, people naturally ask how you\'re doing. This is one of the most practical conversation patterns you\'ll use at Sundance — someone greets you, asks how you are, and you respond.\n\nThe most common way to ask is "Tókheškhe yaúŋ he?" — How are you? The "he" at the end makes it a question (like a spoken question mark).\n\nTo answer, you\'ll usually say something like "Taŋyáŋ waúŋ" — I am well.',
          },
          {
            type: 'listen-identify',
            prompt: 'Tókheškhe yaúŋ he?',
            phonetic: 'TOH-kesh-keh yah-OON hay',
            meaning: 'How are you?',
            options: ['Where are you from?', 'How are you?', 'What is your name?', 'Where are you going?'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Taŋyáŋ waúŋ',
            phonetic: 'tahn-YAHN wah-OON',
            meaning: 'I am well / I am fine',
            options: ['I am tired', 'I am well', 'I am hungry', 'I don\'t know'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Wačhíŋ waštéya waúŋ',
            phonetic: 'wah-CHEEN wash-TAY-yah wah-OON',
            meaning: 'I am happy / I feel good',
            options: ['I am sad', 'I am tired', 'I am happy', 'I am hungry'],
            correct: 2,
          },
          {
            type: 'listen-identify',
            prompt: 'Waṫȟáka waúŋ',
            phonetic: 'wah-TAH-kah wah-OON',
            meaning: 'I am tired',
            options: ['I am well', 'I am hungry', 'I am tired', 'I am happy'],
            correct: 2,
          },
          {
            type: 'listen-identify',
            prompt: 'Lóčhiŋ waúŋ',
            phonetic: 'LOH-cheen wah-OON',
            meaning: 'I am hungry',
            options: ['I am thirsty', 'I am tired', 'I am happy', 'I am hungry'],
            correct: 3,
          },
          {
            type: 'multiple-choice',
            prompt: 'Someone greets you and says "Tókheškhe yaúŋ he?" You\'re feeling great. You respond:',
            options: ['Lóčhiŋ waúŋ', 'Taŋyáŋ waúŋ', 'Waṫȟáka waúŋ', 'Hiyá'],
            correct: 1,
            explanation: '"Taŋyáŋ waúŋ" — I am well. The most common positive response. Add "Philámayaye" (thank you) for extra warmth.',
          },
          {
            type: 'multiple-choice',
            prompt: 'It\'s evening after a long day of ceremony. Someone asks how you are. You want to say "I am tired." You say:',
            options: ['Wačhíŋ waštéya waúŋ', 'Taŋyáŋ waúŋ', 'Lóčhiŋ waúŋ', 'Waṫȟáka waúŋ'],
            correct: 3,
            explanation: '"Waṫȟáka waúŋ" — I am tired. Honest and understood. Everyone at Sundance will relate!',
          },
          {
            type: 'match',
            prompt: 'Match how you\'re feeling:',
            pairs: [
              { lakota: 'Taŋyáŋ waúŋ', english: 'I am well' },
              { lakota: 'Wačhíŋ waštéya waúŋ', english: 'I am happy' },
              { lakota: 'Waṫȟáka waúŋ', english: 'I am tired' },
              { lakota: 'Lóčhiŋ waúŋ', english: 'I am hungry' },
            ]
          },
        ]
      },
      {
        id: 'L3-04',
        title: 'Food & Drink',
        subtitle: 'What you\'ll eat and drink at camp',
        exercises: [
          {
            type: 'cultural-note',
            title: 'The Camp Kitchen',
            text: 'Food is central to Sundance. The community cooks and eats together. You\'ll be fed well — and often. Knowing food words helps you understand what\'s being offered and lets you participate in the meal.\n\nSome of the most important foods in Lakota culture are wašná (dried meat/pemmican), tȟaló (meat), papa (dried meat/jerky), and wóžapi (berry pudding — a Sundance staple). You\'ll also encounter everyday words for water, bread, and coffee.',
          },
          {
            type: 'listen-identify',
            prompt: 'Mní',
            phonetic: 'mnee',
            meaning: 'Water',
            options: ['Water', 'Coffee', 'Juice', 'Soup'],
            correct: 0,
          },
          {
            type: 'listen-identify',
            prompt: 'Agúyapi',
            phonetic: 'ah-GOO-yah-pee',
            meaning: 'Bread',
            options: ['Meat', 'Bread', 'Soup', 'Fruit'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Tȟaló',
            phonetic: 'tah-LOH',
            meaning: 'Meat',
            options: ['Bread', 'Water', 'Meat', 'Berries'],
            correct: 2,
          },
          {
            type: 'listen-identify',
            prompt: 'Wóžapi',
            phonetic: 'WOH-zhah-pee',
            meaning: 'Berry pudding (traditional Lakota food)',
            options: ['Bread', 'Dried meat', 'Berry pudding', 'Soup'],
            correct: 2,
          },
          {
            type: 'listen-identify',
            prompt: 'Pȟežúta sápa',
            phonetic: 'pay-ZHOO-tah SAH-pah',
            meaning: 'Coffee (literally "black medicine")',
            options: ['Tea', 'Water', 'Coffee', 'Juice'],
            correct: 2,
          },
          {
            type: 'listen-identify',
            prompt: 'Wahánpi',
            phonetic: 'wah-HAHN-pee',
            meaning: 'Soup / Broth',
            options: ['Bread', 'Meat', 'Berry pudding', 'Soup'],
            correct: 3,
          },
          {
            type: 'cultural-note',
            title: 'Agúyapi Šákala — Frybread',
            text: 'You\'ll almost certainly eat frybread at Sundance. In Lakota it\'s sometimes called "agúyapi šákala" (fried bread) or just "frybread." It\'s served with nearly everything — topped with wóžapi, wrapped around meat, or eaten plain with butter.\n\nWhen someone offers you food, the respectful thing to do is accept it, eat it, and say "Philámayaye." Refusing food can be seen as a rejection of the person\'s generosity.',
          },
          {
            type: 'multiple-choice',
            prompt: '"Pȟežúta sápa" literally means "black medicine." What is it?',
            options: ['Tea', 'A healing herb', 'Coffee', 'Dark chocolate'],
            correct: 2,
            explanation: 'Pȟežúta sápa — coffee! "Black medicine." You\'ll hear this around the camp kitchen every morning.',
          },
          {
            type: 'multiple-choice',
            prompt: 'The traditional berry pudding served at Sundance is called:',
            options: ['Wahánpi', 'Agúyapi', 'Wóžapi', 'Tȟaló'],
            correct: 2,
            explanation: 'Wóžapi — berry pudding. Made from chokecherries or other berries. A sacred food often shared at ceremony.',
          },
          {
            type: 'match',
            prompt: 'Match the camp foods:',
            pairs: [
              { lakota: 'Mní', english: 'Water' },
              { lakota: 'Agúyapi', english: 'Bread' },
              { lakota: 'Tȟaló', english: 'Meat' },
              { lakota: 'Wahánpi', english: 'Soup' },
            ]
          },
        ]
      },
      {
        id: 'L3-05',
        title: 'Tukté — Where?',
        subtitle: 'Getting around camp and asking directions',
        exercises: [
          {
            type: 'cultural-note',
            title: 'Finding Your Way',
            text: 'Sundance camps can be big and spread out. You\'ll need to find the arbor (the central ceremony area), the kitchen, the bathroom, your tent. Knowing how to ask "where?" and understanding basic direction words will keep you from wandering lost.\n\nThe key question word is "Tukté" — Where? You\'ll combine it with other words to ask things like "Where is the water?" or "Where are we going?"',
          },
          {
            type: 'listen-identify',
            prompt: 'Tukté',
            phonetic: 'took-TAY',
            meaning: 'Where?',
            options: ['Who?', 'What?', 'Where?', 'When?'],
            correct: 2,
          },
          {
            type: 'listen-identify',
            prompt: 'Lé',
            phonetic: 'LAY',
            meaning: 'This / Here',
            options: ['That / There', 'This / Here', 'Where?', 'Over there'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Hé',
            phonetic: 'HAY',
            meaning: 'That / There',
            options: ['This / Here', 'That / There', 'Where?', 'Far away'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Thimáhel',
            phonetic: 'tee-MAH-hel',
            meaning: 'Inside',
            options: ['Outside', 'Inside', 'Above', 'Below'],
            correct: 1,
          },
          {
            type: 'listen-identify',
            prompt: 'Tȟaŋkál',
            phonetic: 'TAHN-kahl',
            meaning: 'Outside',
            options: ['Inside', 'Outside', 'Nearby', 'Far away'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            prompt: 'You need to find water. How do you ask "Where is the water?"',
            options: ['Mní wašté', 'Tukté mní he?', 'Mní yatkáŋ', 'Hí mní'],
            correct: 1,
            explanation: '"Tukté mní he?" — Where is the water? "Tukté" (where) + the thing you\'re looking for + "he" (question marker).',
          },
          {
            type: 'multiple-choice',
            prompt: 'Someone points to a building and says "Thimáhel." They mean the thing is:',
            options: ['Far away', 'Outside', 'Inside', 'Behind it'],
            correct: 2,
            explanation: 'Thimáhel — inside. If someone says "Thimáhel yá" they\'re telling you to go inside.',
          },
          {
            type: 'match',
            prompt: 'Match the direction words:',
            pairs: [
              { lakota: 'Tukté', english: 'Where?' },
              { lakota: 'Lé', english: 'This / Here' },
              { lakota: 'Hé', english: 'That / There' },
              { lakota: 'Tȟaŋkál', english: 'Outside' },
            ]
          },
        ]
      },
      {
        id: 'L3-06',
        title: 'Module 3 Review',
        subtitle: 'A full day at camp — Aŋpétu Waŋ',
        exercises: [
          {
            type: 'cultural-note',
            title: 'You Can Navigate a Day',
            text: 'Think about what you now know. You can greet people in the morning (Híŋhaŋni wašté!), ask how someone is doing, tell them how you feel, name the food on your plate, find your way around camp, and talk about what you\'re doing.\n\nCombined with Module 1 and 2, you can now:\n• Greet and say goodbye\n• Introduce yourself and your family\n• Name your relatives\n• Talk about the time of day\n• Express how you\'re feeling\n• Name foods and drinks\n• Ask where things are\n\nThat\'s real conversational ability. You\'re not just memorizing — you\'re building the language of daily Lakota life.',
          },
          {
            type: 'multiple-choice',
            prompt: 'It\'s sunrise at camp. What time of day is "Aŋpáo"?',
            options: ['Noon', 'Evening', 'Dawn', 'Night'],
            correct: 2,
            explanation: 'Aŋpáo — dawn, daybreak. The sacred beginning of the day.',
          },
          {
            type: 'multiple-choice',
            prompt: 'How do you ask "How are you?" in Lakota?',
            options: ['Tukté yaúŋ he?', 'Tókheškhe yaúŋ he?', 'Taŋyáŋ waúŋ', 'Lé wašté'],
            correct: 1,
            explanation: '"Tókheškhe yaúŋ he?" — How are you? One of the most useful phrases you\'ll know.',
          },
          {
            type: 'multiple-choice',
            prompt: '"Pȟežúta sápa" is:',
            options: ['Berry pudding', 'Soup', 'Coffee', 'Bread'],
            correct: 2,
            explanation: 'Pȟežúta sápa — coffee. "Black medicine." Camp runs on it.',
          },
          {
            type: 'multiple-choice',
            prompt: 'The verb "Wóta" means:',
            options: ['To drink', 'To sleep', 'To go', 'To eat'],
            correct: 3,
            explanation: 'Wóta — to eat. You\'ll be doing a lot of this at Sundance!',
          },
          {
            type: 'match',
            prompt: 'Match these daily life words:',
            pairs: [
              { lakota: 'Ištíŋma', english: 'To sleep' },
              { lakota: 'Wóžapi', english: 'Berry pudding' },
              { lakota: 'Tukté', english: 'Where?' },
              { lakota: 'Lóčhiŋ waúŋ', english: 'I am hungry' },
            ]
          },
          {
            type: 'multiple-choice',
            prompt: 'You want to say "I am happy." You say:',
            options: ['Taŋyáŋ waúŋ', 'Waṫȟáka waúŋ', 'Wačhíŋ waštéya waúŋ', 'Lóčhiŋ waúŋ'],
            correct: 2,
            explanation: '"Wačhíŋ waštéya waúŋ" — I am happy. A beautiful thing to be able to say at Sundance.',
          },
          {
            type: 'multiple-choice',
            prompt: '"Mní" means:',
            options: ['Bread', 'Meat', 'Water', 'Fire'],
            correct: 2,
            explanation: 'Mní — water. One of the most sacred and essential words. "Mní wičhóni" — Water is life.',
          },
        ]
      }
    ]
  },
  {
    id: 'module-04',
    number: 4,
    iconKey: 'medicineWheel',
    title: 'The Land & The Thunder',
    lakota: 'Makȟá na Wakíŋyaŋ',
    desc: 'Nature, animals, weather, sacred directions, and the Thunder Being.',
    lessons: [
      {
        id: 'L4-01',
        title: 'The Four Directions',
        subtitle: 'The sacred hoop that holds everything',
        exercises: [
          { type: 'cultural-note', title: 'Tópa Óakaŋl — The Four Directions', text: 'The four cardinal directions are sacred in Lakota culture. They structure ceremony, prayer, the camp circle, and the way the world is understood. Each direction has a color, a meaning, and spiritual significance.\n\nAt Sundance, the arbor is oriented to the four directions. Prayers acknowledge all four. The door of a tipi traditionally faces East — toward the rising sun, where each day begins.' },
          { type: 'listen-identify', prompt: 'Wiyóhiŋyaŋpata', phonetic: 'wee-YOH-heen-yahn-pah-tah', meaning: 'East (where the sun rises)', options: ['West', 'East', 'North', 'South'], correct: 1 },
          { type: 'listen-identify', prompt: 'Wazíyata', phonetic: 'wah-ZEE-yah-tah', meaning: 'North', options: ['South', 'East', 'North', 'West'], correct: 2 },
          { type: 'listen-identify', prompt: 'Wiyóhpeyata', phonetic: 'wee-YOH-pay-yah-tah', meaning: 'West (where the sun sets)', options: ['East', 'North', 'West', 'South'], correct: 2 },
          { type: 'listen-identify', prompt: 'Itókağata', phonetic: 'ee-TOH-kah-gah-tah', meaning: 'South', options: ['North', 'South', 'East', 'West'], correct: 1 },
          { type: 'cultural-note', title: 'Colors of the Directions', text: 'Each direction has a sacred color:\n\n• East (Wiyóhiŋyaŋpata) — Red — new beginnings, the sunrise\n• North (Wazíyata) — White — wisdom, endurance, winter\n• West (Wiyóhpeyata) — Black — introspection, the Thunder Beings\n• South (Itókağata) — Yellow — growth, warmth, summer\n\nYou\'ll see these colors in prayer flags, on the Sundance tree, and throughout ceremony.' },
          { type: 'multiple-choice', prompt: 'Which direction does the door of a traditional tipi face?', options: ['Wazíyata (North)', 'Wiyóhpeyata (West)', 'Wiyóhiŋyaŋpata (East)', 'Itókağata (South)'], correct: 2, explanation: 'The tipi door faces East — Wiyóhiŋyaŋpata — toward the rising sun.' },
          { type: 'multiple-choice', prompt: 'The Thunder Beings (Wakíŋyaŋ) are associated with which direction?', options: ['East — Red', 'North — White', 'West — Black', 'South — Yellow'], correct: 2, explanation: 'The West — Wiyóhpeyata — is the direction of the Thunder Beings. Black represents introspection and the power of storms.' },
          { type: 'match', prompt: 'Match the four directions:', pairs: [ { lakota: 'Wiyóhiŋyaŋpata', english: 'East' }, { lakota: 'Wazíyata', english: 'North' }, { lakota: 'Wiyóhpeyata', english: 'West' }, { lakota: 'Itókağata', english: 'South' } ] },
        ]
      },
      {
        id: 'L4-02',
        title: 'Animal Relatives',
        subtitle: 'Tȟatȟáŋka, Waŋblí, Šuŋgmánitu — the sacred animals',
        exercises: [
          { type: 'cultural-note', title: 'Our Four-Legged and Winged Relatives', text: 'In Lakota worldview, animals are not lesser beings — they are relatives. The buffalo (Tȟatȟáŋka) is especially sacred. The eagle (Waŋblí) is the messenger to the Creator. Eagle feathers are among the most sacred objects.\n\nAt Sundance, you\'ll see eagle feathers, hear eagle bone whistles, and witness deep reverence for the winged and four-legged relatives.' },
          { type: 'listen-identify', prompt: 'Tȟatȟáŋka', phonetic: 'tah-TAHN-kah', meaning: 'Buffalo', options: ['Horse', 'Buffalo', 'Eagle', 'Bear'], correct: 1 },
          { type: 'listen-identify', prompt: 'Waŋblí', phonetic: 'wahn-BLEE', meaning: 'Eagle', options: ['Hawk', 'Eagle', 'Owl', 'Crow'], correct: 1 },
          { type: 'listen-identify', prompt: 'Šuŋgmánitu Tȟáŋka', phonetic: 'shoong-MAH-nee-too TAHN-kah', meaning: 'Wolf ("big dog of the wilderness")', options: ['Coyote', 'Bear', 'Wolf', 'Fox'], correct: 2 },
          { type: 'listen-identify', prompt: 'Mathó', phonetic: 'mah-TOH', meaning: 'Bear', options: ['Buffalo', 'Wolf', 'Eagle', 'Bear'], correct: 3 },
          { type: 'listen-identify', prompt: 'Šúŋka', phonetic: 'SHOON-kah', meaning: 'Dog', options: ['Horse', 'Dog', 'Wolf', 'Coyote'], correct: 1 },
          { type: 'listen-identify', prompt: 'Šuŋgáwakȟaŋ', phonetic: 'shoong-AH-wah-kahn', meaning: 'Horse ("sacred/powerful dog")', options: ['Dog', 'Buffalo', 'Horse', 'Elk'], correct: 2 },
          { type: 'multiple-choice', prompt: 'The sacred messenger between the Lakota people and the Creator is:', options: ['Tȟatȟáŋka (Buffalo)', 'Mathó (Bear)', 'Waŋblí (Eagle)', 'Šuŋgmánitu Tȟáŋka (Wolf)'], correct: 2, explanation: 'Waŋblí — the Eagle — flies highest and carries prayers to the Creator.' },
          { type: 'multiple-choice', prompt: '"Šuŋgáwakȟaŋ" literally means "sacred dog." What animal is it?', options: ['Wolf', 'Buffalo', 'Coyote', 'Horse'], correct: 3, explanation: 'The horse! Before horses arrived, dogs carried loads. When horses came, they were called "sacred dogs."' },
          { type: 'match', prompt: 'Match the animal relatives:', pairs: [ { lakota: 'Tȟatȟáŋka', english: 'Buffalo' }, { lakota: 'Waŋblí', english: 'Eagle' }, { lakota: 'Mathó', english: 'Bear' }, { lakota: 'Šúŋka', english: 'Dog' } ] },
        ]
      },
      {
        id: 'L4-03',
        title: 'Wakíŋyaŋ — The Thunder Being',
        subtitle: 'Weather, sky, storms, and sacred power',
        exercises: [
          { type: 'cultural-note', title: 'The Thunder Being', text: 'The Wakíŋyaŋ — the Thunder Being — is one of the most powerful spirits in Lakota cosmology. Thunder is not just noise. Lightning is not just electricity. They are manifestations of a sacred being.\n\nThe Wakíŋyaŋ lives in the West and is associated with the color black. The Sundance itself is deeply connected to the Thunder Beings — dancers may receive visions from them.\n\nThis app is named for the Wakíŋyaŋ because its teachings, like thunder, are powerful enough to shake you awake.' },
          { type: 'listen-identify', prompt: 'Wakíŋyaŋ', phonetic: 'wah-KEEN-yahn', meaning: 'Thunder Being / Thunder', options: ['Lightning', 'Thunder Being', 'Rain', 'Wind'], correct: 1 },
          { type: 'listen-identify', prompt: 'Wakȟáŋȟežá', phonetic: 'wah-KAHN-hay-zhah', meaning: 'Lightning', options: ['Thunder', 'Lightning', 'Cloud', 'Storm'], correct: 1 },
          { type: 'listen-identify', prompt: 'Maȟpíya', phonetic: 'mah-HPEE-yah', meaning: 'Sky / Cloud', options: ['Sky / Cloud', 'Star', 'Moon', 'Sun'], correct: 0 },
          { type: 'listen-identify', prompt: 'Wičháȟpi', phonetic: 'wee-CHAH-hpee', meaning: 'Star', options: ['Moon', 'Sun', 'Star', 'Cloud'], correct: 2 },
          { type: 'listen-identify', prompt: 'Haŋwí', phonetic: 'hahn-WEE', meaning: 'Moon', options: ['Star', 'Sun', 'Moon', 'Night'], correct: 2 },
          { type: 'listen-identify', prompt: 'Wí', phonetic: 'WEE', meaning: 'Sun', options: ['Moon', 'Sun', 'Star', 'Day'], correct: 1 },
          { type: 'multiple-choice', prompt: 'A storm rolls in. The thunder is the voice of the:', options: ['Waŋblí (Eagle)', 'Wí (Sun)', 'Wakíŋyaŋ (Thunder Being)', 'Mathó (Bear)'], correct: 2, explanation: 'The Wakíŋyaŋ speaks through thunder. When you hear it at Sundance, pay attention.' },
          { type: 'match', prompt: 'Match the sky words:', pairs: [ { lakota: 'Wí', english: 'Sun' }, { lakota: 'Haŋwí', english: 'Moon' }, { lakota: 'Wičháȟpi', english: 'Star' }, { lakota: 'Maȟpíya', english: 'Sky / Cloud' } ] },
        ]
      },
      {
        id: 'L4-04',
        title: 'The Seasons',
        subtitle: 'Wétu, Blokétu, Ptaŋyétu, Waníyetu',
        exercises: [
          { type: 'cultural-note', title: 'The Circle of Seasons', text: 'The Lakota year moves in a circle. Each season has its own character and ceremonies.\n\nSundance happens in summer — Blokétu — when the sun is at its strongest and the people gather. It\'s the season of abundance, community, and the highest ceremonies.' },
          { type: 'listen-identify', prompt: 'Wétu', phonetic: 'WAY-too', meaning: 'Spring', options: ['Spring', 'Summer', 'Fall', 'Winter'], correct: 0 },
          { type: 'listen-identify', prompt: 'Blokétu', phonetic: 'bloh-KAY-too', meaning: 'Summer', options: ['Spring', 'Summer', 'Fall', 'Winter'], correct: 1 },
          { type: 'listen-identify', prompt: 'Ptaŋyétu', phonetic: 'ptahn-YAY-too', meaning: 'Fall / Autumn', options: ['Spring', 'Summer', 'Fall', 'Winter'], correct: 2 },
          { type: 'listen-identify', prompt: 'Waníyetu', phonetic: 'wah-NEE-yay-too', meaning: 'Winter', options: ['Spring', 'Summer', 'Fall', 'Winter'], correct: 3 },
          { type: 'multiple-choice', prompt: 'Sundance happens during which season?', options: ['Wétu (Spring)', 'Blokétu (Summer)', 'Ptaŋyétu (Fall)', 'Waníyetu (Winter)'], correct: 1, explanation: 'Blokétu — summer. When the sun is strongest and the people come together.' },
          { type: 'match', prompt: 'Match the seasons:', pairs: [ { lakota: 'Wétu', english: 'Spring' }, { lakota: 'Blokétu', english: 'Summer' }, { lakota: 'Ptaŋyétu', english: 'Fall' }, { lakota: 'Waníyetu', english: 'Winter' } ] },
        ]
      },
      {
        id: 'L4-05',
        title: 'Makȟá — The Earth',
        subtitle: 'Land, water, fire, wind, and the living world',
        exercises: [
          { type: 'cultural-note', title: 'Uŋčí Makȟá — Grandmother Earth', text: 'The earth is not just a place — she is a relative. "Uŋčí Makȟá" means Grandmother Earth. Water is life — "Mní Wičhóni." You\'ll hear this at every gathering.\n\nAt Sundance, you\'ll be barefoot on the earth. You\'ll feel the ground during ceremony. This connection is intentional and sacred.' },
          { type: 'listen-identify', prompt: 'Makȟá', phonetic: 'mah-KAH', meaning: 'Earth / Land', options: ['Sky', 'Earth / Land', 'Water', 'Fire'], correct: 1 },
          { type: 'listen-identify', prompt: 'Pȟéta', phonetic: 'PAY-tah', meaning: 'Fire', options: ['Water', 'Earth', 'Fire', 'Wind'], correct: 2 },
          { type: 'listen-identify', prompt: 'Tȟáte', phonetic: 'TAH-tay', meaning: 'Wind', options: ['Fire', 'Water', 'Earth', 'Wind'], correct: 3 },
          { type: 'listen-identify', prompt: 'Ȟé', phonetic: 'HAY (breathy)', meaning: 'Hill / Mountain', options: ['River', 'Hill / Mountain', 'Tree', 'Rock'], correct: 1 },
          { type: 'listen-identify', prompt: 'Čhaŋ', phonetic: 'CHAHN', meaning: 'Tree / Wood', options: ['Stone', 'Water', 'Tree / Wood', 'Grass'], correct: 2 },
          { type: 'listen-identify', prompt: 'Iŋyáŋ', phonetic: 'een-YAHN', meaning: 'Stone / Rock', options: ['Tree', 'Hill', 'Stone / Rock', 'Earth'], correct: 2 },
          { type: 'multiple-choice', prompt: '"Mní Wičhóni" is a powerful phrase meaning:', options: ['Fire is sacred', 'Water is life', 'The earth is our mother', 'The wind carries prayers'], correct: 1, explanation: '"Mní Wičhóni" — Water is life. A sacred truth and a call to protect the waters.' },
          { type: 'multiple-choice', prompt: 'The earth is called "Uŋčí Makȟá." What does "Uŋčí" mean?', options: ['Mother', 'Sister', 'Grandmother', 'Sacred'], correct: 2, explanation: 'Uŋčí — Grandmother. The earth is Grandmother Earth. Everything connects.' },
          { type: 'match', prompt: 'Match the elements:', pairs: [ { lakota: 'Makȟá', english: 'Earth / Land' }, { lakota: 'Pȟéta', english: 'Fire' }, { lakota: 'Tȟáte', english: 'Wind' }, { lakota: 'Iŋyáŋ', english: 'Stone / Rock' } ] },
        ]
      },
      {
        id: 'L4-06',
        title: 'Module 4 Review',
        subtitle: 'The living world — Makȟá na Wakíŋyaŋ',
        exercises: [
          { type: 'cultural-note', title: 'Everything Is Alive', text: 'You now know the four directions, sacred animals, the sky, the seasons, and the earth\'s elements. In the Lakota worldview, none of these are just "things" — they are all alive, all relatives.\n\nWhen thunder rolls at Sundance, you\'ll know the Wakíŋyaŋ is speaking. When you face East at dawn, you\'ll know Wiyóhiŋyaŋpata. When the eagle flies over, you\'ll know Waŋblí is carrying prayers.\n\nThis is what learning the language gives you — not just words, but a way of seeing.' },
          { type: 'multiple-choice', prompt: 'What is the Lakota word for East?', options: ['Wazíyata', 'Itókağata', 'Wiyóhiŋyaŋpata', 'Wiyóhpeyata'], correct: 2, explanation: 'Wiyóhiŋyaŋpata — East, where the sun rises.' },
          { type: 'multiple-choice', prompt: 'The Lakota word for buffalo is:', options: ['Waŋblí', 'Mathó', 'Šúŋka', 'Tȟatȟáŋka'], correct: 3, explanation: 'Tȟatȟáŋka — the buffalo.' },
          { type: 'multiple-choice', prompt: '"Blokétu" means:', options: ['Winter', 'Spring', 'Summer', 'Fall'], correct: 2, explanation: 'Blokétu — summer. The season of Sundance.' },
          { type: 'match', prompt: 'Final review:', pairs: [ { lakota: 'Wakíŋyaŋ', english: 'Thunder Being' }, { lakota: 'Čhaŋ', english: 'Tree / Wood' }, { lakota: 'Wí', english: 'Sun' }, { lakota: 'Šuŋgáwakȟaŋ', english: 'Horse' } ] },
          { type: 'multiple-choice', prompt: '"Mní Wičhóni" means:', options: ['Fire is sacred', 'We are all related', 'Water is life', 'The earth endures'], correct: 2, explanation: '"Mní Wičhóni" — Water is life.' },
          { type: 'multiple-choice', prompt: 'What does "Maȟpíya" mean?', options: ['Mountain', 'Star', 'Sky / Cloud', 'Thunder'], correct: 2, explanation: 'Maȟpíya — sky, cloud.' },
        ]
      }
    ]
  },
  {
    id: 'module-05',
    number: 5,
    iconKey: 'buffalo',
    title: 'Food, Sharing & Hospitality',
    lakota: 'Wóyute na Wóžuha',
    desc: 'Feeding the people — food vocabulary, mealtime phrases, and the spirit of generosity.',
    lessons: [
      {
        id: 'L5-01',
        title: 'More Camp Foods',
        subtitle: 'Wašná, Thíŋpsiŋla, Tȟaŋíǧa — what you\'ll eat',
        exercises: [
          { type: 'cultural-note', title: 'The Camp Kitchen', text: 'You learned basic food words in Module 3 — mní (water), agúyapi (bread), tȟaló (meat), wóžapi (berry pudding). Now let\'s go deeper into the foods you\'ll actually see at Sundance.\n\nThe camp kitchen is the heart of the community. Someone is always cooking, always feeding people. You\'ll eat traditional foods alongside everyday ones. Knowing their names shows respect for the culture and the cooks.' },
          { type: 'listen-identify', prompt: 'Wašná', phonetic: 'wash-NAH', meaning: 'Pemmican (dried meat with berries and fat)', options: ['Soup', 'Pemmican', 'Bread', 'Berry pudding'], correct: 1 },
          { type: 'listen-identify', prompt: 'Thíŋpsiŋla', phonetic: 'TEENP-seen-lah', meaning: 'Turnip (prairie turnip — a traditional root food)', options: ['Corn', 'Turnip', 'Potato', 'Berry'], correct: 1 },
          { type: 'listen-identify', prompt: 'Tȟaŋíǧa', phonetic: 'tahn-EE-gah', meaning: 'Tripe / Intestine (traditional delicacy)', options: ['Tripe', 'Steak', 'Ribs', 'Liver'], correct: 0 },
          { type: 'listen-identify', prompt: 'Papa', phonetic: 'pah-PAH', meaning: 'Dried meat / Jerky', options: ['Bread', 'Fresh meat', 'Dried meat / Jerky', 'Fish'], correct: 2 },
          { type: 'listen-identify', prompt: 'Wóyute', phonetic: 'WOH-yoo-tay', meaning: 'Food (general)', options: ['Drink', 'Food', 'Meal', 'Plate'], correct: 1 },
          { type: 'listen-identify', prompt: 'Waskúyečha', phonetic: 'wah-SKOO-yay-chah', meaning: 'Fruit', options: ['Vegetable', 'Meat', 'Fruit', 'Grain'], correct: 2 },
          { type: 'multiple-choice', prompt: 'Wašná is a traditional preserved food made from dried meat, berries, and fat. What is the English name?', options: ['Jerky', 'Frybread', 'Pemmican', 'Stew'], correct: 2, explanation: 'Wašná is pemmican — a high-energy traditional food that kept Lakota people fed on the move. You may be offered some at Sundance.' },
          { type: 'multiple-choice', prompt: 'Thíŋpsiŋla is a traditional root food gathered from the prairie. What is it?', options: ['Wild onion', 'Prairie turnip', 'Potato', 'Carrot'], correct: 1, explanation: 'Thíŋpsiŋla — the prairie turnip. Women traditionally dug these and dried them for winter. A deeply important plant in Lakota life.' },
          { type: 'match', prompt: 'Match the camp foods:', pairs: [ { lakota: 'Wašná', english: 'Pemmican' }, { lakota: 'Papa', english: 'Dried meat / Jerky' }, { lakota: 'Thíŋpsiŋla', english: 'Prairie turnip' }, { lakota: 'Wóyute', english: 'Food' } ] },
        ]
      },
      {
        id: 'L5-02',
        title: 'Cooking Words',
        subtitle: 'Boil, fry, cut — the language of the kitchen',
        exercises: [
          { type: 'cultural-note', title: 'In the Kitchen', text: 'If you help in the camp kitchen — and you should — you\'ll hear these words constantly. Cooking at Sundance is communal work. Everyone pitches in: cutting meat, stirring soup, frying bread. Knowing these basic cooking words lets you follow along and be useful.\n\nYou don\'t have to be a cook to help. You can carry water, stir a pot, or hand things over. The kitchen is where bonds are built.' },
          { type: 'listen-identify', prompt: 'Ȟáŋ', phonetic: 'HAHN (breathy h)', meaning: 'To boil / To cook by boiling', options: ['To fry', 'To boil', 'To cut', 'To stir'], correct: 1 },
          { type: 'listen-identify', prompt: 'Čhéǧa', phonetic: 'CHAY-gah', meaning: 'Kettle / Pot', options: ['Plate', 'Kettle / Pot', 'Knife', 'Bowl'], correct: 1 },
          { type: 'listen-identify', prompt: 'Míla', phonetic: 'MEE-lah', meaning: 'Knife', options: ['Spoon', 'Pot', 'Knife', 'Fire'], correct: 2 },
          { type: 'listen-identify', prompt: 'Wíčhokaya', phonetic: 'wee-CHOH-kah-yah', meaning: 'To stir', options: ['To cut', 'To stir', 'To boil', 'To serve'], correct: 1 },
          { type: 'listen-identify', prompt: 'Ohéhaŋ', phonetic: 'oh-HAY-hahn', meaning: 'To cook / To prepare food', options: ['To eat', 'To serve', 'To cook', 'To clean'], correct: 2 },
          { type: 'multiple-choice', prompt: 'Someone hands you a knife and points at the meat. The word for knife is:', options: ['Čhéǧa', 'Ohéhaŋ', 'Míla', 'Ȟáŋ'], correct: 2, explanation: 'Míla — knife. Grab it and start cutting. You\'re part of the kitchen crew now.' },
          { type: 'multiple-choice', prompt: 'The big pot of soup simmering over the fire is called a:', options: ['Míla', 'Čhéǧa', 'Wóyute', 'Ȟáŋ'], correct: 1, explanation: 'Čhéǧa — kettle, pot. The čhéǧa is always on at camp.' },
          { type: 'match', prompt: 'Match the kitchen words:', pairs: [ { lakota: 'Ȟáŋ', english: 'To boil' }, { lakota: 'Čhéǧa', english: 'Kettle / Pot' }, { lakota: 'Míla', english: 'Knife' }, { lakota: 'Ohéhaŋ', english: 'To cook' } ] },
        ]
      },
      {
        id: 'L5-03',
        title: 'Offering & Accepting Food',
        subtitle: '"Are you hungry?" "Please eat" — mealtime phrases',
        exercises: [
          { type: 'cultural-note', title: 'Wóčhaŋtkiyapi — Generosity', text: 'Generosity — Wóčhaŋtkiyapi — is one of the four Lakota virtues. At Sundance, you\'ll be fed without being asked. People will bring you plates, fill your cup, and make sure you\'re taken care of.\n\nWhen someone offers food, accept it. When you have food, share it. This is the Lakota way. "Wóta wo" (eat!) is something you\'ll hear constantly — it\'s an invitation, not a command.' },
          { type: 'listen-identify', prompt: 'Wóta wo', phonetic: 'WOH-tah woh', meaning: 'Eat! (a friendly command)', options: ['Drink!', 'Eat!', 'Sit down!', 'Come here!'], correct: 1 },
          { type: 'listen-identify', prompt: 'Yatkáŋ wo', phonetic: 'yaht-KAHN woh', meaning: 'Drink! (a friendly command)', options: ['Eat!', 'Sleep!', 'Drink!', 'Go!'], correct: 2 },
          { type: 'listen-identify', prompt: 'Lóčhiŋ he?', phonetic: 'LOH-cheen hay', meaning: 'Are you hungry?', options: ['Are you thirsty?', 'Are you tired?', 'Are you hungry?', 'Are you cold?'], correct: 2 },
          { type: 'listen-identify', prompt: 'Wóta po', phonetic: 'WOH-tah poh', meaning: 'Eat! (to a group — plural)', options: ['Eat (one person)!', 'Eat (group)!', 'Cook!', 'Serve!'], correct: 1 },
          { type: 'cultural-note', title: 'Wo vs Po', text: 'You\'ll notice two command endings:\n\n• "wo" — tells one person to do something (Wóta wo = Eat!)\n• "po" — tells a group to do something (Wóta po = Everyone eat!)\n\nThese are spoken with warmth, not harshness. When someone says "Wóta po!" to the camp, they\'re saying "Come on everyone, let\'s eat!"' },
          { type: 'multiple-choice', prompt: 'A cook calls out to the whole camp that food is ready. She says:', options: ['Wóta wo', 'Wóta po', 'Lóčhiŋ he?', 'Wóyute'], correct: 1, explanation: '"Wóta po!" — Everyone eat! The "po" ending addresses a group. Time to get in line!' },
          { type: 'multiple-choice', prompt: 'Someone brings you a plate. You want to accept and show gratitude. You say:', options: ['Hiyá', 'Wóta wo', 'Háŋ, Philámayaye', 'Tokša'], correct: 2, explanation: '"Háŋ, Philámayaye" — Yes, thank you. The perfect response when someone brings you food.' },
          { type: 'match', prompt: 'Match the mealtime phrases:', pairs: [ { lakota: 'Wóta wo', english: 'Eat! (one person)' }, { lakota: 'Wóta po', english: 'Eat! (group)' }, { lakota: 'Lóčhiŋ he?', english: 'Are you hungry?' }, { lakota: 'Yatkáŋ wo', english: 'Drink!' } ] },
        ]
      },
      {
        id: 'L5-04',
        title: 'At the Meal',
        subtitle: 'Talking about food — delicious, more, enough',
        exercises: [
          { type: 'cultural-note', title: 'Mealtime Conversation', text: 'Now you can sit down, eat, and say a few things about the food. Telling someone the food is good (wašté) or delicious (wóyute wašté) means the world to whoever cooked it.\n\nYou can ask for more, say you\'re full, and thank the cooks. These small phrases turn a meal into a connection.' },
          { type: 'listen-identify', prompt: 'Wóyute wašté', phonetic: 'WOH-yoo-tay wash-TAY', meaning: 'The food is good / Delicious food', options: ['Bad food', 'Good food', 'Hot food', 'More food'], correct: 1 },
          { type: 'listen-identify', prompt: 'Sáŋm',  phonetic: 'SAHNM', meaning: 'More', options: ['Less', 'Enough', 'More', 'None'], correct: 2 },
          { type: 'listen-identify', prompt: 'Imáǧaga', phonetic: 'ee-MAH-gah-gah', meaning: 'I am full', options: ['I am hungry', 'I am full', 'I am thirsty', 'I want more'], correct: 1 },
          { type: 'listen-identify', prompt: 'Wópȟila', phonetic: 'WOH-pee-lah', meaning: 'Grateful / Thankful (a state of being)', options: ['Hungry', 'Grateful', 'Tired', 'Happy'], correct: 1 },
          { type: 'multiple-choice', prompt: 'You just ate the best wóžapi you\'ve ever had. You tell the cook:', options: ['Imáǧaga', 'Wóyute wašté!', 'Sáŋm', 'Lóčhiŋ waúŋ'], correct: 1, explanation: '"Wóyute wašté!" — The food is good! Watch the cook\'s face light up.' },
          { type: 'multiple-choice', prompt: 'Someone asks if you want more soup. You\'re full. You say:', options: ['Sáŋm', 'Wóta wo', 'Imáǧaga, Philámayaye', 'Lóčhiŋ he?'], correct: 2, explanation: '"Imáǧaga, Philámayaye" — I\'m full, thank you. Polite and clear.' },
          { type: 'multiple-choice', prompt: 'You want more coffee. You hold out your cup and say:', options: ['Imáǧaga', 'Hiyá', 'Sáŋm pȟežúta sápa', 'Wóta po'], correct: 2, explanation: '"Sáŋm pȟežúta sápa" — More coffee! You\'re combining words you already know. That\'s real language use.' },
          { type: 'match', prompt: 'Match the mealtime words:', pairs: [ { lakota: 'Wóyute wašté', english: 'Good food / Delicious' }, { lakota: 'Sáŋm', english: 'More' }, { lakota: 'Imáǧaga', english: 'I am full' }, { lakota: 'Wópȟila', english: 'Grateful / Thankful' } ] },
        ]
      },
      {
        id: 'L5-05',
        title: 'The Spirit Plate',
        subtitle: 'Ceremonial feeding and the sacred meal',
        exercises: [
          { type: 'cultural-note', title: 'Feeding the Spirits First', text: 'At Sundance and other ceremonies, before anyone eats, a "spirit plate" is prepared. A small portion of each food is placed on a plate and set out for the spirits — the ancestors, the sacred beings, Uŋčí Makȟá.\n\nThis is called "wóyute wakhíčhuŋpi" — making a food offering. It\'s a way of giving thanks before receiving. You may also see people put a small piece of food on the ground before eating — same principle.\n\nIf you see this happen at Sundance, now you understand what\'s happening and why. You may be asked to help prepare the spirit plate. It\'s an honor.' },
          { type: 'listen-identify', prompt: 'Wóčhekiye', phonetic: 'WOH-chay-kee-yay', meaning: 'Prayer', options: ['Song', 'Prayer', 'Food', 'Dance'], correct: 1 },
          { type: 'listen-identify', prompt: 'Wóphila', phonetic: 'WOH-pee-lah', meaning: 'Thanksgiving / Gratitude offering', options: ['Prayer', 'Thanksgiving', 'Meal', 'Song'], correct: 1 },
          { type: 'listen-identify', prompt: 'Wóthaŋiŋ', phonetic: 'WOH-tah-neen', meaning: 'Feast / A big community meal', options: ['Snack', 'Fast', 'Feast', 'Leftovers'], correct: 2 },
          { type: 'multiple-choice', prompt: 'Before the meal at a ceremony, a plate of food is set aside for the spirits. This is called:', options: ['Wóphila — a thanksgiving offering', 'Wóta po — everyone eat', 'Imáǧaga — I am full', 'Pȟežúta sápa — coffee'], correct: 0, explanation: 'The spirit plate is an act of wóphila — giving thanks to the spirits before the people eat. Always spirits first, then the elders, then everyone else.' },
          { type: 'multiple-choice', prompt: 'At a ceremonial meal, who eats first (after the spirit plate)?', options: ['Children', 'The cooks', 'Elders', 'Guests'], correct: 2, explanation: 'Elders eat first. This is a sign of respect. Wait until elders are served before getting your own plate. If you\'re not sure, just watch and follow others.' },
          { type: 'multiple-choice', prompt: 'A big community meal at a gathering is called:', options: ['Wóčhekiye', 'Wóthaŋiŋ', 'Wóyute', 'Wóphila'], correct: 1, explanation: 'Wóthaŋiŋ — a feast. The big community meals where everyone comes together to eat.' },
          { type: 'match', prompt: 'Match the ceremonial food words:', pairs: [ { lakota: 'Wóčhekiye', english: 'Prayer' }, { lakota: 'Wóphila', english: 'Thanksgiving / Gratitude' }, { lakota: 'Wóthaŋiŋ', english: 'Feast' }, { lakota: 'Wóyute', english: 'Food' } ] },
        ]
      },
      {
        id: 'L5-06',
        title: 'Module 5 Review',
        subtitle: 'Feeding the people — Wóyute na Wóžuha',
        exercises: [
          { type: 'cultural-note', title: 'You Can Sit at the Table', text: 'You now have the language to fully participate in a Lakota meal. You can name the food, help in the kitchen, respond when offered food, compliment the cook, ask for more, say you\'re full, and understand the ceremonial feeding.\n\nFood is one of the most important ways Lakota people express love. When someone feeds you, they are saying "you are my relative, and I will take care of you." When you say Philámayaye, you are completing that circle.\n\nČhaŋtógnake — generosity — is not just giving things away. It is the understanding that everything you have was given to you, and everything you give comes back.' },
          { type: 'multiple-choice', prompt: 'Wašná is:', options: ['Berry pudding', 'Dried meat with berries and fat (pemmican)', 'Fried bread', 'Soup'], correct: 1, explanation: 'Wašná — pemmican. A sacred traditional food.' },
          { type: 'multiple-choice', prompt: 'Someone calls "Wóta po!" to the camp. This means:', options: ['The food is ready — one person eat', 'Come help cook', 'Everyone eat!', 'The prayer is starting'], correct: 2, explanation: '"Wóta po!" — Everyone eat! The "po" makes it plural.' },
          { type: 'multiple-choice', prompt: 'The word for knife is:', options: ['Čhéǧa', 'Míla', 'Ȟáŋ', 'Ohéhaŋ'], correct: 1, explanation: 'Míla — knife.' },
          { type: 'match', prompt: 'Final review — match the food and hospitality words:', pairs: [ { lakota: 'Thíŋpsiŋla', english: 'Prairie turnip' }, { lakota: 'Imáǧaga', english: 'I am full' }, { lakota: 'Wóthaŋiŋ', english: 'Feast' }, { lakota: 'Sáŋm', english: 'More' } ] },
          { type: 'multiple-choice', prompt: 'You want to tell the cook the food is delicious. You say:', options: ['Lóčhiŋ waúŋ', 'Imáǧaga', 'Wóyute wašté!', 'Wóta wo'], correct: 2, explanation: '"Wóyute wašté!" — The food is good! Three words that will make any cook\'s day.' },
          { type: 'multiple-choice', prompt: 'Before a ceremonial meal, who is fed first?', options: ['The children', 'The spirits (spirit plate)', 'The guests', 'The dancers'], correct: 1, explanation: 'The spirits eat first, through the spirit plate. Then the elders. Then everyone else.' },
        ]
      }
    ]
  },
  {
    id: 'module-06',
    number: 6,
    iconKey: 'sacredPipe',
    title: 'Prayer & Sacred Language',
    lakota: 'Wóčhekiye',
    desc: 'Understanding the sacred words of ceremony — prayer phrases, songs, and Sundance vocabulary.',
    lessons: [
      {
        id: 'L6-01',
        title: 'Wakȟáŋ Tȟáŋka',
        subtitle: 'The Great Mystery — understanding the sacred',
        exercises: [
          { type: 'cultural-note', title: 'The Great Mystery', text: 'Wakȟáŋ Tȟáŋka is often translated as "Great Spirit" or "God," but the most accurate translation is "The Great Mystery" or "The Great Sacred." It is not a man in the sky — it is the incomprehensible sacredness that permeates all things.\n\nThe word "wakȟáŋ" means sacred, holy, mysterious. You\'ll hear it in many contexts: wakȟáŋ is in the Sundance tree (Čhaŋ Wákȟaŋ), in the pipe (Čhaŋnúŋpa Wakȟáŋ), and in the Thunder Being (Wakíŋyaŋ). Everything connected to ceremony is wakȟáŋ.\n\nApproach this module with humility. These are not just vocabulary words — they are the language of prayer.' },
          { type: 'listen-identify', prompt: 'Wakȟáŋ Tȟáŋka', phonetic: 'wah-KAHN TAHN-kah', meaning: 'The Great Mystery / The Great Spirit', options: ['The Thunder Being', 'The Great Mystery', 'The Sacred Pipe', 'The Sundance'], correct: 1 },
          { type: 'listen-identify', prompt: 'Wakȟáŋ', phonetic: 'wah-KAHN', meaning: 'Sacred / Holy / Mysterious', options: ['Big', 'Sacred / Holy', 'Old', 'Powerful'], correct: 1 },
          { type: 'listen-identify', prompt: 'Tȟáŋka', phonetic: 'TAHN-kah', meaning: 'Great / Big / Large', options: ['Small', 'Sacred', 'Great / Big', 'Fast'], correct: 2 },
          { type: 'listen-identify', prompt: 'Wičhóni', phonetic: 'wee-CHOH-nee', meaning: 'Life', options: ['Death', 'Life', 'Spirit', 'Prayer'], correct: 1 },
          { type: 'multiple-choice', prompt: 'The word "wakȟáŋ" means:', options: ['Powerful', 'Ancient', 'Sacred / Holy / Mysterious', 'Dangerous'], correct: 2, explanation: 'Wakȟáŋ — sacred, holy, mysterious. This word is woven through all of Lakota spiritual life. When you hear it, you\'re touching something deeply revered.' },
          { type: 'multiple-choice', prompt: '"Mní Wičhóni" uses the word "wičhóni" which means:', options: ['Sacred', 'Water', 'Life', 'Spirit'], correct: 2, explanation: 'Wičhóni means life. "Mní Wičhóni" — Water is life. Now you know both words in that powerful phrase.' },
          { type: 'match', prompt: 'Match the sacred words:', pairs: [ { lakota: 'Wakȟáŋ Tȟáŋka', english: 'The Great Mystery' }, { lakota: 'Wakȟáŋ', english: 'Sacred / Holy' }, { lakota: 'Tȟáŋka', english: 'Great / Big' }, { lakota: 'Wičhóni', english: 'Life' } ] },
        ]
      },
      {
        id: 'L6-02',
        title: 'Prayer Phrases',
        subtitle: 'Words you\'ll hear in ceremony',
        exercises: [
          { type: 'cultural-note', title: 'Listening to Prayer', text: 'You will hear prayers at Sundance — long, heartfelt prayers spoken in Lakota. You won\'t understand everything, and that\'s okay. But if you can recognize even a few key phrases, you\'ll feel connected to what\'s happening instead of standing outside it.\n\nThese are phrases spoken with deep feeling. They are not casual. When you hear "Tȟuŋkášila, óŋšimala ye" (Grandfather, have pity on me), you are hearing someone open their heart to the Creator.\n\nListen. Be present. The language will carry you.' },
          { type: 'listen-identify', prompt: 'Óŋšimala ye', phonetic: 'OHN-shee-mah-lah yay', meaning: 'Have pity on me / Have compassion for me', options: ['Thank you', 'Have pity on me', 'Forgive me', 'Help me'], correct: 1 },
          { type: 'listen-identify', prompt: 'Čhekíya', phonetic: 'chay-KEE-yah', meaning: 'To pray / I pray', options: ['To sing', 'To dance', 'To pray', 'To cry'], correct: 2 },
          { type: 'listen-identify', prompt: 'Ómakȟiya ye', phonetic: 'OH-mah-kee-yah yay', meaning: 'Help me', options: ['Forgive me', 'Help me', 'Hear me', 'Watch me'], correct: 1 },
          { type: 'listen-identify', prompt: 'Nážiŋ', phonetic: 'NAH-zheen', meaning: 'To stand / Stand up', options: ['To sit', 'To stand', 'To kneel', 'To walk'], correct: 1 },
          { type: 'listen-identify', prompt: 'Hoháŋ',  phonetic: 'hoh-HAHN', meaning: 'Let it be so / Amen', options: ['Hello', 'Let it be so / Amen', 'Thank you', 'Goodbye'], correct: 1 },
          { type: 'multiple-choice', prompt: 'During prayer, you hear "Tȟuŋkášila, óŋšimala ye." This means:', options: ['Grandfather, thank you', 'Grandfather, I am here', 'Grandfather, have pity on me', 'Grandfather, watch over us'], correct: 2, explanation: '"Tȟuŋkášila, óŋšimala ye" — Grandfather, have pity on me. One of the most common prayer phrases. "Óŋšimala" means to have compassion, not pity in the negative English sense.' },
          { type: 'multiple-choice', prompt: 'At the end of a prayer, you hear "Hoháŋ." This is similar to:', options: ['Hello', 'Goodbye', 'Amen / Let it be so', 'Thank you'], correct: 2, explanation: 'Hoháŋ — let it be so. Like "Amen" — it affirms and closes the prayer.' },
          { type: 'match', prompt: 'Match the prayer phrases:', pairs: [ { lakota: 'Óŋšimala ye', english: 'Have pity on me' }, { lakota: 'Ómakȟiya ye', english: 'Help me' }, { lakota: 'Čhekíya', english: 'To pray' }, { lakota: 'Hoháŋ', english: 'Let it be so / Amen' } ] },
        ]
      },
      {
        id: 'L6-03',
        title: 'Sacred Objects',
        subtitle: 'Čhaŋnúŋpa, Čhaŋ Wákȟaŋ — the pipe and the sacred tree',
        exercises: [
          { type: 'cultural-note', title: 'Sacred Objects at Sundance', text: 'At Sundance you\'ll encounter sacred objects treated with the highest reverence. The most important are:\n\n• Čhaŋnúŋpa — the Sacred Pipe. This is not a casual smoking pipe. It is the most sacred object in Lakota ceremony. When the pipe is brought out, everything stops. You may be asked to participate in a pipe ceremony — follow the lead of others.\n\n• Čhaŋ Wákȟaŋ — the Sacred Tree at the center of the Sundance arbor. The cottonwood tree is selected, prayed over, and raised at the center. Dancers face this tree. It represents the connection between earth and sky.\n\nNever touch sacred objects without permission. Never walk between a person and the sacred tree or pipe. Watch and follow.' },
          { type: 'listen-identify', prompt: 'Čhaŋnúŋpa', phonetic: 'chahn-NOON-pah', meaning: 'Sacred Pipe', options: ['Drum', 'Sacred Pipe', 'Eagle feather', 'Prayer flag'], correct: 1 },
          { type: 'listen-identify', prompt: 'Čhaŋ Wákȟaŋ', phonetic: 'CHAHN WAH-kahn', meaning: 'Sacred Tree (the Sundance tree)', options: ['Prayer flag', 'Sacred fire', 'Sacred Tree', 'Sacred Pipe'], correct: 2 },
          { type: 'listen-identify', prompt: 'Čhaŋčhéǧa', phonetic: 'chahn-CHAY-gah', meaning: 'Drum', options: ['Pipe', 'Drum', 'Whistle', 'Rattle'], correct: 1 },
          { type: 'listen-identify', prompt: 'Waphéyata', phonetic: 'wah-PAY-yah-tah', meaning: 'Banner / Prayer flag / Prayer tie', options: ['Eagle feather', 'Sacred Pipe', 'Prayer flag / tie', 'Song'], correct: 2 },
          { type: 'listen-identify', prompt: 'Wanáǧi', phonetic: 'wah-NAH-ghee', meaning: 'Spirit / Ghost / Soul', options: ['Body', 'Spirit / Soul', 'Prayer', 'Dream'], correct: 1 },
          { type: 'multiple-choice', prompt: 'The cottonwood tree at the center of the Sundance arbor is called:', options: ['Čhaŋnúŋpa', 'Čhaŋ Wákȟaŋ', 'Čhaŋčhéǧa', 'Čhaŋ Tȟáŋka'], correct: 1, explanation: 'Čhaŋ Wákȟaŋ — the Sacred Tree. It stands at the center and connects earth to sky. Dancers face it and pray to it.' },
          { type: 'multiple-choice', prompt: 'The Sacred Pipe is called:', options: ['Čhaŋčhéǧa', 'Waphéyata', 'Čhaŋnúŋpa', 'Čhaŋ Wákȟaŋ'], correct: 2, explanation: 'Čhaŋnúŋpa — the Sacred Pipe. The most revered ceremonial object. Treat it with the deepest respect.' },
          { type: 'match', prompt: 'Match the sacred objects:', pairs: [ { lakota: 'Čhaŋnúŋpa', english: 'Sacred Pipe' }, { lakota: 'Čhaŋ Wákȟaŋ', english: 'Sacred Tree' }, { lakota: 'Čhaŋčhéǧa', english: 'Drum' }, { lakota: 'Wanáǧi', english: 'Spirit / Soul' } ] },
        ]
      },
      {
        id: 'L6-04',
        title: 'Sundance Words',
        subtitle: 'What you\'ll hear at the arbor',
        exercises: [
          { type: 'cultural-note', title: 'At the Arbor', text: 'The Sundance arbor is the center of everything. Dancers dance inside the circle, facing the Sacred Tree. Singers sit at the drum. Supporters stand around the outside, praying and encouraging.\n\nYou\'ll hear specific words during the ceremony. The intercessor (the one who leads the ceremony) will speak. Singers will sing. People will call out encouragement. Knowing even a few of these words transforms your experience from watching to participating.' },
          { type: 'listen-identify', prompt: 'Wiwáŋyaŋg Wačhípi', phonetic: 'wee-WAHN-yahng wah-CHEE-pee', meaning: 'Sundance ("Gazing at the Sun Dance")', options: ['Sweat lodge', 'Sundance', 'Vision quest', 'Pipe ceremony'], correct: 1 },
          { type: 'listen-identify', prompt: 'Wačhípi', phonetic: 'wah-CHEE-pee', meaning: 'Dance / A dance', options: ['Song', 'Prayer', 'Dance', 'Feast'], correct: 2 },
          { type: 'listen-identify', prompt: 'Olówaŋ', phonetic: 'oh-LOH-wahn', meaning: 'Song', options: ['Dance', 'Song', 'Prayer', 'Drum'], correct: 1 },
          { type: 'listen-identify', prompt: 'Inipi', phonetic: 'ee-NEE-pee', meaning: 'Sweat lodge ceremony ("to live again")', options: ['Sundance', 'Vision quest', 'Sweat lodge', 'Pipe ceremony'], correct: 2 },
          { type: 'listen-identify', prompt: 'Haŋbléčheya', phonetic: 'hahn-BLAY-chay-yah', meaning: 'Vision quest ("crying for a dream")', options: ['Sweat lodge', 'Sundance', 'Feast', 'Vision quest'], correct: 3 },
          { type: 'listen-identify', prompt: 'Wičháša Wakȟáŋ', phonetic: 'wee-CHAH-shah wah-KAHN', meaning: 'Holy man / Medicine man', options: ['Chief', 'Holy man', 'Warrior', 'Elder'], correct: 1 },
          { type: 'multiple-choice', prompt: 'The full Lakota name for Sundance is "Wiwáŋyaŋg Wačhípi." It literally means:', options: ['Dance of sacrifice', 'Gazing at the Sun Dance', 'Prayer to the Creator', 'Circle of life dance'], correct: 1, explanation: '"Wiwáŋyaŋg Wačhípi" — Gazing at the Sun Dance. Dancers gaze toward the sun and the Sacred Tree.' },
          { type: 'multiple-choice', prompt: '"Inipi" means sweat lodge. Its deeper meaning is:', options: ['To suffer', 'To purify', 'To live again', 'To pray alone'], correct: 2, explanation: 'Inipi — "to live again." The sweat lodge is a ceremony of purification and rebirth. You may participate in one before Sundance.' },
          { type: 'match', prompt: 'Match the ceremony words:', pairs: [ { lakota: 'Wiwáŋyaŋg Wačhípi', english: 'Sundance' }, { lakota: 'Inipi', english: 'Sweat lodge' }, { lakota: 'Haŋbléčheya', english: 'Vision quest' }, { lakota: 'Olówaŋ', english: 'Song' } ] },
        ]
      },
      {
        id: 'L6-05',
        title: 'Mitákuye Oyásʼiŋ — Going Deeper',
        subtitle: 'The phrase that holds everything together',
        exercises: [
          { type: 'cultural-note', title: 'The Heart of It All', text: 'You learned "Mitákuye Oyásʼiŋ" in Module 1 as "We are all related." Now that you\'ve spent five modules immersed in Lakota language and culture, this phrase should hit differently.\n\n"Mitákuye" comes from "takúye" — relative, relation. "Mi-" makes it "my." "Oyásʼiŋ" means "all." So literally: "All my relatives."\n\nBut it\'s more than that. It\'s a declaration that the speaker is connected to everything — every person, every animal, every stone, every star. When you say it at the end of a prayer, you are affirming the Lakota worldview itself: nothing is separate. Everything belongs.\n\nAt Sundance, when the whole camp says "Mitákuye Oyásʼiŋ" together, you will feel it in your chest. Say it with them. Mean it.' },
          { type: 'listen-identify', prompt: 'Mitákuye Oyásʼiŋ', phonetic: 'mee-TAH-koo-yay oh-YAH-seen', meaning: 'All my relatives / We are all related', options: ['The Great Spirit watches', 'We are all related', 'Let it be so', 'Walk in beauty'], correct: 1 },
          { type: 'listen-identify', prompt: 'Takúye', phonetic: 'tah-KOO-yay', meaning: 'Relative / Relation', options: ['Friend', 'Stranger', 'Relative', 'Elder'], correct: 2 },
          { type: 'listen-identify', prompt: 'Oyásʼiŋ', phonetic: 'oh-YAH-seen', meaning: 'All / Everything', options: ['Some', 'None', 'All / Everything', 'Many'], correct: 2 },
          { type: 'multiple-choice', prompt: 'In "Mitákuye Oyásʼiŋ," what does "Mitákuye" mean?', options: ['My prayer', 'My people', 'My relatives', 'My heart'], correct: 2, explanation: '"Mitákuye" — my relatives. "Mi-" (my) + "takúye" (relative). All my relatives.' },
          { type: 'multiple-choice', prompt: 'When is "Mitákuye Oyásʼiŋ" spoken?', options: ['Only at Sundance', 'At the end of prayers and ceremonies', 'Only by elders', 'Only in the sweat lodge'], correct: 1, explanation: 'It\'s spoken at the end of prayers and ceremonies — by everyone. It closes the prayer and affirms the connection between all things.' },
          { type: 'multiple-choice', prompt: '"Mitákuye Oyásʼiŋ" includes our relationship to:', options: ['Only other Lakota people', 'Only our family', 'All living things — people, animals, plants, stones, stars', 'Only the spirits'], correct: 2, explanation: 'Everything. All living things. All relatives. The stones, the water, the four-leggeds, the wingeds, the two-leggeds. Everything is connected.' },
        ]
      },
      {
        id: 'L6-06',
        title: 'Module 6 Review',
        subtitle: 'The sacred language — Wóčhekiye',
        exercises: [
          { type: 'cultural-note', title: 'You Carry Sacred Words Now', text: 'You\'ve learned the language of prayer and ceremony. You know Wakȟáŋ Tȟáŋka, the prayer phrases, the sacred objects, and the ceremonies by name. You understand "Mitákuye Oyásʼiŋ" not just as a phrase but as a worldview.\n\nThese words are not for casual use. They carry weight. When you hear them at Sundance — and you will — let them move through you. You don\'t have to understand every word of a prayer to be changed by it.\n\nThe language itself is wakȟáŋ. It is sacred. You are carrying something precious now.' },
          { type: 'multiple-choice', prompt: '"Wakȟáŋ Tȟáŋka" is best translated as:', options: ['The Big God', 'The Thunder Spirit', 'The Great Mystery / The Great Sacred', 'The Sky Father'], correct: 2, explanation: 'Wakȟáŋ Tȟáŋka — The Great Mystery. Not a person, not a being exactly — the incomprehensible sacredness in all things.' },
          { type: 'multiple-choice', prompt: 'The Sacred Pipe is called:', options: ['Čhaŋ Wákȟaŋ', 'Čhaŋčhéǧa', 'Čhaŋnúŋpa', 'Wakíŋyaŋ'], correct: 2, explanation: 'Čhaŋnúŋpa — the Sacred Pipe.' },
          { type: 'multiple-choice', prompt: '"Óŋšimala ye" means:', options: ['Thank you', 'Have pity on me / Have compassion', 'Help me stand', 'I am praying'], correct: 1, explanation: '"Óŋšimala ye" — have pity on me, have compassion for me. A prayer of humility.' },
          { type: 'multiple-choice', prompt: 'The Lakota name for Sundance is:', options: ['Inipi', 'Haŋbléčheya', 'Wiwáŋyaŋg Wačhípi', 'Čhaŋ Wákȟaŋ'], correct: 2, explanation: 'Wiwáŋyaŋg Wačhípi — the Sundance. Gazing at the Sun Dance.' },
          { type: 'match', prompt: 'Final review — the sacred language:', pairs: [ { lakota: 'Wakȟáŋ', english: 'Sacred / Holy' }, { lakota: 'Olówaŋ', english: 'Song' }, { lakota: 'Wanáǧi', english: 'Spirit / Soul' }, { lakota: 'Hoháŋ', english: 'Let it be so / Amen' } ] },
          { type: 'multiple-choice', prompt: '"Inipi" means:', options: ['Sundance', 'Vision quest', 'Sweat lodge ("to live again")', 'Pipe ceremony'], correct: 2, explanation: 'Inipi — the sweat lodge. "To live again."' },
        ]
      }
    ]
  },
  {
    id: 'module-07',
    number: 7,
    iconKey: 'twoFeathers',
    title: 'Conversation & Flow',
    lakota: 'Wóglake',
    desc: 'Put it all together — storytelling, questions, and real conversation with your relatives.',
    lessons: [
      {
        id: 'L7-01',
        title: 'Question Words',
        subtitle: 'Who, What, Where, When, Why, How',
        exercises: [
          { type: 'cultural-note', title: 'Asking Good Questions', text: 'Conversation is a two-way exchange. You\'ve learned a lot of words and phrases — now it\'s time to put them into real conversation flow. That starts with questions.\n\nYou already know "Tukté" (where?) and "Tókheškhe yaúŋ he?" (how are you?). Now let\'s fill in the rest of the question words so you can ask about anything.' },
          { type: 'listen-identify', prompt: 'Tuwá', phonetic: 'too-WAH', meaning: 'Who?', options: ['What?', 'Who?', 'Where?', 'When?'], correct: 1 },
          { type: 'listen-identify', prompt: 'Táku', phonetic: 'TAH-koo', meaning: 'What?', options: ['Who?', 'When?', 'What?', 'Why?'], correct: 2 },
          { type: 'listen-identify', prompt: 'Tóhaŋ', phonetic: 'TOH-hahn', meaning: 'When?', options: ['Where?', 'What?', 'When?', 'How?'], correct: 2 },
          { type: 'listen-identify', prompt: 'Tókheča', phonetic: 'TOH-kay-chah', meaning: 'Why? / How?', options: ['Who?', 'What?', 'Where?', 'Why? / How?'], correct: 3 },
          { type: 'listen-identify', prompt: 'Tóna', phonetic: 'TOH-nah', meaning: 'How many?', options: ['How much?', 'How many?', 'How far?', 'How long?'], correct: 1 },
          { type: 'multiple-choice', prompt: 'You want to ask "Who is that?" You start with:', options: ['Táku', 'Tuwá', 'Tukté', 'Tóhaŋ'], correct: 1, explanation: 'Tuwá — Who? "Tuwá hé?" — Who is that?' },
          { type: 'multiple-choice', prompt: 'You want to know when the meal starts. The question word for "when" is:', options: ['Tukté', 'Táku', 'Tóhaŋ', 'Tuwá'], correct: 2, explanation: 'Tóhaŋ — When? "Tóhaŋ wóta he?" — When do we eat?' },
          { type: 'match', prompt: 'Match the question words:', pairs: [ { lakota: 'Tuwá', english: 'Who?' }, { lakota: 'Táku', english: 'What?' }, { lakota: 'Tóhaŋ', english: 'When?' }, { lakota: 'Tóna', english: 'How many?' } ] },
        ]
      },
      {
        id: 'L7-02',
        title: 'Simple Sentences',
        subtitle: 'Building your first Lakota sentences',
        exercises: [
          { type: 'cultural-note', title: 'Putting Words Together', text: 'Lakota sentence structure is different from English. In English we say "I am eating meat." In Lakota, the word order and verb forms work differently — but for now, the most important thing is to try.\n\nLakota people will understand you even if your grammar isn\'t perfect. What matters is that you\'re making the effort to speak. A simple "Tȟaló wóta" (eating meat) communicates clearly. Don\'t let fear of mistakes stop you from speaking.' },
          { type: 'listen-identify', prompt: 'Wóta waúŋ', phonetic: 'WOH-tah wah-OON', meaning: 'I am eating', options: ['I am sleeping', 'I am eating', 'I am going', 'I am cooking'], correct: 1 },
          { type: 'listen-identify', prompt: 'Yá waúŋ', phonetic: 'YAH wah-OON', meaning: 'I am going', options: ['I am eating', 'I am coming', 'I am going', 'I am sitting'], correct: 2 },
          { type: 'listen-identify', prompt: 'Hí waúŋ', phonetic: 'HEE wah-OON', meaning: 'I am coming / I have arrived', options: ['I am going', 'I am leaving', 'I am coming', 'I am waiting'], correct: 2 },
          { type: 'listen-identify', prompt: 'Škaŋ', phonetic: 'SHKAHN', meaning: 'To do / To move / To be active', options: ['To sit', 'To do / move', 'To eat', 'To sleep'], correct: 1 },
          { type: 'multiple-choice', prompt: 'You want to say "I am eating." You say:', options: ['Wóta wo', 'Wóta waúŋ', 'Yá waúŋ', 'Ištíŋma waúŋ'], correct: 1, explanation: '"Wóta waúŋ" — I am eating. "Waúŋ" means "I am" — you\'ve been using it since Module 3!' },
          { type: 'multiple-choice', prompt: 'You arrive at someone\'s camp. You say "I have arrived" / "I\'m here":', options: ['Yá waúŋ', 'Hí waúŋ', 'Wóta waúŋ', 'Nážiŋ waúŋ'], correct: 1, explanation: '"Hí waúŋ" — I have come / I\'m here. A great thing to announce when you arrive!' },
          { type: 'match', prompt: 'Match the sentences:', pairs: [ { lakota: 'Wóta waúŋ', english: 'I am eating' }, { lakota: 'Yá waúŋ', english: 'I am going' }, { lakota: 'Hí waúŋ', english: 'I am coming / arrived' }, { lakota: 'Škaŋ', english: 'To do / To move' } ] },
        ]
      },
      {
        id: 'L7-03',
        title: 'Feelings & Descriptions',
        subtitle: 'Expanding how you express yourself',
        exercises: [
          { type: 'cultural-note', title: 'Beyond "Good" and "Tired"', text: 'You already know wašté (good), waṫȟáka (tired), and lóčhiŋ (hungry). Let\'s expand your emotional vocabulary so you can express more of what you\'re experiencing at Sundance.\n\nThese moments matter. Being able to say "I am grateful" or "This is beautiful" in Lakota deepens your connection to the experience and the people around you.' },
          { type: 'listen-identify', prompt: 'Wópilaštaya', phonetic: 'WOH-pee-lah-shtah-yah', meaning: 'I am grateful / I am thankful', options: ['I am tired', 'I am angry', 'I am grateful', 'I am lost'], correct: 2 },
          { type: 'listen-identify', prompt: 'Čhaŋtéšiča', phonetic: 'chahn-TAY-shee-chah', meaning: 'Sad / Heavy-hearted', options: ['Happy', 'Sad', 'Angry', 'Tired'], correct: 1 },
          { type: 'listen-identify', prompt: 'Oháŋ', phonetic: 'oh-HAHN', meaning: 'Yes / Okay / I agree', options: ['No', 'Maybe', 'Yes / Okay', 'I don\'t know'], correct: 2 },
          { type: 'listen-identify', prompt: 'Sníya', phonetic: 'SNEE-yah', meaning: 'Cold (I am cold)', options: ['Hot', 'Cold', 'Tired', 'Wet'], correct: 1 },
          { type: 'listen-identify', prompt: 'Lílá', phonetic: 'LEE-lah', meaning: 'Very / Really', options: ['Not', 'A little', 'Very / Really', 'Sometimes'], correct: 2 },
          { type: 'multiple-choice', prompt: 'The sunset at Sundance takes your breath away. You say "Lílá wašté!" This means:', options: ['A little good', 'Not good', 'Very good! / Really beautiful!', 'Somewhat good'], correct: 2, explanation: '"Lílá wašté!" — Very good! Really beautiful! "Lílá" is a power word — it intensifies everything.' },
          { type: 'multiple-choice', prompt: 'Someone shares a teaching with you and it moves you deeply. You say:', options: ['Čhaŋtéšiča', 'Wópilaštaya', 'Sníya', 'Lílá waṫȟáka'], correct: 1, explanation: '"Wópilaštaya" — I am grateful. A beautiful word to offer when someone gives you something meaningful.' },
          { type: 'match', prompt: 'Match the feelings:', pairs: [ { lakota: 'Lílá', english: 'Very / Really' }, { lakota: 'Čhaŋtéšiča', english: 'Sad' }, { lakota: 'Wópilaštaya', english: 'I am grateful' }, { lakota: 'Sníya', english: 'Cold' } ] },
        ]
      },
      {
        id: 'L7-04',
        title: 'Listening & Responding',
        subtitle: 'What to say when someone is talking to you',
        exercises: [
          { type: 'cultural-note', title: 'The Art of Listening', text: 'In Lakota culture, listening is as important as speaking — maybe more. When an elder is talking, you listen fully. You don\'t interrupt. You show you\'re engaged with small verbal cues.\n\nThese response words are the glue of conversation. They tell the speaker "I\'m here, I\'m listening, I understand." Learn them and use them — they\'ll make every conversation smoother.' },
          { type: 'listen-identify', prompt: 'Háŋ, háŋ', phonetic: 'HAHN, HAHN', meaning: 'Yes, yes (I\'m listening / I agree)', options: ['No, no', 'Yes, yes (listening)', 'Maybe, maybe', 'I don\'t know'], correct: 1 },
          { type: 'listen-identify', prompt: 'Héčhetu', phonetic: 'HAY-chay-too', meaning: 'That\'s right / That\'s so / Indeed', options: ['That\'s wrong', 'That\'s right / Indeed', 'I don\'t know', 'Maybe'], correct: 1 },
          { type: 'listen-identify', prompt: 'Slolwáye šni', phonetic: 'slohl-WAH-yay shnee', meaning: 'I don\'t know / I don\'t understand', options: ['I know', 'I don\'t know', 'I agree', 'I\'m listening'], correct: 1 },
          { type: 'listen-identify', prompt: 'Tókheškhe?', phonetic: 'TOH-kesh-keh', meaning: 'How? / What do you mean?', options: ['Where?', 'Who?', 'How? / What do you mean?', 'When?'], correct: 2 },
          { type: 'listen-identify', prompt: 'Hó', phonetic: 'HOH', meaning: 'Yes / Okay / Go ahead (male speaker)', options: ['No', 'Stop', 'Yes / Go ahead', 'Wait'], correct: 2 },
          { type: 'multiple-choice', prompt: 'An elder is telling you a story. You want to show you\'re following along. You say:', options: ['Slolwáye šni', 'Háŋ, háŋ', 'Tókheškhe?', 'Hiyá'], correct: 1, explanation: '"Háŋ, háŋ" — Yes, yes. The universal "I\'m listening" response. Nod and say it softly as they speak.' },
          { type: 'multiple-choice', prompt: 'Someone asks you a question and you genuinely don\'t know the answer. You say:', options: ['Héčhetu', 'Háŋ, háŋ', 'Slolwáye šni', 'Hó'], correct: 2, explanation: '"Slolwáye šni" — I don\'t know. Honest and humble. No one expects you to know everything.' },
          { type: 'match', prompt: 'Match the response words:', pairs: [ { lakota: 'Héčhetu', english: 'That\'s right / Indeed' }, { lakota: 'Slolwáye šni', english: 'I don\'t know' }, { lakota: 'Hó', english: 'Yes / Go ahead (male)' }, { lakota: 'Tókheškhe?', english: 'How? / What do you mean?' } ] },
        ]
      },
      {
        id: 'L7-05',
        title: 'Camp Conversations',
        subtitle: 'Real situations you\'ll face this summer',
        exercises: [
          { type: 'cultural-note', title: 'Putting It All Together', text: 'Let\'s practice the kinds of conversations you\'ll actually have at Sundance. These combine vocabulary from every module — greetings, family, food, directions, feelings, and sacred language.\n\nRemember: you don\'t have to speak only Lakota. Most conversations at camp will be a mix of English and Lakota. Even dropping in a few Lakota words shows respect and effort. "Háu, Kȟolá! Tókheškhe yaúŋ he?" — that alone will light up a room.' },
          { type: 'multiple-choice', prompt: 'You arrive at camp. A man walks up. Complete this greeting:\n"Háu, _____ emáčiyapi. San Antonio emátaŋhaŋ."', options: ['[Your name]', 'Kȟolá', 'Tȟuŋkášila', 'Wašté'], correct: 0, explanation: 'You greet him, give your name, and say where you\'re from. A complete Lakota introduction! You learned this in Module 1 and now you\'re using it for real.' },
          { type: 'multiple-choice', prompt: 'Someone asks "Tókheškhe yaúŋ he?" and you\'re feeling great after a good meal. You say:', options: ['Waṫȟáka waúŋ', 'Lílá taŋyáŋ waúŋ', 'Slolwáye šni', 'Čhaŋtéšiča'], correct: 1, explanation: '"Lílá taŋyáŋ waúŋ" — I am very well! You just combined "lílá" (very) with "taŋyáŋ waúŋ" (I am well). That\'s real Lakota.' },
          { type: 'multiple-choice', prompt: 'An elder woman gives you a plate of wóžapi. You say:', options: ['Wóta wo!', 'Philámayaye, Uŋčí', 'Tukté wóžapi', 'Sáŋm'], correct: 1, explanation: '"Philámayaye, Uŋčí" — Thank you, Grandmother. Combining gratitude with respectful address. This will be deeply appreciated.' },
          { type: 'multiple-choice', prompt: 'It\'s getting late. You want to say goodbye to your camp. You say:', options: ['Háu!', 'Wóta po!', 'Tokša akhé, Mitákuye Oyásʼiŋ', 'Táku hé?'], correct: 2, explanation: '"Tokša akhé, Mitákuye Oyásʼiŋ" — See you again, all my relatives. A warm, complete Lakota goodbye.' },
          { type: 'multiple-choice', prompt: 'You hear thunder during ceremony. Someone near you whispers "Wakíŋyaŋ..." You understand this means:', options: ['It\'s going to rain', 'The Thunder Being is speaking', 'We should go inside', 'The ceremony is over'], correct: 1, explanation: 'The Wakíŋyaŋ — the Thunder Being — is present. You learned this in Module 4. At Sundance, thunder during ceremony is significant.' },
          { type: 'multiple-choice', prompt: 'You want to ask where the water is. You say:', options: ['Mní wašté', 'Tukté mní he?', 'Mní wóta', 'Yatkáŋ mní'], correct: 1, explanation: '"Tukté mní he?" — Where is the water? Combining Module 3 vocabulary with Module 7 question skills.' },
          { type: 'match', prompt: 'Match the camp phrases:', pairs: [ { lakota: 'Lílá taŋyáŋ waúŋ', english: 'I am very well' }, { lakota: 'Tokša akhé', english: 'See you again' }, { lakota: 'Philámayaye, Uŋčí', english: 'Thank you, Grandmother' }, { lakota: 'Tukté mní he?', english: 'Where is the water?' } ] },
        ]
      },
      {
        id: 'L7-06',
        title: 'Module 7 Review',
        subtitle: 'You can have a conversation — Wóglake',
        exercises: [
          { type: 'cultural-note', title: 'You\'re Ready to Talk', text: 'You now have the tools for real conversation in Lakota. You can ask questions, build sentences, express feelings, respond to others, and navigate social situations at camp.\n\nThe key is to use what you know. Don\'t wait until you\'re "fluent" — that day may never come, and it doesn\'t need to. What matters is connection. A greeting here, a thank you there, a question in Lakota, a response that shows you\'re listening.\n\nYour Lakota relatives will meet you where you are. They\'ll fill in the gaps, switch to English when needed, and appreciate every Lakota word you offer. The conversation has already begun.' },
          { type: 'multiple-choice', prompt: 'The question word for "Who?" is:', options: ['Táku', 'Tuwá', 'Tukté', 'Tóhaŋ'], correct: 1, explanation: 'Tuwá — Who?' },
          { type: 'multiple-choice', prompt: '"Héčhetu" means:', options: ['I don\'t know', 'That\'s wrong', 'That\'s right / Indeed', 'Maybe'], correct: 2, explanation: 'Héčhetu — That\'s right, indeed. A powerful affirmation.' },
          { type: 'multiple-choice', prompt: '"Lílá" means:', options: ['A little', 'Not at all', 'Very / Really', 'Sometimes'], correct: 2, explanation: 'Lílá — very, really. It makes everything stronger.' },
          { type: 'match', prompt: 'Final review — conversational Lakota:', pairs: [ { lakota: 'Tuwá', english: 'Who?' }, { lakota: 'Slolwáye šni', english: 'I don\'t know' }, { lakota: 'Wópilaštaya', english: 'I am grateful' }, { lakota: 'Oháŋ', english: 'Yes / Okay' } ] },
          { type: 'multiple-choice', prompt: '"Wóta waúŋ" means:', options: ['I am going', 'I am sleeping', 'I am eating', 'I am coming'], correct: 2, explanation: '"Wóta waúŋ" — I am eating.' },
          { type: 'multiple-choice', prompt: 'The best way to show an elder you\'re listening is to say:', options: ['Táku?', 'Háŋ, háŋ', 'Hiyá', 'Tokša'], correct: 1, explanation: '"Háŋ, háŋ" — yes, yes. Soft, respectful, present. The sound of active listening.' },
        ]
      }
    ]
  },
  {
    id: 'module-08',
    number: 8,
    iconKey: 'sundanceSun',
    title: 'Sundance Ready',
    lakota: 'Wičhóȟ\'aŋ',
    desc: 'Final preparation — everything you need to participate with respect and understanding.',
    lessons: [
      {
        id: 'L8-01',
        title: 'Arriving at Camp',
        subtitle: 'Your first moments — what to say and do',
        exercises: [
          { type: 'cultural-note', title: 'You\'re Here', text: 'The day has come. You\'ve driven to camp, your car is loaded, and you\'re stepping out into the Great Plains sun. People are setting up tents, kids are running around, someone is already cooking.\n\nThis is the moment everything you\'ve learned becomes real. Take a breath. Here\'s your arrival plan:\n\n1. Greet people as you arrive — Háu or Háŋ\n2. Find your thiyóšpaye (your camp group)\n3. Introduce yourself to people you haven\'t met\n4. Offer to help set up\n5. Listen more than you speak\n\nYou\'re ready. Let\'s practice.' },
          { type: 'multiple-choice', prompt: 'You step out of the car. A man walks over to welcome you. You say:', options: ['Tokša akhé', 'Háu, Kȟolá! Tókheškhe yaúŋ he?', 'Wóta wo', 'Slolwáye šni'], correct: 1, explanation: '"Háu, Kȟolá! Tókheškhe yaúŋ he?" — Hello, friend! How are you? A perfect arrival greeting.' },
          { type: 'multiple-choice', prompt: 'He asks your name and where you\'re from. You say:', options: ['Mitákuye Oyásʼiŋ', '[Name] emáčiyapi, San Antonio emátaŋhaŋ', 'Philámayaye, Tȟuŋkášila', 'Taŋyáŋ waúŋ'], correct: 1, explanation: 'Your full Lakota introduction! Name + emáčiyapi, city + emátaŋhaŋ. You practiced this in Module 1.' },
          { type: 'multiple-choice', prompt: 'He introduces you to an elder woman. You address her respectfully as:', options: ['Mašké', 'Iná', 'Uŋčí', 'Kȟolá'], correct: 2, explanation: '"Uŋčí" — Grandmother. The respectful address for an elder woman. She\'ll appreciate it deeply.' },
          { type: 'multiple-choice', prompt: 'The elder asks "Tókheškhe yaúŋ he?" You\'re tired from the drive but happy to be here. You say:', options: ['Waṫȟáka waúŋ', 'Lílá taŋyáŋ waúŋ, Philámayaye', 'Lóčhiŋ waúŋ', 'Slolwáye šni'], correct: 1, explanation: '"Lílá taŋyáŋ waúŋ, Philámayaye" — I am very well, thank you. Even if you\'re tired, lead with gratitude. You made it.' },
          { type: 'match', prompt: 'Match the arrival phrases:', pairs: [ { lakota: 'Háu, Kȟolá', english: 'Hello, friend (male)' }, { lakota: 'emáčiyapi', english: 'I am called (my name is)' }, { lakota: 'emátaŋhaŋ', english: 'I am from' }, { lakota: 'Lílá taŋyáŋ waúŋ', english: 'I am very well' } ] },
        ]
      },
      {
        id: 'L8-02',
        title: 'Offering to Help',
        subtitle: '"How can I help?" — the most important question',
        exercises: [
          { type: 'cultural-note', title: 'Be Useful', text: 'The single best thing you can do when you arrive at Sundance camp is offer to help. Don\'t wait to be asked. Look for what needs doing and jump in — carry water, chop wood, help set up tents, watch kids, peel potatoes.\n\nIn Lakota culture, your value isn\'t measured by what you say but by what you do. The phrase "Óčhičhiya oyákihi he?" (Can I help you?) will open every door at camp.\n\nIf you\'re unsure what to do, just say "Táku ečhámuŋ kta he?" — What should I do? Someone will put you to work.' },
          { type: 'listen-identify', prompt: 'Óčhičhiya oyákihi he?', phonetic: 'OH-chee-chee-yah oh-YAH-kee-hee hay', meaning: 'Can I help you?', options: ['Where are you going?', 'Can I help you?', 'What are you doing?', 'Do you need water?'], correct: 1 },
          { type: 'listen-identify', prompt: 'Táku ečhámuŋ kta he?', phonetic: 'TAH-koo ay-CHAH-moon ktah hay', meaning: 'What should I do?', options: ['What is that?', 'What should I do?', 'What are you eating?', 'What happened?'], correct: 1 },
          { type: 'listen-identify', prompt: 'Mní awakú kte', phonetic: 'MNEE ah-wah-KOO ktay', meaning: 'I will bring water', options: ['I need water', 'I will bring water', 'Where is the water?', 'I am thirsty'], correct: 1 },
          { type: 'listen-identify', prompt: 'Čhaŋ awakú kte', phonetic: 'CHAHN ah-wah-KOO ktay', meaning: 'I will bring firewood', options: ['I need wood', 'I will bring firewood', 'I will start a fire', 'Where is the wood?'], correct: 1 },
          { type: 'multiple-choice', prompt: 'You see people setting up a tent but you don\'t know what to do. You walk over and say:', options: ['Slolwáye šni', 'Táku ečhámuŋ kta he?', 'Wóta waúŋ', 'Tokša akhé'], correct: 1, explanation: '"Táku ečhámuŋ kta he?" — What should I do? You just showed up ready to work. That\'s how you earn respect at camp.' },
          { type: 'multiple-choice', prompt: 'The fire is low and someone needs firewood. You volunteer by saying:', options: ['Pȟéta wašté', 'Čhaŋ awakú kte', 'Tukté čhaŋ he?', 'Čhaŋ Wákȟaŋ'], correct: 1, explanation: '"Čhaŋ awakú kte" — I will bring firewood. "Čhaŋ" (wood) + "awakú kte" (I will bring). Action speaks louder than words.' },
          { type: 'match', prompt: 'Match the helper phrases:', pairs: [ { lakota: 'Óčhičhiya oyákihi he?', english: 'Can I help you?' }, { lakota: 'Táku ečhámuŋ kta he?', english: 'What should I do?' }, { lakota: 'Mní awakú kte', english: 'I will bring water' }, { lakota: 'Čhaŋ awakú kte', english: 'I will bring firewood' } ] },
        ]
      },
      {
        id: 'L8-03',
        title: 'At the Arbor',
        subtitle: 'Understanding what\'s happening during ceremony',
        exercises: [
          { type: 'cultural-note', title: 'Standing at the Arbor', text: 'The Sundance arbor is sacred ground. Dancers are inside the circle. The Sacred Tree (Čhaŋ Wákȟaŋ) stands at the center. The drum and singers anchor the ceremony.\n\nAs a supporter, you stand at the outside of the circle. You pray. You encourage the dancers silently or with soft calls. You do NOT take photos, use your phone, or leave and come back casually.\n\nHere\'s what you\'ll hear and see:\n• The intercessor will pray aloud — listen for Tȟuŋkášila, Wakȟáŋ Tȟáŋka, Mitákuye Oyásʼiŋ\n• Eagle bone whistles will blow\n• The drum will start and stop\n• People may call out "Hóka hé!" — an encouragement\n• When the round ends, everyone says "Mitákuye Oyásʼiŋ"' },
          { type: 'listen-identify', prompt: 'Hóka hé!', phonetic: 'HOH-kah HAY', meaning: 'An encouragement call (like "Let\'s go!" or "Be strong!")', options: ['Stop!', 'An encouragement call', 'Come here!', 'Be quiet!'], correct: 1 },
          { type: 'listen-identify', prompt: 'Íyohlate', phonetic: 'EE-yoh-hlah-tay', meaning: 'Be strong / Endure / Hang in there', options: ['Be quiet', 'Be strong / Endure', 'Go fast', 'Be careful'], correct: 1 },
          { type: 'listen-identify', prompt: 'Thečhíȟila', phonetic: 'tay-CHEE-hee-lah', meaning: 'I love you / I hold you dear', options: ['I miss you', 'I love you', 'I thank you', 'I see you'], correct: 1 },
          { type: 'multiple-choice', prompt: 'A dancer is struggling in the heat. People around you softly call out. What might they say?', options: ['Wóta wo!', 'Tokša akhé!', 'Hóka hé! Íyohlate!', 'Slolwáye šni'], correct: 2, explanation: '"Hóka hé! Íyohlate!" — Let\'s go! Be strong! Words of encouragement for the dancers. Your voice matters.' },
          { type: 'multiple-choice', prompt: 'A round of dancing ends. The intercessor prays. At the end, everyone says together:', options: ['Philámayaye', 'Tokša akhé', 'Mitákuye Oyásʼiŋ', 'Hoháŋ'], correct: 2, explanation: '"Mitákuye Oyásʼiŋ" — We are all related. Said together, by everyone, at the end of each prayer. Say it with them.' },
          { type: 'multiple-choice', prompt: 'You want to tell a dancer "I love you" / "I hold you dear" before they enter the arbor. You say:', options: ['Lílá wašté', 'Philámayaye', 'Thečhíȟila', 'Wópilaštaya'], correct: 2, explanation: '"Thečhíȟila" — I love you, I hold you dear. One of the most beautiful words in the Lakota language. Say it to your relatives.' },
          { type: 'match', prompt: 'Match the arbor words:', pairs: [ { lakota: 'Hóka hé', english: 'Encouragement ("Let\'s go!")' }, { lakota: 'Íyohlate', english: 'Be strong / Endure' }, { lakota: 'Thečhíȟila', english: 'I love you' }, { lakota: 'Mitákuye Oyásʼiŋ', english: 'We are all related' } ] },
        ]
      },
      {
        id: 'L8-04',
        title: 'Mealtime & Community',
        subtitle: 'Feeding and being fed — the heart of camp',
        exercises: [
          { type: 'cultural-note', title: 'The Feed', text: 'Between ceremony rounds, the camp feeds everyone. This is called "the feed." The kitchen crew has been cooking all day. You\'ll line up, elders first, and receive a plate.\n\nThis is your chance to use everything from Module 5. Accept food graciously. Compliment the cooks. Offer to help clean up. Sit with your thiyóšpaye and share the meal.\n\nLet\'s practice the full mealtime flow.' },
          { type: 'multiple-choice', prompt: 'The cook calls out to camp. She yells:', options: ['Wóta wo!', 'Wóta po!', 'Lóčhiŋ he?', 'Míla awakú kte'], correct: 1, explanation: '"Wóta po!" — Everyone eat! The "po" addresses the whole group. Time to line up.' },
          { type: 'multiple-choice', prompt: 'You\'re in line. An elder is behind you. What do you do?', options: ['Stay where you are — first come first served', 'Let the elder go ahead of you', 'Leave the line', 'Ask the elder a question'], correct: 1, explanation: 'Always let elders go first. Step aside and say "Háŋ, Tȟuŋkášila" or "Háŋ, Uŋčí" — a small gesture of enormous respect.' },
          { type: 'multiple-choice', prompt: 'You taste the wóžapi and it\'s incredible. You tell the cook:', options: ['Imáǧaga', 'Lílá wóyute wašté!', 'Sáŋm pȟežúta sápa', 'Tokša'], correct: 1, explanation: '"Lílá wóyute wašté!" — Very good food! "Lílá" + "wóyute wašté." You\'re stacking words now.' },
          { type: 'multiple-choice', prompt: 'After eating, you\'re full and grateful. You say:', options: ['Lóčhiŋ waúŋ', 'Imáǧaga, lílá philámayaye', 'Sáŋm wóyute', 'Wóta waúŋ'], correct: 1, explanation: '"Imáǧaga, lílá philámayaye" — I\'m full, thank you so much. Gratitude stacked on gratitude.' },
          { type: 'multiple-choice', prompt: 'After the meal, you want to help clean up. You ask:', options: ['Tokša akhé', 'Tukté mní he?', 'Óčhičhiya oyákihi he?', 'Wóta po'], correct: 2, explanation: '"Óčhičhiya oyákihi he?" — Can I help you? Same phrase from Lesson 2. Now you\'re using it to help clean up after the feed.' },
        ]
      },
      {
        id: 'L8-05',
        title: 'Gratitude & Farewell',
        subtitle: 'Leaving camp — carrying the language home',
        exercises: [
          { type: 'cultural-note', title: 'Saying Goodbye', text: 'Sundance will end. You\'ll pack up your tent, load the car, and say goodbye to your relatives. This will be harder than you expect. The bonds formed at ceremony go deep.\n\nTake your time with goodbyes. Visit each family in your thiyóšpaye. Thank the elders personally. Thank the cooks. Thank the singers. Thank anyone who taught you something.\n\nThe Lakota goodbye is not final — "Tokša akhé" means "until next time." You will be back.' },
          { type: 'listen-identify', prompt: 'Wóphila tȟáŋka', phonetic: 'WOH-pee-lah TAHN-kah', meaning: 'Great gratitude / Deep thanks', options: ['Small thanks', 'Great gratitude', 'Goodbye forever', 'See you soon'], correct: 1 },
          { type: 'listen-identify', prompt: 'Čhaŋté wašté', phonetic: 'chahn-TAY wash-TAY', meaning: 'Good heart / With a good heart', options: ['Sad heart', 'Good heart', 'Strong heart', 'Big heart'], correct: 1 },
          { type: 'multiple-choice', prompt: 'You want to thank an elder who taught you something important. You say:', options: ['Philámayaye', 'Wóphila tȟáŋka, Tȟuŋkášila', 'Tokša', 'Háŋ háŋ'], correct: 1, explanation: '"Wóphila tȟáŋka, Tȟuŋkášila" — Deep gratitude, Grandfather. More than a casual thank you — this carries real weight.' },
          { type: 'multiple-choice', prompt: 'You\'re leaving camp. You gather your thiyóšpaye for a final goodbye. You say:', options: ['Hiyá', 'Háu, Kȟolá', 'Tokša akhé, Mitákuye Oyásʼiŋ. Thečhíȟilapi.', 'Wóta po'], correct: 2, explanation: '"Tokša akhé, Mitákuye Oyásʼiŋ. Thečhíȟilapi." — See you again, all my relatives. I love you all. A complete, heartfelt Lakota farewell.' },
          { type: 'multiple-choice', prompt: 'Someone says "Čhaŋté wašté yá yo" as you leave. This means:', options: ['Drive safe', 'Go with a good heart', 'Don\'t forget us', 'Come back soon'], correct: 1, explanation: '"Čhaŋté wašté yá yo" — Go with a good heart. A blessing for your journey home.' },
          { type: 'match', prompt: 'Match the farewell words:', pairs: [ { lakota: 'Wóphila tȟáŋka', english: 'Great gratitude' }, { lakota: 'Čhaŋté wašté', english: 'Good heart' }, { lakota: 'Thečhíȟila', english: 'I love you' }, { lakota: 'Tokša akhé', english: 'See you again' } ] },
        ]
      },
      {
        id: 'L8-06',
        title: 'You Are Ready',
        subtitle: 'Wiwáŋyaŋg Wačhípi — Mitákuye Oyásʼiŋ',
        exercises: [
          { type: 'cultural-note', title: 'The Journey Complete', text: 'You\'ve walked the Red Road through eight modules. You\'ve learned over 150 Lakota words and phrases. You can greet, introduce yourself, name your relatives, talk about the day, navigate camp, name the foods, pray with understanding, hold a conversation, and participate in Sundance with respect.\n\nBut more than vocabulary, you\'ve learned a worldview. You understand that all things are related. You know that generosity, respect, and humility are the pillars of Lakota life. You know that the language itself is sacred — every word carries the breath of ancestors.\n\nWhen you stand at the arbor this summer, you won\'t be a stranger. You\'ll be a relative who did the work to show up prepared.\n\nWakíŋyaŋ Wóuŋspe — the Thunder Being\'s Teachings — has done its work. Now the real teaching begins: your life among your Lakota family.\n\nMitákuye Oyásʼiŋ. ⚡' },
          { type: 'multiple-choice', prompt: 'You arrive at camp. Complete the greeting:\n"_____, [your name] emáčiyapi."', options: ['Tokša', 'Háu (or Háŋ)', 'Wóta wo', 'Héčhetu'], correct: 1, explanation: 'Start with your greeting — Háu or Háŋ — then your name. You\'ve known this since Module 1.' },
          { type: 'multiple-choice', prompt: 'An elder gives you a teaching. You show respect by saying:', options: ['Háŋ, háŋ... Wóphila tȟáŋka, Tȟuŋkášila', 'Táku hé?', 'Oháŋ, tokša', 'Lílá škaŋ'], correct: 0, explanation: 'Listen actively (háŋ, háŋ), then express deep gratitude (wóphila tȟáŋka) with respect (Tȟuŋkášila).' },
          { type: 'multiple-choice', prompt: 'During Sundance, a dancer struggles. You call out:', options: ['Wóta po!', 'Tokša akhé!', 'Hóka hé! Íyohlate!', 'Tukté he?'], correct: 2, explanation: '"Hóka hé! Íyohlate!" — encouragement for the dancer. Your voice joins the community.' },
          { type: 'multiple-choice', prompt: 'The prayer ends. Everyone says together:', options: ['Hoháŋ', 'Philámayaye', 'Mitákuye Oyásʼiŋ', 'Tokša akhé'], correct: 2, explanation: 'Mitákuye Oyásʼiŋ — We are all related. The phrase that holds everything together.' },
          { type: 'multiple-choice', prompt: 'You\'re leaving camp. Your final words to your thiyóšpaye:', options: ['Hiyá', 'Tokša akhé, Mitákuye Oyásʼiŋ. Thečhíȟilapi.', 'Wóta po, Kȟolá', 'Taŋyáŋ waúŋ'], correct: 1, explanation: '"Tokša akhé, Mitákuye Oyásʼiŋ. Thečhíȟilapi." — Until next time, all my relatives. I love you all. You came as a visitor. You leave as family.' },
          { type: 'match', prompt: 'One last time — match from the heart:', pairs: [ { lakota: 'Mitákuye Oyásʼiŋ', english: 'We are all related' }, { lakota: 'Wakȟáŋ Tȟáŋka', english: 'The Great Mystery' }, { lakota: 'Thečhíȟila', english: 'I love you' }, { lakota: 'Wiwáŋyaŋg Wačhípi', english: 'Sundance' } ] },
        ]
      }
    ]
  }
];

// ==========================================================================
// SUNDANCE PRACTICE SCENARIOS
// Conversational situations you'll encounter at Sundance
// ==========================================================================

const SUNDANCE_SCENARIOS = [
  // --- Greetings & Introductions ---
  {
    type: 'multiple-choice',
    situation: 'Háu, Kȟolá! Tókheškhe yaúŋ he?',
    context: 'A relative greets you at camp and asks how you are.',
    options: [
      'Taŋyáŋ waúŋ, philámayaye! Níš eníš?',
      'Wóta po!',
      'Tokša akhé',
      'Hiyá, wašté šni'
    ],
    correct: 0,
    explanation: '"Taŋyáŋ waúŋ, philámayaye! Níš eníš?" — I\'m doing well, thank you! And you? A warm, proper response to someone checking on you.'
  },
  {
    type: 'flashcard',
    situation: 'Háu! Tuwé ničá he?',
    context: 'Someone at camp asks who you are — introduce yourself.',
    response: '[Your name] emáčiyapi. Čhaŋté wašté napé čhiyúzapi.',
    responseEnglish: 'My name is [your name]. I shake your hand with a good heart.'
  },
  {
    type: 'multiple-choice',
    situation: 'Háŋ, takóža. Taŋyáŋ yahí!',
    context: 'A grandmother welcomes you: "Hello, grandchild. You arrived well!"',
    options: [
      'Háŋ, Uŋčí! Philámayaye — čhaŋté mašká!',
      'Hóka hé!',
      'Wóta po!',
      'Tukté he?'
    ],
    correct: 0,
    explanation: '"Háŋ, Uŋčí! Philámayaye — čhaŋté mašká!" — Hello, Grandmother! Thank you — my heart is happy! A loving greeting in return.'
  },
  // --- How are you / Checking in ---
  {
    type: 'flashcard',
    situation: 'Tókheškhe yaúŋ he?',
    context: 'Someone asks "How are you?"',
    response: 'Taŋyáŋ waúŋ. Aŋpétu wašté!',
    responseEnglish: 'I\'m doing well. It\'s a beautiful day!'
  },
  {
    type: 'multiple-choice',
    situation: 'Lé aŋpétu wašté — tókheškhe yaúŋ he?',
    context: '"It\'s a good day — how are you doing?"',
    options: [
      'Hiyá',
      'Wóta wo',
      'Taŋyáŋ waúŋ, philámayaye!',
      'Tokša akhé'
    ],
    correct: 2,
    explanation: '"Taŋyáŋ waúŋ, philámayaye!" — I\'m well, thank you! A natural, grateful response.'
  },
  // --- Offering to help ---
  {
    type: 'flashcard',
    situation: 'Míni yačhíŋ he?',
    context: 'Someone asks "Do you want water?"',
    response: 'Háŋ, philámayaye! Míni wašté.',
    responseEnglish: 'Yes, thank you! Water is good.'
  },
  {
    type: 'multiple-choice',
    situation: 'Čhaŋ aú po — ókhiyapi čha!',
    context: '"Bring firewood — we need help!"',
    options: [
      'Hiyá, bluzáhaŋ',
      'Oháŋ! Ówakhiye kte!',
      'Tokša akhé',
      'Wóta po'
    ],
    correct: 1,
    explanation: '"Oháŋ! Ówakhiye kte!" — Yes! I will help! Generosity and willingness to help is central to camp life.'
  },
  {
    type: 'flashcard',
    situation: 'Thípi kiŋ hé ečhúŋ po!',
    context: 'You\'re asked to help set up the tipi.',
    response: 'Oháŋ! Tókheškhe ečhámuŋ kte he?',
    responseEnglish: 'Yes! How should I do it? (Showing willingness and humility.)'
  },
  {
    type: 'multiple-choice',
    situation: 'Míni akú wo — wičhášta kiŋ ípuzapi.',
    context: '"Bring water — the men are thirsty."',
    options: [
      'Oháŋ, míni awakú kte!',
      'Hiyá, owákhi šni',
      'Mitákuye Oyásʼiŋ',
      'Wóphila tȟáŋka'
    ],
    correct: 0,
    explanation: '"Oháŋ, míni awakú kte!" — Yes, I will bring water! At Sundance, supporters bring water to those who need it — a sacred act of service.'
  },
  // --- Prayer moments ---
  {
    type: 'multiple-choice',
    situation: 'Wóčhekiye kiŋ hená — oúŋspe tȟáŋka.',
    context: 'An elder says: "Those prayers — great teachings." How do you acknowledge this?',
    options: [
      'Háŋ, háŋ... héčhetu yeló.',
      'Wóta po!',
      'Tukté he?',
      'Tokša akhé'
    ],
    correct: 0,
    explanation: '"Háŋ, háŋ... héčhetu yeló." — Yes, yes... that is so. Active listening and quiet affirmation during teachings shows deep respect.'
  },
  {
    type: 'flashcard',
    situation: 'Wóčhekiye kiŋ iháŋke — nitȟúŋwaŋ.',
    context: 'The prayer is ending. Everyone looks to you.',
    response: 'Mitákuye Oyásʼiŋ.',
    responseEnglish: 'We are all related. (Said together at the close of every prayer.)'
  },
  {
    type: 'multiple-choice',
    situation: 'Wakȟáŋ Tȟáŋka uŋsímala yo — lé aŋpétu wašté.',
    context: '"Great Spirit, have pity on us — this is a good day." What do you say at the end?',
    options: [
      'Philámayaye',
      'Mitákuye Oyásʼiŋ',
      'Háu, Kȟolá',
      'Wóta wo'
    ],
    correct: 1,
    explanation: '"Mitákuye Oyásʼiŋ" — We are all related. The phrase that closes every prayer and holds the entire Lakota worldview.'
  },
  // --- Encouragement at the arbor ---
  {
    type: 'multiple-choice',
    situation: 'Wačhípi kiŋ — wičháša waŋ khuží.',
    context: 'During the dance, a dancer is struggling. What do you call out?',
    options: [
      'Tokša akhé!',
      'Hóka hé! Wačhíŋtȟaŋka yo!',
      'Taŋyáŋ waúŋ',
      'Philámayaye'
    ],
    correct: 1,
    explanation: '"Hóka hé! Wačhíŋtȟaŋka yo!" — Let\'s go! Be strong! Your voice lifts the dancer when they need it most.'
  },
  {
    type: 'flashcard',
    situation: 'Wačhípi kiŋ — škaŋškaŋ!',
    context: 'The dance is intense — everyone is calling out encouragement.',
    response: 'Hóka hé! Íyohlate! Wačhíŋtȟaŋka yo!',
    responseEnglish: 'Let\'s go! You can do it! Be strong! (Encouragement for the dancers.)'
  },
  // --- Mealtime ---
  {
    type: 'multiple-choice',
    situation: 'Wóyute kiŋ — íyehaŋtu!',
    context: '"The food — it\'s time!" Everyone is called to eat.',
    options: [
      'Hiyá, wašté šni',
      'Tokša akhé',
      'Wóta po! Philámayaye!',
      'Tukté he?'
    ],
    correct: 2,
    explanation: '"Wóta po! Philámayaye!" — Eat, everyone! Thank you! At Sundance, meals are communal and gratitude is always expressed.'
  },
  {
    type: 'flashcard',
    situation: 'Wóyute kiŋ wašté — tuwé káǧe he?',
    context: '"The food is good — who made it?"',
    response: 'Wóyute kiŋ lílá wašté! Philámayaye!',
    responseEnglish: 'The food is very good! Thank you! (Always express gratitude for the cooks.)'
  },
  // --- Gratitude & Farewell ---
  {
    type: 'multiple-choice',
    situation: 'Yahé kte he? Tokša akhé, Kȟolá.',
    context: '"Are you leaving? See you again, friend."',
    options: [
      'Háu — wóta wo!',
      'Tokša akhé, Mitákuye Oyásʼiŋ. Thečhíȟilapi.',
      'Hóka hé!',
      'Tukté he?'
    ],
    correct: 1,
    explanation: '"Tokša akhé, Mitákuye Oyásʼiŋ. Thečhíȟilapi." — See you again, all my relatives. I love you all. The most heartfelt Lakota farewell.'
  },
  {
    type: 'flashcard',
    situation: 'Wóphila tȟáŋka — lé Wiwáŋyaŋg Wačhípi wašté.',
    context: 'An elder expresses deep gratitude: "Great thanks — this was a good Sundance."',
    response: 'Háŋ, Tȟuŋkášila. Wóphila tȟáŋka. Čhaŋté wašté yá yo.',
    responseEnglish: 'Yes, Grandfather. Deep gratitude. Go with a good heart.'
  },
];
