
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import HomeBlogs from "./HomeBlogs/HomeBlogs";
import OurHelp from "./OurHelp/OurHelp";
import Services from "./Services/Services";
import WhyUs from "./WhyUs/WhyUs";


const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            {/* Banner Section */}
            <div id="Home">
                <Banner />
            </div>

            {/* Our Help Section */}
            <div>
                <OurHelp />
            </div>
            {/* Services Section */}
            <div id="/Home/Services">
                <Services />
            </div>

            {/* WhyUs Section */}
            <div id="/Home/WhyUs">
                <WhyUs />
            </div>

            {/* Blogs Section */}
            <div id="/Home/Blogs">
                <HomeBlogs />
            </div>

            {/* Contact Section */}
            <div id="/Home/Contact">
                <Contact />
            </div>

            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;

