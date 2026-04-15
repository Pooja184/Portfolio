import React from 'react'

const HeroPage = ({text1,text2}) => {
  return (
     <div className='min-h-[220px] sm:min-h-[260px] md:min-h-[320px] bg-[#232823] flex flex-col justify-center items-center px-[25px] py-10 text-center'>
      <p className="text-[#ea8f29] mb-3 font-medium text-lg sm:text-xl md:text-2xl">{text1}</p>
        <h2 className="w-full max-w-[720px] text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.12] font-playfair text-[#F1EDE3]">
          {text2}
        </h2>
    </div>
    
  )
}

export default HeroPage
