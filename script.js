// Game Variables
const gameBoard = document.getElementById('gameBoard');
const bird = document.getElementById('bird');
const leftPaddle = document.getElementById('leftPaddle');
const rightPaddle = document.getElementById('rightPaddle');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const gameStatus = document.getElementById('gameStatus');

const BOARD_WIDTH = gameBoard.offsetWidth;
const BOARD_HEIGHT = gameBoard.offsetHeight;
const PADDLE_HEIGHT = 80;
const PADDLE_WIDTH = 15;
const BIRD_SIZE = 30;
const BIRD_SPEED = 5;
const PADDLE_SPEED = 6;
const AI_SPEED = 5;

let birdX = BOARD_WIDTH / 2;
let birdY = BOARD_HEIGHT / 2;
let birdVelocityX = BIRD_SPEED;
let birdVelocityY = 0;
let birdGravity = 0.3;

let leftPaddleY = BOARD_HEIGHT / 2 - PADDLE_HEIGHT / 2;
let rightPaddleY = BOARD_HEIGHT / 2 - PADDLE_HEIGHT / 2;

let playerScore = 0;
let computerScore = 0;
let gameRunning = false;
let gameOver = false;

let mouseY = BOARD_HEIGHT / 2;
let upPressed = false;
let downPressed = false;

// Event Listeners
document.addEventListener('mousemove', (e) => {
    const rect = gameBoard.getBoundingClientRect();
    mouseY = e.clientY - rect.top;
});

document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        e.preventDefault();
        if (!gameRunning) {
            startGame();
        } else if (gameOver) {
            resetGame();
        }
    }
    if (e.key === 'ArrowUp') upPressed = true;
    if (e.key === 'ArrowDown') downPressed = true;
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp') upPressed = false;
    if (e.key === 'ArrowDown') downPressed = false;
});

// Game Functions
function startGame() {
    gameRunning = true;
    gameOver = false;
    gameStatus.innerHTML = '<p>Game Running...</p>';
    gameLoop();
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    birdX = BOARD_WIDTH / 2;
    birdY = BOARD_HEIGHT / 2;
    birdVelocityX = BIRD_SPEED;
    birdVelocityY = 0;
    leftPaddleY = BOARD_HEIGHT / 2 - PADDLE_HEIGHT / 2;
    rightPaddleY = BOARD_HEIGHT / 2 - PADDLE_HEIGHT / 2;
    gameOver = false;
    updateScoreboard();
    startGame();
}

function updateLeftPaddle() {
    // Control with mouse or arrow keys
    if (upPressed && leftPaddleY > 0) {
        leftPaddleY -= PADDLE_SPEED;
    }
    if (downPressed && leftPaddleY < BOARD_HEIGHT - PADDLE_HEIGHT) {
        leftPaddleY += PADDLE_SPEED;
    }

    // Mouse control (smoothly follow mouse)
    const targetY = Math.max(0, Math.min(mouseY - PADDLE_HEIGHT / 2, BOARD_HEIGHT - PADDLE_HEIGHT));
    leftPaddleY += (targetY - leftPaddleY) * 0.1;

    // Clamp to board boundaries
    leftPaddleY = Math.max(0, Math.min(leftPaddleY, BOARD_HEIGHT - PADDLE_HEIGHT));
}

function updateRightPaddle() {
    // AI controls right paddle - follows the bird
    const aiTargetY = birdY - PADDLE_HEIGHT / 2;
    const distance = aiTargetY - rightPaddleY;

    if (Math.abs(distance) > 5) {
        if (distance > 0) {
            rightPaddleY += AI_SPEED;
        } else {
            rightPaddleY -= AI_SPEED;
        }
    }

    // Clamp to board boundaries
    rightPaddleY = Math.max(0, Math.min(rightPaddleY, BOARD_HEIGHT - PADDLE_HEIGHT));
}

function updateBird() {
    // Apply gravity
    birdVelocityY += birdGravity;

    // Update position
    birdX += birdVelocityX;
    birdY += birdVelocityY;

    // Wall collision detection
    if (birdY <= 0 || birdY + BIRD_SIZE >= BOARD_HEIGHT) {
        endGame('Bird hit the wall!');
        return;
    }

    // Left paddle collision
    if (
        birdX - BIRD_SIZE / 2 < 20 + PADDLE_WIDTH &&
        birdX + BIRD_SIZE / 2 > 20 &&
        birdY > leftPaddleY &&
        birdY + BIRD_SIZE < leftPaddleY + PADDLE_HEIGHT
    ) {
        birdVelocityX = BIRD_SPEED;
        birdX = 20 + PADDLE_WIDTH + BIRD_SIZE / 2;
        playerScore++;
        // Add some velocity based on where it hits the paddle
        birdVelocityY = (birdY - (leftPaddleY + PADDLE_HEIGHT / 2)) * 0.15;
    }

    // Right paddle collision
    if (
        birdX + BIRD_SIZE / 2 > BOARD_WIDTH - 20 - PADDLE_WIDTH &&
        birdX - BIRD_SIZE / 2 < BOARD_WIDTH - 20 &&
        birdY > rightPaddleY &&
        birdY + BIRD_SIZE < rightPaddleY + PADDLE_HEIGHT
    ) {
        birdVelocityX = -BIRD_SPEED;
        birdX = BOARD_WIDTH - 20 - PADDLE_WIDTH - BIRD_SIZE / 2;
        computerScore++;
        // Add some velocity based on where it hits the paddle
        birdVelocityY = (birdY - (rightPaddleY + PADDLE_HEIGHT / 2)) * 0.15;
    }

    // Ball out of bounds (scored)
    if (birdX < 0 || birdX > BOARD_WIDTH) {
        endGame('Ball went out of bounds!');
    }
}

function checkCollision() {
    // Additional collision checks if needed
}

function updateScoreboard() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function endGame(reason) {
    gameRunning = false;
    gameOver = true;
    gameStatus.innerHTML = `<p>Game Over! ${reason}</p><p>Player: ${playerScore} | Computer: ${computerScore}</p><p>Press SPACE to Restart</p>`;
}

function drawGame() {
    // Update positions
    bird.style.left = birdX + 'px';
    bird.style.top = birdY + 'px';
    leftPaddle.style.top = leftPaddleY + 'px';
    rightPaddle.style.top = rightPaddleY + 'px';

    // Update scoreboard
    updateScoreboard();
}

function gameLoop() {
    if (!gameRunning) return;

    updateLeftPaddle();
    updateRightPaddle();
    updateBird();
    drawGame();

    requestAnimationFrame(gameLoop);
}

// Initialize
gameStatus.innerHTML = '<p>Press SPACE to Start</p>';