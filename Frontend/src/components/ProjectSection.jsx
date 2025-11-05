import React from "react";

const ProjectSection = ({ imgSrc, description,link }) => {
  return (
    <div className="flex flex-col md:flex-row p-10 md:p-24 items-center">
      {/* Image Section */}
      <div className="md:w-1/2 flex-col justify-center">
        <img
          src={imgSrc}
          alt="Section Visual"
          className="w-full max-w-md rounded-2xl shadow-lg object-cover"
        />
        <div className="mt-4 px-2 py-2 md:px-6 w-1/3 md:py-2 border-2 hover:bg-black hover:text-white border-black text-black font-medium rounded sm:text-lg transition duration-300 ease-in-out">
            <a href={link}>Click here to view</a>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-10 md:mt-0 md:w-1/2">
        <p className="md:pl-4 text-xl/8 md:text-2xl/9">{description}</p>
      </div>
    </div>
  );
};

export default ProjectSection;
