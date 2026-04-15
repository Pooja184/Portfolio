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
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 md:pb-4 md:py-10 text-white font-inter">
      {/* Left Content */}
      <motion.div
        className="w-full md:w-1/2 mb-8 sm:mb-0 md:px-0 pb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-[#D5B97A] mb-3 font-medium text-lg sm:text-xl md:text-2xl">
          Hello, I'm Pooja
        </p>
        <h1 className="max-w-[12ch] text-4xl sm:text-5xl lg:text-6xl font-playfair leading-[1.12] text-[#F1EDE3]">
          I create reliable web applications with a focus on usability and performance.
        </h1>

        {/* Scroll Icon */}
        <div className="mt-8 flex items-center gap-3" onClick={handleScroll}>
          <div className="w-9 h-9 border border-[#D5B97A] flex items-center justify-center rounded-full">
            <FaArrowDown className="text-[#D5B97A]" />
          </div>
          <p className="text-sm text-white font-inter">Scroll for more</p>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-full md:w-1/2 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-full m-0 flex justify-end">
          <img
            src={CoverImg}
            alt="Monica"
            className="w-full md:w-[450px] h-[320px] sm:h-[420px] lg:h-[460px] object-cover rounded-sm"
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
