# 🐦 Flappy Paddle Bird Game

A fun and interactive Flappy Bird variant built with vanilla HTML, CSS, and JavaScript. Play against an AI opponent and try to score more points!

## 🎮 Game Overview

Flappy Paddle Bird is a hybrid game combining Flappy Bird mechanics with Pong-style paddle gameplay. Control your paddle to hit the bird and earn points while the AI opponent tries to do the same!

## ✨ Features

- 🐦 **Animated Bird** - A fluttering bird with realistic gravity physics
- 🎯 **Collision Detection** - Precise detection for paddles, walls, and ball boundaries
- 🤖 **AI Opponent** - Intelligent computer-controlled paddle that adapts to the bird's position
- 📊 **Real-time Scoreboard** - Track scores for both player and AI
- 🎨 **Beautiful UI** - Gradient backgrounds, smooth animations, and modern styling
- ⌨️ **Dual Controls** - Mouse or keyboard (Arrow Keys) support
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🎮 **Easy to Learn** - Simple controls but challenging gameplay

## 🚀 How to Play

### Getting Started
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Press **SPACE** to start the game

### Controls
- **Move Paddle Up**: Move mouse up OR press ⬆️ Arrow Key
- **Move Paddle Down**: Move mouse down OR press ⬇️ Arrow Key
- **Start Game**: Press **SPACE**
- **Restart Game**: Press **SPACE** after game over

### Objective
- Hit the bird with your paddle (left side) to score points
- Prevent the AI from scoring by dodging the bird
- Game ends when the bird hits the top/bottom walls or goes out of bounds
- Try to outscore the computer!

## 📁 Project Structure

## 📝 Game Mechanics

### Physics
- **Gravity**: Bird falls naturally due to gravity (0.3 pixels/frame²)
- **Momentum**: Bird velocity increases when hit by paddles
- **Friction**: Smooth deceleration as the bird falls

### Scoring
- **Player Score**: Increases by 1 when left paddle hits the bird
- **Computer Score**: Increases by 1 when right paddle hits the bird
- **Game Over**: Triggered when bird collides with walls or exits the game board

### Collision Detection
- **Paddle Collision**: Checks if bird intersects with paddle bounds
- **Wall Collision**: Detects when bird touches top or bottom walls
- **Out of Bounds**: Ends game if bird leaves left or right edges

### AI Algorithm
The computer paddle uses a simple tracking algorithm:
- Calculates target position based on bird's Y-coordinate
- Smoothly moves towards the target position
- Moves at fixed speed (5 pixels/frame) for balanced difficulty

## 🎨 Customization

You can easily customize the game by editing constants in `script.js`:

```javascript
const BOARD_WIDTH = gameBoard.offsetWidth;
const BOARD_HEIGHT = gameBoard.offsetHeight;
const PADDLE_HEIGHT = 80;              // Change paddle size
const BIRD_SPEED = 5;                  // Change bird horizontal speed
const PADDLE_SPEED = 6;                // Change player paddle speed
const AI_SPEED = 5;                    // Change AI difficulty
const birdGravity = 0.3;              // Change gravity effect
Styling Customization
Edit styles.css to change:
Colors and gradients
Font sizes
Paddle dimensions
Animation speeds
Responsive breakpoints
🛠️ Technologies Used
HTML5 - Semantic markup and structure
CSS3 - Modern styling with gradients and animations
JavaScript (Vanilla) - No frameworks, pure game logic
RequestAnimationFrame - Smooth game loop for 60 FPS gameplay
📊 Game Variables
Variable	Purpose
birdX, birdY	Bird position on the board
birdVelocityX, birdVelocityY	Bird movement speed
leftPaddleY	Player's paddle position
rightPaddleY	AI paddle position
playerScore	Player's current score
computerScore	AI's current score
gameRunning	Game state flag
🎯 Game States
Idle - Waiting for player to press SPACE
Running - Active gameplay
Game Over - Bird hit wall or went out of bounds
Restart - Ready to press SPACE again
💡 Tips for Playing
🎯 Position Early - Move your paddle ahead of where the bird will be
📏 Use the Center - Keep your paddle in the middle-upper area for better coverage
⏱️ React Quickly - The bird's speed increases with paddle hits
🧠 Predict AI - Learn the AI's movement patterns to anticipate shots
🎮 Practice - Each game improves your muscle memory
🐛 Known Limitations
AI difficulty is fixed (cannot be adjusted mid-game)
No sound effects (can be added as enhancement)
No difficulty levels
No multiplayer support (yet!)
🚀 Future Enhancements
 Sound effects and background music
 Multiple difficulty levels
 Power-ups and special effects
 Leaderboard system
 Two-player multiplayer mode
 Mobile touch controls
 Game pause feature
 Particle effects
📱 Browser Compatibility
Chrome/Chromium ✅
Firefox ✅
Safari ✅
Edge ✅
Mobile browsers ✅
📄 License
This project is open source and available for personal and educational use.

🤝 Contributing
Feel free to fork this project and submit pull requests with improvements!

👨‍💻 Author
Created by theanuragkushwaha

📞 Support
If you encounter any issues or have suggestions, feel free to open an issue on GitHub!

Enjoy the game! 🎮 Happy flapping! 🐦
