import React, { useRef } from "react";
import imgMoulinCastaSite from "../assets/images/moulin-casta-site.JPG";
import imgMagesGameSite from "../assets/images/magesgame-site-2.jpg";
import imgSample1Site from "../assets/images/sample.jpg";
import imgSample2Site from "../assets/images/nike-sample.JPG";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import SecondLine from "./lines/SecondLine";
const HomeSecondPart = () => {
  const containerRef = useRef(null);
  const title = useRef(null);
  const isInView = useInView(title, { once: true });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const svgPath = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  return (
    <div className="main-second-part" ref={containerRef}>
      <div
        className="line-container"
        variants={{
          visible: { opacity: 1, pathLengh: 1 },
          hidden: { opacity: 0, pathLength: 0 },
        }}
      >
        <svg
          viewBox="0 0 1314 177"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
        >
          <motion.path
            d="M0.5 169.5H469C470.167 167.5 476.3 164.1 491.5 166.5C510.5 169.5 516.5 168 522 164.5C527.5 161 548 165.5 554 169.5C560 173.5 583 176 593 152C580.2 152 560.667 153.667 552.5 154.5C556.833 130.833 564.8 67.3 562 2.5C554 17.5 546.5 76 458 141C466.8 145 519 144 544 143C553.833 133.5 571.9 98.8 565.5 36C575 46 596.5 104.5 590 143C578 146.6 559 146.5 551 146L548.5 155.5L488.5 158C488.167 155.833 491.7 151.3 508.5 150.5C525.3 149.7 549.833 149.167 560 149C563.167 149.5 569.3 151.8 568.5 157C557.7 157 494 160 463.5 161.5C464.5 166.018 470.2 174.344 485 171.5C499 169.9 503.833 172.833 504.5 174.5C509.167 176.167 521.5 177.5 533.5 169.5C546.5 162.5 575 162 593 169.5C608.2 171.1 1080 173.5 1314 174.5"
            stroke="#FDC178"
            stroke-linejoin="round"
            style={{ pathLength: svgPath }}
          />
        </svg>
      </div>

      <motion.div style={{ opacity, y }}>
        <h2
          ref={title}
          style={{
            transform: isInView ? "none" : "translateX(-300px)",
            opacity: isInView ? 1 : 0,
            transition: "1s  0.5s",
          }}
        >
          Some projects
        </h2>
        <div /* style={{ opacity }} */ className="projects-gallery">
          <div className="prj-wrapper-1">
            <div className="prj">
              <img src={imgMoulinCastaSite} alt="" />
              <p className="prj-description">
                Project for holiday house in France.
              </p>
            </div>
            <div className="prj">
              <img src={imgMagesGameSite} alt="" />
              <p className="prj-description">
                Tic Tac Toe game, Player vs AI mode.
              </p>
            </div>
          </div>
          <div className="prj-wrapper-2">
            <div className="prj">
              <img src={imgSample2Site} alt="" />
              <p className="prj-description">This is a sample website.</p>
            </div>
            <div className="prj">
              <img src={imgSample1Site} alt="" />
              <p className="prj-description">This is a sample website.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeSecondPart;
