import axios, {AxiosResponse} from 'axios';
import { LoginResponse } from '../../types';

const URL = `${process.env.REACT_SERVER_URL}/api`;

export const login = async (email: string, password: string): Promise<LoginResponse> => {
    try {
        const response = await axios.post<LoginResponse>(`http://localhost:3000/api/auth/login`, { email, password });
        console.log(URL);
        console.log(response);
        localStorage.setItem('logged', 'true');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const register = async (email: string, password: string, name: string, lastname: string) => {
    try {
        const response = await axios.post(`http://localhost:3000/api/auth/register`, { email, password, name, lastname });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}