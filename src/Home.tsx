import React from 'react';
import pic from "./pics/cl_sign_fasad_01_2015.webp"
import Header from './header/header';
import Slideshow from './slideshow';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import './Home.css';

const images = [
  "./src/pics/IMG_9918.jpg",
  "./src/pics/IMG_8240.jpg",
];

function Home() {
  return (
    <div className="Home">
      <div className='filler'></div>

      <Header />
      {/*       <div className="Home-header">
        <div className='logocontainer'>
          <a className='casadelcatarina' href="/">Casa del Catarina</a>

        </div>
        <div className='calendarlink'></div> <a className='calendar' href="/calendar">Bokning via kalender</a>
      </div> */}

      <div className='homewrapper'>
        {/*        <div className='pics'> <img src={pic} className='pic'></img></div>
        <div className='maintext'> <h1>Text1</h1> <p>blablablabla</p></div> */}
        <Slideshow />
      </div>
    </div >
  );
}

export default Home;
