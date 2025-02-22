import { Link } from "react-router-dom";
import useAllBlogs from "../../../hooks/useAllBlogs/useAllBlogs";
import DangerousHTML from 'react-dangerous-html';


const HomeBlogs = () => {

    const [blogs] = useAllBlogs();
    // console.log(blogs)

    // Sort blogs by date in descending order (most recent first)
    const sortedBlogs = blogs?.sort((a, b) => {
        const dateA = new Date(a.date.split("/").reverse().join("-"));
        const dateB = new Date(b.date.split("/").reverse().join("-"));
        return dateB - dateA;
    });




    return (
        <div>
            <section className=" py-28">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                    <div className="  text-center">
                        <h1 className="text-4xl lg:text-6xl font-semibold mb-4">Recent Blogs</h1>
                        <p className="text-[17px] lg:text-xl opacity-65 mb-4">We publish high-quality blogs regularly for our learners.</p>
                    </div>


                    <div className="mt-6">
                        {sortedBlogs.slice(0, 1).map(blog => (
                            <Link key={blog.title}  to={`/blogDetails/${blog._id}`} className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                                <Link to={`/blogDetails/${blog._id}`} className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500  " >
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                                </Link>
                                <div className="p-6 space-y-2 lg:col-span-5">
                                    <Link to={`/blogDetails/${blog._id}`}>
                                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blog.title}</h3>
                                    </Link>
                                    <span className="text-xs dark:text-gray-600">{blog.date}</span>

                                    <DangerousHTML html={blog.description.slice(0, 350)} /> . . .
                                    <Link to={`/blogDetails/${blog._id}`} className="text-red-500">
                                        Read More
                                    </Link>

                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">


                        {
                            sortedBlogs.slice(1, 4).map(blog => (
                                <div key={blog.title} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                                    <Link to={`/blogDetails/${blog._id}`}>
                                        <img className="w-full h-80 object-cover mb-2 transition-transform duration-700 ease-in-out group-hover:scale-105 rounded-lg" src={blog.image} />
                                    </Link>
                                    <div className="p-6 space-y-2">
                                        <Link to={`/blogDetails/${blog._id}`}>
                                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{blog.title}</h3>
                                        </Link>
                                        <span className="text-xs dark:text-gray-600">{blog.date}</span>

                                        <DangerousHTML html={blog.description.slice(0, 50)} /> . . .
                                        <Link to={`/blogDetails/${blog._id}`} className="text-red-500">
                                            Read More
                                        </Link>

                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div className="flex justify-center">
                        <Link to={'/blogs'}>
                            <button className="py-4 px-8 bg-[#005397] text-[#FFFFFF] rounded-full font-medium hover:bg-transparent  border border-[#005397] hover:text-[#005397] transition duration-500 ease-in-out">
                                More Blogs...
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeBlogs;