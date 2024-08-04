import React from "react";
import Introsec from "../utilis/Introsec";
import Card from "../utilis/Card";
import hr from "../../public/imgs/H_R 1.png";
import exoape from "../../public/imgs/exoape3.png";
import creast from "../../public/imgs/creast1.png";
import obys from "../../public/imgs/obys1.png";
import portfolio from "../../public/imgs/portfolio.png";
import Projects2 from "./Projects2";

function Projects() {
  return (
    <div>
      <div className=" relative h-[180vh] w-full bg-[#151818ef]">
      <Introsec name={"Work"} icon={<i class="ri-code-s-slash-line"></i>} />

      <div className=" pl-[32.4%] ">
        <h1 className="landing text-[17vh] font-bold text-[#d1e8e2] opacity-40  uppercase">
          Landing Pages
        </h1>
      </div>

      <div className=" absolute top-[11%]">
      <Card no={"01"} title={"Obys Agency"} img={obys} link={"https://github.com/anujsc/Obys-Agency-Project"}/>
      </div>

      <div className=" absolute top-[15%] left-[69%]">
      <Card no={"02"} title={"Exope agency"} img={exoape} link={"https://github.com/anujsc/ExoApe"}/>
      </div>

      <div className=" absolute top-[37%] left-[31%]">
      <Card no={"03"} title={"The Creast"} img={creast} link={"https://github.com/anujsc/cleverbook"}/>
      </div>

      <div className=" absolute top-[67%] left-[10%]">
      <Card no={"05"} title={"E-Wedding Webs"} img={hr} link={"https://github.com/anujsc/H-R"}/>
      </div>

      <div className=" absolute top-[60%] left-[63%]">
      <Card no={"04"} title={"Exope agency"} img={portfolio} link={"https://github.com/anujsc/Portfolio"}/>
      </div>
    </div>
    <Projects2 />
    </div>
  );
}

export default Projects;
