import React from 'react';
import pattern from '../assets/pattern.png';
import pfp from '../assets/cat_pfp.png';

const Aboutme = () => {
  return (
    <div className="mt-20 mb-20">
      <div className=" text-center">
        <h1 className=" mb-2 text-3xl lg:text-5xl font-bold">¡Bienvenido/a!</h1>
        <div className=" max-w-xs lg:max-w-2xl mx-auto">
          <hr className="mb-10 my-2 border-t-2 border-blue-300" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-between w-full lg:w-3/4 mx-auto">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <div className="paragraph-container p-4">
              <h1 className="text-left text-2xl lg:text-3xl font-bold mb-6">¿Quien soy?</h1>
              <p className="text-base mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit. Nascetur ridiculus mus mauris vitae. Enim nec dui nunc mattis enim ut.
              </p>
            </div>
            <div className="paragraph-container p-4">
              <p className="text-base mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit. Nascetur ridiculus mus mauris vitae. Enim nec dui nunc mattis enim ut.
              </p>
            </div>
            <div className="paragraph-container p-4">
              <p className="text-base mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit. Nascetur ridiculus mus mauris vitae. Enim nec dui nunc mattis enim ut.
              </p>
            </div>
            <div className="text-center">
              <img src={pattern} alt="Profile Image" className="mt-6 mx-auto mb-4" />
            </div>
          </div>

          {/* right div group */}
          <div className="pl-20 bg-white text-center lg:w-1/2">
            <div>
              <img src={pfp} alt="Image Above Button" className="w-100 h-100  mx-auto mb-16" />
            </div>
            <button className="mt-6 mb-6 bg-blue-500 text-white px-4 py-2 w-40 lg:w-60 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;