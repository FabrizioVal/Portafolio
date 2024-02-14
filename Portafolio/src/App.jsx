
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Start from './components/start';
import Portfolio from './components/portafolio';
import Aboutme from './components/aboutme';
import './index.css';

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the scroll position value based on your design
      const triggerScrollPosition = 200;

      if (scrollPosition > triggerScrollPosition) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
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
      <div className="flex flex-1">
        <div className="w-2/3">
          <Start />
        </div>
        <div className="w-1/3">
          <Portfolio />
        </div>
      </div>
      <Aboutme />
    </div>
  );
}

export default App;