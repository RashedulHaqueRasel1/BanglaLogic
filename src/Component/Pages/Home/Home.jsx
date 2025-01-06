import Footer from "../../Common/Footer/Footer";
import Navbar from "../../Common/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import HomeBlogs from "./HomeBlogs/HomeBlogs";
import OurHelp from "./OurHelp/OurHelp";
import Services from "./Services/Services";
import WhyUs from "./WhyUs/WhyUs";
 

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
                <HomeBlogs />
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

