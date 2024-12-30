import { BiLike } from "react-icons/bi";
import { GiSelfLove } from "react-icons/gi";
import { HiOutlineSupport } from "react-icons/hi";

const data = [
    { title: "Passionate", icon: <GiSelfLove />, text: "Tempor ullamcorper urna, est, lectus amet sit tempor pretium mi sed morbi cras posuere sit ultrices bibendum augue sit ornare." },
    { title: "Professional", icon: <BiLike />, text: "Tempor ullamcorper urna, est, lectus amet sit tempor pretium mi sed morbi cras posuere sit ultrices bibendum augue sit ornare." },
    { title: "Support", icon: <HiOutlineSupport />, text: "Tempor ullamcorper urna, est, lectus amet sit tempor pretium mi sed morbi cras posuere sit ultrices bibendum augue sit ornare." },

]


const WhyUs = () => {
    return (
        <div className="bg-[#F5F5F5]">

            <div className="mx-auto container py-36">

                <h1 className="py-10 font-semibold text-4xl lg:text-5xl p-4">Why Choose Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-4">
                    {
                        data.map((whyUs) =>
                            <div
                                key={whyUs.title}

                                className="flex flex-col justify-center items-center p-4  border shadow-md rounded-lg transition duration-700 ease-in-out hover:shadow-lg hover:-translate-y-1 h-60 hover:bg-blue-200 hover:cursor-pointer "
                            >
                                {/* <p className="text-xl font-bold mt-4">{whyUs.text}</p> */}
                                <div>
                                    <div className="bg-blue-400 p-4 rounded-full absolute -ml-3 -mt-2  ">

                                    </div>
                                    <p className="text-4xl relative">{whyUs.icon}</p>
                                </div>
                                <h1 className="py-4 text-3xl font-semibold">{whyUs.title}</h1>
                                <p className="text-center text-gray-400">{whyUs.text}</p>
                            </div>)
                    }
                </div>


            </div>
        </div>
    );
};

export default WhyUs;