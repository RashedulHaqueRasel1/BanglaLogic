import { Link } from "react-router-dom";

const data = [
    {
        "title": "Total Earn",
        "earn": "$2,500",

    },
    {
        "title": "Total View",
        "view": "238K",

    },
    {
        "title": "Today User",

        "user": 150

    },
    {
        "title": "Total Blog",
        "totalBlogs": 20
    }
];

const stats =
    [
        {
            "title": "Total Earn",
            "earn": "$1,500",
            "view": 2200,
            "user": 180,
            "blogTitle": "The Wonders of Wildlife",
            "blogComment": 30
        },
        {
            "title": "Total Earn",
            "earn": "$3,000",
            "view": 5000,
            "user": 300,
            "blogTitle": "Exploring the Ocean Depths",
            "blogComment": 40
        },
        {
            "title": "Total Earn",
            "earn": "$1,200",
            "view": 1800,
            "user": 150,
            "blogTitle": "The Future of Technology",
            "blogComment": 20
        },
        {
            "title": "Total Earn",
            "earn": "$2,000",
            "view": 3500,
            "user": 200,
            "blogTitle": "Healthy Living Tips",
            "blogComment": 35
        }
    ];;


// console.log(stats)

const Dashboard = () => {
    return (
        <div className="mx-auto container">

            <div className="flex justify-center text-2xl lg:text-4xl font-bold py-4">
                <h1>Dashboard Management</h1>
            </div>

            {/*  */}
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-4 xl:gap-16 md:grid-cols-2 xl:grid-cols-4">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center px-20 lg:px-0 space-y-3 text-center hover:bg-blue-300 border-2 border-sky-400 bg-white bg-opacity-30 rounded-lg">
                        <span className="inline-block p-3  bg-blue-500 hover:bg-white border rounded-full    mt-4">

                        </span>
                        <h1 className="text-xl font-semibold text-black capitalize">{item.title}</h1>
                        <p className="text-black font-bold text-3xl pb-4" data-aos="fade-up">
                            {Object.values(item).find(value => value !== item.title)}
                        </p>
                    </div>
                ))}
            </div>




            {/* Table */}

            <div className="bg-white rounded-xl mt-10 ">

                <h1 className="text-center text-2xl font-bold py-4">Recent Blogs Status</h1>
                <hr />

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left bg-white">
                        <thead className="text-[18px] font-bold">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Blogs Titles
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Views
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Comments
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {stats.map((stat, index) => (
                                <tr key={index} className="bg-white border-b p-4">
                                    <td className="px-6 py-4">
                                        {stat.blogTitle}
                                    </td>
                                    <td className="px-6 py-4">
                                        {stat.view || stat.earn || stat.user || stat.total}
                                    </td>
                                    <td className="px-6 py-4">
                                        {stat.blogComment}
                                    </td>

                                    <Link to={``}>
                                        <button className="border py-2 px-2 mt-2 text-black font-semibold bg-blue-400 rounded-xl cursor-pointer">See Blog</button >
                                    </Link>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;