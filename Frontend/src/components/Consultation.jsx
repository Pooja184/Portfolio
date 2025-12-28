import React from "react";
import { useNavigate } from "react-router-dom";

const Consultation = () => {
  const navigate=useNavigate()
  return (
    <div className="bg-[#232823] text-[#F1EDE3] py-20 px-4 flex flex-col items-center text-center font-inter">
      <h2 className="text-[36px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-playfair font-semibold mb-6 leading-tight">
        Let’s connect and create <br/> something great.
      </h2>
      <p className="max-w-4xl text-xl/8 md:text-2xl/9 text-[#E4E0D5] mb-10">
        If you're planning a website or project and need help with design or development, feel free to reach out. We can discuss your ideas, what you’re looking for, and how I can help. I’ll make sure the process is clear, simple, and aligned with your vision.
      </p>
      <button onClick={()=>navigate("/contact")} className="mt-4 px-12 py-5 bg-[#ea8f10] text-black font-medium rounded hover:bg-[#ff9f2a] transition">
            Let's Work Together
          </button>
    </div>
  );
};

export default Consultation;
