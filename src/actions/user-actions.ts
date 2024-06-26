import axios from 'axios';
import { UserProps } from '../../types';


const URL = `${process.env.REACT_SERVER_URL}/api`;

export const getUsers = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/api/users`);
        const users = response.data.filter((user: UserProps) => user.role ===  'USER')
        return users;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getUser = async (id: number) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/users/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getUserRole = async (token: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/users/role`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data.role;
    } catch (error) {
      console.error("Error obteniendo el rol del usuario:", error);
      throw error;
    }
};
  
 
export const createUser = async (name: string, lastname: string, email: string, password: string, role: string) => {
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

export const editUser = async (id: number, name: string, lastname: string, role: string) => {
    try {
        const response = await axios.patch(`http://localhost:3000/api/users/${id}`,
        {
            name,
            lastname,
            role
        });

        return response.data;
    }catch(error){
        console.error(error);
        throw error;
    }
}

export const deleteUser = async (id: number) => {
    try {
        const response = await axios.delete(`http://localhost:3000/api/users/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
