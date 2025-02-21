import React from "react";
import Button from 'react-native';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import pic from "./pics/IMG_9918.jpg"
import pic2 from "./pics/IMG_8240.jpg"
import pic3 from "./pics/IMG_9922.jpg"
import pic4 from "./pics/1D0539C0-4D19-456A-B082-1C6569E3CE32.jpg"
import "./slideshow.css"
import "swiper/css";
import "swiper/css/navigation";
import Dropdown from "./dropdown";

const images = [
  pic,
  pic2,
  pic3,
  pic4
];

const Slideshow: React.FC = () => {
  return (

    <div className="slideshow-container">

      <div className="searchbar"> {/* Separat searchbar ovanför */}
        {/* <div className="datebutton"></div> */}
        <Dropdown />
        <div className="submitbutton">
          <a>Sök</a>
        </div>
      </div>
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
            <div className="imgwrap">  <img src={src} alt={`Slide ${index + 1}`} className="slide-image" /></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slideshow;
