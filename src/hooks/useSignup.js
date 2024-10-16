import { useMutation } from '@tanstack/react-query';
// import axios from 'axios';

const signup = async (userData) => {
    // const response = await axios.post('/api/signup', userData); // Adjust the endpoint as needed
    // return response.data;
};

export const useSignup = () => {
    return useMutation(signup);
};
