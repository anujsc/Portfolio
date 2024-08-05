import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="anchor px-14  pt-5 flex justify-between h-[10vh] w-full">
      <div className=" hover:-tracking-tighter -translate-y-2 text-[5vh] text-[#116466]">
        <motion.h1 whileHover={{ scale: 1.2 }}>
          Nuj <span className=" text-[white]">/&gt;</span>
        </motion.h1>
      </div>
      <div className=" flex gap-[8vh] text-white text-[3vh] -tracking-tighter font-semibold">
        {["Home", "About", "Project", "Contact"].map((i, j) => (
          <motion.h1
          drag dragConstraints={{ x: 400, y: 400 }}
          >
            <div>
              {i} <span className=" text-[#116466]">/&gt;</span>
            </div>
          </motion.h1>
        ))}
      
      </div>
    </div>
  );
}

export default Nav;
{/* <div className=" flex gap-[8vh] text-white text-[3vh] -tracking-tighter font-semibold">
<Link to="/">Home <span className=" text-[#116466]">/&gt;</span></Link>
<Link to="/About">About <span className=" text-[#116466]">/&gt;</span></Link>
<Link to="/Projects">Projects <span className=" text-[#116466]">/&gt;</span></Link>
<Link to="/Contact">Contact <span className=" text-[#116466]">/&gt;</span></Link>

</div> */}