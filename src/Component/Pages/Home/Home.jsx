// import Navbar from "../../Common/Navbar/Navbar";
import Blogs from "../Blogs/Blogs";
import OurHelp from "../OurHelp/OurHelp";
import Services from "../Services/Services";
import WhyUs from "../WhyUs/WhyUs";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            {/* Banner Section */}
            <Banner></Banner>

            {/* How We Help Section */}
            <section id="blog" className="pt-60 lg:py-0">
                <OurHelp></OurHelp>
            </section>

            <Services></Services>

            <WhyUs></WhyUs>

            <Blogs></Blogs>
        </div>
    );
};

export default Home;