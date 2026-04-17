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
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center justify-center border-2 border-black px-5 py-3 text-sm font-medium text-black transition duration-300 ease-in-out hover:bg-black hover:text-white sm:text-lg md:px-6 md:py-2"
        >
          Click here to view
        </a>
      </div>

      {/* Description Section */}
      <div className="mt-10 md:mt-0 md:w-1/2">
        <p className="md:pl-4 text-xl/8 md:text-2xl/9">{description}</p>
      </div>
    </div>
  );
};

export default ProjectSection;
