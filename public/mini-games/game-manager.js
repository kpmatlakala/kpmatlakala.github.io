function isMobile() {
  return window.innerWidth <= 800;
}

const games = [
  {
    name: 'Memory Game',
    description: 'Test your memory with this classic card-matching game.',
    url: 'memory-game/index.html', 
    thumbnail: 'memory-game/thumbnail.jpg',     
    available: true // Always available
  },
  {
    name: 'Terminal Tower',
    description: 'Stack blocks and reach new heights in this Tetris-inspired game.',
    url: 'terminal-tower/index.html',
    thumbnail: 'terminal-tower/thumbnail.jpg',
    available: !isMobile() // Only available on desktop
  },
  {
    name: 'Snake',
    description: 'Classic Snake game. Eat, grow, and avoid your own tail!',
    url: 'snake/index.html',
    thumbnail: 'snake/thumbnail.jpg',
    available: !isMobile() // Only available on desktop
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
  }
];

document.addEventListener('DOMContentLoaded', function () {
  const availableGrid = document.getElementById('availableGames');
  const comingSoonGrid = document.getElementById('comingSoonGames');
  availableGrid.innerHTML = '';
  comingSoonGrid.innerHTML = '';

  games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card' + (game.available ? '' : ' disabled');

    // Media column: thumbnail + button
    const media = document.createElement('div');
    media.className = 'game-card-media';

    const img = document.createElement('img');
    img.className = 'game-thumb';
    img.src = game.thumbnail;
    img.alt = `${game.name} thumbnail`;
    media.appendChild(img);

    const btn = document.createElement('button');
    if (game.available) {
      btn.textContent = 'Play';
      btn.onclick = () => window.location.href = game.url;
    } else if (game.url !== '#') {
      btn.textContent = 'Unavailable';
      btn.disabled = true;
    } else {
      btn.textContent = 'Coming Soon';
      btn.disabled = true;
    }
    media.appendChild(btn);

    // Content column
    const content = document.createElement('div');
    content.className = 'game-card-content';

    const title = document.createElement('h2');
    title.textContent = game.name;
    content.appendChild(title);

    const desc = document.createElement('p');
    desc.textContent = game.description;
    content.appendChild(desc);

    card.appendChild(media);
    card.appendChild(content);

    // Append to the correct section
    if (game.available) {
      availableGrid.appendChild(card);
    } else {
      comingSoonGrid.appendChild(card);
    }
  });
});