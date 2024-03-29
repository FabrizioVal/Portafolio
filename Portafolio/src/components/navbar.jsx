import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import English_flag from '../assets/english_flag.png'

function NavList() {
  return (
    <ul className=" my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

      <Typography
        as="li"
        variant="small"
        style={{ color: '#8397a0' }}
        className="p-1 font-bold manrope-font"
      >
        <a href="#" className="flex items-center hover:text-[#9951FF] transition-colors">
          Trabajos
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        style={{ color: '#8397a0' }}
        className="p-1 font-bold manrope-font"
      >
        <a href="#" className="flex items-center hover:text-[#9951FF] transition-colors">
          Formacion
        </a>
      </Typography>
      <Typography>
        <img className='w-4 h-4' src={English_flag} alt="English Flag" />
      </Typography>

    </ul>
  );
}

export function NavbarSimple({ scrollThreshold }) {
  const [openNav, setOpenNav] = React.useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
    
        if (scrollPosition >= scrollThreshold && !isNavbarVisible) {
          setIsNavbarVisible(true);
        } else if (scrollPosition < scrollThreshold && isNavbarVisible) {
          setIsNavbarVisible(false);
        }
      };
    
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [scrollThreshold, isNavbarVisible]);

  return (
    <Navbar
      className={`solid-background h-max max-w-full rounded-none mx-auto px-20 py-1 sticky top-0 bg-[#131213] shadow-none border-none manrope-font ${
        isNavbarVisible ? "navbar-enter navbar-enter-active" : "navbar-exit navbar-exit-active"
      }`}
      style={{
        zIndex: 1000,
        position: "fixed",
        top: 0,
        width: "100%", // Make sure it takes the full width of the viewport
        
        
      }}
    >
      <div className=" flex items-center justify-between text-[#ffffff]">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 text-xl manrope-font"
        >
          Fabrizio Vallone
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default NavbarSimple;
