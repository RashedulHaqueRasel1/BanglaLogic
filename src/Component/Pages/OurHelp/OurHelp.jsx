import { CgProfile } from "react-icons/cg";
import { FaRegBuilding } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiStore2Line } from "react-icons/ri";

const data = [
    { title: "Local Business1", icon: <FaRegBuilding />, text: "Lorem ipsum dolor consectetur adipiscing elit eiusmod." },
    { title: "Local Business2", icon: <RiStore2Line />, text: "Lorem ipsum dolor consectetur adipiscing elit eiusmod." },
    { title: "Local Business3", icon: <FiEdit />, text: "Lorem ipsum dolor consectetur adipiscing elit eiusmod." },
    { title: "Local Business4", icon: <CgProfile />, text: "Lorem ipsum dolor consectetur adipiscing elit eiusmod." },

]

console.log(data)

const OurHelp = () => {
    return (
        <div className=" bg-[#F5F5F5]">

            <div className="mx-auto container py-36">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 p-4">
                    {
                        data.map((skill) =>
                            <div
                                key={skill.title}

                                className="flex flex-col justify-center items-center p-4  border shadow-md rounded-lg transition duration-700 ease-in-out hover:shadow-lg hover:-translate-y-1 h-60 hover:bg-blue-200 hover:cursor-pointer "
                            >
                                {/* <p className="text-xl font-bold mt-4">{skill.text}</p> */}
                                <div>
                                    <div className="bg-blue-400 p-4 rounded-full absolute -ml-3 -mt-3  ">

                                    </div>
                                    <p className="text-3xl relative">{skill.icon}</p>
                                </div>
                                <h1 className="py-3 text-2xl font-semibold">{skill.title}</h1>
                                <p className="text-center text-gray-400">{skill.text}</p>
                            </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default OurHelp;