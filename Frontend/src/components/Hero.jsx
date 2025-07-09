import React from "react";
import Profile from "../assets/Profile.jpg"; // make sure to place the image in assets
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-[#121412]  flex flex-col-reverse sm:flex-row items-center justify-between px-6 mt-12  py-20 text-white font-inter">
      {/* Left Content */}
      <div className="w-full sm:w-1/2">
        <p className="text-[#D5B97A] mb-4 font-medium text-2xl">
          Hello, I'm Pooja
        </p>
        <h1 className="text-[36px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-playfair leading-tight text-[#F1EDE3]">
         I bring ideas to life with clean code, solid backends, and intuitive interfaces.
        </h1>

        {/* Scroll Icon */}
        <div className="mt-10 flex items-center gap-3">
          <div className="w-9 h-9 border border-[#D5B97A] flex items-center justify-center rounded-full">
            <FaArrowDown className="text-[#D5B97A]" />
          </div>
          <p className="text-sm text-white font-inter">Scroll for more</p>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full sm:w-1/3 flex justify-center mb-10 sm:mb-0">
        <div className="relative">
          <img
            src={Profile}
            alt="Monica"
            className="max-w-[300px] sm:max-w-[350px] rounded-sm"
          />
          {/* Optional decorative lines */}
          <div className="absolute right-[-30px] bottom-[40px] hidden sm:block">
            <div className="w-[60px] h-[2px] bg-[#D5B97A] mb-2"></div>
            <div className="w-[60px] h-[2px] bg-[#D5B97A] mb-2"></div>
            <div className="w-[60px] h-[2px] bg-[#D5B97A]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
