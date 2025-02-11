
import { Link } from "react-router-dom";
import useAllBlogs from "../../hooks/useAllBlogs/useAllBlogs";
import { FaArrowRight } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import DangerousHTML from 'react-dangerous-html';


const Blogs = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // blogs Data
    const [blogs, loading] = useAllBlogs();
    // console.log(blogs)

    const sortedBlogs = blogs?.sort((a, b) => {
        const dateA = new Date(a.date.split("/").reverse().join("-"));
        const dateB = new Date(b.date.split("/").reverse().join("-"));
        return dateB - dateA;
    });



    // pagination funsonality
    const itemsPerPage = 6;
    const totalPages = Math.ceil(sortedBlogs.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = sortedBlogs.slice(startIndex, startIndex + itemsPerPage);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 3;
        let startPage = Math.max(1, currentPage - 1);
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage < maxVisiblePages - 1) {
            startPage = Math.max(1, endPage - (maxVisiblePages - 1));
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    //  Loading
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="relative">
                    <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                    <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                    </div>
                </div>
            </div>
        );
    }

    // Title
    document.title = "Bangla Logic || Blogs";

    return (
        <div className="container mx-auto  py-28  ">

            <div className="  text-center">
                <h1 className="text-4xl lg:text-6xl font-semibold mb-4">Blogs</h1>
                <p className="text-[17px] lg:text-xl opacity-65 mb-4 p-4">We publish high-quality blogs regularly for our learners.</p>
            </div>

            {/*------------ Blogs Start ------------*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4 mt-10">
                {currentProducts.map((blog) => (
                    <div key={blog.id} className="">
                        <div className="relative overflow-hidden group">
                            <Link to={`/blogDetails/${blog._id}`}>
                                {/* image */}
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-80 object-cover mb-2 transition-transform duration-700 ease-in-out group-hover:scale-105 rounded-lg"
                                />
                                {/* image Icon */}
                                <div className="absolute inset-0 flex items-end mb-6 mr-6 justify-end opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                    <div className="bg-white p-4 rounded-full shadow-lg hover:text-primary">
                                        <FaArrowRight className="text-2xl" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <Link to={`/blogDetails/${blog._id}`}>
                            <h2 className="font-poppins text-2xl font-semibold mt-3 hover:underline">
                                {blog.title}
                            </h2>
                        </Link>

                        <div className="flex justify-between text-sm mb-2">
                            <span className="mt-2 flex text-xl font-semibold text-gray-500">
                                <CgCalendarDates className="text-[17px] mt-2 mr-1" />
                                <p className="text-[17px] font-semibold">
                                    {blog.date}
                                </p>
                            </span>
                        </div>

                        {/* <p className="text-gray-700 dark:text-gray-700 font-opensans">
                            {blog.description.slice(0, 110)}...
                            <Link to={`/blogDetails/${blog._id}`} className="text-red-500">
                                Read More
                            </Link>
                        </p> */}

                        <DangerousHTML html={blog.description.slice(0, 150)} /> . . .
                        <Link to={`/blogDetails/${blog._id}`} className="text-red-500">
                            Read More
                        </Link>
                    </div>
                ))}
            </div>



            {/* ------------ Pagination Start------------*/}
            <div className="flex justify-center mt-14 gap-2 ">
                <button
                    onClick={handlePreviousPage}
                    className={`px-4 py-2 text-white bg-blue-600 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    disabled={currentPage === 1}
                >
                    <GrPrevious />
                </button>
                {getPageNumbers().map((number) => (
                    <button
                        key={number}
                        onClick={() => handlePageClick(number)}
                        className={`px-4 py-2 rounded-full ${number === currentPage
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-black"
                            }`}
                    >
                        {number}
                    </button>
                ))}
                <button
                    onClick={handleNextPage}
                    className={`px-4 py-2 text-white bg-blue-600 rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    disabled={currentPage === totalPages}
                >
                    <GrNext />
                </button>
            </div>
            {/* ------------ Pagination End ------------*/}

        </div>
    );
};

export default Blogs;
