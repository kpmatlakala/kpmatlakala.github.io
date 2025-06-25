const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const GRID_SIZE = 10;
const CELL_SIZE = 36;
function getBoardOffset() {
  // Center horizontally, align to top with padding
  const offsetX = Math.floor((canvas.width - GRID_SIZE * CELL_SIZE) / 2);
  const offsetY = 20; // 20px padding from the top
  return { x: offsetX, y: offsetY };
}
let board = [];
let score = 0;
let currentPieces = [];
let draggingPiece = null;
let dragOffset = { x: 0, y: 0 };
let isRunning = false;
let gameMode = 'survival'; // 'classic' or 'survival'

const PIECES = [
  // Single block
  [[1]],
  // 2-block line
  [[1, 1]],
  // 3-block line
  [[1, 1, 1]],
  // 4-block line
  [[1, 1, 1, 1]],
  // 2x2 square
  [[1, 1], [1, 1]],
  // L-shape
  [[1, 0], [1, 0], [1, 1]],
  // T-shape
  [[1, 1, 1], [0, 1, 0]],
  // S-shape
  [[0, 1, 1], [1, 1, 0]],
  // Z-shape
  [[1, 1, 0], [0, 1, 1]]
];

// Utility functions for piece transformations
function rotateMatrix(matrix) {
  // Rotate 90 degrees clockwise
  return matrix[0].map((_, i) => matrix.map(row => row[i]).reverse());
}
function flipMatrixH(matrix) {
  // Flip horizontally
  return matrix.map(row => row.slice().reverse());
}
function flipMatrixV(matrix) {
  // Flip vertically
  return matrix.slice().reverse();
}
function matrixToString(matrix) {
  return matrix.map(row => row.join('')).join('|');
}
function getAllUniqueVariations(matrix) {
  const variations = [];
  const seen = new Set();
  let current = matrix;
  for (let rot = 0; rot < 4; rot++) {
    // Rotate
    if (rot > 0) current = rotateMatrix(current);
    // Add original rotation
    [current, flipMatrixH(current), flipMatrixV(current)].forEach(variant => {
      const key = matrixToString(variant);
      if (!seen.has(key)) {
        seen.add(key);
        variations.push(JSON.parse(JSON.stringify(variant)));
      }
    });
  }
  return variations;
}

// Precompute all unique variations for all base pieces
const PIECE_VARIATIONS = [];
for (const base of PIECES) {
  PIECE_VARIATIONS.push(...getAllUniqueVariations(base));
}

function resetBoard() {
  board = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0));
}

function randomPiece() {
  // Pick a random variation from all possible unique piece orientations
  return JSON.parse(JSON.stringify(PIECE_VARIATIONS[Math.floor(Math.random() * PIECE_VARIATIONS.length)]));
}

function spawnPieces() {
  currentPieces = [randomPiece(), randomPiece(), randomPiece()];
  checkGameOver();
}

function drawBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const offset = getBoardOffset();
  // Draw grid
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      ctx.strokeStyle = '#555';
      ctx.strokeRect(offset.x + c * CELL_SIZE, offset.y + r * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      if (board[r][c]) {
        ctx.fillStyle = '#00e1ff';
        ctx.fillRect(offset.x + c * CELL_SIZE + 2, offset.y + r * CELL_SIZE + 2, CELL_SIZE - 4, CELL_SIZE - 4);
      }
    }
  }
}

function drawPieces() {
  // Draw the 3 available pieces at the bottom, scaled down
  const previewScale = 0.5;
  for (let i = 0; i < currentPieces.length; i++) {
    let piece = currentPieces[i];
    let px = 30 + i * 120;
    let py = 420;
    drawPiece(piece, px, py, i === draggingPiece?.index ? draggingPiece.offset : { x: 0, y: 0 }, false, previewScale);
  }
  // Draw dragging piece on top (full size)
  if (draggingPiece) {
    drawPiece(draggingPiece.piece, draggingPiece.x, draggingPiece.y, { x: 0, y: 0 }, true, 1);
  }
}

function drawPiece(piece, px, py, offset = { x: 0, y: 0 }, isDragging = false, scale = 1) {
  for (let r = 0; r < piece.length; r++) {
    for (let c = 0; c < piece[r].length; c++) {
      if (piece[r][c]) {
        ctx.fillStyle = isDragging ? '#f39c12' : '#fff';
        ctx.fillRect(px + c * CELL_SIZE * scale + offset.x, py + r * CELL_SIZE * scale + offset.y, (CELL_SIZE - 4) * scale, (CELL_SIZE - 4) * scale);
        ctx.strokeStyle = '#333';
        ctx.strokeRect(px + c * CELL_SIZE * scale + offset.x, py + r * CELL_SIZE * scale + offset.y, (CELL_SIZE - 4) * scale, (CELL_SIZE - 4) * scale);
      }
    }
  }
}

function canPlace(piece, row, col) {
  for (let r = 0; r < piece.length; r++) {
    for (let c = 0; c < piece[r].length; c++) {
      if (piece[r][c]) {
        if (row + r < 0 || col + c < 0 || row + r >= GRID_SIZE || col + c >= GRID_SIZE || board[row + r][col + c]) return false;
      }
    }
  }
  return true;
}

function placePiece(piece, row, col) {
  for (let r = 0; r < piece.length; r++) {
    for (let c = 0; c < piece[r].length; c++) {
      if (piece[r][c]) {
        board[row + r][col + c] = 1;
      }
    }
  }
}

function clearLines() {
  let linesCleared = 0;
  // Rows
  for (let r = 0; r < GRID_SIZE; r++) {
    if (board[r].every(cell => cell)) {
      board[r] = Array(GRID_SIZE).fill(0);
      linesCleared++;
    }
  }
  // Columns
  for (let c = 0; c < GRID_SIZE; c++) {
    if (board.every(row => row[c])) {
      for (let r = 0; r < GRID_SIZE; r++) board[r][c] = 0;
      linesCleared++;
    }
  }
  score += linesCleared * 10;
  document.getElementById('score').textContent = score;
}

function getForecastOffset() {
  // Center the shadow under the mouse, but keep the offset less than 1 cell
  return 0.5;
}

function drawGhost() {
  if (!isRunning || !draggingPiece) return;
  // Calculate where the piece would be placed if dropped now
  const mouseX = draggingPiece.x + dragOffset.x;
  const mouseY = draggingPiece.y + dragOffset.y;
  const offset = getForecastOffset();
  const boardOffset = getBoardOffset();
  const gridX = mouseX - boardOffset.x - offset * CELL_SIZE;
  const gridY = mouseY - boardOffset.y - offset * CELL_SIZE;
  const col = Math.floor(gridX / CELL_SIZE) - draggingPiece.grabCell.c;
  const row = Math.floor(gridY / CELL_SIZE) - draggingPiece.grabCell.r;
  const valid = canPlace(draggingPiece.piece, row, col);
  ctx.save();
  ctx.globalAlpha = 0.4;
  for (let r = 0; r < draggingPiece.piece.length; r++) {
    for (let c = 0; c < draggingPiece.piece[r].length; c++) {
      if (draggingPiece.piece[r][c]) {
        ctx.fillStyle = valid ? '#00e1ff' : '#ff0033';
        ctx.fillRect(boardOffset.x + (col + c) * CELL_SIZE + 2, boardOffset.y + (row + r) * CELL_SIZE + 2, CELL_SIZE - 4, CELL_SIZE - 4);
      }
    }
  }
  ctx.restore();
}

function draw() {
  drawBoard();
  drawGhost();
  drawPieces();
}

canvas.addEventListener('mousedown', (e) => {
  if (!isRunning) return;
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  const previewScale = 0.5;
  for (let i = 0; i < currentPieces.length; i++) {
    let piece = currentPieces[i];
    let px = 30 + i * 120;
    let py = 420;
    for (let r = 0; r < piece.length; r++) {
      for (let c = 0; c < piece[r].length; c++) {
        let bx = px + c * CELL_SIZE * previewScale;
        let by = py + r * CELL_SIZE * previewScale;
        if (mx > bx && mx < bx + (CELL_SIZE - 4) * previewScale && my > by && my < by + (CELL_SIZE - 4) * previewScale) {
          // When picking up, convert the preview position to full scale for dragging
          const fullX = px + c * CELL_SIZE;
          const fullY = py + r * CELL_SIZE;
          draggingPiece = {
            piece: JSON.parse(JSON.stringify(piece)),
            index: i,
            x: fullX,
            y: fullY,
            offset: { x: 0, y: 0 },
            grabCell: { r, c },
            origin: { px, py },
            scale: 1 // Drag at full scale
          };
          dragOffset = { x: mx - bx, y: my - by };
          return;
        }
      }
    }
  }
});

canvas.addEventListener('mousemove', (e) => {
  if (draggingPiece) {
    const rect = canvas.getBoundingClientRect();
    draggingPiece.x = e.clientX - rect.left - dragOffset.x;
    draggingPiece.y = e.clientY - rect.top - dragOffset.y;
    draw();
  }
});

canvas.addEventListener('mouseup', (e) => {
  if (draggingPiece) {
    const rect = canvas.getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;
    const offset = getForecastOffset();
    const boardOffset = getBoardOffset();
    let gridX = mouseX - boardOffset.x - offset * CELL_SIZE;
    let gridY = mouseY - boardOffset.y - offset * CELL_SIZE;
    let col = Math.floor(gridX / CELL_SIZE) - draggingPiece.grabCell.c;
    let row = Math.floor(gridY / CELL_SIZE) - draggingPiece.grabCell.r;
    if (canPlace(draggingPiece.piece, row, col)) {
      placePiece(draggingPiece.piece, row, col);
      clearLines();
      currentPieces.splice(draggingPiece.index, 1);
      if (currentPieces.length === 0) spawnPieces();
      checkGameOver();
    }
    draggingPiece = null;
    draw();
  }
});

document.getElementById('playBtn').addEventListener('click', startGame);

function startGame() {
  score = 0;
  document.getElementById('score').textContent = score;
  resetBoard();
  spawnPieces();
  isRunning = true;
  draw();
  checkGameOver();
}

// Add start button logic
window.addEventListener('DOMContentLoaded', () => {
  const startBtns = document.querySelector('.start-btns');
  const classicBtn = document.getElementById('classicStartBtn');
  const survivalBtn = document.getElementById('survivalStartBtn');
  const canvas = document.getElementById('gameCanvas');
  if (classicBtn && canvas) {
    classicBtn.addEventListener('click', () => {
      gameMode = 'classic';
      startBtns.style.display = 'none';
      canvas.style.display = '';
      startGame();
    });
  }
  if (survivalBtn && canvas) {
    survivalBtn.addEventListener('click', () => {
      gameMode = 'survival';
      startBtns.style.display = 'none';
      canvas.style.display = '';
      startGame();
    });
  }
});

// Initialize
resetBoard();
spawnPieces();
draw();

function hasAnyValidMove() {
  for (const piece of currentPieces) {
    for (let row = -piece.length + 1; row < GRID_SIZE; row++) {
      for (let col = -piece[0].length + 1; col < GRID_SIZE; col++) {
        if (canPlace(piece, row, col)) {
          return true;
        }
      }
    }
  }
  return false;
}

function checkGameOver() {
  if (gameMode === 'survival' && !hasAnyValidMove()) {
    isRunning = false;
    setTimeout(() => alert('Game Over!'), 100);
  }
} 