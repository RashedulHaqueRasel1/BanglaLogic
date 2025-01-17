import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
// image hosting img bb
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddBlog = () => {

    const [imagePreview, setImagePreview] = useState('');
    const axiosPublic = useAxiosPublic();

    // Image Preview
    const loadFile = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setImagePreview(URL.createObjectURL(file));
        }
    };


    // Show Date input File
    const [todayDate, setCurrentDate] = useState('');

    // Function to format the date as DD/MM/YYYY
    const getFormattedDate = () => {
        const today = new Date();
        return `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
    };

    // Update the date every second
    useEffect(() => {
        setCurrentDate(getFormattedDate()); // Set date initially
        const interval = setInterval(() => {
            setCurrentDate(getFormattedDate()); // Update date every second
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);
    // Submit Data in Database
    const { register, handleSubmit, reset } = useForm()

    // Handle submit
    const onSubmit = async (data) => {

        const formData = new FormData();
        formData.append('image', data.image[0]);

        // Upload image to hosting API
        const uploadResponse = await fetch(image_hosting_api, {
            method: 'POST',
            body: formData
        });

        const uploadResult = await uploadResponse.json();
        // console.log(uploadResult)


        if (uploadResult.success) {

            const updatedData = {
                ...data,
                imagePreview: imagePreview,
                date: todayDate,
                image: uploadResult.data.display_url
            };

            // Add menu item using Axios
            const addBlog = await axiosPublic.post('/addBlog', updatedData);
            console.log(addBlog.data);
            if (addBlog.data.insertedId) {
                // show success popup
                Swal.fire({
                    position: "top-right",
                    icon: "success",
                    title: `${data.name} has been save`,
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            }

            // console.log(updatedData);
            reset();

        }


    };



    return (
        <div>

            <section  >


                <div className="flex justify-center text-2xl lg:text-4xl font-bold py-4">
                    <h1>Add Blog</h1>
                </div>

                <div className="  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 border-2 border-blue-200   bg-blue-200 rounded-2xl mt-4">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                className="w-full lg:h-[600px]"
                                alt=""
                                src={imagePreview}
                            />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>


                            <div className="flex flex-col rounded-lg border border-gray-100 py-3 shadow-sm">

                                <div>
                                    <dl className="-my-3 divide-y divide-gray-100 text-[16px] font-semibold">

                                        <div className="grid grid-cols-1 gap-1 justify-center items-center p-3 sm:grid-cols-3 sm:gap-4">
                                            <span>Blog Title :</span>
                                            <input
                                                type="text"
                                                className="mt-1 w-full lg:w-[450px] rounded-md border-gray-200 bg-white   text-gray-700 shadow-sm py-2 text-xl p-2"
                                                placeholder="Blog Title . . ."
                                                {...register("title", { required: true })}
                                                required
                                            />
                                        </div>


                                        <div className="grid grid-cols-1 gap-1 justify-center items-center p-3 sm:grid-cols-3 sm:gap-4">
                                            <span>Blog Image :</span>
                                            <form>
                                                <div className="flex items-center space-x-6 ">

                                                    <label className="block">
                                                        <span className="sr-only cursor-pointer">Choose profile photo</span>
                                                        <input
                                                            type="file"
                                                            onChange={loadFile}
                                                            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 cursor-pointer border rounded-2xl"
                                                            {...register("image", { required: true })}
                                                        />
                                                    </label>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 justify-center items-center p-3 sm:grid-cols-3 sm:gap-4">
                                            <span>Today Date :</span>
                                            <input
                                                type="text"
                                                className="mt-1 w-full lg:w-[450px] rounded-md border-gray-200 bg-white   text-gray-700 shadow-sm py-2 text-xl p-2"
                                                placeholder={todayDate}
                                                disabled
                                            />
                                        </div>


                                        <div className="grid grid-cols-1 gap-1 justify-center items-center p-3 sm:grid-cols-3 sm:gap-4">
                                            <span>Blog Description :</span>
                                            <textarea
                                                type="text"
                                                className="mt-1 w-full lg:w-[450px] rounded-md border-gray-200 bg-white   text-gray-700 shadow-sm py-2 text-xl p-2"
                                                placeholder={"Blog Description . . . "}
                                                {...register("description", { required: true })}
                                                required
                                            />
                                        </div>
                                    </dl>
                                </div>




                            </div>

                            <div className="flex justify-center items-center mt-4">
                                <button type="submit" className="py-4 px-8 bg-[#005397] text-[#FFFFFF] rounded-full font-medium hover:bg-transparent  border border-[#005397] hover:text-[#005397] transition duration-500 ease-in-out">Submit</button>
                            </div>


                        </form>
                    </div>

                </div>


            </section>



        </div>
    );
};

export default AddBlog;