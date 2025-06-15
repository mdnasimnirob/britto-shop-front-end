import { Outlet } from "react-router-dom";

import Footer from "../Component/Shared/Footer";
import Navbar from "../Component/Shared/Navbar";



const MainLayout = () => {
    return (
        <div className="max-w-screen-3xl">
            <Navbar/>     
            <div className="">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;