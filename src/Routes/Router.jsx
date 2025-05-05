import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";





const Router = createBrowserRouter([
    {
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
            },

        ]

    },
    {
        path: '/login',
        errorElement: <Error />,
        element: <Login />
    }
    ,
    {
        path: '/register',
        errorElement: <Error />,
        element: <Register />
    }
])
export default Router;