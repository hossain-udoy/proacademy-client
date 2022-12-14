import React from 'react';
import CourseCard from '../../others/CourseCard';
import LeftSidebar from '../shared/LeftSidebar/LeftSidebar';
import { useLoaderData } from 'react-router-dom';

const AllCourses = () => {
    const allCourses = useLoaderData();
    // console.log(allCourses)
    return (
        <div className='flex lg:flex-row flex-col'>
            <div className='basis-1/6  border-blue-400 border-t-0 border-2 px-3'>
                <LeftSidebar></LeftSidebar>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 m-5'>
                {
                    allCourses.map(courses => <CourseCard
                        key={courses.id}
                        course={courses}
                    ></CourseCard>)
                }

            </div>


        </div>
    );
};

export default AllCourses;