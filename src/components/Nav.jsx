import { motion } from "framer-motion";
import React from "react";

function Nav() {
    
  return (
    <div className="anchor px-14  pt-5 flex justify-between h-[10vh] w-full">
      <div className=" hover:-tracking-tighter -translate-y-2 text-[5vh] text-[#116466]">
        <motion.h1
        whileHover={{scale:1.2}}
        >Nuj <span  className=" text-[white]">/&gt;</span></motion.h1>
      </div>
      <div className=" flex gap-[8vh] text-white text-[3vh] -tracking-tighter font-semibold">
        {["Home","About","Project","Contact"].map((i, j) =>(
            <motion.a
            drag
            dragConstraints={{x:400,y:400}}
            href="">
            {i} <span className=" text-[#116466]">/&gt;</span>
          </motion.a>
        ))}

      </div>
    </div>
  );
}

export default Nav;
