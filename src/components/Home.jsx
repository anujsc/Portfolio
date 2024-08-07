import React, { Suspense, useRef } from "react";
import "remixicon/fonts/remixicon.css";
import anuj from "../../public/imgs/photo.png"
import bg2 from "../../public/imgs/bg2.jpg"
import { motion } from "framer-motion";
import Line from "../utilis/Line";
import Nav from "./Nav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import ChangingText from "../utilis/ChangingText ";


function Home() {
   gsap.registerPlugin(useGSAP);
   const zero = useRef(null)
   const first = useRef(null)
   const sec= useRef(null)
   const fourth= useRef(null)

  useGSAP(()=>{
      var tl = gsap.timeline();
    tl.from(first.current,{
      x:-900,
      opacity:"0",
      ease:"bounce.out",
      duration:2
    },"a")
    tl.from(sec.current,{
      x:900,
      opacity:"0",
      ease:"bounce.out",
      duration:2
      
    },"a")
    tl.from(zero.current,{
     y:50,
     ease:"circ.inOut",
     duration:0.5,
     opacity:"0",
      
    })
    tl.to(fourth.current,{
      ease:"circ.inOut",
      duration:1,
      opacity:"100",
       
     })
  })
  return (
    <div className="  h-screen w-full bg-[#000000ef]">
      <Suspense>
         
       <Line/>
      
      <div className=" fixed z-[9999] h-[10vh] w-full top">
        <Nav />
      </div>

      <div className="">
        
        <img className=" opacity-10 h-[40%] w-[80%]" src={bg2} alt="" />
      </div>
      <div className=" flex flex-col gap-[7vh] absolute top-[30.5%] left-[23%] text-white">
        <p className=" text-[2.6vh] tracking-tight font-light opacity-70 ">
          Home <span className=" text-[white]">/&gt;</span>
        </p>

        <div className=" text-[7vh] leading-[9vh] font-semibold">
          <p ref={first} className="opacity-100">
            Hi, my name is <span className="anuj font-thin text-[#116466]">Anuj Chaudhari</span>
          </p>
          <p ref={sec} className=" flex gap-4 opacity-100">
            i<span className=" italic font-light"> design</span> and <span className=" italic font-thin"> develop </span><ChangingText/>
          </p>
        </div>

        <div>
          <p ref={zero} className=" text-[2.6vh] tracking-tight font-light opacity-70 ">
            Let me show You...
          </p>
        </div>
      </div>
      <motion.div ref={fourth} className=" opacity-0 absolute top-[13%] left-[68%] hover:scale-[1.1] duration-200">
        <img className=" h-[60vh]" src={anuj} alt="" />
      </motion.div>
      
    

      <div className=" absolute  top-[80%] left-[19.8%]">
      <i class="text-[white] opacity-75  text-[4vh] ri-mouse-line"></i>
      <p className=" hover:rotate-0 duration-200 -translate-x-[1vh] opacity-100 rotate-90 py-3 text-[2.5vh] text-[#116466]">Scroll</p>
      </div>
      </Suspense>
    </div>
  );
}

export default Home;