import React from "react";

const Third = ({ heading, items }) => {
  return (
    <div className="p-10 md:p-24">
      <h2 className="text-[36px] sm:text-[44px] font-bold mb-8">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index}>
            <p className="text-lg md:text-xl tracking-widest mb-3">
              {item.title}
            </p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Third;
