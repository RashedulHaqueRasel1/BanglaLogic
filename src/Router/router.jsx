import {createBrowserRouter} from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../Component/Pages/Home/Home";
import Blogs from "../Component/Pages/Blogs/Blogs";
import BlogDetails from "../Component/Pages/Blogs/BlogDetails/BlogDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/blogDetails/:id',
          element: <BlogDetails></BlogDetails>,
          loader: ({ params }) =>
            fetch(`http://localhost:3000/blogs/${params.id}`),
        }
      ]
    }
  ]);
  


