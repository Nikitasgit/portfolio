import React, { useRef } from "react";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { projects } from "../../../data/data";
import Project from "./Project";
import SailingSvg from "../../../components/svg/SailingSvg";
const Projects = () => {
  const containerRef = useRef(null);
  const title = useRef(null);
  const isInView = useInView(title, { once: true });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });
  const { scrollYProgress: scrollYProgressStart } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section className="projects-section" ref={containerRef}>
      <motion.div style={{ opacity, y }}>
        <motion.div className="projects-header">
          <h2
            ref={title}
            style={{
              transform: isInView ? "none" : "translateX(-300px)",
              opacity: isInView ? 1 : 0,
              transition: "1s  0.5s",
            }}
          >
            Some projects
          </h2>
          <SailingSvg scrollYProgress={scrollYProgressStart} />
        </motion.div>
        <div className="projects-container">
          {projects.map((project, index) => (
            <Project
              index={index}
              key={index}
              url={project.url}
              description={project.description}
              img={project.img}
              title={project.title}
              frontendTech={project.frontendTech}
              backendTech={project.backendTech}
              deployTech={project.deployTech}
              stockageTech={project.stockageTech}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
