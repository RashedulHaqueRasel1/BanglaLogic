import { NavLink } from "react-router-dom";
import './style.css';

const Error = () => {
    return (
        <div className="mx-auto container">

            <section className="page_404">
                <div className="container mx-auto mt-4 lg:mt-40">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h2 className="mb-16 font-extrabold text-9xl  ">
                                        <span className="sr-only ">Error</span>404
                                    </h2>


                                </div>

                                <div className="contant_box_404">
                                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>

                                    <p className="mt-4 mb-8 font-semibold dark:text-gray-600">But don t worry, you can find plenty of other things on our homepage.</p>

                                    <NavLink to={'/'} className="py-4 px-4 rounded-full font-medium bg-[#005397] text-white border border-[#005397]">Back to homepage</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Error;