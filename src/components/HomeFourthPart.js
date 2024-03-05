import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

function Item({ props }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]
  );

  return (
    <div ref={ref}>
      <motion.li style={{ opacity, filter }}>{props}</motion.li>
    </div>
  );
}
const HomeFourthPart = () => {
  return (
    <div className="main-fourth-part">
      <ul className="list">
        <Item props="Detail-Oriented" />
        <Item props="Proactive" />
        <Item props="Adaptable" />
        <Item props="Punctual" />
        <Item props="Curious" />
        <Item props="Client-Focused" />
        <Item props="Team Player" />
        <Item props="Communicative" />
      </ul>
    </div>
  );
};

export default HomeFourthPart;
