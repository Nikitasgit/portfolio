import React, { useRef } from "react";
import ImgSquidPng from "../assets/images/calamar.png";
import ImgBirdPng from "../assets/images/huppe-fascie.png";
import ImgCaptain from "../assets/images/gallery/CaptainIannis-1100px.jpg";
import ImgCaptainWoman from "../assets/images/gallery/Captainwoman-1100px.jpg";
import ImgMarin from "../assets/images/gallery/Marin-1100px.jpg";
import ImgKid from "../assets/images/gallery/Asiankid-1100px.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const HomeFourthPart = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const xOpposite = useTransform(scrollYProgress, [0, 1], ["-100%", "50%"]);

  return (
    <div className="main-fifth-part" ref={ref}>
      <motion.div className="text-scrolling">
        <motion.p style={{ x: xOpposite }}>
          Lorsque je m'immerge dans le processus créatif, que ce soit en
          esquissant ou en codant, je tire une immense satisfaction à affiner
          méticuleusement chaque détail, en investissant le temps nécessaire
          pour atteindre l'excellence.
        </motion.p>
        <motion.h2 style={{ x }}>Artiste, illustrateur</motion.h2>
      </motion.div>
      <div className="images-wrapper">
        <div className="img-container">
          <img src={ImgCaptain} alt="" />
        </div>
        <div className="img-container" style={{ zIndex: 0 }}>
          <img src={ImgCaptainWoman} alt="" />
        </div>
        <div className="img-container">
          <img src={ImgMarin} alt="" />
        </div>
        <div className="img-container">
          <img src={ImgSquidPng} alt="" />
        </div>
        <div className="img-container" style={{ zIndex: 0 }}>
          <img src={ImgBirdPng} alt="" />
        </div>
        <div
          className="img-container"
          style={{
            zIndex: 0,
            marginBottom: 0,
          }}
        >
          <img src={ImgKid} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeFourthPart;
