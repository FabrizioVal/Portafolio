import React, { useState } from 'react';
import demo_image1 from '../assets/demo_image1.png'
import demo_image2 from '../assets/demo_image2.png'


const Work = () => {
  const works = [
    { id: 1, title: 'Work 1', imageUrl: demo_image1 },
    { id: 2, title: 'Work 2', imageUrl: demo_image2 },
    // Add more works as needed
  ];

  const [selectedWork, setSelectedWork] = useState(works[0]);

  const handleWorkHover = (work) => {
    setSelectedWork(work);
  };

  return (
    <div className='mt-10 mb-10'>
      

      <div className="flex">
        {/* Left side - Image displayer */}
        <div className="flex-1">
          <img src={selectedWork.imageUrl} alt={selectedWork.title} className="w-full h-auto" />
        </div>

        {/* Right side - List of titles */}
        <div className="text-center flex-1 mr-4">
          <ul>
          <h1 className="text-3xl font-bold mb-4 text-right mr-40">My Works</h1>
            {works.map((work) => (
              <li
                key={work.id}
                onMouseEnter={() => handleWorkHover(work)}
                className="cursor-pointer hover:text-blue-500"
              >
                {work.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;