import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div  className="bg-[#232823] w-full h-20 flex justify-between items-center px-[25px] md:px-[60px] md:py-5 pt-[25px] md:pt-[35px] text-white relative ">
      {/* Logo */}
      <div className="text-[30px] font-semibold font-playfair">Pooja.</div>

      {/* Nav Links (hidden on small screens) */}
      <div className="hidden md:flex w-1/2 justify-start items-center gap-6 text-[15px] font-inter">
      <NavLink to="/" className="text-[#B1B1AA] hover:text-white">Home</NavLink>
        <NavLink to="/about" className="text-[#B1B1AA] hover:text-white">About</NavLink>
        <NavLink to="/projects" className="text-[#B1B1AA] hover:text-white">Projects</NavLink>
        <NavLink to="/contact" className="text-[#B1B1AA] hover:text-white">Contact</NavLink>
      </div>

      {/* CTA Button (hidden on small screens) */}
      <div className="hidden md:flex justify-end w-1/3">
        <button className="px-8 py-4 font-medium text-[18px] bg-[#ea8f10] text-black rounded-md font-inter">
          Let's Work Together
        </button>
      </div>

      {/* Hamburger icon (visible only on small screens) */}
      <div className="md:hidden">
        <FaBars className="text-xl cursor-pointer" onClick={() => setVisible(true)} />
      </div>

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed top-0 right-0  w-[100%] bg-[rgb(33,35,33)]  z-50 transition-transform duration-300 ease-in-out ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-4 font-inter">
          <div className="flex justify-end">
            <FaTimes className="text-xl cursor-pointer" onClick={() => setVisible(false)} />
          </div>
          <NavLink to="/" onClick={() => setVisible(false)} className="text-[#B1B1AA] hover:text-white py-2">Home</NavLink>

          <NavLink to="/about" onClick={() => setVisible(false)} className="text-[#B1B1AA] hover:text-white py-2">About</NavLink>
          <NavLink to="/projects" onClick={() => setVisible(false)} className="text-[#B1B1AA] hover:text-white py-2">Projects</NavLink>
          <NavLink to="/contact" onClick={() => setVisible(false)} className="text-[#B1B1AA] hover:text-white py-2">Contact</NavLink>
          <button className="mt-4 px-6 py-3 bg-[#ea8f10] text-black font-medium rounded hover:bg-[#ff9f2a] transition">
            Let's Work Together
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
