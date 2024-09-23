import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>DR. J MOVES</h1>
          <p>Transforming Lives Through Movement and Health</p>
          <a href="#contact" className="btn">Get Started</a>
        </div>
        <div className="hero-image">
          <img src="/api/placeholder/600/800" alt="Dr. J Moves" />
        </div>
      </div>
    </section>
  );
};

export default Hero;