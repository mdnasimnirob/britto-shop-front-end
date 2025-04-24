import { Outlet } from "react-router-dom";

import Footer from "../Component/Shared/Footer";
import Navbar from "../Component/Shared/Navbar";



const MainLayout = () => {
    return (
        <div>
            <Navbar/>     
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;