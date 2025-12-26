const MiniProjectCard = ({ title, description, image, liveUrl }) => {
  return (
    <div className="relative h-44 overflow-hidden 
                    rounded-2xl shadow-lg object-cover 
                    group cursor-pointer">

      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover 
                   group-hover:scale-110 transition-transform duration-300"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 
             bg-black/50 
             flex flex-col items-center justify-center 
             text-white p-4 text-center
             opacity-100 md:opacity-0 
             md:group-hover:opacity-100 
             transition-opacity duration-300">

        <h3 className="text-lg font-semibold mb-2">
          {title}
        </h3>

        <p className="text-sm mb-4">
          {description}
        </p>

        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 
                     bg-white text-black 
                     rounded-lg text-sm font-semibold
                     hover:bg-gray-200 transition"
        >
          View Live
        </a>
      </div>
    </div>
  );
};

export default MiniProjectCard;
