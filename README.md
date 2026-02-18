# ⚡ Wakíŋyaŋ Wóuŋspe — Thunder Being's Teachings

A Lakota language learning app built with love and respect for our relatives. Walk the Red Road of Lakȟótiyapi and arrive at Sundance ready.

## About

This is a free, static website for learning conversational Lakota in a spiritually grounded, informal environment. Built using best practices from language learning programs like Babbel, Pimsleur, and Indigenous language revitalization efforts.

**Goal:** Complete 8 modules and be ready to participate meaningfully at Sundance by July 2026.

## Features

- 🎯 **Module-based lessons** — 8 modules from greetings to Sundance readiness
- 🔊 **Audio pronunciation** — Hear how words and phrases sound (recordings needed)
- 📊 **Progress tracking** — Your progress saves locally in your browser
- 🪶 **Cultural context** — Every lesson is grounded in Lakota culture and values
- 📱 **Mobile-friendly** — Works great on phones
- ⚡ **No account needed** — Just open the site and start learning

## Getting Started

### View the app
Visit: `https://[your-username].github.io/wakinyan-woonspe/`

### Run locally
1. Clone this repo
2. Open `index.html` in your browser (or use a local server)

```bash
# Option 1: Just open the file
open index.html

# Option 2: Use Python's built-in server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Project Structure

```
wakinyan-woonspe/
├── index.html          # Main app shell
├── css/
│   └── styles.css      # All styles — Wakinyan storm aesthetic
├── js/
│   ├── app.js          # App controller & routing
│   ├── lessons.js      # Lesson/exercise engine
│   ├── progress.js     # localStorage progress tracking
│   └── audio.js        # Audio playback helpers
├── data/
│   └── modules.js      # All module & lesson content
├── audio/              # Audio recordings (add your own!)
│   └── (empty — add .mp3 files here)
└── README.md
```

## Adding Content

All lesson content lives in `data/modules.js`. Each module has lessons, and each lesson has exercises.

### Exercise Types

| Type | Description |
|------|-------------|
| `cultural-note` | Read-only cultural context (no quiz) |
| `multiple-choice` | Choose the correct answer from 4 options |
| `listen-identify` | See a Lakota word, identify the meaning |
| `match` | Match Lakota words to English translations |
| `fill-blank` | Complete a phrase by typing |

### Adding a new exercise

```javascript
{
  type: 'multiple-choice',
  prompt: 'What does "Háu" mean?',
  options: ['Goodbye', 'Hello (men)', 'Thank you', 'Yes'],
  correct: 1,  // Index of correct option (0-based)
  explanation: 'Háu is the greeting used by men.'
}
```

## Adding Audio

1. Record .mp3 files of native speakers pronouncing words/phrases
2. Place them in the `audio/` folder organized by module
3. The app will play them when the 🔊 button is pressed

## Orthography

This app uses **Standard Lakota Orthography (SLO)** as established by the Lakota Language Consortium. Special characters include: ȟ, ŋ, č, š, ž, ǧ

## Credits & Resources

- [Lakota Language Consortium (lakhota.org)](https://lakhota.org/) — The gold standard for Lakota learning materials
- [New Lakota Dictionary](https://lakhota.org/new-lakota-dictionary-app-iphone-android/) — Essential reference
- Built with love for our Lakota relatives

## Contributing

This app is for our friends and family. If you want to help:
- Record pronunciation audio
- Review content for accuracy
- Add lessons to Modules 2–8
- Report issues

## License

This is a personal project for our community. Please respect Lakota language and culture.

---

**Mitákuye Oyásʼiŋ** — We are all related. ⚡
