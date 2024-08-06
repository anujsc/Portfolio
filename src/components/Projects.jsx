import React from "react";
import Introsec from "../utilis/Introsec";
import Card from "../utilis/Card";
import hr from "../../public/imgs/H_R 1.png";
import exoape from "../../public/imgs/exoape3.png";
import creast from "../../public/imgs/creast1.png";
import obys from "../../public/imgs/obys1.png";
import portfolio from "../../public/imgs/portfolio.png";
import Projects2 from "./Projects2";
import { cubicBezier, easeInOut, motion } from "framer-motion";
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

        <motion.div
          initial={{x: "-50%" }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease:'easeInOut', duration: 0.6 }}
          viewport={{ once: true }}
          className=" absolute top-[11%] opacity-0"
        >
          <Card
            no={"01"}
            title={"Obys Agency"}
            img={obys}
            link={"https://github.com/anujsc/Obys-Agency-Project"}
          />
        </motion.div>

        <motion.div
          initial={{ x: "50%", Opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.6,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className=" absolute opacity-0 top-[15%] left-[69%]"
        >
          <Card
            no={"02"}
            title={"Exope agency"}
            img={exoape}
            link={"https://github.com/anujsc/ExoApe"}
          />
        </motion.div>

        <motion.div
          initial={{ Opacity: 0, y: "50%" }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.6 }}
          viewport={{ once: true }}
          className=" absolute opacity-0 top-[37%] left-[31%]"
        >
          <Card
            no={"03"}
            title={"The Creast"}
            img={creast}
            link={"https://github.com/anujsc/cleverbook"}
          />
        </motion.div>

        <motion.div
          initial={{ Opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.6, delay:.4}}
          viewport={{ once: true }}
          className=" absolute opacity-0 top-[67%] left-[10%]"
        >
          <Card
            no={"05"}
            title={"E-Wedding Webs"}
            img={hr}
            link={"https://github.com/anujsc/H-R"}
          />
        </motion.div>

        <motion.div
        initial={{ Opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration:1, delay:0.2  }}
        viewport={{ once: true }}
        className=" absolute opacity-0 top-[60%] left-[63%]">
          <Card
            no={"04"}
            title={"Portfolio webs"}
            img={portfolio}
            link={"https://github.com/anujsc/Portfolio"}
          />
        </motion.div>
      </div>
      <Projects2 />
    </div>
  );
}

export default Projects;
