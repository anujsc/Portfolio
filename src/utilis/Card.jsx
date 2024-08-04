import React from "react";

function Card({ img, title, no,link }) {
  return (
    <div>
      <div className="ml-[8%] z-[2] h-[33vh] w-[60vh] relative bg-zinc-700 overflow-hidden ">
        <a href={link}>
          <div className=" hover:opacity-65 opacity-85 hover:scale-[1.1] duration-200">
            <img className="bg1 h-[33vh] w-[60vh]" src={img} alt="" />
          </div>
        </a>
      </div>
      <div className=" card hover:scale-[0.8] hover:opacity-85 text-[#d1e8e2] opacity-40 duration-200 flex absolute top-[123%] left-[55%] -translate-x-1/2 -translate-y-1/2">
        <p className=" flex gap-1 text-[8vh] opacity-70 font-semibold -translate-y-4 ">
          {no}
        </p>
        <p className=" text-[5vh] text-center leading-[4.3vh] font-bold ">
          {title}
        </p>
      </div>
    </div>
  );
}

export default Card;
