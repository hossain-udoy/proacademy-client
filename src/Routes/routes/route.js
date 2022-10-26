import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Faq from "../../pages/Faq/Faq";
import Blog from "../../pages/Blog/Blog";


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
            }
        ]
    }
])