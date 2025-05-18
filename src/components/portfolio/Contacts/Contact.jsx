import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-content">
        <div className="profile-card">
          <div className="profile-avatar">
            <img
              src="https://avatars.githubusercontent.com/u/109287017?v=4"
              alt="Kabelo Peter Matlakala"
            />
          </div>
          <div className="profile-details">
            <h3 className="profile-name">Kabelo Peter Matlakala</h3>
            <p className="profile-role">Web & Mobile Developer</p>
            <p className="profile-location">
              <span role="img" aria-label="location">📍</span> Polokwane, South Africa
            </p>
          </div>
          <div className="profile-public">
            <p>
              <span className="icon">📧</span>
              <a href="mailto:matlakalakabelo1@gmail.com" className="profile-public-link" target="_blank" rel="noopener noreferrer">
                matlakalakabelo1@gmail.com
              </a>
            </p>
            <p>
              <span className="icon">📱</span>
              <a href="tel:+27727138367" className="profile-public-link">
                +27 72 713 8367
              </a>
            </p>
            <p>
              <span className="icon">💻</span>
              <a href="https://github.com/DeLightPlus" className="profile-public-link" target="_blank" rel="noopener noreferrer">
                github.com/DeLightPlus
              </a>
            </p>
            <p>
              <span className="icon">🔗</span>
              <a href="https://linkedin.com/in/kabelo-matlakala" className="profile-public-link" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/kabelo-matlakala
              </a>
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
