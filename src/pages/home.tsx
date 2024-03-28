import React from "react";
import SideBar from "../components/sidebar/sidebar";
import { Text,Flex } from "@chakra-ui/react";
import MainContainer from "../components/main/main-container";
import Layout from "../layout/layout";

const Home = () => {
  return (
        <Layout>
            <MainContainer>
               <Text>
                Main
               </Text>
            </MainContainer>
        </Layout>
  );
};

export default Home;
