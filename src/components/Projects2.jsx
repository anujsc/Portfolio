import React from "react";
import Card from "../utilis/Card";
import home from "../../public/imgs/Home.png";
import portfolio from "../../public/imgs/portfolio.png";
import fakeapi from "../../public/imgs/fakeapi10.png";
import { cubicBezier, easeInOut, motion } from "framer-motion";

function Projects2() {
  return (
    <div className=" relative h-[140vh] w-full bg-[#151818ef]">
      <div className=" absolute left-[12%] -top-[3%]  ">
        <h1 className="landing text-[17vh] font-bold text-[#d1e8e2] opacity-40  uppercase">
          Major's
        </h1>
      </div>

      <motion.div
        initial={{ x: "-50% ", Opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: "anticipate", duration: 0.8,delay:.1 }}
        // viewport={{ once: true }}
        className=" absolute top-[20%] opacity-0 left-[55%]"
      >
        <Card
          no={"01"}
          title={"SCSDB|tv app"}
          img={home}
          link={"https://github.com/anujsc/SCSDB"}
        />
      </motion.div>

      <motion.div
      initial={{x:"50% ", Opacity: 0 }}
      whileInView={{x:0, opacity: 1 }}
      transition={{ ease:"anticipate", duration: 0.8, delay:.1 }}
      // viewport={{ once: true }}
      className=" absolute opacity-0 top-[30%] left-[12%]">
        <Card
          no={"02"}
          title={"E-com CRUD"}
          img={fakeapi}
          link={"https://github.com/anujsc/fake-api"}
        />
      </motion.div>
      <motion.div
      initial={{y:"-60% ", Opacity: 0 }}
      whileInView={{y:0, opacity: 1 }}
      transition={{ ease:"anticipate", duration: 0.5 }}
      // viewport={{ once: true }}
      className=" absolute opacity-0 top-[65%] left-[38%]">
        <Card
          no={"03"}
          title={"Portfolio webs"}
          img={portfolio}
          link={"https://github.com/anujsc/Portfolio"}
        />
      </motion.div>
    </div>
  );
}

export default Projects2;
