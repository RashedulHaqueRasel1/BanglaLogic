
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useAllBlogs = () => {

 
    const axiosSecure = useAxiosPublic();

    const { data: blogs = [] , refetch, isLoading} = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/blogs`)
            return res.data;

        },

    })




    return  [blogs,isLoading, refetch];
};

export default useAllBlogs;