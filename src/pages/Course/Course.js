import React, { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSidebar from '../shared/LeftSidebar/LeftSidebar'
import { Link } from 'react-router-dom';
import { MdVideoSettings } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { AiOutlineDownload } from 'react-icons/ai'
import { useReactToPrint } from "react-to-print";

const Course = () => {
    const { id, details, cover, videos, ratings, coursesName, mentor, totalTime, mentor_img, priceAll } = useLoaderData();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className='flex lg:flex-row flex-col'>
            <div className='basis-1/6  border-blue-400 border-t-0 border-2 px-3'>
                <LeftSidebar></LeftSidebar>
            </div>
            <div className='w-full flex justify-center my-6' >
                <div className='flex flex-col'>
                    <div className='text-4xl mb-3'>{coursesName}</div>
                    <div ><Link onClick={handlePrint} to={`/Course/${id}`}><button className=' w-full text-center text-2xl flex bg-transparent hover:bg-violet-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3  shadow-md items-center'><AiOutlineDownload></AiOutlineDownload> Download As PDF
                    </button></Link></div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                        <div ref={componentRef}>
                            <img className="w-full h-60" src={cover} alt='hello' />
                            <div className='flex justify-between mt-2 mx-3 text-base font-semibold'>
                                <p className='flex  items-center gap-2'><MdVideoSettings className='text-lg'></MdVideoSettings> {videos} Videos</p>
                                <p className='flex  items-center gap-2'><AiOutlineClockCircle className='text-lg'></AiOutlineClockCircle> {totalTime} </p>
                                <p className='flex items-center gap-2'><AiFillStar className='text-lg text-yellow-500' ></AiFillStar> {ratings}</p>
                            </div>
                            <div className="font-bold text-lg mb-2 mt-3 text-center text-black">{coursesName}</div>
                            <p className='px-2 text-justify'>{details}</p>
                            <div className='flex items-center gap-2 ml-8 mt-7 mb-7'>
                                <img className='rounded-full shadow' width='40' height='40' src={mentor_img} alt="" />
                                <p className='text-base font-semibold'>{mentor}</p>
                            </div>
                            <div className='ml-3'><h5>Price : {priceAll}</h5></div>
                            <div className='flex justify-center border-t-2 items-center mt-3 pb-5 mx-3 bg-white'>


                            </div>
                        </div>
                        <div className='flex gap-1 justify-center'>
                            <Link to={`/Checkout/${id}`}><button className='bg-transparent hover:bg-violet-700 text-blue-700 font-semibold hover:text-white py-2 px-1 border border-blue-500 hover:border-transparent rounded my-3 ml-3  shadow-md'>Premium Access
                            </button></Link>

                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Course;