import React from "react";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiMongodb, SiRedux } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaSass } from "react-icons/fa6";
const logosSlide = () => {
  return (
    <div className="logos">
      <div className="logos-slide">
        <div className="logo-container">
          <IoLogoHtml5 className="logos-slide-item" />
          <span>HTML</span>
        </div>
        <div className="logo-container">
          <FaCss3Alt className="logos-slide-item" />
          <span>CSS</span>
        </div>
        <div className="logo-container">
          <IoLogoJavascript className="logos-slide-item" />
          <span>Javascript</span>
        </div>
        <div className="logo-container">
          <FaNodeJs className="logos-slide-item" />
          <span>Node.js</span>
        </div>
        <div className="logo-container">
          <SiNextdotjs className="logos-slide-item" />
          <span>Next.js</span>
        </div>
        <div className="logo-container">
          <SiMongodb className="logos-slide-item" />
          <span>MongoDB</span>
        </div>
        <div className="logo-container">
          <TbBrandFramerMotion className="logos-slide-item" />
          <span>Framer Motion</span>
        </div>
        <div className="logo-container">
          <SiRedux className="logos-slide-item" />
          <span>Redux</span>
        </div>
        <div className="logo-container">
          <FaSass className="logos-slide-item" />
          <span>Sass</span>
        </div>
      </div>
      <div className="logos-slide">
        <div className="logo-container">
          <IoLogoHtml5 className="logos-slide-item" />
          <span>HTML</span>
        </div>
        <div className="logo-container">
          <FaCss3Alt className="logos-slide-item" />
          <span>CSS</span>
        </div>
        <div className="logo-container">
          <IoLogoJavascript className="logos-slide-item" />
          <span>Javascript</span>
        </div>
        <div className="logo-container">
          <FaNodeJs className="logos-slide-item" />
          <span>Node.js</span>
        </div>
        <div className="logo-container">
          <SiNextdotjs className="logos-slide-item" />
          <span>Nex.js</span>
        </div>
        <div className="logo-container">
          <SiMongodb className="logos-slide-item" />
          <span>MongoDB</span>
        </div>
        <div className="logo-container">
          <TbBrandFramerMotion className="logos-slide-item" />
          <span>Framer Motion</span>
        </div>
        <div className="logo-container">
          <SiRedux className="logos-slide-item" />
          <span>Redux</span>
        </div>
        <div className="logo-container">
          <FaSass className="logos-slide-item" />
          <span>Sass</span>
        </div>
      </div>
    </div>
  );
};

export default logosSlide;
