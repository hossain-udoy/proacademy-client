import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Faq from "../../pages/Faq/Faq";
import Blog from "../../pages/Blog/Blog";
import AllCourses from "../../pages/Courses/AllCourses";
import Course from "../../pages/Course/Course";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
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
                path: '/Allcourses',
                element: <AllCourses></AllCourses>,
                loader: () => fetch(`https://proacademy-server.vercel.app/courses`)
            },
            {
                path: '/Course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://proacademy-server.vercel.app/category/${params.id}`)
            }
        ]
    }
])