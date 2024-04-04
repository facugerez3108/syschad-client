import { Box, Flex, Text, VStack, IconButton, useDisclosure, Divider } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import SidebarMain from './sidebar-main';

const Sidebar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <IconButton
            aria-label="Toggle Sidebar"
            icon={<FiMenu />}
            onClick={isOpen ? onClose : onOpen}
            display={{ base: 'block', md: 'none' }}
          />
          <Text fontSize="xl" fontWeight="bold">My App</Text>
          <Box display={{ base: 'none', md: 'block' }} />
        </Flex>

        <Divider />

        <VStack spacing="2" p="4" align="stretch">
              <SidebarMain />
        </VStack>
      </Box>
    </>
  );
};

export default Sidebar;