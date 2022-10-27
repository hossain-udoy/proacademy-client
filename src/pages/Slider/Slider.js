import React from 'react';
import './Slider.css';



import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";



SwiperCore.use([Pagination, EffectCoverflow]);

export default function SwiperCoverflow() {
    return (
        <div className="App mt-5">
            <Swiper
                // navigation
                pagination={{ clickable: true }}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                }}
                slidesPerView={3}
                centeredSlides
                style={{ height: "40vh" }}
            >
                <SwiperSlide
                    style={{
                        backgroundImage:
                            "url(https://swiperjs.com/demos/images/nature-1.jpg)"
                    }}
                >
                    Slide 1
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage:
                            "url(https://swiperjs.com/demos/images/nature-2.jpg)"
                    }}
                >
                    Slide 2
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage:
                            "url(https://swiperjs.com/demos/images/nature-3.jpg)"
                    }}
                >
                    Slide 3
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage:
                            "url(https://swiperjs.com/demos/images/nature-4.jpg)"
                    }}
                >
                    Slide 4
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage:
                            "url(https://swiperjs.com/demos/images/nature-5.jpg)"
                    }}
                >
                    Slide 5
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage:
                            "url(https://swiperjs.com/demos/images/nature-6.jpg)"
                    }}
                >
                    Slide 6
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage:
                            "url(https://swiperjs.com/demos/images/nature-7.jpg)"
                    }}
                >
                    Slide 7
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage:
                            "url(https://swiperjs.com/demos/images/nature-8.jpg)"
                    }}
                >
                    Slide 8
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage:
                            "url(https://swiperjs.com/demos/images/nature-9.jpg)"
                    }}
                >
                    Slide 9
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage:
                            "url(https://swiperjs.com/demos/images/nature-10.jpg)"
                    }}
                >
                    Slide 10
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
