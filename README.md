# Rock Paper Scissors Game

Deployed at: https://rock-paper-scissor-ebon-ten.vercel.app/ and https://nigam1010.github.io/rock-paper-scissor/

A modern, interactive Rock Paper Scissors game built with vanilla JavaScript, HTML5, and CSS3.

## Features

- **Three Game Screens**
  - Main game screen with triangle button layout
  - Result screen showing player vs computer choices
  - Winner celebration screen with animated stars and trophy

- **Score Tracking**
  - Persistent score storage using localStorage
  - Separate score displays for computer and player
  - Scores persist across page reloads

- **Visual Effects**
  - Animated glowing effect on winning choice
  - Pulsing animations on winner screen
  - Smooth transitions between screens
  - Interactive hover effects on buttons

- **Game Rules**
  - Always-visible rules panel on game screen
  - Toggle rules popup with button
  - Clear, bulleted rule descriptions

- **Responsive Design**
  - Triangle layout with connecting lines
  - Figma-exact positioning
  - Custom color scheme with themed buttons
  - Professional typography with Roboto font

## How to Play

1. Choose Rock, Paper, or Scissors from the triangle layout
2. The computer will randomly select its choice
3. See the result - Win, Lose, or Tie
4. Scores update automatically
5. Click "NEXT" after winning to see the celebration screen
6. Click "PLAY AGAIN" to continue playing

## Game Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock
- If both players choose the same, it's a tie

## Technologies Used

- HTML5
- CSS3 (with animations and transitions)
- Vanilla JavaScript (ES6+)
- LocalStorage API
- SVG graphics

## File Structure

```
rock-paper-scissor/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Game logic and functionality
├── assets/
│   ├── rock.svg       # Rock icon
│   ├── paper.svg      # Paper icon
│   └── scissors.svg   # Scissors icon
└── README.md          # This file
```

## Setup

1. Clone the repository
```bash
git clone https://github.com/nigam1010/rock-paper-scissor.git
```

2. Open `index.html` in your browser
```bash
cd rock-paper-scissor
open index.html
```

No build process or dependencies required!

## Color Scheme

- Background: `#8CC461` (Green)
- Rock Button: `#0074B6` (Blue)
- Scissors Button: `#BD00FF` (Purple)
- Paper Button: `#FFA943` (Orange)
- Rules Panel: `#004429` (Dark Green)
- Accent: `#FFD600` (Yellow)

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

Free to use and modify.

## Author

Karinigam S A

Created as part of a JavaScript module project.

---

Enjoy playing! 🎮
