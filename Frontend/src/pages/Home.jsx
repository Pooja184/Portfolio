import React, { useRef } from "react";
import Hero from "../components/Hero";
import BriefAbout from "../components/BriefAbout";
import Experties from "../components/Experties";
import Consultation from "../components/Consultation";
import Footer from "../components/Footer";

const Home = () => {
  const briefAboutRef = useRef(null);
  return (
    <div>
      <div className="bg-[#232823]  py-[20px]  md:px-[60px]">
        <Hero scrollToRef={briefAboutRef} />
      </div>
      <div ref={briefAboutRef} className="bg-[#232823] px-[25px] py-[20px] md:px-[60px]">
        <BriefAbout />
      </div>
      <div className=" px-[25px] py-[20px] md:px-[60px]">
        <Experties />
      </div>
      <div className="bg-[#232823]  px-[25px] py-[20px] md:px-[60px]">
        <Consultation />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};
// #1a1a1a-for footer
export default Home;
