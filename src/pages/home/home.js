import React from 'react';
import Hero from '../../others/hero';
import Testimonial from '../../others/Testimonial';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Slider></Slider>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;