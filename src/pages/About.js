import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";

import { motion, useScroll } from "framer-motion";

import { Typewriter } from "react-simple-typewriter";
const About = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isAtTop = scrollY === 0;

  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["end end", "end start"],
  });
  const js = [1, 1, 1, 1, 0];
  const react = [1, 1, 1, 1, 0];
  const reduxToolkit = [1, 1, 1, 1, 0];
  const sass = [1, 1, 1, 1, 1];
  const framerMotion = [1, 1, 1, 1, 1];
  const nodeJs = [1, 1, 1, 0, 0];
  //titles

  return (
    <div className="about-page">
      <div className="about-main" ref={mainRef}>
        <motion.div
          className="blob"
          style={{
            bottom: !isAtTop && "40px",
            transform: !isAtTop && "translate(-50%,50%)",

            height: !isAtTop && "200px",
            width: !isAtTop && "200px",
          }}
        ></motion.div>
        <div className="skills">
          <div>
            <h4>Javascript</h4>
            <div className="progressBar">
              {js.map((element) => (
                <div
                  className={`barElement ${element === 1 && "highlighted"}`}
                ></div>
              ))}
            </div>
          </div>
          <div>
            <h4>React</h4>
            <div className="progressBar">
              {react.map((element) => (
                <div
                  className={`barElement ${element === 1 && "highlighted"}`}
                ></div>
              ))}
            </div>
          </div>
          <div>
            <h4>NodeJs</h4>
            <div className="progressBar">
              {nodeJs.map((element) => (
                <div
                  className={`barElement ${element === 1 && "highlighted"}`}
                ></div>
              ))}
            </div>
          </div>
          <div>
            <h4>Framer Motion</h4>
            <div className="progressBar">
              {framerMotion.map((element) => (
                <div
                  className={`barElement ${element === 1 && "highlighted"}`}
                ></div>
              ))}
            </div>
          </div>
          <div>
            <h4>SASS</h4>
            <div className="progressBar">
              {sass.map((element) => (
                <div
                  className={`barElement ${element === 1 && "highlighted"}`}
                ></div>
              ))}
            </div>
          </div>
          <div>
            <h4>Redux Toolkit</h4>
            <div className="progressBar">
              {reduxToolkit.map((element) => (
                <div
                  className={`barElement ${element === 1 && "highlighted"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="description-titles">
          <div className="aboutDescription">
            <Typewriter
              words={[
                " Hi! I'm Victor Leman, a web developer from Corsica. I make cool websites using React and Node.js. I love mixing creativity with coding, making websites that tell stories and look awesome. I'm independent, so I get to travel and work on projects from cool places. Outside of work, I enjoy running, spearfishing, climbing, and skiing. Want to work together on creative projects? Or just chat about travel and web stuff? Let's connect!",
              ]}
              cursor={true}
              typeSpeed={70}
            />
          </div>

          <div className="titles">
            <h1>
              <Typewriter
                words={[
                  "Artist",
                  "Developer",
                  "Independant",
                  "Curious",
                  "Creative",
                ]}
                loop={true}
                cursor={true}
                cursorStyle={"_"}
                deleteSpeed={100}
                delaySpeed={2500}
              />
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
