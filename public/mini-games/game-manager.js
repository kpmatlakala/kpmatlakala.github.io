document.addEventListener('DOMContentLoaded', function () {
  const games = [
    {
      name: 'Memory Game',
      description: 'Test your memory with this classic card-matching game.',
      url: 'memory-game/index.html', 
      thumbnail: 'memory-game/thumbnail.jpg',     
      available: true
    },
    {
      name: 'Jigsaw',
      description: 'Piece together beautiful puzzles in this relaxing classic.',
      url: 'jigsaw/index.html',
      thumbnail: 'jigsaw/thumbnail.jpg',
      available: true
    },
    {
      name: 'Terminal Tower',
      description: 'Stack blocks and reach new heights in this Tetris-inspired game.',
      url: 'terminal-tower/index.html',
      thumbnail: 'terminal-tower/thumbnail.jpg',
      available: true
    },
    {
      name: 'Snake',
      description: 'Classic Snake game. Eat, grow, and avoid your own tail!',
      url: 'snake/index.html',
      thumbnail: 'snake/thumbnail.jpg',
      available: true
    },    
    {
      name: 'Block Puzzle',
      description: 'Place blocks, clear lines, and try Classic or Survival mode!',
      url: 'block-puzzle/index.html',
      thumbnail: 'block-puzzle/thumbnail.jpg',
      available: true
    },
    {
      name: '2048',
      description: 'Join the numbers and get to the 2048 tile!',
      url: '#',
      thumbnail: '2048/thumbnail.png',
      available: false
    },
    {
      name: 'Minesweeper',
      description: 'Uncover all the safe squares without detonating a mine.',
      url: '#',
      thumbnail: 'minesweeper/thumbnail.png',
      available: false
    },
    {
      name: 'Flappy Bird',
      description: 'Guide the bird through pipes and beat your high score.',
      url: '#',
      thumbnail: 'flappy-bird/thumbnail.png',
      available: false
    },    
    {
      name: 'Mahjong',
      description: 'Match tiles and clear the board in this ancient puzzle game.',
      url: '#',
      thumbnail: 'mahjong/thumbnail.jpg',
      available: false
    },
    {
      name: 'Sudoku',
      description: 'Fill the grid with numbers 1-9 without repeating in any row, column, or box.',
      url: '#',
      thumbnail: 'sudoku/thumbnail.jpg',
      available: false
    },
    {
      name: 'TriPeaks',
      description: 'Clear the cards from the peaks in this solitaire variant.',
      url: '#',
      thumbnail: 'tripeaks/thumbnail.jpg',
      available: false
    },
    {
      name: 'Pyramid',
      description: 'Pair cards that add up to 13 to clear the pyramid.',
      url: '#',
      thumbnail: 'pyramid/thumbnail.jpg',
      available: false
    },
    {
      name: 'Spider Solitaire',
      description: 'Arrange cards in sequence to clear the table.',
      url: '#',
      thumbnail: 'spider/thumbnail.jpg',
      available: false
    }
  ];

  const availableGrid = document.getElementById('availableGames');
  const comingSoonGrid = document.getElementById('comingSoonGames');
  availableGrid.innerHTML = '';
  comingSoonGrid.innerHTML = '';

  games.forEach(game => {
    if (game.available) {
      // Card as button for available games
      const card = document.createElement('div');
      card.className = 'game-card game-card-btn';
      card.tabIndex = 0;
      card.onclick = () => window.location.href = game.url;
      card.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') card.onclick(); };
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Play ${game.name}`);
      card.style.cursor = 'pointer';

      card.style.display = 'flex';
      card.style.flexDirection = 'column';
      card.style.alignItems = 'center';
      card.style.justifyContent = 'center';

      const img = document.createElement('img');
      img.className = 'game-thumb';
      img.src = game.thumbnail;
      img.alt = `${game.name} thumbnail`;
      card.appendChild(img);

      const content = document.createElement('div');
      content.className = 'game-card-content';
      const title = document.createElement('h2');
      title.textContent = game.name;
      content.appendChild(title);
      card.appendChild(content);
      availableGrid.appendChild(card);
    } else {
      // Minimal card for coming soon games
      const card = document.createElement('div');
      card.className = 'game-card disabled';
      const img = document.createElement('img');
      img.className = 'game-thumb';
      img.src = game.thumbnail;
      img.alt = `${game.name} thumbnail`;
      card.appendChild(img);
      const content = document.createElement('div');
      content.className = 'game-card-content';
      const title = document.createElement('h2');
      title.textContent = game.name;
      content.appendChild(title);
      card.appendChild(content);
      comingSoonGrid.appendChild(card);
    }
  });
});