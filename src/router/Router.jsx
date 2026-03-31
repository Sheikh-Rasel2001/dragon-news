import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import App from "../App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true, element: <App></App>
            },
            {
                path: '/category/:id',
                element: <App></App>,
                loader: () => fetch('/news.json')
            }
        ]
    }
])

export default router;