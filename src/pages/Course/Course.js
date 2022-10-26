import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSidebar from '../shared/LeftSidebar/LeftSidebar'
import CourseDetails from '../../others/CourseDetails'

const Course = () => {
    const Courses = useLoaderData();
    console.log(Courses);
    return (
        <div className='flex lg:flex-row flex-col'>
            <div className='basis-1/6  border-blue-400 border-t-0 border-2 px-3'>
                <LeftSidebar></LeftSidebar>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 m-5'>
                {
                    Courses.map(course => <CourseDetails
                        key={Courses.id}
                        course={course}
                    ></CourseDetails>)
                }

            </div>


        </div>
    );
};

export default Course;