import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Projects2 from "./components/Projects2";
import Line from "./utilis/Line";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import cursor from "../public/imgs/cursor.jpeg"

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  // requires GSAP 3.10.0 or later
  const chlja = () => {
    gsap.set(".flair", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" }),
      yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  };

  return (
    <>
      <div className="flair  bg-slate-500 rounded-full w-[5vh] h-[5vh]">
        <img className=" rounded-full opacity-80" src={cursor} alt="" />
      </div>
      <button className="cursor text-[#116466] font-semibold z-[99999]  px-3 py-3 absolute top-[79.5%] left-[21.5%] rounded-full text-[2.4vh] tracking-tighter" onClick={()=>chlja()}>Click Me <i class="pl-1 text-[2.6vh] ri-megaphone-line"></i> </button>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
