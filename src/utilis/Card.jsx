import React from 'react'


function Card({img,title,no}) {
  return (
    <div className="ml-[8%] z-[2] h-[33vh] w-[60vh] relative bg-zinc-700 overflow-hidden">
        <div className=" opacity-35 hover:opacity-100 hover:scale-[1.2] duration-200">
          <img className="bg1 h-[33vh] w-[60vh]" src={img} alt="" />
        </div>
        <div className=" card hover:scale-[0.8] duration-200 flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className=" flex gap-1 text-white font-semibold -translate-y-4 ">
            {no} <i class=" ri-arrow-right-line"></i>
          </p>
          <p className=" text-[5.5vh] text-center text-[#d1e8e2] leading-[4.8vh] tracking-tight font-bold ">
            {title} 
          </p>
        </div>
      </div>
  )
}

export default Card