import MainContainer from "../../../components/main/main-container";
import { Heading } from "../../../components/ui/heading";
import Layout from "../../../layout/layout";
import { UserProps } from "../../../../types";
import { Box, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

const EditUser = () => {
  return (
    <Layout>
      <MainContainer>
        <Heading
          title={"Editar usuario"}
          description={`Edite los datos del usuario.`}
        />
        <Flex
            borderRadius={5}
            w='1200px'
            h='800px'
            mt={5}
            position='relative'
            justifyContent='center'
            bgColor='gray.300'
        >
          <form>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input type="text" />
              <FormLabel>Apellido</FormLabel>
              <Input type="text" />
              <FormLabel>Rol</FormLabel>
              <Input type="email" />
              <FormLabel>Correo</FormLabel>
              <Input colorScheme="teal" type="email" />
            </FormControl>
          </form>
        </Flex>
      </MainContainer>
    </Layout>
  );
};

export default EditUser;
