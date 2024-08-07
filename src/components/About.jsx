import React from "react";
import Introsec from "../utilis/Introsec";

function About() {
  let data=[
    {
      no:"05",
      this:"this",
      sec:"name",
      eq:"=",
      last:"Anuj Chaudhari"
    },
    {
      no:"06",
      this:"this",
      sec:"dayOfBirthTimestamp",
      eq:"=",
      last:"23-11-03"
    },
    {
      no:"07",
      this:"this",
      sec:"email",
      eq:"=",
      last:"anujpvt2311@gmail.com"
    }
  ]

  let skills=[
    "HTML5","CSS3","JAVASCRIPT","REACT.js","JSX","TAILWIND","RESPONSIVE DESIGN","REDUX/TOOLKIT", "GIT/GITHUB"
  ]
  
  return (
  <div className=" overflow-hidden">
      <div
      data-scroll data-scroll-speed="-1" 
      className=" h-screen w-full bg-[#000000e0]">
      <Introsec name={"About"} icon={<i class="ri-user-line"></i>}/>

      <div className="about text-[2.3vh] pt-[19vh] ">
        <h1 className="01 flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">01</span>
          <span className=" text-[yellow]">
            <span className="text-[#17898b]">class</span> Anuj Chaudhari ｛
          </span>
        </h1>
        <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">02</span>
          <span className=" text-[white] opacity-40">
          ··// I can, because I did.
          </span>
        </h1>
        <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">03</span>
          <span className=" text-[white] opacity-40">
          ·// My vast variety of skills is continuously expanding.
          </span>
        </h1>
        <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">04</span>
          <span className=" text-[#17898b]">
          constructor <span className=" text-white">() ｛</span>
          </span>
        </h1>
        {data.map((item)=>(
          <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">{item.no}</span>
          <span className="">
          <span className=" text-[#E0244C]">this</span>
          <span className=" text-white">.</span>
          <span className=" text-[#23D78D]">{item.sec}</span>
          <span className=" text-[#E0244C]"> = </span>
          <span className=" text-[#22e937]">{item.last}</span>
          </span>
        </h1>
        ))}
        <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">08</span>
          <span className=" rotate-180 text-[#ffffff]">
           ｛
          </span>
        </h1>
        <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">09</span>
          <span className=" text-[yellow]">
          education <span className=" text-white">() ｛</span>
          </span>
        </h1>
        <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">10</span>
          <span className=" text-[#17898b]">
          return <span className=" text-white">〚</span>
          </span>
        </h1>

        <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">11</span>
          <span className=" text-[#17898b]">
         <span className=" text-white">｛</span>
         <span className=" text-[#24E23A]">'2019'</span>
         <span className=" text-white">:</span>
         <span  className=" text-[#24E23A]" >'Swami Vivekanand Vidya Mandir, Raver - 10th'</span>
         <span className=" text-white">,</span>
          </span>
        </h1>
        <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">12</span>
          <span className=" text-[#17898b]">
         <span className=" text-transparent">｛</span>
         <span className=" text-[#24E23A]">'2021'</span>
         <span className=" text-white">:</span>
         <span  className=" text-[#24E23A]" >'Sardar.G.G.Highschool, Raver - 12th'</span>
         <span className=" text-white">,</span>
          </span>
        </h1>
        <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">13</span>
          <span className=" text-[#17898b]">
         <span className=" text-transparent">｛</span>
         <span className=" text-[#24E23A]">'2021-Present'</span>
         <span className=" text-white">:</span>
         <span  className=" text-[#24E23A]" >'Sinhgad Institute Of Technology, Lonavala - B.E-COMP ENGG.'</span>
         <span className=" text-white">,</span>
          </span>
        </h1>
        <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">14</span>
          <span className=" text-[white]">
          ｝
          </span>
        </h1>
        <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">15</span>
          <span className=" text-[white]">
         <span className=" text-white opacity-45">..</span>〛
          </span>
        </h1>
        <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">16</span>
          <span className=" text-[white]">
         <span className="  text-white opacity-45">...</span>｝
          </span>
        </h1>
        <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">17</span>
          <span className=" text-[yellow]">
          skills <span className=" text-white">() ｛</span>
          </span>
        </h1>
        <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">18</span>
          <span className=" text-[#17898b]">
          return <span className=" text-white">〚 </span>
          {skills.map((i)=>(
          <span className="text-[#24E23A]">{i}, </span>
          ))}
          </span>
        </h1>
        <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">19</span>
          <span className="text-[#24E23A]">DEBUGGING, GSAP, FRAMER MOTION <span className=" text-white">〛</span> </span>
        </h1>
        <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">20</span>
          <span className=" text-[white]">
         <span className="  text-white opacity-45">..</span>｝
          </span>
        </h1>
        <h1 className=" flex hover:bg-[#3a4646ca] duration:200 gap-[6.7vh] pl-[39vh]">
          <span className=" text-[white] opacity-40">21</span>
          <span className=" text-[white]">
         ｝
          </span>
        </h1>

      </div>

      <div className=" bg-slate-400 "></div>
    </div>
  </div>
  );
}

export default About;
