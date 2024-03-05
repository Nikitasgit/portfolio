import React, { useRef, useState } from "react";
import img1 from "../assets/images/gallery/Asiankid-1100px.jpg";
import img2 from "../assets/images/gallery//Octophant-1100px.jpg";
import img3 from "../assets/images/gallery/Marin-1100px.jpg";
import img4 from "../assets/images/gallery/Captainwoman-1100px.jpg";
import img5 from "../assets/images/gallery/DSC01683_1.jpg";
import img6 from "../assets/images/gallery/Greekalley-1100px.jpg";
import img7 from "../assets/images/gallery/Sumo-1100px.jpg";
import img8 from "../assets/images/gallery/Christmasball-1100px.jpg";
import img9 from "../assets/images/gallery/Lion-1100px.jpg";
import pencilImg from "../assets/images/pencik.png";
import {
  motion,
  useAnimationControls,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
const HomeThirdPart = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const imagesArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const svgPath = useSpring(useTransform(scrollYProgress, [-0.3, 0.5], [0, 1]));
  const controls = useAnimationControls();
  const [images, setImages] = useState([img1]);
  const [counter, setCounter] = useState(1);
  const title = useRef(null);
  const isInView = useInView(title, { once: true });
  const handleClick = () => {
    setCounter(counter + 1);
    counter < imagesArray.length
      ? setImages([...images, imagesArray[counter]])
      : setDisplayText(true);

    controls.start("animate");
  };
  const [displayText, setDisplayText] = useState(false);
  return (
    <div className="main-third-part" ref={ref}>
      <h3
        ref={title}
        style={{
          transform: isInView ? "none" : "translateX(-300px)",
          opacity: isInView ? 1 : 0,
          transition: "1s  0.5s",
        }}
      >
        Grab the pencil!
      </h3>
      {displayText && (
        <motion.div
          initial={{ left: "200%", opacity: 0 }}
          animate={{
            left: "50%",
            opacity: 1,
          }}
          transition={{ duration: 1, delay: 0.1, ease: "backInOut" }}
          className="display-text"
        >
          <h5>
            When I draw or code, I find joy in dedicating time to perfecting the
            details, regardless of how long it takes.
          </h5>
          <motion.button whileHover={{ scale: 1.05 }}>
            to the gallery
          </motion.button>
        </motion.div>
      )}

      <div className="imgs-container">
        {images.map((img, index) => (
          <motion.img
            variants={{
              initial: {
                x: 3000,
                opacity: 0,
                rotate: 0,
              },
              animate: {
                x: 0,
                opacity: 1,
                rotate: index % 2 == 0 ? `${index * 3}deg` : `-${index * 2}deg`,
              },
            }}
            initial="initial"
            animate={controls}
            src={img}
            key={index}
            style={{
              zIndex: index,
              left: `${index * 9}%`,
              rotate: `${Math.floor(Math.random() * (11 - -11 + 1) + -11)}deg`,
            }}
            alt=""
          />
        ))}
      </div>
      <motion.img
        className="pencil"
        src={pencilImg}
        alt=""
        drag
        dragConstraints={ref}
        onClick={handleClick}
      />
      {/*   <button className="button-third-part" onClick={handleClick}>
        Click it!
      </button> */}
    </div>
  );
};

export default HomeThirdPart;
