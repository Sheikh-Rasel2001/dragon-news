import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import App from "../App";
import CategoryNews from "../Pages/CategoryNews";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import NewsDetails from "../Pages/NewsDetails";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true, element: <App></App>
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
                loader: () => fetch('/news.json').then(res => res.json())
            }
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/newsDetails/:id',
        element: (
            <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>
        ),
        loader: () => fetch('/news.json').then(res => res.json())
    }
])

export default router;