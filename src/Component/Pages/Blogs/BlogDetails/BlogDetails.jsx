import { useLoaderData } from "react-router-dom";

 
 const BlogDetails = () => {


    const blogDetails = useLoaderData();

    const {title} = blogDetails;

    console.log('blogDetails Page: ', blogDetails)

    return (
        <div className="py-40 text-center">

            <p className="text-3xl font-semibold"> Blog Title: <span className="font-bold">{title}</span></p>

            <h1 className="text-green-500 text-center font-semibold text-3xl py-20">This page is Working....</h1>
            
        </div>
    );
 };
 
 export default BlogDetails;