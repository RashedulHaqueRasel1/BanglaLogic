import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link, Outlet, useLocation, } from "react-router-dom";
import { IoAddCircleOutline, IoHome, IoPeopleCircle } from "react-icons/io5";


const AdminDashboard = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // mobile View toggle
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    const location = useLocation();
    const currentPage = location.pathname;



    // Date & Time
    const [time, setTime] = useState("");

    // Function to update the time
    const updateTime = () => {
        const currentDate = new Date();

        // Format options for 12-hour time with AM/PM and date as DD/MM/YYYY
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true, // 12-hour clock format with AM/PM
            day: '2-digit', // Day as 2 digits
            month: '2-digit', // Month as 2 digits
            year: 'numeric', // Full year
            timeZone: 'Asia/Dhaka', // Bangladesh time zone (BST)
        };

        // Get the formatted date and time
        const bangladeshTime = currentDate.toLocaleString('en-US', options);

        // Format the output to match the desired pattern
        const formattedDateTime = `${bangladeshTime.slice(11)}, ${bangladeshTime.slice(0, 10)}`;

        setTime(formattedDateTime);
    };

    // Update time every second
    useEffect(() => {
        const interval = setInterval(updateTime, 1000);
        updateTime();

        return () => clearInterval(interval);
    }, []);

    // if (isLoading) return <span className="loading loading-ring loading-lg text-red-400 text-center"></span>;


    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } fixed inset-y-0 left-0 z-30 w-64 bg-[#b5aec7] transform md:translate-x-0 transition-transform duration-300 ease-in-out md:flex md:relative md:flex-col`}
            >
                {/* Logo  */}
                <div className="flex items-center justify-center h-16 bg-[#441752]">
                    <Link to={"/"}>
                        <span className="text-white font-bold uppercase">Bangla Logic</span>
                    </Link>
                </div>

                <div className="flex flex-col flex-1 overflow-y-auto">

                    <nav className="flex-1 px-2 py-4 bg-[#b5aec7]">
                        {/* Dashboard */}
                        <Link
                            to="/AdminDashboard/Dashboard"
                            className={`flex items-center px-4 py-4 space-y-4 rounded-lg text-black font-bold hover:bg-blue-500 ${currentPage === '/AdminDashboard/Dashboard' ? 'bg-blue-500' : ''}`}
                        >
                            <MdOutlineDashboardCustomize className="h-6 w-6 mr-2" />
                            Dashboard
                        </Link>

                        {/* Add Blog */}
                        <Link
                            to="/AdminDashboard/addBlog"
                            className={`flex items-center px-4 py-4 space-y-4 rounded-lg text-black font-bold hover:bg-blue-500 ${currentPage === '/AdminDashboard/addBlog' ? 'bg-blue-500' : ''}`}
                        >
                            <IoAddCircleOutline className="h-6 w-6 mr-2" />
                            Add Blog
                        </Link>

                        {/* All Blogs */}
                        <Link
                            to="/AdminDashboard/allBlogs"
                            className={`flex items-center px-4 py-4 space-y-4 rounded-lg text-black font-bold hover:bg-blue-500 ${currentPage === '/AdminDashboard/allBlogs' ? 'bg-blue-500' : ''}`}
                        >
                            <IoPeopleCircle className="h-6 w-6 mr-2" />
                            All Blogs
                        </Link>

                        {/* Go Home */}
                        <Link
                            to="/"
                            className="flex items-center px-4 py-4 space-y-4 rounded-lg text-black font-bold hover:bg-blue-500 my-16"
                        >
                            <IoHome className="h-6 w-6 mr-2" />
                            Go Home
                        </Link>
                    </nav>
                </div>

            </div>


            {/*  mobile view */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-25 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Main content */}
            <div className="flex flex-col flex-1 overflow-y-auto">

                <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-4 py-10 lg:py-0">


                    <p className="font-bold">{time}</p>

                    <div className="flex flex-col items-center justify-center">
                        {/* User Profile */}
                        <div className="flex flex-col items-center justify-center">
                            {/* User Profile */}
                            <div className="dropdown dropdown-end ml-8  ">
                                <div tabIndex={0} role="button" className=" btn-circle avatar tooltip tooltip-left" data-tip="Rasel" >
                                    <div className="w-10 rounded-full " >
                                        <img alt="" src="name" />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    {/* Dashboard5d Drawer Button */}
                    <button
                        className={`text-gray-500 focus:outline-none focus:text-gray-700 md:hidden ${isSidebarOpen ? 'order-last' : ''
                            }`}
                        onClick={toggleSidebar}
                    >
                        {isSidebarOpen ? (

                            <ImCancelCircle className="text-3xl" />

                        ) : (

                            <FaBarsStaggered className="text-3xl" />
                        )}
                    </button>
                </div>


                {/* Content */}
                <div className="p-4">
                    <Outlet></Outlet>

                </div>
            </div>
        </div>
    )
}
export default AdminDashboard;