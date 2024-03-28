import React from 'react';
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import Sidebar from '../components/sidebar/sidebar'

interface LayoutProps {
    children: React.ReactNode;
}

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        fontFamily: 'body',
      },
    },
  },
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box display="flex" h="100vh">
        <Sidebar />
        <Box flex="1">
          {children}
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Layout;