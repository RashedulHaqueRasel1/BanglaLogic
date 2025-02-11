import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";

// image hosting img bb
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddBlog = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [preview, setPreview] = useState(
        "https://i.postimg.cc/nhN5hnsq/Rasel-Ahamed.jpg"
    );
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false); // Loading state
    const axiosPublic = useAxiosPublic();

    // Date & Time
    const [time, setTime] = useState("");

    // Function to update the time
    const updateTime = () => {
        const currentDate = new Date();
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            timeZone: 'Asia/Dhaka',
        };

        const bangladeshTime = currentDate.toLocaleString('en-US', options);
        setTime(bangladeshTime); // It will show in MM/DD/YYYY format
    };

    useEffect(() => {
        const interval = setInterval(updateTime, 1000);
        updateTime();
        return () => clearInterval(interval);
    }, []);

    const handlePublish = async () => {
        if (!selectedFile) {
            console.error("No file selected!");
            return;
        }

        setLoading(true); // Start loading

        const formData = new FormData();
        formData.append('image', selectedFile);

        // Uncomment below code to enable image upload
        const uploadResponse = await fetch(image_hosting_api, {
            method: 'POST',
            body: formData
        });
        const uploadResult = await uploadResponse.json();

        if (uploadResult.success) {
            const updatedData = {
                date: time,
                title: title,
                image: uploadResult.data.display_url,
                description: value,
            };

            // Add menu item using Axios
            const addBlog = await axiosPublic.post('/addBlog', updatedData);
            console.log(addBlog.data);
            if (addBlog.data.insertedId) {
                // show success popup
                Swal.fire({
                    position: "top-right",
                    icon: "success",
                    title: `Blog has been saved`,
                    showConfirmButton: false,
                    timer: 1500
                });

                // Reset fields and stop loading
                setTitle("");
                setValue("");
                setSelectedFile(null);
                setPreview(
                    "https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c"
                );
                setLoading(false); // Stop loading
            }
        }
    };

    const loadFile = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="container mx-auto p-6 rounded-lg bg-white">
            {/* Blog Title Inputs */}
            <div className="lg:flex justify-between  lg:gap-4">
                <div className="lg:w-[700px]">
                    <input
                        type="text"
                        className="w-full p-4 bg-gray-300 rounded-lg"
                        placeholder="Blog Title . . ."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className=" ">
                    <form>
                        <div className="flex items-center space-x-6 ">
                            <div className="shrink-0">
                                <img
                                    id="preview_img"
                                    className="h-16 w-16 object-cover rounded-lg"
                                    src={preview}
                                    alt="Current profile photo"
                                />
                            </div>
                            <label className="block ">
                                <span className="sr-only cursor-pointer">Choose profile photo</span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={loadFile}
                                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold bg-blue-200 rounded-3xl cursor-pointer"
                                />
                            </label>
                        </div>
                    </form>
                </div>
            </div>

            {/* Blog Description Editor */}
            <div className="mt-4 h-full rounded-md border">
                <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    className="h-full bg-gray-300 rounded-md"
                    placeholder="Tell Your Story . . ."
                />
            </div>

            {/* Publish Button */}
            <div className="flex justify-center mt-10">
                <button
                    onClick={handlePublish}
                    className={`py-4 px-4 rounded-full font-medium bg-[#005397] text-white border border-[#005397] `}
                    disabled={loading} // Disable button while loading
                >
                    {loading ? (
                        <img
                            className="w-10 h-10 animate-spin border border-[#005397]"
                            src="https://www.svgrepo.com/show/474682/loading.svg"
                            alt="Loading icon"
                        />
                    ) : (
                        "Publish"
                    )}
                </button>
            </div>
        </div>
    );
};

export default AddBlog;
