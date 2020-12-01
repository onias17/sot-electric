import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Services from '../components/Services';

const Home = () => {
  return (
    <div className="home">
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;