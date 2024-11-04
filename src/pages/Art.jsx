import React, { useRef, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import img1 from "../assets/images/gallery/CaptainIannis-1100px.jpg";
import img2 from "../assets/images/gallery/Greekalley-1100px.jpg";
import img3 from "../assets/images/gallery/Captainwoman-1100px.jpg";
import img4 from "../assets/images/gallery/Asiankid-1100px.jpg";
import img5 from "../assets/images/gallery/Girafe-1100.jpg";
import img6 from "../assets/images/gallery/Marin-1100px.jpg";
import img7 from "../assets/images/gallery/Sumo-1100px.jpg";
import img8 from "../assets/images/gallery/Lion-1100px.jpg";
import img9 from "../assets/images/gallery/Octophant-1100px.jpg";
import img13 from "../assets/images/gallery/DSC01683_1.jpg";
import img11 from "../assets/images/gallery/Greekalley-1100px.jpg";
import img10 from "../assets/images/huppe-fascie.png";
import img12 from "../assets/images/gallery/Owl.jpg";
import img14 from "../assets/images/gallery/Pelican.jpg";
import img15 from "../assets/images/gallery/Donkey.jpg";
import img16 from "../assets/images/gallery/Oldwoman.jpg";
import img17 from "../assets/images/gallery/veillard.jpg";
import img18 from "../assets/images/gallery/grand-duc.jpg";

import ImgSliderGallery from "../components/ImgSliderGallery";

import cloud1 from "../assets/images/clouds/8918198.png";
import cloud2 from "../assets/images/clouds/8918206.png";
import cloud3 from "../assets/images/clouds/8918181.png";
import { useScroll, useTransform, motion } from "framer-motion";
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
];

const Art = () => {
  const [modal, setModal] = useState(false);
  const [modifiedArray, setModifiedArray] = useState(images);
  const artPageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: artPageRef,
    offset: ["start end", "end start"],
  });
  const left = useTransform(scrollYProgress, [0, 1], ["-50%", "100%"]);
  const right = useTransform(scrollYProgress, [0, 1], ["-50%", "100%"]);
  const rightOther = useTransform(scrollYProgress, [0, 1], ["-50%", "250%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]);
  const yMore = useTransform(scrollYProgress, [0, 1], ["25%", "15%"]);
  const modifyArray = (array, startIndex) => {
    if (startIndex >= array.length || startIndex < 0) {
      return array;
    }
    const newArray = [
      ...array.slice(startIndex),
      ...array.slice(0, startIndex),
    ];
    setModifiedArray(newArray);
    setModal(true);
  };

  return (
    <div className="art-page" ref={artPageRef}>
      <motion.img
        className="cloud-one cloud"
        src={cloud1}
        alt=""
        style={{ left, y }}
      />
      <motion.img
        className="cloud-two cloud"
        src={cloud2}
        alt=""
        style={{ right, y: yMore }}
      />
      <motion.img
        className="cloud-three cloud"
        src={cloud3}
        alt=""
        style={{ right: rightOther }}
      />
      {modal && (
        <div className="carousel-gallery-modal">
          <IoCloseCircle
            className="close-modal-icon"
            onClick={() => setModal(false)}
          />
          <ImgSliderGallery imgs={modifiedArray} />
        </div>
      )}

      {images.map((image, index) =>
        index % 3 === 0 ? (
          <div
            key={index}
            className="container-images"
            style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
          >
            <div className="subcontainer-images">
              <div className="img-container">
                <img
                  className="skeleton"
                  src={image}
                  alt=""
                  onClick={() => modifyArray(images, index)}
                />
              </div>
              <div className="img-container">
                <img
                  className="skeleton"
                  src={images[index + 1]}
                  alt=""
                  onClick={() => modifyArray(images, index + 1)}
                />
              </div>
            </div>
            <div className="img-container main-img">
              <img
                className="skeleton"
                src={images[index + 2]}
                alt=""
                onClick={() => modifyArray(images, index + 2)}
              />
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Art;
