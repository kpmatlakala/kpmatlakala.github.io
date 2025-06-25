const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game variables
let score = 0;
let lives = 3;
let isRunning = false;

// Paddle
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

// Ball
const ballRadius = 8;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

// Bricks
const brickRowCount = 5;
const brickColumnCount = 7;
const brickWidth = 55;
const brickHeight = 18;
const brickPadding = 8;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
let bricks = [];

function initBricks() {
  bricks = [];
  for(let c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(let r=0; r<brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
  }
}

function drawBricks() {
  for(let c=0; c<brickColumnCount; c++) {
    for(let r=0; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        let brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
        let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = '#f39c12';
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = '#00e1ff';
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight-5, paddleWidth, paddleHeight);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.closePath();
}

function drawScore() {
  document.getElementById('score').textContent = score;
}

function drawLives() {
  document.getElementById('lives').textContent = lives;
}

function collisionDetection() {
  for(let c=0; c<brickColumnCount; c++) {
    for(let r=0; r<brickRowCount; r++) {
      let b = bricks[c][r];
      if(b.status == 1) {
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
          dy = -dy;
          b.status = 0;
          score++;
          drawScore();
          if(score == brickRowCount*brickColumnCount) {
            setTimeout(()=>alert('YOU WIN!'), 100);
            isRunning = false;
          }
        }
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  collisionDetection();
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy < ballRadius) {
    dy = -dy;
  } else if(y + dy > canvas.height-ballRadius-paddleHeight-5) {
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else if(y + dy > canvas.height-ballRadius) {
      lives--;
      drawLives();
      if(!lives) {
        setTimeout(()=>alert('GAME OVER'), 100);
        isRunning = false;
      } else {
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 2;
        dy = -2;
        paddleX = (canvas.width-paddleWidth)/2;
      }
    }
  }
  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 5;
  } else if(leftPressed && paddleX > 0) {
    paddleX -= 5;
  }
  x += dx;
  y += dy;
  if(isRunning) {
    requestAnimationFrame(draw);
  }
}

document.addEventListener('keydown', (e) => {
  if(e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if(e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
});
document.addEventListener('keyup', (e) => {
  if(e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if(e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
});

document.getElementById('playBtn').addEventListener('click', startGame);

function startGame() {
  score = 0;
  lives = 3;
  x = canvas.width/2;
  y = canvas.height-30;
  dx = 2;
  dy = -2;
  paddleX = (canvas.width-paddleWidth)/2;
  drawScore();
  drawLives();
  initBricks();
  isRunning = true;
  draw();
}

// Initialize UI
drawScore();
drawLives();
initBricks();
draw(); 