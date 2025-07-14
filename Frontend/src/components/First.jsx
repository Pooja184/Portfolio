import React from 'react'

const First = ({heading,items}) => {
  return (
    <div className="p-10 md:px-24 md:w-[80%]">
        <div>
          <h2 className="text-[36px] sm:text-[44px]  font-bold ">
            {heading}
          </h2>
        </div>
        <div className="text-lg md:text-lg/8 mt-5 md:mt-0">
          {items.map((item,index)=>(
            <p key={index} className='mb-3'>{item.description}</p>
          ))}
        </div>
      </div>
  )
}

export default First

