// src/pages/ContactPage.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/contact.css';
import '../styles/variable.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Information</h2>
        <p>
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <a className='links-contact' href="mailto:florent.detres@protonmail.com">florent.detres@protonmail.com</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <a className='links-contact' href="tel:+33783025264">+33 7 83 02 52 64</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
          Toulouse, France
        </p>
        <p>
          Feel free to reach out to me for any inquiries, project collaborations, or freelance work. I am always open to discussing new opportunities!
        </p>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
