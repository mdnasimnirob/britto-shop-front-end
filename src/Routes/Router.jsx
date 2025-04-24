import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home/Home";





const Router = createBrowserRouter([{
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/home',
            element: <Home />
        }
    ]
}])
export default Router;