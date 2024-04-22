import React, { useRef } from "react";
import ImgSeashellWhite from "../assets/images/seashell-white.png";
import { motion, useScroll, useTransform } from "framer-motion";
import FirstLine from "./lines/FirstLine";
const HomeMain = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.85], [0, 360]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div ref={containerRef} className="home-main">
      <motion.div className="home-main-container" style={{ opacity }}>
        <div>
          <FirstLine />
        </div>
        <div className="text-home-main">
          <div className="text-container">
            <h2>Creative,</h2>
            <h1>Front-End</h1>
            <div className="developer">
              <h1 style={{ zIndex: 3 }}>devel</h1>
              <motion.img
                style={{ rotate }}
                className="img-seashell-white"
                src={ImgSeashellWhite}
                alt=""
              />
              <h1 style={{ zIndex: 3 }}>per</h1>
            </div>
            <h3>Javascript, React, Redux Toolkit, SASS, Framer Motion.</h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeMain;
