import React from 'react';
import { Link } from 'react-router-dom';
import { MdVideoSettings } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineClockCircle } from 'react-icons/ai'

const CourseCard = ({ course }) => {
    const { id, cover, videos, ratings, coursesName, mentor, totalTime, mentor_img, priceAll
    } = course;
    // console.log(cover)
    return (

        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <img className="w-full h-60" src={cover} alt='hello' />
            <div className='flex justify-between mt-2 mx-3 text-base font-semibold'>
                <p className='flex  items-center gap-2'><MdVideoSettings className='text-lg'></MdVideoSettings> {videos} Videos</p>
                <p className='flex  items-center gap-2'><AiOutlineClockCircle className='text-lg'></AiOutlineClockCircle> {totalTime} </p>
                <p className='flex items-center gap-2'><AiFillStar className='text-lg text-yellow-500' ></AiFillStar> {ratings}</p>
            </div>
            <div className="font-bold text-lg mb-2 mt-3 text-center text-black">{coursesName}</div>
            <div className='flex items-center gap-2 ml-8 mt-7 mb-7'>
                <img className='rounded-full shadow' width='40' height='40' src={mentor_img} alt="" />
                <p className='text-base font-semibold'>{mentor}</p>
            </div>
            <div className='flex justify-between border-t-2 items-center mt-3 pb-5 mx-3 bg-white'>
                <div><h5>Price : {priceAll}</h5></div>
                <div><button className='bg-transparent hover:bg-violet-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3 ml-3  shadow-md'><Link to={`/Course/${id}`}>Details</Link>
                </button></div>
            </div>
        </div>

    );
};

export default CourseCard;