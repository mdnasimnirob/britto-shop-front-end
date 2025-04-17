import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";



const Router = createBrowserRouter([{
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
        {
            path: '/home',
            element: <Home />
        }
    ]
}])
export default Router;