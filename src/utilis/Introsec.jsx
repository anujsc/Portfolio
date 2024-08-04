import React from "react";

function Introsec({ name, icon }) {
  return (
   <div className=" translate-y-[8vh]">
     <div className={` flex items-center gap-[3vh] absolute left-[20%]`}>
      <div className=" hover:scale-[1.2] duration-200 text-[3vh]  text-[#17898b]">
        {icon}
      </div>
      <p className=" hover:-tracking-tighter hover:scale-150 origin-left duration-200 text-[2.6vh] text-white tracking-tight font-light opacity-70 ">
        {name} <span className=" text-[white]">/&gt;</span>
      </p>
    </div>
   </div>
  );
}

export default Introsec;
