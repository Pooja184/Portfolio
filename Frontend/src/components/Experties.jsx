import React from "react";
import { useNavigate } from "react-router-dom";

const Experties = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-white flex flex-col md:flex-row items-center justify-between px-4 pb-4 mt-12  md:py-20 text-black font-inter">
      {/* Left Content */}
      <div className="w-full md:w-1/3 pb-9 ">
        <p className="text-[#ea8f29] mb-4 font-medium text-2xl">Experties</p>
        <h1 className="text-[36px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-playfair leading-tight text-black">
          My key areas of experties
        </h1>
        <div className="max-h-32 flex-row justify-start w-full mt-10 hidden md:block">
          <button
            onClick={() => navigate("/about")}
            className="mt-4 px-12 w-[100%] sm:w-[75%] py-4 border-2 hover:bg-black hover:text-white border-black text-black font-medium rounded sm:text-lg transition duration-300 ease-in-out"
          >
            Explore My Work & Projects
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 flex flex-col gap-10 ">
          {/* Item 1 */}
          <div>
            <h3 className="text-[#ea8f10] font-bold mb-2 ">
              01. <span className="text-black text-xl/8 md:text-2xl/9">Full Stack Web Development</span>
            </h3>
            <p className="text-gray-700 text-lg/6 md:text-xl/8">
              I develop full-fledged web applications using MongoDB, Express, React, and Node.js. I handle everything from frontend views to backend logic and API development with clean, maintainable code.
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <h3 className="text-[#ea8f10] font-bold mb-2">
              02. <span className="text-black text-xl/8 md:text-2xl/9">Responsive Frontend Design</span>
            </h3>
            <p className="text-gray-700 text-lg/7 md:text-xl/8">
              I craft pixel-perfect, responsive designs using HTML, CSS, Tailwind, and Bootstrap.
              I focus on intuitive layout, accessibility, and consistent cross-device performance.
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <h3 className="text-[#ea8f10] font-bold mb-2">
              03. <span className="text-black text-lg/8 md:text-2xl/9">REST APIs & Backend Logic</span>
            </h3>
            <p className="text-gray-700 text-xl/7 md:text-xl/8">
              I build scalable and secure backend systems using Node.js and Express. I manage data flow, handle authentication, and create clean APIs that power modern web applications.
            </p>
          </div>
           <div className="max-h-32 flex-row justify-start w-full mt-10 md:hidden ">
          <button
            onClick={() => navigate("/about")}
            className="mt-4 px-12 w-[100%] sm:w-[75%] py-4 border-2 hover:bg-black hover:text-white border-black text-black font-medium rounded sm:text-lg transition duration-300 ease-in-out"
          >
            View All Services
          </button>
        </div>
        </div>
    </div>
  );
};

export default Experties;
