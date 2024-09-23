import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Client Testimonials</h2>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <p>"J Moves has completely transformed my mobility. I feel years younger!"</p>
          - Sarah J.
        </div>
        <div className="testimonial-item">
          <p>"The personalized training program helped me achieve my fitness goals faster than I thought possible."</p>
          - Mike T.
        </div>
      </div>
    </section>
  );
};

export default Testimonials;