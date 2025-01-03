import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";

const Main = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>

            {/* Main All Content */}
            <Outlet></Outlet>

            {/* Footer */}
            <Footer></Footer>

        </div>
    );
};

export default Main;