import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
   
  const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
  return (
    <footer className="bg-[#121212] text-white px-6 md:px-20 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        {/* Site Links */}
        <div>
          <h2 className=" font-bold text-[#F1EDE3] mb-4 text-xl/8 md:text-2xl/9">Site Links</h2>
          <ul className="space-y-2 text-gray-300 text-base/6 md:text-lg/8">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:max-w-md">
          <h2 className="text-xl/8 md:text-2xl/9 font-bold text-[#F1EDE3] mb-4">Newsletter</h2>
          <p className=" text-gray-400 mb-4 text-base/5 md:text-lg/7">
            Like what you see? Let’s stay connected. Get my latest work and ideas in your inbox.
          </p>
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full p-3 rounded-sm bg-[#1e1e1e] text-gray-300 placeholder:text-gray-400 outline-none mb-3"
          />
          <button className="w-full  bg-[#ea8f10] hover:bg-[#f7ad34] text-black font-semibold py-3 rounded-sm">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="flex justify-center items-center my-10 md:mt-16">
        <div className="w-12 h-12  border border-[#D5B97A] flex items-center justify-center rounded-full" onClick={scrollToTop}>
        <FaArrowUp className="text-[#D5B97A]" />
      </div>
      </div>
    </footer>
  );
};

export default Footer;
