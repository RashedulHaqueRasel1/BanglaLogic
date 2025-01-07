import { useLoaderData } from "react-router-dom";

 
 const BlogDetails = () => {
    const blogDetails = useLoaderData();

    console.log(blogDetails)

    return (
        <div>
            <h1>BlogDetails</h1>
            <p> blogDetails {blogDetails.title}</p>
        </div>
    );
 };
 
 export default BlogDetails;