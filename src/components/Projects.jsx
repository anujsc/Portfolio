import React from "react";
import Introsec from "../utilis/Introsec";
import Card from "../utilis/Card";
import bg1 from "../../public/imgs/Home.png";
function Projects() {
  return (
    <div className=" relative h-screen w-full bg-[#151818ef]">
      <Introsec name={"Work"} icon={<i class="ri-code-s-slash-line"></i>} />

      <div className=" pl-[32.4%] ">
        <h1 className="landing text-[17vh] font-bold text-[#d1e8e2] opacity-40  uppercase">
          Landing Pages
        </h1>
      </div>

      <div className=" absolute top-[16%]">
      <Card no={"01"} title={"Exope agency"} img={bg1}/>
      </div>

      <div className=" absolute top-[24%] left-[69%]">
      <Card no={"01"} title={"Exope agency"} img={bg1}/>
      </div>

      <div className=" absolute top-[57%] left-[34%]">
      <Card no={"01"} title={"Exope agency"} img={bg1}/>
      </div>
    </div>
  );
}

export default Projects;
