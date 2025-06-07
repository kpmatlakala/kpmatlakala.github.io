import React, { useState } from "react";
import styled from "styled-components";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    // Integrate with your backend or email service here
  };

  return (
    
      <form className="form_container" onSubmit={handleSubmit}>
        <div className="title_container">          
          <span className="subtitle">
            I'd love to hear from you! Fill out the form and I'll get back to you soon.
          </span>
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="name_field">Name</label>
          <input
            placeholder="Your Name"
            name="name"
            type="text"
            className="input_field"
            id="name_field"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="email_field">Email</label>
          <input
            placeholder="name@mail.com"
            name="email"
            type="email"
            className="input_field"
            id="email_field"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="message_field">Message</label>
          <textarea
            placeholder="Type your message here..."
            name="message"
            className="input_field"
            id="message_field"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button title="Send" type="submit" className="sign-in_btn" disabled={submitted}>
          <span>{submitted ? "Thank you!" : "Send Message"}</span>
        </button>
        <p className="note">I'll never share your info with anyone else.</p>
      </form>
    
  );
};



export default ContactForm;