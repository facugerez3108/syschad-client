import React, { useState, FormEvent } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import Layout from "../layout/layout";
import MainContainer from "../components/main/main-container";
import { login } from '../actions/auth-actions'
//import { getUserRole } from "../actions/user-actions";
import  { LoginResponse } from '../../types';
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState<string>("");
  const navigate = useNavigate();
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await login(email, password) as LoginResponse;
      const accessToken = response.tokens.access.token; // Obtener el token de acceso de la respuesta
      localStorage.setItem("token", accessToken); // Guardar el token de acceso en el localStorage
      navigate("/");
      toast.success("Sesión iniciada correctamente!");
    } catch(error) {
      console.error(error);
      toast.error("Error al iniciar sesión. Por favor, verifica tus credenciales.");
    }
  };

  return (
    <Layout>
      <MainContainer>
        <Box
          maxW="md"
          m="auto"
          p={4}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </FormControl>
              <Button type="submit" colorScheme="blue">
                Iniciar Sesión
              </Button>
            </Stack>
          </form>
        </Box>
      </MainContainer>
    </Layout>
  );
};

export default Login;
