import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../../assests/logo.png';
import Switch from '../../../others/Switch'
import './Navbar.css'
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut, theme } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <div className={`bg-white shadow-xl ${theme} `}>
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative">
                    <div className='lg:flex items-center justify-between hidden '>
                        <NavLink
                            to="/"
                            aria-label="Proacademy"
                            title="Proacademy"
                            className="inline-flex items-center nav-link"
                        >
                            <img className='w-8 xl:w-12' src={logo} alt="Proacademy" />

                            <span className={`ml-2 xl:text-3xl  font-bold tracking-wide text-black uppercase ${theme} `}>
                                Proacademy
                            </span>
                        </NavLink>
                        <div className={`flex items-center px-2 xl:space-x-3 lg:flex gap-5 text-xl tracking-wide nav-link transition-colors duration-200 rounded-md  p-2 `}>


                            <NavLink className={`${theme}`}
                                to="/home"
                                aria-label="Our product"
                                title="Our product"

                            >
                                Home
                            </NavLink>
                            <NavLink className={`${theme}`}
                                to="/Allcourses"

                            >
                                Courses
                            </NavLink>
                            <NavLink className={`${theme}`}
                                to="/blog"

                            >
                                Blog
                            </NavLink>
                            <NavLink className={`${theme}`}
                                to="/faq"

                            >
                                FAQ
                            </NavLink>
                            <div> <Switch className='sm:hidden' /></div>



                        </div>

                        <div className="flex items-center lg:flex gap-4">
                            <Link to="/profile">
                                {user?.photoURL ?
                                    <img
                                        style={{ height: '30px' }}
                                        className='rounded-full'
                                        src={user?.photoURL} alt="" title={user?.displayName} />

                                    : <FaUser></FaUser>
                                }
                            </Link>
                            {
                                user?.uid ?
                                    <>
                                        <span className='mr-1'>{user?.displayName}</span>

                                        <Link
                                            onClick={handleLogOut}
                                            className={`inline-flex items-center justify-center h-12 px-6 font-medium  text-black transition duration-200 rounded shadow-md  hover:bg-purple-500  focus:shadow-outline focus:outline-none ${theme}`}
                                            aria-label="Log Out"
                                            title="Log Out">

                                            Log Out
                                        </Link>
                                    </>
                                    :
                                    <>
                                        <Link
                                            to="/login"
                                            className="inline-flex items-center justify-center h-12 px-6 font-medium  text-black transition duration-200 rounded shadow-md  hover:bg-purple-500   focus:shadow-outline focus:outline-none"
                                            aria-label="Log In"
                                            title="Log In"
                                        >
                                            Log In
                                        </Link>
                                    </>
                            }



                        </div>
                    </div>
                    <div className="lg:hidden flex justify-end">
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
                            <div className="absolute z-50 top-0 left-0 w-full">
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
                                            to="/home"
                                            className="font-medium tracking-wide nav-link transition-colors duration-200 hover:bg-red-400 p-1 "
                                        >
                                            Home
                                        </NavLink>
                                        <NavLink
                                            to="/faq"
                                            className="font-medium tracking-wide nav-link transition-colors duration-200 hover:bg-red-400 p-1 "
                                        >
                                            Faq
                                        </NavLink>
                                        <NavLink
                                            to="/blog"
                                            className="font-medium tracking-wide nav-link transition-colors duration-200 hover:bg-red-400 p-1 "
                                        >
                                            Blog
                                        </NavLink>
                                        <NavLink
                                            to="/Allcourses"
                                            className="font-medium tracking-wide nav-link transition-colors duration-200 hover:bg-red-400 p-1 "
                                        >
                                            Courses
                                        </NavLink>

                                        {
                                            user?.uid ?
                                                <>


                                                    <Link
                                                        onClick={handleLogOut}
                                                        className="inline-flex items-center justify-center h-12 px-6 font-medium  text-black transition duration-200 rounded shadow-md  hover:bg-purple-500   focus:shadow-outline focus:outline-none"
                                                        aria-label="Log Out"
                                                        title="Log Out">

                                                        Log Out
                                                    </Link>
                                                </>
                                                :
                                                <>
                                                    <Link
                                                        to="/login"
                                                        className="inline-flex items-center justify-center h-12 px-6 font-medium  text-black transition duration-200 rounded shadow-md  hover:bg-purple-500   focus:shadow-outline focus:outline-none"
                                                        aria-label="Log In"
                                                        title="Log In"
                                                    >
                                                        Log In
                                                    </Link>
                                                </>
                                        }




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