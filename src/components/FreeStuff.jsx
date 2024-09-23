import React from 'react';
import './FreeStuff.css';

const FreeStuff = () => {
  return (
    <section id="free-stuff" className="free-stuff">
      <h2>Free Resources</h2>
      <div className="resource-list">
        <div className="resource-item">
          <h3>Mobility Guide</h3>
          <p>Download our free guide to improving your mobility.</p>
          <a href="#" className="btn">Download</a>
        </div>
        <div className="resource-item">
          <h3>Weekly Newsletter</h3>
          <p>Sign up for our newsletter to receive tips and advice.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit" className="btn">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FreeStuff;