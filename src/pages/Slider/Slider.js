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


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

// Import Swiper styles
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/effect-coverflow/effect-coverflow.scss";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SwiperCoverflow() {
    return (
        <div className="App">
            <Swiper
                navigation
                pagination={{ clickable: true }}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                }}
                slidesPerView={2}
                centeredSlides
                style={{ height: "500px" }}
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
