import React from 'react';
import logo from '../assets/js_logo.png';

const Aboutme = () => {
  return (
    <div className='mt-10'>
    
    <h1 className="mb-2 text-3xl font-bold text-center">¡Bienvenido/a!</h1>
    <div style={{ maxWidth: '10%', marginLeft: 'auto', marginRight: 'auto' }}>
     <hr className="mb-10 my-2 border-t-2 border-blue-300" />
    </div>

    <div className=" flex flex-col items-center justify-center h-screen">
      

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between h-full w-full lg:w-3/4 mx-auto">
        <div className="pr-4 lg:w-1/2 mb-4 lg:mb-0">
          <div className="paragraph-container bg-gray-300 p-4">
            <h1 className='text-center text-3xl font-bold mb-10'>¿Quien soy?</h1>
            <p className="text-base mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit. Nascetur ridiculus mus mauris vitae. Enim nec dui nunc mattis enim ut.
            </p>
          </div>
          <div className="paragraph-container bg-gray-300 p-4">
            <p className="text-base mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit. Nascetur ridiculus mus mauris vitae. Enim nec dui nunc mattis enim ut.
            </p>
          </div>
          <div className="paragraph-container bg-gray-300 p-4">
            <p className="text-base mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit. Nascetur ridiculus mus mauris vitae. Enim nec dui nunc mattis enim ut.
            </p>
          </div>
          <div className="text-center">
            <button className="mt-16 bg-blue-500 text-white px-4 py-2 w-40 rounded">
              Learn More
            </button>
          </div>
        </div>

        <div className="lg:w-2/3 bg-blue-gray-400">
          <div className=" border p-4">
            <h2 className='text-left text-3xl font-bold mb-10'>Conocimientos Tecnicos</h2>
            <h2 className="text-2xl font-bold mb-4">Lenguajes de programacion</h2>
            <div className="flex align-left">
              <img src={logo} alt="Image 1" className="w-12 h-12 mr-5" />
              <img src={logo} alt="Image 2" className="w-12 h-12 mr-5" />
            </div>
            <h2 className="text-2xl font-bold mt-4 mb-4">Tecnologias que uso</h2>
            <div className="flex align-left">
              <img src={logo} alt="Image 3" className="w-12 h-12 mr-5" />
              <img src={logo} alt="Image 4" className="w-12 h-12 mr-5" />
            </div>
            <div className="flex align-left mt-6">
              <img src={logo} alt="Image 3" className="w-12 h-12 mr-5" />
              <img src={logo} alt="Image 4" className="w-12 h-12 mr-5" />
            </div>
            <div className="flex align-left mt-6">
              <img src={logo} alt="Image 3" className="w-12 h-12 mr-5" />
              <img src={logo} alt="Image 4" className="w-12 h-12 mr-5" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
