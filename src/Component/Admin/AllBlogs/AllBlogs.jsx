import { Link } from "react-router-dom";
import useAllBlogs from "../../hooks/useAllBlogs/useAllBlogs";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import DangerousHTML from 'react-dangerous-html';


const AllBlogs = () => {

    const axiosPublic = useAxiosPublic()
    const [blogs, loading, refetch] = useAllBlogs();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;


    // Blogs Delete 
    const handleDelete = (id) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure This Blog is deleted ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/blog/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Blog has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
            refetch()
        });
    }

    const sortedBlogs = blogs?.sort((a, b) => {
        const dateA = new Date(a.date.split("/").reverse().join("-"));
        const dateB = new Date(b.date.split("/").reverse().join("-"));
        return dateB - dateA;
    });



    // pagination
    const totalPages = Math.ceil(sortedBlogs.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = sortedBlogs.slice(startIndex, startIndex + itemsPerPage);

    const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);

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

    return (
        <div>
            <div className="bg-white rounded-xl mt-8 ">

                <h1 className="text-center text-2xl font-bold py-4">Show All Blogs</h1>
                <hr />

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left bg-white">
                        <thead className="text-[18px] font-bold">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Blogs Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentProducts.map((stat, index) => (
                                <tr key={index} className="bg-white border-b p-4 hover:bg-blue-200">
                                    <td className="px-6 py-4">
                                        <img src={stat.image} alt={stat.title} className="h-16 w-20 rounded-lg" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link to={`/blogDetails/${stat._id}`} className="hover:underline"> {stat.title} </Link>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* {stat.description.slice(0, 50)}... */}
                                         <DangerousHTML html={stat.description.slice(0, 50)} />
                                    </td>
                                    <td className="px-6 py-4">
                                        {stat.date}
                                    </td>


                                    <td>
                                        <div className="flex justify-center gap-2  ">
                                            {/* Blog Edit */}
                                            <Link to={``}>
                                                <button className="border py-2 px-2 hover:bg-blue-500  text-black font-semibold  rounded-xl cursor-pointer "><FaRegEdit className="text-xl" /></button >
                                            </Link>

                                            {/* Blog Delete */}

                                            <button onClick={() => handleDelete(stat?._id)} className="border py-2 px-2 hover:bg-blue-500 text-black font-semibold   rounded-xl cursor-pointer  "><MdDeleteForever className="text-xl" /></button >

                                        </div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ------------ Pagination Start------------ */}
                <div className="flex justify-center mt-8 gap-2">
                    <button
                        onClick={handlePreviousPage}
                        className={`px-4 py-2 text-white bg-blue-600 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {getPageNumbers().map((number) => (
                        <button
                            key={number}
                            onClick={() => handlePageClick(number)}
                            className={`px-4 py-2 rounded-full ${number === currentPage ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}
                        >
                            {number}
                        </button>
                    ))}
                    <button
                        onClick={handleNextPage}
                        className={`px-4 py-2 text-white bg-blue-600 rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
                {/* ------------ Pagination End ------------ */}
            </div>
        </div>
    );
};

export default AllBlogs;