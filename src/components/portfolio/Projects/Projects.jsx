import React, { useState } from "react";
import "./Projects.css";

// Data for the projects
const projects = [
  {
    title: 'Weather App ',
    description: 'A weather forecasting app that fetches real-time weather data using the OpenWeatherMap API.',
    technologies: ['React', 'CSS', 'OpenWeatherMap API'],
    duration: 'July 2024 – October 2024',
    previewImage: 'https://img.freepik.com/free-vector/app-weather-elements_1051-392.jpg?t=st=1738043795~exp=1738047395~hmac=d7d39ccb60fd2c0bb05f2716f4853a16fad7acac456fe8a607baf02e0c953fbf&w=826',
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
    title: 'ShoppingList App',
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
    previewImage: 'https://img.freepik.com/premium-photo/buy-vegetable-online-concept_121826-1377.jpg?ga=GA1.1.1866478789.1730715331&semt=ais_hybrid',
    livePreviewLink: 'https://shoppinglist-app-demo-link.com',
  },
  {
    title: 'TodoList App',
    description: 'A simple todo list app where users can add, remove, and edit tasks, with SQLite3 as the local database.',
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
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-header">
            <p className="project-subtitle">{project.technologies.join(", ")}</p>
            <h4 className="project-title">{project.title}</h4>
          </div>
          <img
            className="project-image"
            src={project.previewImage || "default-image.jpg"} // Use default image if no preview image is provided
            alt={`${project.title} background`}
          />
          <div className="project-footer">
            <p className="footer-text">
              {project.description}
            </p>
            <button className="notify-btn" onClick={() => openModal(index)}>
              👁 Preview
            </button>
          </div>
        </div>
      ))}

      {/* Memory Game */}
      <div className="project-card project-with-footer">
        <div className="project-header">
          <p className="project-subtitle">HTML, CSS, JavaScript, Node.Js, ejs</p>
          <h4 className="project-title">Card Guessing Game</h4>
        </div>
        <img
          className="project-image"
          src="projects/memory-game/screenshots/237shots_so.png"
          alt="Card example background"
        />
        <div className="project-footer">
          <p className="footer-text"> 
            A fun and interactive card-guessing game that challenges your memory. 
            <br/>Built with DOM manipulation, this game allows players to match pairs of cards 
            {/* within a time limit.  */}
          </p>
          <button className="notify-btn"> 👁 Preview </button>
        </div>
      </div>

      {/* Base Apparel */}
      <div className="project-card project-with-footer">
        <div className="project-header">
          <p className="project-subtitle">HTML, CSS</p>
          <h4 className="project-title">Base Apparel</h4>
        </div>
        <img
          className="project-image"
          src="projects/base-apparel/screenshot/584shots_so.png"

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
              <p>Base Apparel</p>
              <p>Where style meets comfort. Coming soon!</p>
            </div>
          </div>
          <button className="get-app-btn"> 👁 Preview </button>
        </div>
      </div>

      {/* Ecommerce */}
      <div className="project-card">
        <div className="project-header">
          <p className="project-subtitle"> React, CSS</p>
          <h4 className="project-title"> E-Commerce App </h4>
          <h5 className="project-title2"> React UI/UX Challenge </h5>
        </div>
        <img
          className="project-image"
          src="src/assets/ecommerce_x_shots_so.png
          "
          alt="Card background"
        />
      </div>

      <div className="project-card">
        <div className="project-header">
          <p className="project-subtitle">React, CSS, Json Server</p>
          <h4 className="project-title">Online Recipe App</h4>
        </div>
        <img
          className="project-image"
          src="https://img.freepik.com/premium-psd/close-up-person-preparing-family-recipes_23-2149292561.jpg?ga=GA1.1.1866478789.1730715331&semt=ais_hybrid"
          alt="Card background"
        />
      </div>

      <div className="project-card">
        <div className="project-header">
          <p className="project-subtitle">React, CSS, Redux, Firebase, Node.Js</p>
          <h4 className="project-title">Hotel Booking App</h4>
        </div>
        <img
          className="project-image"
          src="src/assets/hotelapp_x_shots_so.png"
          alt="Card background"
        />
      </div>
    </div>
  );
};

export default Projects;
