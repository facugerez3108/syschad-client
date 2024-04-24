import MainContainer from "../../../components/main/main-container";
import { Heading } from "../../../components/ui/heading";
import Layout from "../../../layout/layout";
import { UserProps } from "../../../../types";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const EditUser = () => {
  return (
    <Layout>
      <MainContainer>
        <Heading
          title={"Editar usuario"}
          description={`Edite los datos del usuario.`}
        />
        <Flex
          direction="column" // Establece la dirección de Flexbox como columna
          alignItems="start" // Alinea los elementos al inicio horizontalmente
          justifyContent="space-between" // Distribuye el espacio entre los elementos verticalmente
          borderRadius={5}
          w="1200px"
          h="800px"
          mt={5}
          position="relative"
          bgColor="gray.300"
          boxShadow="md"
          p={5} // Agrega espacio interno a Flex para los formularios y los botones
        >
          <form>
            <FormControl gap={5}>
              <FormLabel>Nombre</FormLabel>
              <Input
                variant="filled"
                borderColor="black"
                focusBorderColor="black"
                type="text"
              />
              <FormLabel mt={4}>Apellido</FormLabel>
              <Input
                variant="filled"
                borderColor="black"
                focusBorderColor="black"
                type="text"
                w={"400px"}
              />
              <FormLabel mt={4}>Rol</FormLabel>
              <Input
                variant="filled"
                isReadOnly={true}
                borderColor="black"
                focusBorderColor="black"
                type="text"
              />
              <FormLabel mt={4}>Correo</FormLabel>
              <Input
                variant="filled"
                borderColor="black"
                focusBorderColor="black"
                type="email"
              />
            </FormControl>
          </form>

          <Flex justifyContent="flex-end">
            {" "}
            {/* Este Flex contiene los botones y los alinea a la derecha */}
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
        </Flex>
      </MainContainer>
    </Layout>
  );
};

export default EditUser;
