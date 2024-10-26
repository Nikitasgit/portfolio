import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FirstLine from "./lines/FirstLine";
import bgImage from "../assets/images/pexels-suzyhazelwood-1629236.jpg";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { FaSass } from "react-icons/fa6";
const HomeMain = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={containerRef} className="home-main">
      <motion.div className="home-main-container" style={{ opacity }}>
        <img src={bgImage} alt="" />
        <div className="container-top-items">
          <h1>Victor Leman</h1>
        </div>
        <div>
          <FirstLine />
        </div>
        <div className="container-bottom-items">
          <div className="bottom-items-headers">
            <h4>Full stack</h4>
            <h3>Web Developer</h3>
          </div>
          <div className="logos">
            <div className="logos-slide">
              <IoLogoHtml5 className="icons-list-item" />
              <FaCss3Alt className="icons-list-item" />
              <IoLogoJavascript className="icons-list-item" />
              <FaNodeJs className="icons-list-item" />
              <SiNextdotjs className="icons-list-item" />
              <SiMongodb className="icons-list-item" />
              <TbBrandFramerMotion className="icons-list-item" />
              <SiRedux className="icons-list-item" />
              <FaSass className="icons-list-item" />
            </div>
            <div className="logos-slide">
              <IoLogoHtml5 className="icons-list-item" />
              <FaCss3Alt className="icons-list-item" />
              <IoLogoJavascript className="icons-list-item" />
              <FaNodeJs className="icons-list-item" />
              <SiNextdotjs className="icons-list-item" />
              <SiMongodb className="icons-list-item" />
              <TbBrandFramerMotion className="icons-list-item" />
              <SiRedux className="icons-list-item" />
              <FaSass className="icons-list-item" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeMain;
