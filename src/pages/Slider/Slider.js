import React from 'react';
import './Slider.css';
import img1 from "../../assests/img/img-1.jpg"
import img2 from "../../assests/img/img-2.jpg"
import img3 from "../../assests/img/img-3.jpg"
import img4 from "../../assests/img/img-4.jpg"
import img5 from "../../assests/img/img-5.jpg"
// import img6 from "../../assests/img/img-6.jpg"
// import img7 from "../../assests/img/img-7.jpg"
// import img8 from "../../assests/img/img-8.jpg"


// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
    return (
        <div className='swiper-container mt-20'>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="hello" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="hello" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="hello" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="hello" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="hello" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
