// StartPortfolio.jsx
import React from 'react';

const StartPortfolio = () => {
  return (
    <div className="flex flex-1" id="start">
      <div className="w-2/3">
        {/* Content for the Start component */}
        <div className='flex flex-col h-[600px] bg-blue-gray-600'>Start</div>
      </div>
      <div className="w-1/3">
        {/* Content for the Portfolio component */}
        <div className='flex flex-col h-[600px] bg-blue-gray-100'>Portfolio</div>
      </div>
    </div>
  );
}

export default StartPortfolio;
