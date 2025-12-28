import React from "react";
import CoverImg from '../assets/CoverImg.jpg'
import { FaArrowDown } from "react-icons/fa";
import { motion} from "framer-motion";


const Hero = ({scrollToRef}) => {
  const handleScroll = () => {
    scrollToRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    // bg-[#121412]
    <div className="  flex flex-col-reverse md:flex-row items-center justify-between  md:pb-4 md:mt-12  md:py-20 text-white font-inter">
      {/* Left Content */}
      <motion.div
        className="w-full md:w-1/2  mb-10 sm:mb-0 px-[25px] md:px-0 pb-4 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-[#D5B97A] my-4 font-medium text-2xl">
          Hello, I'm Pooja
        </p>
        <h1 className="text-[36px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-playfair leading-tight text-[#F1EDE3]">
          I create reliable web applications with a focus on usability and performance.
        </h1>

        {/* Scroll Icon */}
        <div className="mt-10 flex items-center gap-3" onClick={handleScroll}>
          <div className="w-9 h-9 border border-[#D5B97A] flex items-center justify-center rounded-full">
            <FaArrowDown className="text-[#D5B97A]" />
          </div>
          <p className="text-sm text-white font-inter">Scroll for more</p>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-full md:w-1/2  mb-10 sm:mb-0"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-full m-0 flex justify-end">
          <img
            src={CoverImg}
            alt="Monica"
            className="w-full md:w-[450px] h-[400px] sm:h-[500px]  object-cover rounded-sm"
          />
          {/* Optional decorative lines */}
          <div className="absolute right-[-30px] bottom-[40px] hidden sm:block">
            <div className="w-[60px] h-[2px] bg-[#D5B97A] mb-2"></div>
            <div className="w-[60px] h-[2px] bg-[#D5B97A] mb-2"></div>
            <div className="w-[60px] h-[2px] bg-[#D5B97A]"></div>
          </div>
        </div>
      </motion.div>
      <hr />
    </div>
  );
};

export default Hero;
