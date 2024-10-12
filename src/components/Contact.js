import React from 'react';
import './Contact.css';
import contactImage from '../assets/contact-image.jpg';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-image" style={{ backgroundImage: `url(${contactImage})` }}></div>
      <h2>Contact Us</h2>
      <div className="contact-details-box">
        <div className="contact-details">
          <p><strong>Location:</strong> Bangalore</p>
          {/* Use mailto protocol to open default email client */}
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@advancedtech.co.in">info@advancedtech.co.in</a>
          </p>
          {/* Use tel protocol for dialing the phone number */}
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+918309075191">+91-8309075191</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
