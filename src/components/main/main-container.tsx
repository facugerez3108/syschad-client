import { Flex } from "@chakra-ui/react";

interface MainContainerProps {
    children: React.ReactNode
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
    return (
        <Flex
            as="main"
            w="full"
            h="full"
            bg="white"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            position="relative"
        >
            {children}
        </Flex>
    )
}

export default MainContainer;