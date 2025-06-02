import { createBrowserRouter, Navigate, replace } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Product from "../Pages/Products/Products/Product";
import Cart from "../Pages/Cart/Cart/Cart";
import Wishlist from "../Pages/Wishlist/Wishlist/Wishlist";
import Orders from "../Pages/Orders/Orders/Orders";
import OurCategory from "../Pages/OurCategories/OurCategory/OurCategory";





const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            // {
            //     path: '/',
            //     element: <Home />
            // },
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/product',
                element: <Product />,
                // loader: ()=> fetch('/products.json')
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/wishlist',
                element: <Wishlist />
            },
            {
                path: '/category/:category',
                element: <OurCategory />
            },
            {
                path: '/orders/:category',
                element: <Orders />
            },
            {
                path: '/orders',
                element: <Navigate to="/orders/electronic" replace />,
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