import {
  Box,
  Flex,
  Text,
  VStack,
  IconButton,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { SidebarMain } from "./sidebar-main";
import { useState } from "react";

const Sidebar: React.FC = () => {
  
  
  return (
    <>
      <Box
        bg="gray.800"
        color="white"
        w="90"
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        zIndex={4}
        shadow="md"
      >
        <Flex justify="space-between" align="center" p="4">
          <Text fontSize="xl" fontWeight="bold">Syschad</Text>
        </Flex>

        <Divider />

        <VStack spacing="3" p="4" align="stretch">
          <SidebarMain />
        </VStack>
      </Box> 
    
    </>
  );
};

export default Sidebar;
