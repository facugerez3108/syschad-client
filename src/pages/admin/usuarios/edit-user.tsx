import MainContainer from "../../../components/main/main-container";
import { Heading } from "../../../components/ui/heading";
import Layout from "../../../layout/layout";
import { useState, useEffect } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { getUser, editUser } from "../../../actions/user-actions";
import { useToast } from "@chakra-ui/react";

const EditUser = () => {
  
  const toast = useToast();

  const { id } = useParams();
  const navigate = useNavigate();
  
  const [ userData, setUserData ] = useState({
    name: "",
    lastname: "",
    role: "",
  });

  const [ formValues, setFormValues ] = useState({
    name: "",
    lastname: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await getUser(Number(id));
        setUserData(data);
        setFormValues({
          name: data.name,
          lastname: data.lastname,
        });
      }catch(error){
        console.error("Error al obtener los usuarios", error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      editUser(Number(id), formValues.name, formValues.lastname, userData.role);
      navigate("/gestion-alumnos");
      toast({
        position: "top",
        title: "Usuario editado",
        description: "El usuario ha sido editado correctamente.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }catch(error){
      console.error("Error al editar el usuario", error);
    }
  }

  return (
    <Layout>
      <MainContainer>
        <Heading
          title={"Editar usuario"}
          description={`Edite los datos del usuario.`}
        />
        <Flex
          direction="column" 
          alignItems="start" 
          justifyContent="space-between" 
          borderRadius={5}
          w="1200px"
          h="800px"
          mt={5}
          position="relative"
          bgColor="gray.300"
          boxShadow="md"
          p={5}
        >
          <form onSubmit={handleFormSubmit}>
            <FormControl gap={5}>
              <FormLabel>Nombre</FormLabel>
              <Input
                variant="filled"
                borderColor="black"
                focusBorderColor="black"
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
              />
              <FormLabel mt={4}>Apellido</FormLabel>
              <Input
                variant="filled"
                borderColor="black"
                focusBorderColor="black"
                type="text"
                name="lastname"
                value={formValues.lastname}
                onChange={handleInputChange}
                w={"400px"}
              />
              <FormLabel mt={4}>Rol</FormLabel>
              <Input
                variant="filled"
                isReadOnly={true}
                borderColor="black"
                focusBorderColor="black"
                type="text"
                value={userData.role}
              />
            </FormControl>

            <Flex justifyContent="flex-end">
            <Button colorScheme="teal" type="submit">
              Guardar
            </Button>
            
            <Button
              colorScheme="red"
              ml={5}
              type="submit"
              onClick={() => window.history.back()}
            >
              Cancelar
            </Button>
          </Flex>

          </form>

        
        </Flex>
      </MainContainer>
    </Layout>
  );
};

export default EditUser;
