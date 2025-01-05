import Footer from "../../Common/Footer/Footer";
import Navbar from "../../Common/Navbar/Navbar";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import OurHelp from "../OurHelp/OurHelp";
import Services from "../Services/Services";
import WhyUs from "../WhyUs/WhyUs";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            {/* Navbar Section */}
            <Navbar />

            {/* Banner Section */}
            <div id="Home">
                <Banner />
            </div>

            {/* Our Help Section */}
            <div>
                <OurHelp />
            </div>
            {/* Services Section */}
            <div id="Services">
                <Services />
            </div>

            {/* WhyUs Section */}
            <div id="WhyUs">
                <WhyUs />
            </div>

            {/* Blogs Section */}
            <div id="Blogs">
                <Blogs />
            </div>

            {/* Contact Section */}
            <div id="Contact">
                <Contact />
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Home;

