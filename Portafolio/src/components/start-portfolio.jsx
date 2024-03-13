import React from 'react';
import { motion } from 'framer-motion';
import cat from '../assets/cat.gif';
import pug from '../assets/pug.png';
import spanish_flag from '../assets/spanish_flag.png';
import { ReactTyped } from "react-typed";

const StartPortfolio = () => {
  // Variants for the GIF animation
  const gifVariants = {
    hidden: {
      opacity: 0, // Make the GIF invisible
      y: '100%', // Position it below the screen
    },
    visible: {
      opacity: 1, // Make the GIF visible
      y: '0%', // Move it to its original position
      transition: {
        delay: 1.8, // This delay not only looks cool, but also helps respect the apparition of the text and not bug things
        duration: 1.5, // Duration of the animation
        ease: 'easeOut', // Easing function for smoother animation
      },
    },
  };

  return (
    <>
      {/* Black screen with text and GIF animation */}
      <motion.div
        className="fixed inset-0 flex flex-col items-center justify-start bg-black text-white z-10"
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: 1, x: '100%' }}
        transition={{ duration: 0.8, delay: 4 }}
      >

        {/* Text animated by ReactTyped */}
        <ReactTyped
          className="text-5xl mb-20 mt-28"
          strings={["Welcome!"]}
          typeSpeed={150}
          showCursor={false}
        />

        {/* GIF with motion animation */}
        <motion.img
          src={cat}
          alt="GIF Animation"
          style={{ marginTop: '50px', marginLeft: 'auto', marginRight: 'auto' }} // Center horizontally
          variants={gifVariants}
          initial="hidden" // Initially hidden below the screen
          animate="visible" // Animated to its visible state
        />
      </motion.div>

      {/*This is the main start div, what you see after the black screen*/}

      <div className="w-full h-full bg-white">
  <div className="flex flex-col h-full" id="start">

    {/* Container for the image at the top right */}
    <div className="flex justify-end items-start">
      <img src={spanish_flag} alt="Image" className="w-14 h-14" />
    </div>
    
    {/* Container for the text and image */}
    <div className="flex flex-1">
      {/* Text content on the left */}
      <div className="mt-10 w-1/2 flex flex-col justify-center"  style={{ padding: '0 100px' }}>
        <h2 className="text-6xl text-left font-bold mb-4">Portfolio</h2>
        <h2 className="text-3xl text-left mb-4">Fabrizio Gabriel Vallone</h2>
        <hr className="mb-10 border-t-2 border-black text-left" />

        <p className="text-xl mb-28">I’m a student who’s learning the ropes of being a full stack-developer. </p>

        <div className="flex justify-between items-center">
    <img src="icon1.png" alt="Icon 1" className="w-10 h-10" />
    <img src="icon2.png" alt="Icon 2" className="w-10 h-10" />
    <img src="icon3.png" alt="Icon 3" className="w-10 h-10" />
  </div>
      </div>
      
      {/* Image on the right */}
      <div className="w-1/2 flex justify-center items-center">
        <img src={pug} alt="Big Image" className="w-full h-auto mt-4" style={{ width: '55%', height: '100%' }}/>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default StartPortfolio;
