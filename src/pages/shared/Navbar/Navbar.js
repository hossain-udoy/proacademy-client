import { Link, NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
import logo from '../../../assests/logo.png';
// import './Navbar.css'


// function Navbar() {
// const [togglerNav, setTogglerNav] = useState(false);

// const clickHandler = () => {
//     setTogglerNav(!togglerNav);
// };


// return (

// <nav classNameName=' h-auto md:h-24 p-2  mx-auto flex justify-between md:items-center'>
//     <Link classNameName='flex gap-3 text-red-600 xl:text-5xl md:text-2xl  justify-between md:items-center' to='/home'>
//         <FcHome classNameName='md:text-3xl sm:text-3xl  xl:text-5xl' />EProcademy
//     </Link>
//     <div
//         classNameName={
//             togglerNav ? 'flex flex-col gap-4 md:inline' : 'hidden md:inline'
//         }
//     >
//         <NavLink classNameName='nav-link' onClick={clickHandler} to='/home'>
//             Home
//         </NavLink>
//         <NavLink classNameName='nav-link' onClick={clickHandler} to='/courses'>
//             Courses
//         </NavLink>
//         <NavLink classNameName='nav-link' onClick={clickHandler} to='/Blog'>
//             Blog
//         </NavLink>
//         <NavLink classNameName='nav-link' onClick={clickHandler} to='/Statistic'>
//             Statistic
//         </NavLink>
//     </div>
//     <button
//         classNameName=' inline md:hidden self-start nav-link'
//         onClick={clickHandler}
//     >
//         {togglerNav ? <LinkiOutlineClose /> : <FaBars />}
//     </button>
// </nav>



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-white shadow-xl">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img src={logo} alt="Proacademy" />

                        <span className="ml-2 text-4xl  font-bold tracking-wide text-black uppercase">
                            Proacademy
                        </span>
                    </Link>
                    <div className='flex items-center hidden space-x-8 lg:flex '>


                        <NavLink
                            to="/"
                            aria-label="Our product"
                            title="Our product"
                            className="text-xl tracking-wide text-black transition-colors duration-200 hover:bg-red-400 p-1 "
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/"
                            className="text-xl tracking-wide text-black transition-colors duration-200 hover:bg-red-400 p-1 "
                        >
                            Courses
                        </NavLink>
                        <NavLink
                            to="/"
                            className="text-xl tracking-wide text-black transition-colors duration-200 hover:bg-red-400 p-1 "
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            to="/"
                            className="text-xl tracking-wide text-black transition-colors duration-200 hover:bg-red-400 p-1 "
                        >
                            FAQ
                        </NavLink>


                    </div>
                    {/* <Link to="/profile">
                        {user?.photoURL ?
                            <Image
                                style={{ height: '30px' }}
                                roundedCircle
                                src={user?.photoURL}>
                            </Image>
                            : <FaUser></FaUser>
                        }
                    </Link> */}
                    <div className="flex items-center hidden space-x-8 lg:flex">

                        <Link
                            to="/"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium  text-black transition duration-200 rounded shadow-md  hover:bg-purple-500   focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                        >
                            Sign up
                        </Link>

                    </div>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to="/"
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                <img src={logo} alt="Proacademy" />

                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    Proacademy
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ">


                                        <NavLink
                                            to="/"
                                            className="font-medium tracking-wide text-black transition-colors duration-200 hover:bg-red-400 p-1 "
                                        >
                                            Home
                                        </NavLink>
                                        <NavLink
                                            to="/"
                                            className="font-medium tracking-wide text-black transition-colors duration-200 hover:bg-red-400 p-1 "
                                        >
                                            Faq
                                        </NavLink>
                                        <NavLink
                                            to="/"
                                            className="font-medium tracking-wide text-black transition-colors duration-200 hover:bg-red-400 p-1 "
                                        >
                                            Blog
                                        </NavLink>
                                        <NavLink
                                            to="/"
                                            className="font-medium tracking-wide text-black transition-colors duration-200 hover:bg-red-400 p-1 "
                                        >
                                            Home
                                        </NavLink>

                                        <Link
                                            to="/"
                                            className="inline-flex items-center justify-center h-12 px-6 font-medium  text-black transition duration-200 rounded shadow-md  hover:bg-purple-500   focus:shadow-outline focus:outline-none mt-3"
                                        >
                                            Sign up
                                        </Link>




                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;