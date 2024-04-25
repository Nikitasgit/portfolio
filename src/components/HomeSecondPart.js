import React, { useRef } from "react";
import imgMoulinCastaSite from "../assets/images/moulin-casta-site.JPG";
import yogaSite from "../assets/images/yoga-site.JPG";
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
        <div className="projects-gallery">
          <div className="project">
            <a
              href="http://www.moulincasta.fr"
              className="prj-img"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imgMoulinCastaSite} alt="" />
            </a>

            <div className="project-description">
              <div className="technologies">
                <h4>Technologies:</h4>
                <ul className="technologies-list">
                  <li>
                    React JS (React router DOM, Redux Toolkit, Framer Motion,
                    Sass, Leaflet, Axios, date-fns)
                  </li>
                  <li>
                    Node JS (Express, Cron, Mongoose, Multer, Helmet, Dotenv,
                    Nodemon, JWT)
                  </li>
                  <li>
                    MongoDB
                    <a
                      className="api-link"
                      href="http://api.moulincasta.fr/api/v1/accommodations"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (Lien vers API)
                    </a>
                  </li>
                  <li>AWS (EC2, S3)</li>
                </ul>
              </div>
              <h3 className="project-title">Le Moulin Casta</h3>
              <p>
                Website created for a vacation home in Corsica, where the client
                can manage reservations and prices using a custom-built
                calendar. By logging into the site (JWT), the user can modify
                information (dates, prices, amenities, etc.) for each rental
                property listed on the site. Media is stored on an AWS S3
                bucket. The server is deployed on AWS EC2 (Ubuntu). The frontend
                is deployed on Netlify. The application has been designed to be
                easily adaptable to other properties.
              </p>
            </div>
          </div>
          <div className="project">
            <a
              href="https://ioannastavropoulou.netlify.app/"
              className="prj-img"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={yogaSite} alt="" />
            </a>

            <div className="project-description">
              <div className="technologies">
                <h4>Technologies:</h4>
                <ul className="technologies-list">
                  <li>React js (Framer Motion)</li>
                  <li>HTML, SASS</li>
                  <li>AWS (S3)</li>
                </ul>
              </div>
              <h3 className="project-title">Yoga Courses</h3>
              <p>Site for a yoga teacher in Greece.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeSecondPart;
