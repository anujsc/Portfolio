import React from 'react'
import cursor from "/imgs/cursor.jpeg";
import { motion } from "framer-motion";

function Cursor({chlja}) {
  return (
    <div>
    <div className="flair -translate-y-[15vh] bg-slate-500 rounded-full w-[5vh] h-[5vh]">
      <img className=" rounded-full opacity-80" src={cursor} alt="" />
    </div>
    <motion.button
      initial={{ x: "-30%" }}
      animate={{ x: "0", repeatType: "Infinity", repeatDelay: 5 }}
      transition={{ repeat: Infinity, ease: "circIn", duration: 2 }}
      className="cursor text-[#116466] z-[99999]  px-3 py-3 absolute top-[79.5%] left-[12.5%] rounded-full text-[2.4vh] tracking-tighter"
      onClick={chlja}
    >
      Click Me <i class="pl-1 text-[2.6vh] ri-megaphone-line"></i>{" "}
    </motion.button>
    </div>
  )
}

export default Cursor