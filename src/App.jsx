import React from 'react';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FreeStuff from './components/FreeStuff';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Menu />
      <main className="content">
        <Hero />
        <Services />
        <Testimonials />
        <About />
        <FreeStuff />
        <Contact />
      </main>
    </div>
  );
};

export default App;