import React from "react";
import "remixicon/fonts/remixicon.css";
import anuj from "../../public/imgs/photo.png"
import bg2 from "../../public/imgs/bg2.jpg"
import { motion } from "framer-motion";


function Home() {
  return (
    <div className="  h-screen w-full bg-[#000000ef]">
      <div className="">
        <img className=" opacity-10 h-[40%] w-[80%]" src={bg2} alt="" />
      </div>
      <div className=" flex flex-col gap-[7vh] absolute top-[30.5%] left-[23%] text-white">
        <p className=" text-[2.6vh] tracking-tight font-light opacity-70 ">
          Home <span className=" text-[white]">/&gt;</span>
        </p>

        <div className=" text-[7vh] leading-[9vh] font-semibold">
          <p>
            Hi, my name is <span className="anuj font-thin text-[#116466]">Anuj Chaudhari</span>
          </p>
          <p>
            i<span className=" italic font-light"> design</span> and develop website
          </p>
        </div>

        <div>
          <p className=" text-[2.6vh] tracking-tight font-light opacity-70 ">
            Let me show You...
          </p>
        </div>
      </div>
      <motion.div className=" absolute top-[13%] left-[68%] hover:scale-[1.1] duration-200">
        <img className=" h-[60vh]" src={anuj} alt="" />
      </motion.div>
      
    

      <div className=" absolute  top-[80%] left-[19.8%]">
      <i class="text-[white] opacity-75  text-[4vh] ri-mouse-line"></i>
      <p className=" -translate-x-[1vh] opacity-100 rotate-90 py-3 text-[2.5vh] text-[#116466]">Scroll</p>
      </div>
    </div>
  );
}

export default Home;
