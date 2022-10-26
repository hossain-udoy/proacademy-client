import React from 'react';
import { Link } from 'react-router-dom';




const CourseCard = ({ course }) => {
    const { id, cover, details, coursesName } = course;

    return (
        <div>
            <div className="rounded-lg shadow-lg md:mt-0 mt-6 sm:mr-2 bg-white sm:max-w-lg max-w-md px-2 sm:px-0">
                <Link title="Click for details" to={`/courses/courseDetails/${id}`}>
                    <img
                        className="rounded-t-2xl sm:rounded-t-lg  sm:pt-0 pt-2 h-72 w-full"
                        src={cover}
                        alt=""
                    />
                </Link>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                        {coursesName}
                    </h5>
                    <p className="text-gray-700 text-base mb-4">
                        {details.slice(0, 80) + "..."}
                    </p>
                    <Link to={`/Course/${id}`}><button className='bg-transparent hover:bg-violet-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3 ml-3  shadow-md'>Details
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;