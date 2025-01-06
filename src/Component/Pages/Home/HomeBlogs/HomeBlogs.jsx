import { Link } from "react-router-dom";




const blogs = [
    {
        "title": "The Beauty of Nature",
        "date": "31/12/2024",
        "image": "https://i.postimg.cc/HkYCVTSt/Best-Drones.jpg",
        "description": "Nature always wears the colors of the spirit. This is a brief exploration of the diverse landscapes, from towering mountains to serene beaches, each carrying its unique charm and story."
    },
    {
        "title": "Technological Advancements",
        "date": "31/12/2024",
        "image": "https://i.postimg.cc/Ls4fCgxZ/Smart-Kitchen.jpg",
        "description": "The rapid evolution of technology has transformed our lives in countless ways. From smartphones to AI, explore the innovations reshaping our future."
    },
    {
        "title": "A Culinary Journey",
        "date": "29/12/2024",
        "image": "https://i.postimg.cc/Pq6ftCTZ/Fitness-Trackers.jpg",
        "description": "Embark on a culinary adventure with a guide to exquisite dishes from around the world, showcasing the art and science of cooking."
    },
    {
        "title": "Exploring Space",
        "date": "28/12/2024",
        "image": "https://i.postimg.cc/zBKPbrwj/cook.jpg",
        "description": "Space exploration continues to ignite our imagination, taking us to new frontiers and revealing the mysteries of the universe."
    },
    {
        "title": "The Art of Mindfulness",
        "date": "27/12/2024",
        "image": "https://example.com/images/mindfulness.jpg",
        "description": "Mindfulness helps us stay grounded and connected to the present moment. Discover techniques to enhance your well-being through mindfulness practices."
    },
    {
        "title": "Historical Marvels",
        "date": "26/12/2024",
        "image": "https://example.com/images/history.jpg",
        "description": "Take a walk through history and marvel at the architectural wonders and significant events that shaped our world."
    }
]



// Sort blogs by date in descending order (most recent first)
const sortedBlogs = blogs.sort((a, b) => {
    const dateA = new Date(a.date.split("/").reverse().join("-"));
    const dateB = new Date(b.date.split("/").reverse().join("-"));
    return dateB - dateA;
});


const HomeBlogs = () => {
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
                            <a key={blog.title} rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                                <img src={blog.image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500 transition-transform duration-700 ease-in-out group-hover:scale-105" />
                                <div className="p-6 space-y-2 lg:col-span-5">
                                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blog.title}</h3>
                                    <span className="text-xs dark:text-gray-600">{blog.date}</span>
                                    <p className="opacity-70">{blog.description.slice(0, 320)}...
                                        <Link to={`/BlogDetails/${blog._id}`} className="text-red-500">
                                            Read More
                                        </Link>
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">


                        {
                            sortedBlogs.slice(1, 4).map(blog => (
                                <a key={blog.title} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                                    <img role="presentation" className="w-full h-80 object-cover mb-2 transition-transform duration-700 ease-in-out group-hover:scale-105 rounded-lg" src={blog.image} />
                                    <div className="p-6 space-y-2">
                                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{blog.title}</h3>
                                        <span className="text-xs dark:text-gray-600">{blog.date}</span>
                                        <p className="opacity-70">{blog.description.slice(0, 110)}...
                                            <Link to={`/BlogDetails/${blog._id}`} className="text-red-500">
                                                Read More
                                            </Link>
                                        </p>
                                    </div>
                                </a>
                            ))
                        }

                    </div>
                    <div className="flex justify-center">
                        <button className="py-4 px-8 bg-[#005397] text-[#FFFFFF] rounded-full font-medium hover:bg-transparent  border border-[#005397] hover:text-[#005397] transition duration-500 ease-in-out">
                            More Blogs...
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeBlogs;