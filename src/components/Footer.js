import { React, useRef } from "react";
import victorImg from "../assets/images/picture-victor.jpg";
import { motion, useInView } from "framer-motion";
const Footer = () => {
  const imgRef = useRef();
  const isInView = useInView(imgRef);
  const lineRef = useRef(null);
  const lineIsInView = useInView(lineRef);

  return (
    <div className="footer" style={{ overflow: "hidden" }}>
      <div className="line-footer" ref={lineRef}>
        <svg viewBox="0 0 1284 168" fill="none">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: lineIsInView ? 1 : 0 }}
            transition={{ duration: 2 }}
            d="M0 109.18H613C644 95.847 698.9 62.3804 670.5 35.1804C636 32.6804 603 143.68 610 151.68C617 159.68 630.5 161.68 637.5 159.18C636 150.18 621.5 117.68 660.5 105.18C682.5 93.6804 700.5 58.1803 695.5 40.6803C697.1 34.2803 700.167 30.347 701.5 29.1803C704.5 28.847 710.4 29.5804 710 35.1804C703 35.1804 701.5 32.6803 701.5 26.1803C701.5 19.6803 698.5 -1.81968 679.5 16.1803C677 26.1803 683.5 36.1803 700 42.6803C707 50.1803 706 73.1803 681 91.1803C675 101.18 678 107.18 691.5 106.68C705 106.18 818 99.6804 828.5 109.18C828.5 117.68 803 124.18 781.5 98.1803C760 72.1803 760.5 51.1804 780 38.6803C785 42.6803 777 45.1803 761.5 33.6803C750.7 33.6803 751.333 32.6803 753 32.1803L761.5 29.1803C766.167 21.5137 778.6 10.7803 791 29.1803C795.8 39.9803 801 41.347 803 40.6803C808.5 42.847 820.2 52.2803 823 72.6803C823 79.6803 859 140.68 869 154.68C869 161.08 857 165.347 851 166.68C842.333 154.347 828.7 124.78 843.5 105.18C857.5 106.68 875.5 104.68 881.5 91.1803C887.5 77.6803 888 29.1803 876.5 29.1803C865 29.1803 835 46.1803 883.5 98.1803C895 112.18 923 112.68 922.5 148.68C919.7 157.08 906.333 156.18 900 154.68C899.667 141.347 900.5 110.68 906.5 94.6803C914 74.6803 925.5 22.6803 893.5 14.1803C888.5 3.18034 881.5 0.18034 876.5 1.18034C871.5 2.18034 867 14.1803 864.5 14.1803C862 14.1803 860 18.1803 855.5 16.1803C851 14.1803 862.5 9.18038 864.5 11.6804C866.5 14.1803 869.5 23.1804 881.5 23.6804C893.5 24.1804 895 84.6804 904 89.6804C907.6 99.2804 914.167 102.68 917 103.18C939.833 107.18 1188.6 113.98 1283 109.18"
            stroke="#FDC178"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="contact-text">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          consequuntur voluptatum cupiditate harum sed aliquid accusamus ea
          voluptatem adipisci cumque doloribus optio impedit, aspernatur ut
          autem saepe consectetur, vero esse!
        </p>
        <motion.h3
          style={{
            transform: isInView ? "none" : "translateX(-600px)",
            opacity: isInView ? 1 : 0,
            transition: "1s",
          }}
        >
          Contact
        </motion.h3>
      </div>

      <motion.div className="contact-img-container" ref={imgRef}>
        <motion.img
          src={victorImg}
          alt=""
          style={{
            transform: isInView ? "none" : "translateY(500px)",
            opacity: isInView ? 1 : 0,
            transition: "1s ",
          }}
        />
      </motion.div>
      <div className="contact-links">
        <div>
          <h4>Get in touch</h4>
          <div>
            <p>+33 6 45 95 91 09</p>
            <p>victorleman1@gmail.com</p>
          </div>
        </div>
        <div>
          <h4>Social</h4>
          <div>
            <p>Github</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
