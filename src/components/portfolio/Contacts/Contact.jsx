import React, { useState, useCallback } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { AiOutlineLoading3Quarters, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import './Contact.css';

// Constants
const PERSONAL_INFO = {
  email: 'matlakalakable1@gmail.com',
  phone: '+27 72 713 8367',
  location: 'Polokwane, South Africa',
  github: 'https://github.com/DeLightPlus',
  portfolio: 'https://delightplus-portfolio.vercel.app',
  // portfolio: 'https://delightplus.github.io'
};

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const FORM_FIELDS = [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Your full name',
    required: true,
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'your.email@example.com',
    required: true,
  },
  {
    name: 'subject',
    label: 'Subject',
    type: 'text',
    placeholder: "What's this about?",
    required: true,
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Tell me about your project or inquiry...',
    required: true,
  },
];

// Contact Information Component
const ContactInfo = ({ personalInfo }) => (
  <div className="contact-info-card">
    <h3>Get In Touch</h3>
    <div className="contact-info-content">
      <ContactInfoItem
        icon={<MdEmail size={24} />}
        label="Email"
        value={personalInfo.email}
        href={`mailto:${personalInfo.email}`}
        type="email"
      />
      <ContactInfoItem
        icon={<MdPhone size={24} />}
        label="Phone"
        value={personalInfo.phone}
        href={`tel:${personalInfo.phone}`}
        type="phone"
      />
      <ContactInfoItem
        icon={<MdLocationOn size={24} />}
        label="Location"
        value={personalInfo.location}
        type="location"
      />
    </div>
    <SocialLinks personalInfo={personalInfo} />
  </div>
);

// Contact Info Item Component
const ContactInfoItem = ({ icon, label, value, href, type }) => (
  <div className="contact-info-item">
    <div className={`contact-icon-wrapper ${type}`}>
      {icon}
    </div>
    <div>
      <h4>{label}</h4>
      {href ? (
        <a href={href} aria-label={`Contact via ${label.toLowerCase()}`}>
          {value}
        </a>
      ) : (
        <p>{value}</p>
      )}
    </div>
  </div>
);

// Social Links Component
const SocialLinks = ({ personalInfo }) => (
  <div className="social-links">
    <h4>Follow Me</h4>
    <div className="social-icons">
      <SocialIcon
        href={personalInfo.github}
        icon={<FaGithub size={20} />}
        label="GitHub Profile"
      />
      <SocialIcon
        href={personalInfo.portfolio}
        icon={<FaGlobe size={20} />}
        label="Portfolio Website"
      />
      <SocialIcon
        href={`mailto:${personalInfo.email}`}
        icon={<MdEmail size={20} />}
        label="Email"
      />
    </div>
  </div>
);

// Social Icon Component
const SocialIcon = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
    aria-label={label}
  >
    {icon}
  </a>
);

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = useCallback(() => {
    const newErrors = {};
    FORM_FIELDS.forEach(({ name, required }) => {
      if (required && !formData[name].trim()) {
        newErrors[name] = 'This field is required';
      }
    });
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData(INITIAL_FORM_STATE);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-card">
      <h3>Send Message</h3>
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="form-row">
          {FORM_FIELDS.slice(0, 2).map(field => (
            <FormField
              key={field.name}
              {...field}
              value={formData[field.name]}
              onChange={handleChange}
              error={errors[field.name]}
            />
          ))}
        </div>

        {FORM_FIELDS.slice(2).map(field => (
          <FormField
            key={field.name}
            {...field}
            value={formData[field.name]}
            onChange={handleChange}
            error={errors[field.name]}
          />
        ))}

        <button
          type="submit"
          disabled={isSubmitting}
          className="submit-button"
          aria-label="Send message"
        >
          {isSubmitting ? (
            <>
              <AiOutlineLoading3Quarters className="spinning" size={20} />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <IoMdSend size={20} />
            </>
          )}
        </button>

        {submitStatus === 'success' && (
          <div className="status-message success" role="alert">
            <AiOutlineCheckCircle size={20} />
            Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="status-message error" role="alert">
            <AiOutlineCloseCircle size={20} />
            Something went wrong. Please try again or contact me directly.
          </div>
        )}
      </form>
    </div>
  );
};

// Form Field Component
const FormField = ({ name, label, type, placeholder, required, value, onChange, error }) => (
  <div className="form-group">
    <label htmlFor={name} className="form-label">
      {label} {required && '*'}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`form-textarea ${error ? 'error' : ''}`}
        placeholder={placeholder}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${name}-error` : undefined}
      />
    ) : (
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`form-input ${error ? 'error' : ''}`}
        placeholder={placeholder}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${name}-error` : undefined}
      />
    )}
    {error && (
      <span id={`${name}-error`} className="error-message" role="alert">
        {error}
      </span>
    )}
  </div>
);

// Main Contact Component
const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-container">
      {/* <div className="contact-header">
        <h2 className="contact-title">Let's Work Together</h2>
        <p className="contact-subtitle">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </p>
      </div> */}

      <div className="contact-grid">
        <ContactInfo personalInfo={PERSONAL_INFO} />
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;
