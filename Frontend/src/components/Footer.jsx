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
          <h2 className="text-2xl font-bold text-[#F1EDE3] mb-4">Site Links</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:max-w-md">
          <h2 className="text-2xl font-bold text-[#F1EDE3] mb-4">Newsletter</h2>
          <p className="text-sm text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ratione dignissimos.
          </p>
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full p-3 rounded-sm bg-[#1e1e1e] text-gray-300 placeholder:text-gray-400 outline-none mb-3"
          />
          <button className="w-full bg-[#F59E0B] hover:bg-[#f7ad34] text-black font-semibold py-3 rounded-sm">
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
