import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://bangla-logic-backend.vercel.app'
    // baseURL: 'http://localhost:3000'
})

const useAxiosPublic = () => {
    return axiosPublic ;
};

export default useAxiosPublic;
