import React, { useEffect, useRef, useState } from "react";
import ImgSeashellWhite from "../assets/images/seashell-white.png";
import mainImgBg from "../assets/images/victor-hydra.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import FirstLine from "./lines/FirstLine";
const HomeMain = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.85], [0, 360]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={containerRef} className="home-main">
      {windowDimensions.width > 845 && <FirstLine />}
      <motion.div className="home-main-container" style={{ opacity }}>
        <div className="main-img-container">
          <img src={mainImgBg} alt="" />
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
