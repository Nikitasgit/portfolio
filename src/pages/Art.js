import React, { useState } from "react";
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
import Footer from "../components/Footer";
import CarouselGallery from "../components/CarouselGallery";

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
    <div className="art-page">
      {modal && (
        <div className="carousel-gallery-modal">
          <IoCloseCircle
            className="close-modal-icon"
            onClick={() => setModal(false)}
          />
          <CarouselGallery imgs={modifiedArray} />
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
                  src={image}
                  alt=""
                  onClick={() => modifyArray(images, index)}
                />
              </div>
              <div className="img-container">
                <img
                  src={images[index + 1]}
                  alt=""
                  onClick={() => modifyArray(images, index + 1)}
                />
              </div>
            </div>
            <div className="img-container main-img">
              <img
                src={images[index + 2]}
                alt=""
                onClick={() => modifyArray(images, index + 2)}
              />
            </div>
          </div>
        ) : null
      )}

      <Footer />
    </div>
  );
};

export default Art;
