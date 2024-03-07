import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Start from './components/start';
import Portfolio from './components/portafolio';
import Aboutme from './components/aboutme';
import Work from './components/work';
import Footer from './components/footer';
import './index.css';

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false); // Start as invisible

  useEffect(() => {
    const handleScroll = () => {
      const startSection = document.getElementById('start'); // Get a reference to the start component
      const startSectionHeight = startSection.offsetHeight; // Get its height

      const scrollPosition = window.scrollY; // Get the scroll position

      if (scrollPosition >= startSectionHeight) {
        setIsNavbarVisible(true); // If beyond or at start height, make it visible
      } else {
        setIsNavbarVisible(false); // If below start height, make it invisible
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar className={isNavbarVisible ? '' : 'hidden'} />
      <div className="flex flex-1" id="start">
        <div className="w-2/3">
          <Start />
        </div>
        <div className="w-1/3">
          <Portfolio />
        </div>
      </div>
      <Aboutme />
      <Work />
      <Footer />
    </div>
  );
}

export default App;