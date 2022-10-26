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