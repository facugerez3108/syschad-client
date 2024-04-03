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
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    console.log("Email:", email);
    console.log("Password:", password)
    login(email, password);
    navigate("/");
    toast.success('Sesión iniciada correctamente!');
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
