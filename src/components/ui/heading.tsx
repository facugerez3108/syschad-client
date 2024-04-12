import React from 'react';
import { Text } from '@chakra-ui/react';

interface HeadingProps {
    title: string,
    description: string,
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
    return (
        <>
            <Text fontSize="3xl" fontWeight="bold">{title}</Text>
            <Text fontSize="md" color="gray.500">{description}</Text>
        </>
    )
}