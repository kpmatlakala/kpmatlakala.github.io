import React, { useState } from "react";
import "./Projects.css";

// Data for the projects
const projects = [
  {
    title: 'Weather App (OpenWeatherMap API)',
    description: 'A weather forecasting app that fetches real-time weather data using the OpenWeatherMap API.',
    technologies: ['React', 'OpenWeatherMap API', 'CSS'],
    duration: 'July 2024 – October 2024',
    previewImage: 'path/to/weather-app-image.jpg',
    livePreviewLink: 'https://weather-app-demo-link.com',
    keyFeatures: [
      'Real-time weather data fetching',
      'Location search functionality',
      'Temperature unit conversion (Celsius/Fahrenheit)',
    ],
    challenges: [
      'Handling asynchronous nature of fetching data: Used async/await to handle API calls.',
      'Managing user input errors: Implemented input validation for city name errors to avoid crashes.',
    ],
  },
  {
    title: 'ShoppingList App (Redux Toolkit)',
    description: 'A shopping list app that allows users to add, remove, and manage items, using Redux Toolkit for state management.',
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
    previewImage: 'path/to/shoppinglist-app-image.jpg',
    livePreviewLink: 'https://shoppinglist-app-demo-link.com',
  },
  {
    title: 'TodoList App (SQLite3)',
    description: 'A simple todo list app where users can add, remove, and edit tasks, with SQLite3 as the local database.',
    technologies: ['React', 'SQLite3', 'CSS'],
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
    previewImage: '',
    livePreviewLink: '',
  },
];

const Projects = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const openModal = (index) => {
    setCurrentProjectIndex(index);
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

  return (

    
    <div className="projects-container">
      <div className="project-card">
        <div className="project-header">
          <p className="project-subtitle">React, CSS, OpenWeatherMAp API</p>
          <h4 className="project-title">Weather App </h4>
        </div>
        <img
          className="project-image"
          src="https://heroui.com/images/card-example-4.jpeg"
          alt="Card background"
        />
      </div>

      <div className="project-card">
        <div className="project-header">
          <p className="project-subtitle">React, CSS, Redux Toolkit, JSON-Server</p>
          <h4 className="project-title">ShoppingList App</h4>
        </div>
        <img
          className="project-image"
          src="src/assets/screenshots/home-page-removebg-preview.png"
          alt="Card background"
        />
      </div>

      <div className="project-card">
        <div className="project-header">
          <p className="project-subtitle">React, CSS, SQLite3</p>
          <h4 className="project-title">Todo-List App</h4>
        </div>
        <img
          className="project-image"
          src="src/assets/login-capture-removebg-preview.png"
          alt="Card background"
        />
      </div>

      <div className="project-card project-with-footer">
        <div className="project-header">
          <p className="project-subtitle">HTML, CSS, JavaScript</p>
          <h4 className="project-title">Card Guessing Game</h4>
        </div>
        <img
          className="project-image"
          src="projects/base-apparel/screenshot/237shots_so.png"
          alt="Card example background"
        />
        <div className="project-footer">
          <p className="footer-text">Available soon. Get notified.</p>
          <button className="notify-btn">Notify Me</button>
        </div>
      </div>

      <div className="project-card project-with-footer">
        <div className="project-header">
          <p className="project-subtitle">HTML, CSS</p>
          <h4 className="project-title">Base Apparel</h4>
        </div>
        <img
          className="project-image"
          src="public/projects/base-apparel/screenshot/584shots_so.png"

          alt="Relaxing app background"
        />
        <div className="project-footer">
          <div className="footer-left">
            <img
              className="footer-icon"
              src="https://heroui.com/images/breathing-app-icon.jpeg"
              alt="Breathing app icon"
            />

            <div className="footer-info">
              <p>Breathing App</p>
              <p>Get a good night's sleep.</p>
            </div>
          </div>
          <button className="get-app-btn">Preview</button>
        </div>
      </div>

      <div className="project-card">
        <div className="project-header">
          <p className="project-subtitle">React, CSS, OpenWeatherMAp API</p>
          <h4 className="project-title">Weather App </h4>
        </div>
        <img
          className="project-image"
          src="https://heroui.com/images/card-example-4.jpeg"
          alt="Card background"
        />
      </div>

      <div className="project-card">
        <div className="project-header">
          <p className="project-subtitle">React, CSS, Redux Toolkit, JSON-Server</p>
          <h4 className="project-title">ShoppingList App</h4>
        </div>
        <img
          className="project-image"
          src="src/assets/screenshots/shoppingList/home-page-removebg-preview.png"
          alt="Card background"
        />
      </div>

      <div className="project-card">
        <div className="project-header">
          <p className="project-subtitle">React, CSS, SQLite3</p>
          <h4 className="project-title">Todo-List App</h4>
        </div>
        <img
          className="project-image"
          src="src/assets/todoList/login-capture-removebg-preview.png"
          alt="Card background"
        />
      </div>
    </div>
  );
};

export default Projects;
