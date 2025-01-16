import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";

const Main = () => {
    const location = useLocation();

    // Check if the current path  
    const hideNavbarFooter = location.pathname.includes("/AdminDashboard") ||  location.pathname.includes("/adminLogin");

    return (
        <div>
            {/* Navbar & Footer will be hidden if URL contains  */}
            {!hideNavbarFooter && <Navbar />}
            
            {/* Main Content */}
            <Outlet />

            {!hideNavbarFooter && <Footer />}
        </div>
    );
};

export default Main;

