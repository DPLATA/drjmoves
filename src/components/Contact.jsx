import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Email: info@jmoves.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Health St, Fitness City, FC 12345</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;