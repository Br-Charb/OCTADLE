# OCTADLE 🥊

A daily UFC fighter guessing game inspired by Wordle. Test your MMA knowledge by identifying the mystery fighter through strategic guesses!

![OCTADLE Gameplay](.<img width="1580" height="917" alt="OCTADLE_screen_shot" src="https://github.com/user-attachments/assets/9d8af396-5ec8-4eb7-baeb-0114956fc0cc" />)

## 🎮 How to Play

Each day, a new UFC fighter is selected as the mystery fighter. You have **8 attempts** to guess correctly.

After each guess, you'll receive color-coded feedback:
- 🟢 **Green** - Exact match
- 🟡 **Yellow** - Close (within range)
- 🔴 **Red** - Incorrect

### Clues Provided:
- **Name** - Fighter's full name with image
- **Nationality** - Country flag
- **Weight Class** - Division (Strawweight to Heavyweight)
- **Age** - Current age in years
- **Height** - Height in feet and inches
- **Wins** - Total career wins
- **Peak Rank** - Highest UFC ranking achieved
- **Last Fight** - Most recent fight card

Directional arrows appear on numerical stats to guide you higher or lower!

## 🚀 Features

- ⏱️ **Live Timer** - Track your solving speed
- 🔍 **Smart Search** - Autocomplete fighter names as you type
- 👤 **Silhouette Mode** - Toggle between hidden and revealed fighter
- 📊 **Visual Feedback** - Color-coded hints with directional arrows
- 🗃️ **Extensive Database** - 242+ UFC fighters (active & retired legends)
- 🎯 **Daily Challenge** - New mystery fighter every day (coming soon with backend)

## 🛠️ Tech Stack

### Frontend
- React
- JavaScript (ES6+)
- CSS3 (Custom gradients & animations)
- Custom fonts (DirtyBrush, PersonaAura)

### Backend *(Coming Soon)*
- Database integration for daily fighter rotation
- User statistics & streak tracking
- Global leaderboards
- Social sharing features

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/Br-Charb/octadle.git
cd octadle
```

2. **Install dependencies**
```bash
cd frontend
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Open in browser**
```
http://localhost:3000
```

## 📁 Project Structure
```
octadle/
├── frontend/
│   ├── public/
│   │   ├── data/
│   │   │   └── FighterInfo.json          # Fighter database
│   │   └── images/
│   │       ├── fighterImages/            # Fighter photos
│   │       ├── flags/                    # Country flags
│   │       └── general/                  # UI assets
│   └── src/
│       ├── components/
│       │   ├── Title.js                  # Game header
│       │   ├── GuessBar.js               # Input & autocomplete
│       │   ├── GuessSlot.js              # Guess row wrapper
│       │   ├── Fighter.js                # Fighter info display
│       │   ├── StatBox.js                # Individual stat box
│       │   ├── GameOver.js               # Results popup
│       │   ├── Timer.js                  # Game timer
│       │   └── UnattemptedGuess.js       # Empty guess row
│       ├── App.js                        # Main app logic
│       ├── App.css                       # Styles
│       └── index.js                      # React entry point
└── README.md
```

## 🎯 Game Mechanics

### Matching Logic

| Category | Green (Exact) | Yellow (Close) | Red (Wrong) |
|----------|---------------|----------------|-------------|
| Name | Exact match | N/A | Different fighter |
| Nationality | Same country | N/A | Different country |
| Weight Class | Same division | ±3 divisions | >3 divisions away |
| Age | Same age | ±3 years | >3 years away |
| Height | Same height | ±3 inches | >3 inches away |
| Wins | Same wins | ±3 wins | >3 wins away |
| Peak Rank | Same rank | ±3 positions | >3 positions away |
| Last Fight | Same date | ±3 months | >3 months away |

### Special Features
- **Arrows**: Up/down arrows indicate if you should guess higher or lower
- **Silhouette**: View the mystery fighter as a silhouette before completing the game
- **Streak System**: *(Coming soon)* Track consecutive daily wins

## 🏗️ Roadmap

### Phase 1: Backend Integration
- [ ] Node.js/Express API
- [ ] PostgreSQL database
- [ ] Daily fighter rotation system
- [ ] RESTful endpoints

### Phase 2: User Features
- [ ] User authentication (OAuth)
- [ ] Personal statistics dashboard
- [ ] Win streak tracking
- [ ] Game history

### Phase 3: Social Features
- [ ] Share results (spoiler-free)
- [ ] Historical archives

## 🐛 Known Issues

- Random fighter selection (will be fixed with backend)
- No persistence between sessions
- Timer doesn't save on refresh

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ben Charb**

- GitHub: [@Br-Charb](https://github.com/Br-Charb)
- LinkedIn: [Ben Charb](https://www.linkedin.com/in/ben-charb/)

## 🙏 Acknowledgments

- **Wordle** - For the game concept inspiration
- **UFC** - For creating an amazing sport

## ⚠️ Disclaimer

This is a fan-made project and is not officially affiliated with or endorsed by the Ultimate Fighting Championship (UFC). All fighter names, images, and statistics are used for educational and entertainment purposes only.

---
