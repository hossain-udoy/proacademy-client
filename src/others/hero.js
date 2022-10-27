import React from 'react';
import './hero.css'

const Hero = () => {
    return (
        <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 mt-3 bg">
            <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 ">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-lime-400">
                                New Colaboration
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            WELCOME TO PROACADEMY
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Best Online Education Expertise.You will find your best teachers here.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">
                        <a
                            href="/Allcourses"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-white hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        >
                            Enroll Now
                        </a>
                        <a
                            href="/blog"
                            aria-label=""
                            className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-white hover:bg-yellow-400 focus:shadow-outline focus:outline-none"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
            <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Hero;