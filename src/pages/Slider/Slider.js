import React from 'react';
import './Slider.css';



import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";
import { Link } from 'react-router-dom';



SwiperCore.use([Pagination, EffectCoverflow]);

export default function SwiperCoverflow() {
    return (
        <div className="App mt-5">
            <h1 className='text-2xl text-white'><Link to="/Allcourses">Our Courses</Link></h1>
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
                slidesPerView={4}
                centeredSlides
                style={{ height: "60vh", width: "80vw" }}
            >
                <SwiperSlide
                    style={{
                        color: "white",
                        backgroundImage:
                            "url(https://dantheengineer.com/content/images/2022/06/python-django-1.png)"
                    }}
                >
                    Python Django
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        color: "white",
                        backgroundImage:
                            "url(https://miro.medium.com/max/720/1*Aih9FwHjvM6AEL1aBh6W2g.png)"
                    }}
                >
                    Introduction to Js
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        color: "white",
                        backgroundImage:
                            "url(https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2021/03/nodejs-reference-architecture_1x.png?itok=MqGeWTLm)"
                    }}
                >
                    Node Js
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        color: "white",
                        backgroundImage:
                            "url(https://reactjs.org/logo-og.png)"
                    }}
                >
                    React Js
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        color: "white",
                        backgroundImage:
                            "url(https://www.php.net/images/meta-image.png)"
                    }}
                >
                    PHP
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        color: "black",
                        backgroundImage:
                            "url(https://cdn.educba.com/academy/wp-content/uploads/2019/09/Front-End-Languages.png)"
                    }}
                >
                    Html,Css,Js,C+
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
