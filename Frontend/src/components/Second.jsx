import React from "react";

const Second = ({ heading, description }) => {
  return (
    <div className="flex flex-col md:flex-row p-10 md:p-24">
      <div className="md:w-1/2 ">
        <h2 className="text-[36px] sm:text-[50px] md:text-[60px] leading-snug font-bold">
          {heading}
        </h2>
      </div>
      <div className="mt-10 md:mt-0 md:w-1/2">
        <p className=" md:pl-4 text-xl/8 md:text-2xl/9">{description}</p>
      </div>
    </div>
  );
};

export default Second;
