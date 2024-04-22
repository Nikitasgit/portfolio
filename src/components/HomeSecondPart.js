import React, { useRef } from "react";
import imgMoulinCastaSite from "../assets/images/moulin-casta-site.JPG";
import imgMagesGameSite from "../assets/images/magesgame-site-2.jpg";
import imgSample1Site from "../assets/images/sample.jpg";
import imgSample2Site from "../assets/images/nike-sample.JPG";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

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
            d="M1 127C37.8 165.8 148.333 171.5 199 169.5H231C232.167 167.5 238.3 164.1 253.5 166.5C272.5 169.5 278.5 168 284 164.5C289.5 161 310 165.5 316 169.5C322 173.5 345 176 355 152C342.2 152 322.667 153.667 314.5 154.5C318.833 130.833 326.8 67.3 324 2.5C316 17.5 308.5 76 220 141C228.8 145 281 144 306 143C315.833 133.5 333.9 98.8 327.5 36C337 46 358.5 104.5 352 143C340 146.6 321 146.5 313 146L310.5 155.5L250.5 158C250.167 155.833 253.7 151.3 270.5 150.5C287.3 149.7 311.833 149.167 322 149C325.167 149.5 331.3 151.8 330.5 157C319.7 157 256 160 225.5 161.5C226.5 166.018 232.2 174.344 247 171.5C261 169.9 265.833 172.833 266.5 174.5C271.167 176.167 283.5 177.5 295.5 169.5C308.5 162.5 337 162 355 169.5H1501.5"
            stroke="white"
            strokeLinejoin="round"
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
            <div className="project">
              <a
                href="http://www.moulincasta.fr"
                className="prj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={imgMoulinCastaSite} alt="" />
                <p className="prj-description">
                  Project for holiday house in France.
                </p>
              </a>
              <h3 className="project-title">Le Moulin Casta</h3>
              <div>
                <div className="technologies">
                  <h4>Technologies:</h4>
                  <ul className="technologies-list">
                    <li>React</li>
                    <li>Node JS, Express</li>
                    <li>MongoDB</li>
                    <li>AWS (...,...)</li>
                  </ul>
                </div>
                <p className="project-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores excepturi, voluptatem nesciunt cumque inventore
                  fuga ex sint totam, quaerat quo consequuntur atque quidem nisi
                  reiciendis amet, quasi ut libero nobis debitis reprehenderit
                  nihil maiores aspernatur possimus. Animi minus non laboriosam
                  debitis, dolores ab esse, dolore atque molestiae voluptates
                  omnis magnam error blanditiis harum similique ea veritatis
                  doloribus, quod dolor voluptatem velit ducimus! Hic voluptate
                  debitis accusantium expedita repellendus, enim dignissimos
                  minima commodi natus magni, fugiat culpa eius, pariatur
                  voluptatem molestias.
                </p>
              </div>
            </div>
            <a
              href="https://nikitasgit.github.io/magesgame/"
              className="prj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imgMagesGameSite} alt="" />
              <p className="prj-description">
                Tic Tac Toe game, Player vs AI mode.
              </p>
            </a>
          </div>
          {/*           <div className="prj-wrapper-2">
            <a className="prj">
              <img src={imgSample2Site} alt="" />
              <p className="prj-description">This is a sample website.</p>
            </a>
            <a className="prj">
              <img src={imgSample1Site} alt="" />
              <p className="prj-description">This is a sample website.</p>
            </a>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default HomeSecondPart;
