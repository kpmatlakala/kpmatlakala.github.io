// Portfolio.jsx
import { useEffect, useState } from 'react';

import './Portfolio.css';

import Parallaxor from './Parallaxor/Parallaxor.jsx';
import SideBar from './Sidebar/Sidebar.jsx';
import UserBlock from './userBlock/UserBlock.jsx';
import TechStack from "./Skills/TechStacks/TechStack.jsx";

const Portfolio = () => {

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Update active section
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const onScrollToSection = (section) => {
    const targetSection = document.getElementById(section);
    targetSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Profile Icon @top-right-corner */}
      <UserBlock />
      
      {/* Fixed Aside Menu */}
      <SideBar activeSection={activeSection} onScrollToSection={onScrollToSection} />

      <Parallaxor />
      <TechStack />
          
    </>
  );
};

export default Portfolio;
