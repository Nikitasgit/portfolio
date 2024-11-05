import React, { useEffect, useRef, useState } from "react";
import ImgSliderGallery from "../../components/ImgSliderGallery";
import Footer from "../../components/Footer";
import { IoCloseCircle } from "react-icons/io5";
import Hero from "./components/Hero";
import { Helmet } from "react-helmet";
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(
  require.context("../../assets/images/gallery", false, /\.(png|jpe?g|svg)$/)
);

const Art = () => {
  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const artPageRef = useRef(null);
  const openModal = (index) => {
    setCurrentIndex(index);
    setModal(true);
  };
  useEffect(() => {
    if (modal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [modal]);
  return (
    <div ref={artPageRef} className="art-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Victor Leman - Illustrations</title>
        <meta
          name="description"
          content="Dessins, illustrations et linogravures."
        />
        <link rel="canonical" href="https://victorleman.netlify.app/art" />
      </Helmet>
      <Hero />
      {modal && (
        <div className="carousel-gallery-modal">
          <IoCloseCircle
            className="close-modal-icon"
            onClick={() => setModal(false)}
          />
          <ImgSliderGallery imgs={images} index={currentIndex} />
        </div>
      )}
      {images.map((image, index) =>
        index % 3 === 0 ? (
          <div
            key={index}
            className={`grid-images ${
              index % 2 === 0 ? "grid" : "grid-reverse"
            }`}
          >
            <div>
              <img onClick={() => openModal(index)} src={image} alt="" />
            </div>
            <div className="grid-main">
              <img
                onClick={() => openModal(index + 1)}
                src={images[index + 1]}
                alt=""
              />
            </div>
            <div>
              <img
                onClick={() => openModal(index + 2)}
                src={images[index + 2]}
                alt=""
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
