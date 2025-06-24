import "./Sidebar.css"  
import React from 'react';

import {
    FaBars,
    FaTimes,
    FaUser,
    FaGraduationCap,
    FaBriefcase,
    FaCode,
    FaProjectDiagram,
    FaEnvelope,
    FaDownload
  } from '../../../utils/icons';
  
import { useState } from "react";
   
const SideBar = ({ activeSection, onScrollToSection, chatModalOpen }) => 
{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen); }

    const handleMenuClick = (section) => {
      onScrollToSection(section);
      if (window.innerWidth <= 1024) {
        setIsSidebarOpen(false);
      }
    };

    const menuItems = [
      { id: "about", icon: <FaUser size={20} />, label: "About" },
      { id: "education", icon: <FaGraduationCap size={20} />, label: "Education" },
      { id: "experience", icon: <FaBriefcase size={20} />, label: "Experience" },
      { id: "skills", icon: <FaCode size={20} />, label: "Skills" },
      { id: "projects", icon: <FaProjectDiagram size={20} />, label: "Projects" },
      { id: "contacts", icon: <FaEnvelope size={20} />, label: "Contacts" }
    ];
    
    return (
      <>        
        <div className="top-nav" id={`${(isMobile && chatModalOpen) ? "m_chat-open":""}`}>
          <div className="logo" onClick={() => handleMenuClick("home")}>
            KP
          </div>
          {!(isMobile && chatModalOpen) && (
            <>
              <a href="assets/Mr-Kabelo-Peter-Matlakala-Resume.pdf" download="KP_Matlakala_Resume" className="resume-btn">
                <FaDownload size={16} />
                <span>Resume</span>
              </a>
              <div className={`hamburger-icon ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
                {isSidebarOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
              </div>
            </>
          )}
        </div>

        <aside className={`floating-sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="menu">
            <ul>
              {menuItems.map(({ id, icon, label }) => (
                <li
                  key={id}
                  className={activeSection === id ? "active" : ""}
                  onClick={() => handleMenuClick(id)}
                  title={label}
                >
                  {icon}
                </li>
              ))}
            </ul>
          </div>
        </aside> 
      </>
     )
   }
   
   export default SideBar; 
    