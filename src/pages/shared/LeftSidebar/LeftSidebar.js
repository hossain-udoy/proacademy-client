import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://proacademy-server.vercel.app/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])
    // console.log(categories);
    return (
        <div className='mt-5 mb-5'>
            <h4 className='text-3xl font-bold text-center'>Total Courses: {categories.length}</h4>

            <div>
                {
                    categories.map(category => <button className='bg-transparent hover:bg-violet-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3 ml-3 w-64 shadow-md' key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </button>)
                }
            </div>
        </div>
    );
};

export default LeftSidebar;