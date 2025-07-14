import React from 'react'

const HeroPage = ({text1,text2}) => {
  return (
     <div className='h-[35vh] md:h-[50vh] bg-[#232823] flex flex-col justify-center items-center'>
      <p className="text-[#ea8f29] mb-4 font-medium text-2xl">{text1}</p>
        <h2 className="md:w-1/3 text-[40px] sm:text-[55px] font-bold md:text-[60px] lg:text-[70px] font-playfair  text-[#F1EDE3]">
          {text2}
        </h2>
    </div>
    
  )
}

export default HeroPage
