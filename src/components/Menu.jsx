import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <header className="menu">
      <h1>J MOVES</h1>
      <nav>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#free-stuff">Free Stuff</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;