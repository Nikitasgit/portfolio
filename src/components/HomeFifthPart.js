import React, { useRef } from "react";
import ImgSquidPng from "../assets/images/calamar.png";
import ImgCrabPng from "../assets/images/seashell.png";
import ImgBirdPng from "../assets/images/huppe-fascie.png";
import ImgCaptain from "../assets/images/gallery/CaptainIannis-1100px.jpg";
import ImgCaptainWoman from "../assets/images/gallery/Captainwoman-1100px.jpg";
import ImgMarin from "../assets/images/gallery/Marin-1100px.jpg";
import ImgKid from "../assets/images/gallery/Asiankid-1100px.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const HomeFifthPart = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-101%"]);
  const xOpposite = useTransform(scrollYProgress, [0, 1], ["-100%", "50%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  return (
    <div className="main-fifth-part" ref={ref}>
      <motion.div className="text-scrolling">
        <motion.p style={{ x: xOpposite }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi in
          neque sint aut voluptatum repudiandae, debitis error expedita cumque
          ea adipisci molestias, provident nobis, iste ullam non illum. Pariatur
          repellendus consequatur aspernatur non labore libero necessitatibus
          temporibus dolore, sequi dicta, facere odit mollitia fugiat esse
          recusandae voluptatibus harum nisi sed.
        </motion.p>
        <motion.h2 style={{ x }}>Linocut and Pencil drawing</motion.h2>
      </motion.div>
      <div className="images-wrapper">
        <div className="img-container">
          <img style={{ left: "55%" }} src={ImgSquidPng} alt="" />
        </div>
        <div className="img-container">
          <img style={{ left: "10%" }} src={ImgBirdPng} alt="" />
        </div>
        <div className="img-container">
          <img style={{ left: "35%" }} src={ImgCaptain} alt="" />
        </div>
        <div className="img-container">
          <img style={{ left: "5%" }} src={ImgCaptainWoman} alt="" />
        </div>
        <div className="img-container">
          <img style={{ left: "50%" }} src={ImgMarin} alt="" />
        </div>

        <div className="img-container">
          <img style={{ left: "20%" }} src={ImgKid} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeFifthPart;
