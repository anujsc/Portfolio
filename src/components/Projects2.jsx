import React from "react";
import Card from "../utilis/Card";
import home from "../../public/imgs/Home.png";
import portfolio from "../../public/imgs/portfolio.png";
import fakeapi from "../../public/imgs/fakeapi10.png";

function Projects2() {
  return (
    <div className=" relative h-[140vh] w-full bg-[#151818ef]">
      <div className=" absolute left-[12%] -top-[3%]  ">
        <h1 className="landing text-[17vh] font-bold text-[#d1e8e2] opacity-40  uppercase">
          Major's
        </h1>
      </div>

      <div className=" absolute top-[20%] left-[55%]">
        <Card no={"01"} title={"SCSDB|tv app"} img={home} link={"https://github.com/anujsc/SCSDB"} />
      </div>
      <div className=" absolute top-[30%] left-[12%]">
        <Card no={"02"} title={"E-com CRUD"} img={fakeapi} link={"https://github.com/anujsc/fake-api"} />
      </div>
      <div className=" absolute top-[65%] left-[38%]">
        <Card no={"03"} title={"Portfolio webs"} img={portfolio} link={"https://github.com/anujsc/Portfolio"} />
      </div>
    </div>
  );
}

export default Projects2;
