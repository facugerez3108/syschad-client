import React from "react";
import SideBar from "../components/sidebar/sidebar";
import { HStack, Text } from "@chakra-ui/react";
import MainContainer from "../components/main/main-container";

const Home = () => {
  return (
    <HStack w="full" h="100vh" bg="gray.100" padding={10}>
        <SideBar />
        <MainContainer>
           <Text fontSize={50} color="gray.300">
                Main
           </Text>
        </MainContainer>
    </HStack>
  );
};

export default Home;
