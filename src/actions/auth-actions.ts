import axios from 'axios';

const URL = `${process.env.REACT_SERVER_URL}/api`;

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`http://localhost:3000/api/auth/login`, { email, password });
        console.log(URL);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

