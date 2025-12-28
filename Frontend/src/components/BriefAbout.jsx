import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const BriefAbout = () => {
  const navigate = useNavigate();
  return (
    <div className="  flex flex-col md:flex-row items-center justify-between px-4 pb-4 mt-12  md:py-20 text-white font-inter">
      {/* Left Content */}
      <div className="w-full md:w-1/3 pb-9 ">
        <p className="text-[#ea8f29] mb-4 font-medium text-2xl">About</p>
        <h1 className="text-[36px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-playfair leading-tight text-[#F1EDE3]">
          Turning ideas into intuitive full-stack apps.
        </h1>
        <div className="max-h-32 flex-row justify-start w-full mt-10 ">
          <button
            onClick={() => navigate("/about")}
            className="mt-4 px-12 w-[100%] sm:w-[75%] py-4 border-2 hover:bg-white hover:text-black border-white text-white font-medium rounded sm:text-lg transition duration-300 ease-in-out"
          >
            More About Me
          </button>
          <div className="flex mt-6 w-[75%] justify-center gap-10 text-2xl">
            <a
              href="https://github.com/Pooja184"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/pooja-bhambid-346b03247"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2  flex justify-center mb-10 md:mb-0">
        <div className="relative text-xl/8 md:text-2xl/9">
          <p>
            Hi, I’m Pooja. A full stack web developer who enjoys building
            clean, responsive, and user-friendly websites. I work mainly with
            the MERN stack (MongoDB, Express.js, React, and Node.js) and love
            turning ideas into real, working web applications. Whether it’s
            frontend design or backend development, I enjoy being involved in
            the full development process.
            <br />
            <br />
            I’ve built projects like a tourism website with booking features and
            destination exploration, and a full e-commerce platform with product
            listings, cart functionality, and API integration. I focus on
            writing clean, maintainable code and creating smooth, intuitive user
            experiences that work across all devices. Every project I work on is
            a chance to learn something new and improve my skills.
            <br />
            <br />
            If you’re a recruiter looking for a dependable developer or a client
            with a web idea to bring to life, feel free to explore my work. I’m
            open to new opportunities, excited to collaborate, and always ready
            to build something impactful.
          </p>
          {/* Optional decorative lines
             <div className="absolute right-[-30px] bottom-[40px] hidden sm:block">
               <div className="w-[60px] h-[2px] bg-[#D5B97A] mb-2"></div>
               <div className="w-[60px] h-[2px] bg-[#D5B97A] mb-2"></div>
               <div className="w-[60px] h-[2px] bg-[#D5B97A]"></div>
             </div> */}
        </div>
      </div>
    </div>
  );
};

export default BriefAbout;
