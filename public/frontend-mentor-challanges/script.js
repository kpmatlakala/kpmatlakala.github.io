// Project data structure
const projects = {
  'Getting Started': [],
  'Responsive Design Fundamentals': [],
  'Challenges': []
};

// Function to create a project card
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = project.isGhost ? 'project-card ghost-card' : 'project-card';
  
  if (project.isGhost) {
    const ghostImage = document.createElement('div');
    ghostImage.className = 'ghost-image';
    card.appendChild(ghostImage);
  } else {
    const img = document.createElement('img');
    img.src = project.imageUrl;
    img.alt = project.title;
    card.appendChild(img);
  }
  
  const title = document.createElement('h3');
  title.textContent = project.title;
  card.appendChild(title);

  const description = document.createElement('p');
  description.className = 'project-description';
  description.textContent = project.description;
  card.appendChild(description);

  const techStack = document.createElement('div');
  techStack.className = 'tech-stack';
  project.technologies.forEach(tech => {
    const techTag = document.createElement('span');
    techTag.className = 'tech-tag';
    techTag.textContent = tech;
    techStack.appendChild(techTag);
  });
  card.appendChild(techStack);

  const level = document.createElement('div');
  level.className = 'project-level';
  level.setAttribute('data-level', project.level);
  
  // Map level numbers to text
  const levelText = {
    1: 'Newbie',
    2: 'Intermediate',
    3: 'Advanced',
    4: 'Expert'
  };
  
  level.textContent = ` ${project.level} | ${levelText[project.level]}`;
  card.appendChild(level);
  
  const cardFooter = document.createElement('div');
  cardFooter.className = 'card-footer';
  
  if (project.comingSoon) {
    const comingSoon = document.createElement('p');
    comingSoon.textContent = 'Coming Soon...';
    cardFooter.appendChild(comingSoon);
  } else {
    const link = document.createElement('a');
    link.href = project.demoUrl;
    link.target = '_blank';
    link.textContent = 'Live Demo';
    cardFooter.appendChild(link);
  }
  
  card.appendChild(cardFooter);
  return card;
}

// Function to add a new project
function addProject(category, project) {
  const projectsContainer = document.querySelector(`.project-list h2:contains('${category}') + .projects`);
  if (projectsContainer) {
    const card = createProjectCard(project);
    projectsContainer.appendChild(card);
    projects[category].push(project);
  }
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const project = {
    title: formData.get('title'),
    imageUrl: formData.get('imageUrl'),
    demoUrl: formData.get('demoUrl'),
    category: formData.get('category')
  };
  
  addProject(project.category, project);
  event.target.reset();
}

// Function to render all projects
function renderProjects() {
  console.log('Starting to render projects...');
  console.log('Projects data:', projectsData);

  // Get all accordion items
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  // Render Getting Started projects
  const gettingStartedSection = accordionItems[0].querySelector('.projects');
  console.log('Getting Started section:', gettingStartedSection);
  if (gettingStartedSection) {
    gettingStartedSection.innerHTML = '';
    projectsData['Getting Started']
      .filter(project => project.render !== false)
      .forEach(project => {
        gettingStartedSection.appendChild(createProjectCard(project));
      });
  }

  // Render Responsive Design Fundamentals projects
  const responsiveSection = accordionItems[1].querySelector('.projects');
  console.log('Responsive section:', responsiveSection);
  if (responsiveSection) {
    responsiveSection.innerHTML = '';
    projectsData['Responsive Design Fundamentals']
      .filter(project => project.render !== false)
      .forEach(project => {
        responsiveSection.appendChild(createProjectCard(project));
      });
  }

  // Render Challenges projects
  const challengesSection = accordionItems[2].querySelector('.projects');
  console.log('Challenges section:', challengesSection);
  if (challengesSection) {
    challengesSection.innerHTML = '';
    projectsData['Challenges']
      .filter(project => project.render !== false)
      .forEach(project => {
        challengesSection.appendChild(createProjectCard(project));
      });
  }
}

// Function to handle accordion functionality
function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const isActive = accordionItem.classList.contains('active');
      
      // Close all accordion items
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // If the clicked item wasn't active, open it
      if (!isActive) {
        accordionItem.classList.add('active');
      }
    });
  });

  // Open the first accordion item by default
  const firstAccordionItem = document.querySelector('.accordion-item');
  if (firstAccordionItem) {
    firstAccordionItem.classList.add('active');
  }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing...');
  const form = document.getElementById('add-project-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
  renderProjects();
  initAccordion();
}); 