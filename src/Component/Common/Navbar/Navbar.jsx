import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    const NavLink = <>
        <Link onClick={() => document.getElementById("Home").scrollIntoView({ behavior: "smooth" })}><p className="text-[#00233F] text-xl font-semibold hover:text-[#005397]">Home</p></Link>
        <Link onClick={() => document.getElementById("Services").scrollIntoView({ behavior: "smooth" })}><p className="text-[#00233F] text-xl font-semibold hover:text-[#005397]">Services</p></Link>
        <Link onClick={() => document.getElementById("WhyUs").scrollIntoView({ behavior: "smooth" })}><p className="text-[#00233F] text-xl font-semibold hover:text-[#005397]">Why Us</p></Link>
        <Link onClick={() => document.getElementById("Blogs").scrollIntoView({ behavior: "smooth" })}><p className="text-[#00233F] text-xl font-semibold hover:text-[#005397]">Blog</p></Link>


    </>

    return (
        <div>
            <nav className={`fixed top-0 left-0 w-full   lg:py-4 z-40 transition-colors duration-300 ${isScrolled
                ? "  backdrop-blur-lg   shadow-lg"
                : "bg-transparent"
                }`} >

                {/* Navbar Container */}
                <div className="flex justify-between  items-center font-semibold mx-auto container p-4 md:p-0">
                    {/* Logo */}
                    <Link onClick={() => document.getElementById("Home").scrollIntoView({ behavior: "smooth" })}>
                        <h1 className="text-3xl lg:text-5xl text-[#005397] font-bold font-WorkSans">Bangla Logic</h1>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex xl:gap-10 md:gap-8 gap-2">
                        {NavLink}
                    </div>

                    {/* Button */}
                    <div className="hidden md:block">

                        <Link onClick={() => document.getElementById("Contact").scrollIntoView({ behavior: "smooth" })}>
                            <p className="py-4 px-8 bg-[#005397] text-[#FFFFFF] rounded-full font-medium hover:bg-transparent  border border-[#005397] hover:text-[#005397] transition duration-500 ease-in-out">
                                Contact Us
                            </p>
                        </Link>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">

                        {
                            menuOpen ?
                                <></>
                                :
                                <button onClick={toggleMenu} className="text-3xl ">
                                    <FiMenu />
                                </button>
                        }
                    </div>
                </div>
            </nav>



            {/* Mobile Menu - Slide-in from Left */}

            <div
                className={`${menuOpen ? "translate-x-0" : "-translate-x-full"
                    } fixed inset-0 bg-black bg-opacity-50 md:hidden transition-all duration-300 z-50`}

            >

                <div
                    className={`${menuOpen ? "translate-x-0" : "-translate-x-full"
                        } fixed left-0 top-0 w-3/4 h-full bg-white shadow-lg p-6 transition-transform duration-300 z-50`}
                >
                    {/*  */}
                    <button onClick={toggleMenu} className="text-3xl border rounded-full p-2">
                        <FiX />
                    </button>

                    <div className="flex flex-col gap-4 mt-8">

                        {NavLink}

                        <Link onClick={() => document.getElementById("Contact").scrollIntoView({ behavior: "smooth" })}>
                            <p className="py-4 px-8 bg-[#005397] text-[#FFFFFF] rounded-full font-medium hover:bg-transparent  border border-[#005397] hover:text-[#005397] transition duration-500 ease-in-out">
                                Contact Us
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
