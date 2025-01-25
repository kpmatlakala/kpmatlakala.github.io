import "./sidebar.css"  
import React from 'react';

import {
    FaLinkedinIn,
    FaInstagram,
    FaGithub,
    FaDownload,  
  } from '../../../utils/icons';
  
import { useState } from "react";
   
const SideBar = ({ activeSection, onScrollToSection }) => 
{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen); }
    
    return (
      <>
         {/* Hamburger Icon */}
        <div className={`hamburger-icon ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          {isSidebarOpen ? `◀`: `≡` } {/*&#9776; This is the hamburger icon symbol */}
        </div>

        <aside className={`fixed-menu ${isSidebarOpen ? 'open' : ''}`}>
          <div className="logo">
            <div className="logo-actual">
              <div className="fstLetter">K</div>
              <div className="sndLetter">P</div>
            </div>
      
            <div className="nameNstack">
              <div className="name">Peter</div>
              <div className="description">
              Jnr Web Developer
              </div>
              <div className="status">Ready to contribute</div>
              
            </div>
          </div>           
      
          <div className="menu">
            <ul>
              {["about", "education", "skills", "experience", "projects", "contacts"]
              .map((section) => (
                <li
                  key={section}
                  className={activeSection === section ? "active" : ""}
                  onClick={() => onScrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <a href="src/assets/Mr-Kabelo-Peter-Matlakala-Resume-20241024.pdf" download="KP_Matlakala_Resume">
              <button className="resume-btn">
                <FaDownload size={10} /> 
                Resume
              </button>
            </a>
          </div>
      
          <div className="social-icons">
          
              <div>
                  <FaLinkedinIn size={16} color="white" />
              </div>
             
              <div>
                  <FaInstagram size={16} color="white" />
              </div>
              {/* Twitter icon from FontAwesome */}
              <div>
                  {/* <FaTwitter size={32} color="skyblue" /> */}
              </div>
            
              <div>
                  <FaGithub size={16} color="white" />
              </div>
              
              {/* <div>
                  &copy;2024
              </div> */}

          </div>
          
        </aside> 
      </>
     )
   }
   
   export default SideBar; 
    