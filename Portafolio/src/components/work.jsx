import React, { useState } from 'react';
import demo_image1 from '../assets/demo_image1.png';
import demo_image2 from '../assets/demo_image2.png';
import '../styles/styles.css';

const Work = () => {
  const [works, setWorks] = useState([
    { id: 1, title: 'This website!', role: 'UI/UX Design', description: 'A website for showing my portfolio', imageUrl: demo_image1 },
    { id: 2, title: 'Analytix', role: 'UI/UX Design', description: 'Landing page which presents a graph maker app', imageUrl: demo_image2 },
  ]);

  const [selectedWork, setSelectedWork] = useState(works[0]);
  const [imageOpacity, setImageOpacity] = useState(1);

  const handleWorkHover = (work) => {
    // Check if hovering over the same work
    if (work.id !== selectedWork.id) {
      // Fade out the current image
      setImageOpacity(0);

      // Set a delay to allow the fade-out effect
      setTimeout(() => {
        // Change the image source
        setSelectedWork(work);
        // Fade in the new image
        setImageOpacity(1);
      }, 300);
    }
  };

  return (
    <div className='mt-10 mb-10 main-container flex' >
      {/* Left side - Image displayer */}
      <div className="flex-1 position-relative ml-4">
        <img
          src={selectedWork.imageUrl}
          alt={selectedWork.title}
          className="w-full h-full transition-opacity duration-500 ease-in-out"
          style={{ opacity: imageOpacity }}
        />
      </div>

      {/* Right side - List of titles */}
      <div className="text-left flex-1 ml-4 mr-4">
        <h1 className="text-3xl font-bold mb-4 text-right">My latest works</h1>
        <ul>
          {works.map((work) => (
            <li
              key={work.id}
              onMouseEnter={() => handleWorkHover(work)}
              className="cursor-pointer hover:text-blue-500 mb-4"
            >
              {/* Container for each work item */}
              <div className="button button10 border-4 border-light-green-200 p-4 work-container flex flex-col">
                <div>
                  <p className="font-bold mb-2">{work.title}</p>
                </div>
                <div className="flex justify-between">
                  <p className="role">{work.description}</p>
                  <p className="description">{work.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Work;
