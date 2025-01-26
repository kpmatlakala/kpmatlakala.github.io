import React, { useState } from 'react';
import './Contacts.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="contact-container">
      
      <section className="contact-details">

        <div className="card max-width">
          <div className="card-header flex">
            {/* <img
              alt="heroui logo"
              className="image"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            /> */}
            <div className="image">📞</div>
            <div className="text-container">
              {/* <p className="title">Phone</p> */}
              <p className="sub-title">Phone</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="card-body">
            <p>+27 72 713 8367</p>
          </div>
          <div className="divider"></div>
          <div className="card-footer">
            <a
              className="link"
              href="https://github.com/heroui-inc/heroui"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit source code on GitHub.
            </a>
          </div>
        </div>

        <div className="card max-width">
          <div className="card-header flex">
            {/* <img
              alt="heroui logo"
              className="image"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            /> */}
            <div className="image">📧</div>
            <div className="text-container">
              {/* <p className="title">HeroUI</p> */}
              <p className="sub-title">Emails</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="card-body">
            <ul>
              <li><strong>Primary:</strong> matlakalakabelo1@gmail.com</li>
              <li><strong>Secondary:</strong> 201608595@keyaka.ul.ac.za</li>
            </ul>
          </div>
          <div className="divider"></div>
          <div className="card-footer">
            <a
              className="link"
              href="https://github.com/heroui-inc/heroui"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit source code on GitHub.
            </a>
          </div>
        </div>

        <div className="card max-width">
          <div className="card-header flex">
            {/* <img
              alt="heroui logo"
              className="image"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            /> */}
            <div className="image">🌍</div>
            <div className="text-container">
              {/* <p className="title">...</p> */}
              <p className="sub-title">Social Media</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="card-body">            
            <ul>
              <li><strong>LinkedIn:</strong> <a href="https://za.linkedin.com/in/kabelo-matlakala-704349273?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer">Kabelo Matlakala</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/delightplus" target="_blank" rel="noopener noreferrer">@De_Light_Plus</a></li>
              <li><strong>Instagram:</strong> <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">@yourprofile</a></li>
            </ul>
          </div>
          <div className="divider"></div>
          <div className="card-footer">
            <a
              className="link"
              href="https://github.com/heroui-inc/heroui"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit source code on GitHub.
            </a>
          </div>
        </div>

        <div className="card max-width">
          <div className="card-header flex">
            {/* <img
              alt="heroui logo"
              className="image"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            /> */}
            <div className="image">📍</div>
            <div className="text-container">
              {/* <p className="title"> Location </p> */}
              <p className="sub-title"> Location </p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="card-body">
            <p>...</p>
          </div>
          <div className="divider"></div>
          <div className="card-footer">
            <a
              className="link"
              href="https://github.com/heroui-inc/heroui"
              target="_blank"
              rel="noopener noreferrer"
            >
              ...
            </a>
          </div>
        </div>
      
        {/* <div className="contact-item">
          <div className="icn">
            📞
          </div>
          <div>
            <h3>Phone</h3>          
            <ul>
              <li><strong>Mobile:</strong> +27 72 713 8367</li>              
            </ul>
          </div>
        </div> */}

        {/* <div className="contact-item">
          <div className="icn">📧</div>
          <div>
            <h3>Email</h3>
            <ul>
              <li><strong>Primary:</strong> matlakalakabelo1@gmail.com</li>
              <li><strong>Secondary:</strong> 201608595@keyaka.ul.ac.za</li>
            </ul>
          </div>

        </div> */}

        {/*
         <div className="contact-item">
          <div className="icn">🌍</div>
          <div>
            <h3>Social Media</h3>
            <ul>
              <li><strong>LinkedIn:</strong> <a href="https://za.linkedin.com/in/kabelo-matlakala-704349273?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer">Kabelo Matlakala</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/delightplus" target="_blank" rel="noopener noreferrer">@De_Light_Plus</a></li>
              <li><strong>Instagram:</strong> <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">@yourprofile</a></li>
            </ul>
          </div>
        </div> 
        */}

        {/* <div className="contact-item">
          <div className="icn">📍</div>
          <div>
            <h3>Location</h3>
            <ul>
              <li><strong>Address:</strong> 761 Paledi Village, Ga Thoka, Mankweng, Polokwane, Limpopo, South Africa</li>
              <li>
                <strong>🧭 Map:</strong> 
                <a href="https://maps.app.goo.gl/7kZAMK6FmqZ7kA3F8" target="_blank" rel="noopener noreferrer">View on Google Maps</a></li>
            </ul>
          </div>
        </div> */}
        
      </section>

      <section className="contact-form">
        <h3>Send Me a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
