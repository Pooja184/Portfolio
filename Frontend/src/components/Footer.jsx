import React from "react";
import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-[#121212] text-white px-6 md:px-20 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        {/* Site Links */}
        <div>
          <h2 className=" font-bold text-[#F1EDE3] mb-4 text-xl/8 md:text-2xl/9">
            Site Links
          </h2>
          <div className="space-y-2 flex flex-col text-base/6 md:text-lg/8">
            <NavLink to={"/"} className="text-gray-300 hover:text-white">Home</NavLink>
            <NavLink to={"/about"} className="text-gray-300 hover:text-white">About</NavLink>
            <NavLink to={"/projects"} className="text-gray-300 hover:text-white">Services</NavLink>
            <NavLink to={"/contact"} className="text-gray-300 hover:text-white">Contact</NavLink>
          </div>
        </div>

        {/* Newsletter */}
        <div className="md:max-w-md">
          <h2 className="text-xl/8 md:text-2xl/9 font-bold text-[#F1EDE3] mb-4">
            Let’s Connect
          </h2>

          <p className="text-gray-400 mb-6 text-base/5 md:text-lg/7">
            Like what you see? Let’s stay connected.
          </p>

          <div className="flex items-center gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/pooja-bhambid-346b03247"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#0A66C2] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>

            {/* Email */}
            <a
              href="mailto:poojabhambid2004@gmail.com"
              className="text-gray-300 hover:text-[#ea8f10] transition"
              aria-label="Email"
            >
              <MdEmail size={28} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Pooja184"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="flex justify-center items-center my-10 md:mt-16">
        <div
          className="w-12 h-12  border border-[#D5B97A] flex items-center justify-center rounded-full"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-[#D5B97A]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
