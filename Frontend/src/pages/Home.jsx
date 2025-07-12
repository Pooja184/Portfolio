import React, { useRef } from "react";
import Hero from "../components/Hero";
import BriefAbout from "../components/BriefAbout";
import Experties from "../components/Experties";

const Home = () => {
  const briefAboutRef = useRef(null);
  return (
    <div>
      <div className="bg-[rgb(33,35,33)] px-[25px] py-[20px] md:px-[60px]">
        <Hero scrollToRef={briefAboutRef} />
      </div>
      <div ref={briefAboutRef} className="bg-[rgb(33,35,33)] px-[25px] py-[20px] md:px-[60px]">
        <BriefAbout />
      </div>
      <div className=" px-[25px] py-[20px] md:px-[60px]">
        <Experties />
      </div>
    </div>
  );
};

export default Home;
