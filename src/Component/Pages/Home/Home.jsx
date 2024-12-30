// import Navbar from "../../Common/Navbar/Navbar";
import OurHelp from "../OurHelp/OurHelp";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            {/* Banner Section */}
            <Banner></Banner>

            {/* How We Help Section */}
            <section id="blog">
                <OurHelp></OurHelp>
            </section>

            <Services></Services>
        </div>
    );
};

export default Home;