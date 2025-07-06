const N = 3; // 3x3 grid
const puzzle = document.getElementById('puzzle');
const resetBtn = document.getElementById('resetBtn');
const imgInput = document.getElementById('imgInput');
const winMsg = document.getElementById('winMsg');
let pieces = [];
let imgSrc = 'sample.jpg';

function createPieces(image) {
  pieces = [];
  for (let i = 0; i < N * N; i++) {
    pieces.push(i);
  }
  shuffle(pieces);
  renderPuzzle(image);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function renderPuzzle(image) {
  puzzle.innerHTML = '';
  puzzle.style.gridTemplateColumns = `repeat(${N}, 100px)`;
  puzzle.style.gridTemplateRows = `repeat(${N}, 100px)`;
  pieces.forEach((pieceIdx, i) => {
    const piece = document.createElement('div');
    piece.className = 'puzzle-piece';
    piece.draggable = true;
    const x = pieceIdx % N;
    const y = Math.floor(pieceIdx / N);
    piece.style.backgroundImage = `url('${image}')`;
    piece.style.backgroundPosition = `-${x * 100}px -${y * 100}px`;
    piece.dataset.index = i;
    piece.dataset.piece = pieceIdx;
    piece.addEventListener('dragstart', handleDragStart);
    piece.addEventListener('dragover', e => e.preventDefault());
    piece.addEventListener('drop', handleDrop);
    puzzle.appendChild(piece);
  });
}

let dragSrcIdx = null;
function handleDragStart(e) {
  dragSrcIdx = +this.dataset.index;
  this.classList.add('dragging');
}
function handleDrop(e) {
  const targetIdx = +this.dataset.index;
  [pieces[dragSrcIdx], pieces[targetIdx]] = [pieces[targetIdx], pieces[dragSrcIdx]];
  renderPuzzle(imgSrc);
  if (isSolved()) {
    winMsg.style.display = '';
  } else {
    winMsg.style.display = 'none';
  }
}

function isSolved() {
  return pieces.every((val, idx) => val === idx);
}

resetBtn.onclick = () => {
  winMsg.style.display = 'none';
  createPieces(imgSrc);
};

imgInput.onchange = e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (evt) {
    imgSrc = evt.target.result;
    createPieces(imgSrc);
  };
  reader.readAsDataURL(file);
};

// Initial load
window.onload = () => {
  createPieces(imgSrc);
};
