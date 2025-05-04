import { Outlet } from "react-router-dom";

import Footer from "../Component/Shared/Footer";
import Navbar from "../Component/Shared/Navbar";



const MainLayout = () => {
    return (
        <div className="max-w-screen-3xl">
            <Navbar/>     
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;