import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImgSliderGallery = ({ imgs }) => {
  return (
    <Swiper
      className="carousel"
      keyboard={{
        enabled: true,
      }}
      loop={true}
      modules={[Keyboard, Navigation, Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {imgs.map((image) => (
        <SwiperSlide key={image}>
          <img src={image} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default ImgSliderGallery;
