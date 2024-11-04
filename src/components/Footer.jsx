import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BirdsSvg from "./svg/BirdsSvg";

const Footer = () => {
  const imgRef = useRef();
  const isInView = useInView(imgRef);

  return (
    <footer className="footer">
      <BirdsSvg />
      <div className="contact-text">
        <p>
          Si vous avez des questions, des idées ou simplement envie de me
          présenter un projet, n'hésitez pas à me contacter. Merci d'avoir pris
          le temps de découvrir mon travail !
        </p>
        <motion.h3
          style={{
            transform: isInView ? "none" : "translateX(-600px)",
            opacity: isInView ? 1 : 0,
            transition: "transform 1s, opacity 1s",
          }}
        >
          Contact
        </motion.h3>
      </div>

      <div className="contact-img-container" ref={imgRef} />

      <div className="contact-links">
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li>Victor Leman</li>
            <li>
              <a href="tel:+33645959109">+33 6 45 95 91 09</a>
            </li>
            <li>
              <a href="mailto:victorleman1@gmail.com">victorleman1@gmail.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Social</h4>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Nikitasgit"
              >
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/victor-leman-ab05b5289"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
