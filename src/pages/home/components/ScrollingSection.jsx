import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function Item({ props }) {
  const ref = useRef(null);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]
  );
  const assignFontSize = () => {
    /*    if (windowDimensions.width < 400) {
      return ["1.2rem", "2.4rem", "1.8rem", "1.2rem"];
    } */
    if (windowDimensions.width < 400) {
      return ["1.7rem", "2.8rem", "2.2rem", "1.7rem"];
    }
    if (windowDimensions.width < 650) {
      return ["2.2rem", "3.5rem", "2.8rem", "2.2rem"];
    }
    if (windowDimensions.width < 750) {
      return ["3.2rem", "4.5rem", "3.8rem", "3.2rem"];
    }
    if (windowDimensions.width < 1250) {
      return ["4rem", "5.3rem", "4.5rem", "4rem"];
    } else {
      return ["5rem", "7rem", "6rem", "5rem"];
    }
  };
  const fontSize = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    assignFontSize()
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
  return (
    <div ref={ref}>
      <motion.li style={{ opacity, filter, fontSize }}>{props}</motion.li>
    </div>
  );
}
const ScrollingSection = () => {
  return (
    <section className="scrolling-section">
      <ul className="list">
        <Item props="Communicatif" />
        <Item props="Passionné" />
        <Item props="Minutieux" />
        <Item props="Créatif" />
        <Item props="Ponctuel" />
        <Item props="Curieux" />
        <Item props="Adaptable" />
        <Item props="Collaboratif" />
        <Item props="Organisé" />
      </ul>
    </section>
  );
};

export default ScrollingSection;
