import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import StartPortfolio from './components/start-portfolio';
import Aboutme from './components/aboutme';
import Work from './components/work';
import Footer from './components/footer';
import './index.css';

function App() {
  
  const scrollThreshold = 600; // Set your desired scroll threshold here

  return (
    <div className="flex flex-col">
      <div>
      <Navbar scrollThreshold={scrollThreshold}/>
      <div>
      <StartPortfolio/>
      <Aboutme />
      <Work />
      <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;

/*import React from 'react';
import Navbar from './components/navbar';
import StartPortfolio from './components/start-portfolio';
import Aboutme from './components/aboutme';
import Work from './components/work';
import Footer from './components/footer';
import './index.css';

function App() {
  const scrollThreshold = 100; // Set your desired scroll threshold here

  return (
    <div className="flex flex-col h-screen">
      <Navbar scrollThreshold={scrollThreshold} style={{ zIndex: 1000 }} />
      <div className="flex flex-1">
        <div className="w-2/3">
          <StartPortfolio />
        </div>
        <div className="w-1/3">
          <div className="relative">
            <Aboutme />
            <Work />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
 */