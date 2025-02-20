import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import pic from "./pics/IMG_9918.jpg"
import pic2 from "./pics/IMG_8240.jpg"
import pic3 from "./pics/IMG_9922.jpg"
import "./slideshow.css"
import "swiper/css";
import "swiper/css/navigation";

const images = [
  pic,
  pic2,
  pic3
];

const Slideshow: React.FC = () => {
  return (
    <div className="slideshow-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="custom-swiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slideshow;
