import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Root = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar></Navbar>
            </div>
            <div className="container mx-auto min-h-[calc(100vh-116px)]">
                 <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;