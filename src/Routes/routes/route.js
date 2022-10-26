import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Faq from "../../pages/Faq/Faq";
import Blog from "../../pages/Blog/Blog";
import AllCourses from "../../pages/Courses/AllCourses";
import Course from "../../pages/Course/Course";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Notfound from "../../pages/ErrorPage/NotFound";
import Terms from "../../others/terms";
import Profile from "../../others/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Checkout from "../../pages/Checkout/Checkout";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Notfound></Notfound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/faq',
                element: <Faq></Faq>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/terms',
                element: <Terms></Terms>,
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            },
            {
                path: '/Allcourses',
                element: <PrivateRoute> <AllCourses></AllCourses></PrivateRoute>,
                loader: () => fetch(`https://proacademy-server.vercel.app/courses`)
            },
            {
                path: '/Checkout/:id',
                element: <PrivateRoute> <Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://proacademy-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/Course/:id',
                element: <PrivateRoute> <Course></Course></PrivateRoute>,
                loader: ({ params }) => fetch(`https://proacademy-server.vercel.app/category/${params.id}`)
            }
        ]
    }
])