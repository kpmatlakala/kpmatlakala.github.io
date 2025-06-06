import React, { useState, useEffect } from "react";
import "./Projects.css";
import ProjectModal from "./ProjectModal";
import ProjectModalWithIFrame from "./ProjectModalWithIFrame";

import ProjectCard from "./ProjectCard";
import IFrameProjectCard from "./IFrameProjectCard";
import GroupProjectCard from "./GroupProjectCard";

// Data for the projects
const projects = [
  // {
  //   title: 'E-Commerce App ',
  //   description: '',
  //   challenge: 'React UI/UX Challenge',
  //   technologies: ['React', 'CSS'],
  //   duration: 'July 2024 – October 2024',
  //   previewImage: 'assets/ecommerce_x_shots_so.png',
  //   screenshots: [
  //     'assets/ecommerce_x_shots_so.png',
  //   ],
  //   githubLink: 'https://github.com/DeLightPlus/',
  //   livePreviewLink: '',
  //   keyFeatures: [

  //   ],
  //   challenges: [

  //   ],
  // },
  {
    title: 'ShoppingList App',
    description: 'A shopping list app that allows users to add, remove, and manage items, using Redux Toolkit for state management.',
    challenge: '',
    technologies: ['React', 'Redux Toolkit', 'CSS'],
    duration: 'July 2024 – October 2024',
    keyFeatures: [
      'State management with Redux Toolkit',
      'Add, remove, and edit shopping list items',
      'Data persistence using localStorage',
    ],
    challenges: [
      'Managing complex state transitions: Used Redux Toolkit\'s createSlice for better state handling.',
      'Persisting data across app restarts: Implemented localStorage to keep shopping list data intact.',
    ],
    previewImage: 'https://img.freepik.com/premium-photo/buy-vegetable-online-concept_121826-1377.jpg?ga=GA1.1.1866478789.1730715331&semt=ais_hybrid',
    screenshots: [
      'https://img.freepik.com/free-vector/real-time-weather-forecast-app_1051-392.jpg',
      'https://img.freepik.com/free-vector/weather-forecast-interface_1051-392.jpg',
    ],
    githubLink: 'https://github.com/DeLightPlus/',
    livePreviewLink: '',
  },
  {
    title: 'TodoList App',
    description: 'A simple todo list app where users can add, remove, and edit tasks, with SQLite3 as the local database.',
    challenge: '',
    technologies: ['React', 'CSS', 'SQLite3'],
    duration: 'July 2024 – October 2024',
    keyFeatures: [
      'Local database with SQLite3 for task management',
      'CRUD functionality for tasks (Create, Read, Update, Delete)',
      'Task filtering by completion status',
    ],
    challenges: [
      'Integrating SQLite3 with React: Used async functions to interact with the database without blocking the main thread.',
      'Ensuring data persistence: Designed the SQLite schema to persist tasks even after app restarts.',
    ],
    previewImage: 'https://img.freepik.com/free-photo/digital-business-list-app-interface_53876-15287.jpg?ga=GA1.1.1866478789.1730715331&semt=ais_hybrid',
    screenshots: [
      'https://img.freepik.com/free-vector/real-time-weather-forecast-app_1051-392.jpg',
      'https://img.freepik.com/free-vector/weather-forecast-interface_1051-392.jpg',
    ],
    githubLink: 'https://github.com/DeLightPlus/',
    livePreviewLink: '',
  },


  {
    title: 'Online Recipe App',
    description: '',
    technologies: ['React', 'CSS', 'JSON SERVER'],
    duration: 'July 2024 – October 2024',
    keyFeatures: [

      'Add, remove, and edit online recipes',
      'Data persistence using localStorage',
    ],
    challenges: [
      'Managing complex state transitions: Used Redux Toolkit\'s createSlice for better state handling.',
      'Persisting data across app restarts: Implemented localStorage to keep shopping list data intact.',
    ],
    previewImage: 'https://img.freepik.com/premium-psd/close-up-person-preparing-family-recipes_23-2149292561.jpg?ga=GA1.1.1866478789.1730715331&semt=ais_hybrid',
    screenshots: [
      'https://img.freepik.com/free-vector/real-time-weather-forecast-app_1051-392.jpg',
      'https://img.freepik.com/free-vector/weather-forecast-interface_1051-392.jpg',
    ],
    githubLink: 'https://github.com/DeLightPlus/',
    livePreviewLink: '',
  },
  {
    title: 'Hotel Booking App',
    description: 'A simple todo list app where users can add, remove, and edit tasks, with SQLite3 as the local database.',
    technologies: ['React', 'CSS', 'Redux', 'Firebase', 'Node.JS'],
    duration: 'July 2024 – October 2024',
    keyFeatures: [
      'Local database with SQLite3 for task management',
      'CRUD functionality for tasks (Create, Read, Update, Delete)',
      'Task filtering by completion status',
    ],
    challenges: [
      '',
    ],
    previewImage: 'assets/hotelapp_x_shots_so.png',
    screenshots: [
      'https://img.freepik.com/free-vector/real-time-weather-forecast-app_1051-392.jpg',
      'https://img.freepik.com/free-vector/weather-forecast-interface_1051-392.jpg',
    ],
    githubLink: 'https://github.com/DeLightPlus/',
    livePreviewLink: '',
  }
];

const group_projects = [
  {
    title: 'Restaurant Reservation App',
    description: 'A simple todo list app where users can add, remove, and edit tasks, with SQLite3 as the local database.',
    technologies: ['React', 'CSS', 'Redux', 'Firebase', 'Node.JS'],
    duration: 'July 2024 – October 2024',
    keyFeatures: [
      'Local database with SQLite3 for task management',
      'CRUD functionality for tasks (Create, Read, Update, Delete)',
      'Task filtering by completion status',
    ],
    challenges: [
      '',
    ],
    // previewImage: '',
    screenshots: [
      'https://img.freepik.com/free-vector/real-time-weather-forecast-app_1051-392.jpg',
      'https://img.freepik.com/free-vector/weather-forecast-interface_1051-392.jpg',
    ],
    githubLink: 'https://github.com/DeLightPlus/',
    livePreviewLink: '',
  },
  {
    title: 'Travelling Planner App',
    description: 'A simple todo list app where users can add, remove, and edit tasks, with SQLite3 as the local database.',
    technologies: ['React', 'CSS', 'Redux', 'Firebase', 'Node.JS'],
    duration: 'July 2024 – October 2024',
    keyFeatures: [
      'Local database with SQLite3 for task management',
      'CRUD functionality for tasks (Create, Read, Update, Delete)',
      'Task filtering by completion status',
    ],
    challenges: [
      '',
    ],
    // previewImage: '/assets/hotelapp_x_shots_so.png',
    screenshots: [
      'https://img.freepik.com/free-vector/real-time-weather-forecast-app_1051-392.jpg',
      'https://img.freepik.com/free-vector/weather-forecast-interface_1051-392.jpg',
    ],
    githubLink: 'https://github.com/DeLightPlus/',
    livePreviewLink: '',
  }
];

const projectWithIFrame = [
  // Weather App as an IFrame project (add as first project)
  {
    title: 'Weather App',
    description: 'A weather forecasting app that fetches real-time weather data using the OpenWeatherMap API. ',
    technologies: ['React', 'CSS', 'OpenWeatherMap API'],
    duration: 'July 2024 – October 2024',
    previewImage: '',
    screenshots: [
      '/assets/weather_shots_so1.png',
      // Add more screenshots if available
    ],
    livePreviewLink: 'https://delightplus-portfolio.vercel.app/weather-app/index.html',
    githubLink: 'https://github.com/DeLightPlus/',
    keyFeatures: [
      'Real-time weather data fetching',
      'Location search functionality',
      'Temperature unit conversion (Celsius/Fahrenheit)',
      'Responsive and modern UI',
    ],
    challenges: [
      'Handling asynchronous API calls.',
      'Managing user input errors and validation.',
      'Integrating OpenWeatherMap API.',
    ],
    iframeLink: '/weather-app/index.html',
  },
  // Mini Games
  {
    title: 'Mini Games',
    description:
      'A fun and interactive collection of browser games including a card-matching memory game, Tetris, and a Snake-inspired game.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    duration: 'July 2024 – October 2024',
    previewImage: '/mini-games/banner.jpg',
    screenshots: [
      '/mini-games/banner.jpg',
      'https://img.freepik.com/premium-vector/colorful-block-puzzle-game-vector_972395-1215.jpg?w=826',
    ],
    livePreviewLink: 'https://delightplus-portfolio.vercel.app/mini-games/game-manager.html',
    githubLink: 'https://github.com/DeLightPlus/',
    keyFeatures: [
      'Multiple games: Card-matching, Tetris, and Snake',
      'Interactive card matching gameplay',
      'Classic Tetris and Snake mechanics',
      'Responsive and accessible UI',
    ],
    challenges: [
      'Managing state and logic for multiple games.',
      'Synchronizing time limits and game over conditions.',
      'Ensuring smooth animations and user feedback.',
      'Handling keyboard controls for Tetris and Snake.',
    ],
    iframeLink: '/mini-games/game-manager.html',
  },   
  {
    title: 'Frontend Mentor Challenges',
    description: 'A collection of frontend challenges from Frontend Mentor, showcasing various skills and techniques in web development.',
    technologies: ['HTML', 'CSS'],
    duration: 'May 2025',
    previewImage: 'https://th.bing.com/th/id/OIP.IbDTC4_LJDzbVrj-stJIoQHaEK?w=262&h=180&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3',
    screenshots: [
      'frontend-mentor-challenges/assets/previews/getting-started/qr-preview.jpg',
      'frontend-mentor-challenges/assets/previews/getting-started/blog-preview.jpg',
      'frontend-mentor-challenges/assets/previews/getting-started/social-preview.jpg',
      'frontend-mentor-challenges/assets/previews/getting-started/recipe-preview.jpg',
    ],
    livePreviewLink: 'https://delightplus-portfolio.vercel.app/frontend-mentor-challenges/index.html',
    githubLink: 'https://github.com/DeLightPlus',
    keyFeatures: [
      'Responsive design',
      'Modern layout and branding',
      'CSS animations and transitions',
      'CSS Grid and Flexbox layouts',
    ],
    challenges: [
      'Ensuring cross-browser compatibility.',
      'Mobile-first responsive design.',
      'Implementing various design patterns and techniques.',
    ],
    iframeLink: '/frontend-mentor-challenges/index.html',
  },
  {
    title: 'Web Portfolio Challenge',
    description: 'A modern portfolio website showcasing projects and skills. Responsive and stylish, built with HTML, CSS and Javascript.',
    technologies: ['HTML', 'CSS', "Javascrip"],
    duration: 'may 2025',
    previewImage: '/portfolio-challenge/screenshot/ui-challenge_shots.png',
    screenshots: [
      'portfolio-challenge/screenshot/ui-challenge_shots.png',
    ],
    livePreviewLink: 'https://delightplus-portfolio.vercel.app/portfolio-challenge/index.html',
    githubLink: 'https://github.com/DeLightPlus',
    keyFeatures: [
      'Responsive design',
      'Modern layout and branding',
      'CSS animations and transitions; Grid and Flexbox layouts',
      'JavaScript for interactivity',
      'Smooth scrolling and navigation',
      'Image optimization',
    ],
    challenges: [
      'Ensuring cross-browser compatibility.',
      'Mobile-first responsive design.',
      'Implementing various design patterns and techniques.',
      'Handling JavaScript events and DOM manipulation.',
      'Optimizing images for faster loading times.',
      'Creating a smooth scrolling effect for navigation links.',
    ],
    iframeLink: '/portfolio-challenge/index.html',
  }


];


const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [selectedProjectSource, setSelectedProjectSource] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showGitHubProjects, setShowGitHubProjects] = useState(false);

  const [isIFrameModalOpen, setIsIFrameModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(null);
  const [currentIFrameProjectIndex, setCurrentIFrameProjectIndex] = useState(null);

  const openIFraneModal = (index) => {
    setCurrentIFrameProjectIndex(index);
    setIsIFrameModalOpen(true);
  };

  const closeIFrameModal = () => {
    setIsIFrameModalOpen(false);
  };

  const openModal = (index, source = "individual") => {
    setCurrentProjectIndex(index);
    setModalSource(source);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPreviousProject = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  // Prevent background scroll when any modal is open
  useEffect(() => {
    if (isModalOpen || isIFrameModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen, isIFrameModalOpen]);

  const displayedProjects = showAllProjects 
    ? [...projectWithIFrame, ...projects]
    : projectWithIFrame;

  return (
    <div className="projects-groups">

      <h1>Individual Projects </h1>

      <div className="projects-container">
        <div className="projects-grid">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onMore={() => openModal(index)}
              isWeatherApp={project.title === "Weather App"}
            />
          ))}
        </div>

        {!showAllProjects && (
          <div className="show-more-container">
            <button 
              className="show-more-btn"
              onClick={() => setShowAllProjects(true)}
            >
              Show More Projects
            </button>
            <button 
              className="show-more-btn github"
              onClick={() => setShowGitHubProjects(true)}
            >
             View All Projects on GitHub
            </button>
          </div>
        )}

        {isModalOpen && currentProjectIndex !== null && (
          <ProjectModal
            project={projects[currentProjectIndex]}
            isModalOpen={isModalOpen}
            onClose={closeModal}
          />
        )}

        {isIFrameModalOpen && currentIFrameProjectIndex !== null && (
          <ProjectModalWithIFrame
            projectWithIFrame={projectWithIFrame[currentIFrameProjectIndex]}
            isModalOpen={isIFrameModalOpen}
            onClose={closeIFrameModal}
          />
        )}
      </div>

      <h1>Group Projects </h1>
      <div className="projects-container">
        <div className="projects-grid">
          {group_projects.map((project, index) => (
            <GroupProjectCard
              key={index}
              project={project}
              onMore={() => openModal(index, "group")}
            />
          ))}
        </div>

        {isModalOpen && currentProjectIndex !== null && (
          <ProjectModal
            project={
              selectedProjectSource === "individual"
                ? projects[currentProjectIndex]
                : group_projects[currentProjectIndex]
            }
            isModalOpen={isModalOpen}
            onClose={closeModal}
          />
        )}        
      </div>
    </div>
  );
};

export default Projects;
