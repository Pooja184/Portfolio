import React from "react";
import HeroPage from "../components/HeroPage";

const Contact = () => {
  return (
    <>
      <HeroPage text1={"Contact"} text2={" Get In Touch"} />
      <div className="flex flex-col md:flex-row p-10 md:p-24">
        <div className="md:w-1/2 ">
          <h2 className="text-[36px] sm:text-[50px] md:text-[60px] leading-snug font-bold">
            Let’s build something meaningful together
          </h2>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2">
          <p className=" md:pl-4 text-xl/8 md:text-2xl/9">
            Email:
            <a
              href="mailto:poojabhambid2004@gmail.com"
              className="text-blue-600 underline"
            >
              poojabhambid2004@gmail.com
            </a>
            
          </p>
          <p className=" md:pl-4 text-xl/8 md:text-2xl/9">
            Linkdin:
            <a
              href="https://www.linkedin.com/in/pooja-bhambid-346b03247/"
              className="text-blue-600 underline"
            >
              Let's Connect
            </a> 
          </p>
             <p className=" md:pl-4 text-xl/8 md:text-2xl/9">
            Github:
            <a
              href="https://github.com/Pooja184"
              className="text-blue-600 underline"
            >
              Let's Connect
            </a> 
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
