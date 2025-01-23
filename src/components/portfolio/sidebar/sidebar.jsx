import "./sidebar.css"  
import React from 'react';

import {
    FaLinkedinIn,
    FaInstagram,
    FaGithub,  
  } from '../../../utils/icons';
  
import { useState } from "react";
   
   const SideBar = () => 
   {
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

     const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
    
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
              <li className="">About</li>
              <li className="">Skills</li>            
              <li className="active">Projects</li>
              <li className="">Contacts</li>
            </ul>
          </div>

          <div>
            <a href="src/assets/Mr-Kabelo-Peter-Matlakala-Resume-20241024.pdf" download="KP_Matlakala_Resume">
              <button className="resume-btn">⬇ Resume</button>
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
    