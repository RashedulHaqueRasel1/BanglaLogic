import {useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaCalendarAlt, FaCopy, } from "react-icons/fa";
import useAllBlogs from "../../../hooks/useAllBlogs/useAllBlogs";


const BlogDetails = () => {
    const blogDetails = useLoaderData();
    const [blogs, loading] = useAllBlogs();


    const { title, description, image } = blogDetails;

    const recentBlogs = [...blogs].sort(
        (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
    );

    // Copy blog url
    const handleCopyLink = () => {
        const blogUrl = `${window.location.origin}/blogDetails/${blogDetails._id}`;
        navigator.clipboard
            .writeText(blogUrl)
            .then(() => {
                toast.success("Link Copy Successfully!")
            })
            .catch((err) => {
                console.error('Failed to copy link: ', err);
            });
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
    document.title = `Logic || ${title}`;


    return (
        <div className="container mx-auto px-4 py-36">
            <div className="flex flex-col lg:flex-row justify-between gap-4">

                {/* BlogDetails Left Side */}
                <div className="w-full lg:w-3/4 lg:p-4">
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold text-black   mb-8">
                            {title}
                        </h1>

                        <img src={image} alt="GifTap has No Photo" className="w-full h-[700px] object-cover rounded-lg" />
                        <p className="text-gray-700 dark:text-gray-700  text-xl mt-8">{description}</p>
                    </div>
                </div>


                {/* BlogDetails Right Side */}
                <div className="w-full lg:w-1/4 mt-8 lg:mt-0 lg:p-4">
                    <div className="flex flex-col gap-6">


                        {/* Recent Blogs */}
                        <div>
                            <h1 className="text-gray-500 font-bold text-2xl">Recent Posts</h1>
                            <hr className="text-gray-500 mt-2" />
                            <div className="space-y-4 mt-6">
                                {recentBlogs.slice(0, 5).map((blog) => (
                                    <div key={blog._id} className="flex gap-4 items-start">
                                        <a href={`/blogDetails/${blog._id}`}>
                                            <img
                                                src={blog.image}
                                                alt=""
                                                className="w-16 lg:w-20 h-16 lg:h-20 object-cover mr-4 rounded-lg"
                                            />
                                        </a>
                                        <div>
                                            <a href={`/blogDetails/${blog._id}`}>
                                                <h1 className="font-medium text-xl lg:text-[17px] text-gray-600 hover:text-primary hover:underline">
                                                    {blog.title}
                                                </h1>
                                            </a>

                                            <div className="flex">
                                                <div className="mt-2 flex  text-xl font-semibold text-gray-500">
                                                    <FaCalendarAlt className="text-[14px] mt-2 mr-1" />
                                                    <p className="  text-[14px] font-semibold"> {blog.date} </p>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>




                        {/* Copy blog url */}
                        <button onClick={handleCopyLink} className="flex justify-center py-2  bg-blue-400 hover:border-blue-400 hover:bg-transparent duration-700 border rounded-lg">
                            <FaCopy className="mt-1 mr-2" />
                            <span>Copy Blog URL</span>
                        </button>
                    </div>
                </div>


            </div>

            <Toaster />
        </div>
    );
};

export default BlogDetails;

