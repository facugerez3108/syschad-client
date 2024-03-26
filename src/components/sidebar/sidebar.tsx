import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import SidebarMain from "./sidebar-main";

const Sidebar = () => {

    
    return (
            <Flex
                as='aside'
                maxW='450px'
                h='full'
                bg='white'
                alignItems='start'
                padding={6}
                flexDirection='column'
                justifyContent='space-between'
                transition='ease-in-out .2s'
                borderRadius='3xl'
            >
                <SidebarMain />
            </Flex>
    )   
}

export default Sidebar