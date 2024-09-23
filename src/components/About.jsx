import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About J Moves</h2>
      <div className="about-content">
        <img src="/path-to-image.jpg" alt="J Moves" className="about-image" />
        <div className="about-text">
          <p>J Moves is dedicated to helping people achieve optimal health and mobility through personalized training and education. With years of experience in health and fitness, we provide expert guidance to help you move better, feel better, and live better.</p>
          <p>Our approach combines the latest in mobility science with practical, actionable advice to help you reach your health and fitness goals.</p>
        </div>
      </div>
    </section>
  );
};

export default About;