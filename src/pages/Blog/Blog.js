import React from 'react';
import Questions from '../../others/Questions';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Blog = () => {
    return (
        <div className='bg'>



            <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                            Easiest way to create your website
                        </h1>

                        <div className="mt-8 space-y-5">
                            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">

                                <AiOutlineCheckCircle className='text-white text-xl'></AiOutlineCheckCircle>

                                <span className="mx-2 text-black text-xl">Clean and Simple Layout</span>
                            </p>

                            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <AiOutlineCheckCircle className='text-white text-xl'></AiOutlineCheckCircle>

                                <span className="mx-2 text-black text-xl">Just Copy Paste Codeing</span>
                            </p>

                            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <AiOutlineCheckCircle className='text-white text-xl'></AiOutlineCheckCircle>

                                <span className="mx-2 text-black text-xl">Easy to Use</span>
                            </p>
                        </div>
                    </div>


                </div>

                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img className="w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
            </div>

            <div>
                <Questions></Questions>
            </div>


        </div>



    );
};

export default Blog;