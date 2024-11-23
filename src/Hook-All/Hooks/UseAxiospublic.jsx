import axios from "axios";

const AxiosPublic = axios.create({
    baseURL: 'https://assainment-11-food-related-server-007.vercel.app'
})


const UseAxiospublic = () => {
    return AxiosPublic
};

export default UseAxiospublic;