import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto">
                 <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;