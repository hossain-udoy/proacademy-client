import React from 'react';
import Hero from '../../others/hero';
import Testimonial from '../../others/Testimonial';
import SwiperCoverflow from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <SwiperCoverflow />
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;