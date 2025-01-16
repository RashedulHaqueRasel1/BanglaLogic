import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../Component/Pages/Home/Home";
import Blogs from "../Component/Pages/Blogs/Blogs";
import BlogDetails from "../Component/Pages/Blogs/BlogDetails/BlogDetails";
import Login from "../Component/Admin/Login/Login";
import AdminDashboard from "../Component/Admin/AdminDashboard/AdminDashboard";
import ProtectedRoute from "../Component/Admin/ProtectedRoute/ProtectedRoute";
import Dashboard from "../Component/Admin/Dashboard/Dashboard";
import Error from "../Component/Pages/Error/Error";
import AddBlog from "../Component/Admin/AddBlog/AddBlog";
import AllBlogs from "../Component/Admin/AllBlogs/AllBlogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
        loader: ({ params }) => fetch(`https://bangla-logic-backend.vercel.app/blogs/${params.id}`)
      },
      {
        path: '/adminLogin',
        element: <Login></Login>
      },

    ]
  },



  {
    path: "/AdminDashboard",
    element: <ProtectedRoute><AdminDashboard></AdminDashboard></ProtectedRoute>,
    children: [
      {
        path: "Dashboard",
        element: <ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>
      },
      {
        path: 'addBlog',
        element: <ProtectedRoute><AddBlog></AddBlog></ProtectedRoute>
      },
      {
        path: "allBlogs",
        element: <ProtectedRoute><AllBlogs></AllBlogs></ProtectedRoute>
      }
    ]
  }
]);



