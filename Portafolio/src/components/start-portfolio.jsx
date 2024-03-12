import React from 'react';
import { motion } from 'framer-motion';
import cat from '../assets/cat.gif';

const StartPortfolio = () => {
  return (
    <>
      {/* Black screen with text and GIF animation */}
      <motion.div
        className="fixed inset-0 flex flex-col items-center justify-start bg-black text-white z-10" // Changed justify-center to justify-start
        initial={{ opacity: 1, x: 0 }} // Initial position (visible and centered)
        animate={{ opacity: 1, x: '100%' }} // Animation to slide offscreen to the right
        transition={{ duration: 0.8, delay: 1.5 }} // Transition duration with 3 seconds delay
      >
        <h1 className="text-5xl mb-20 mt-28 ">Welcome!</h1> {/* Added margin-top */}
        <img src={cat} alt="GIF Animation" />
      </motion.div>

      {/* Content for the Start and Portfolio components */}
      <div className="w-full h-full bg-white">
        <div className="flex flex-1" id="start">
          <div className="w-2/3">
            {/* Content for the Start component */}
            <div className="flex flex-col h-[600px] bg-blue-gray-600">Start</div>
          </div>
          <div className="w-1/3">
            {/* Content for the Portfolio component */}
            <div className="flex flex-col h-[600px] bg-blue-gray-100">Portfolio</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartPortfolio;
