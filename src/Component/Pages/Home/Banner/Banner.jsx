import Lottie from "lottie-react";
import Banner_Animation from "../../../../assets/Banner_Animation.json"

const Banner = () => {
    return (

        <div className="h-screen mx-auto container p-4 flex items-center">

            <div className="flex flex-col-reverse lg:flex-row  justify-around w-full">

                {/* Left Side */}
                <div className=" p-4 py-16 lg:w-1/2 flex items-center">
                    <div>
                        <h1 className="text-4xl lg:text-6xl font-semibold py-4 lg:py-6">Your Idea Matters!</h1>
                        <p className="text-gray-500 py-6">Pulvinar enim ac tortor nulla facilisi tristique facilisi
                            elementum sollicitudin eget lorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quo officia vitae nam molestiae voluptatem perferendis nostrum laboriosam ipsa accusamus.</p>

                        <button className="py-4 px-8 bg-[#005397] text-[#FFFFFF] rounded-full font-medium hover:bg-transparent  border border-[#005397] hover:text-[#005397]  transition duration-500 ease-in-out">
                            Make a Website
                        </button>
                    </div>
                </div>


                {/* Right Side */}
                <div className="">
                    <div>
                        <Lottie animationData={Banner_Animation} loop={true} className="object-contain h-full lg:h-96 mt-[500px] lg:mt-0 z-0" />
                    </div>
                </div>

            </div>

        </div>


    );
};

export default Banner;