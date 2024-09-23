import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>Mobility Training</h3>
          <p>Improve your range of motion and flexibility.</p>
        </div>
        <div className="service-item">
          <h3>Strength Coaching</h3>
          <p>Build strength and muscle with personalized programs.</p>
        </div>
        <div className="service-item">
          <h3>Injury Prevention</h3>
          <p>Learn techniques to minimize the risk of injuries.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;