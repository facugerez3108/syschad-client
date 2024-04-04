import axios from 'axios';

const URL = `${process.env.REACT_SERVER_URL}/api`;


const getUsers = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/api/users`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getUser = async (id: number) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/users/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const createUser = async (name: string, lastname: string, email: string, password: string, role: string) => {
    try {
        const response = await axios.post(`http://localhost:3000/api/users`, 
        { 
            name, 
            lastname, 
            email, 
            password, 
            role 
        });
 
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const deleteUser = async (id: number) => {
    try {
        const response = await axios.delete(`http://localhost:3000/api/users/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default {
    createUser,
    getUsers,
    getUser,
    deleteUser
}