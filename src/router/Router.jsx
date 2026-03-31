import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import App from "../App";
import CategoryNews from "../Pages/CategoryNews";
import Home from "../Components/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true, element: <App></App>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('/news.json')
            }
        ]
    }
])

export default router;