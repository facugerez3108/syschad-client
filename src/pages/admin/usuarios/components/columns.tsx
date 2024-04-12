import { Th, Thead, Tr, Td } from '@chakra-ui/react';

const TableHeaders = [
    {
        'label': 'Nombre'
    },
    {
        'label': 'Apellido'
    },
    {
        'label': 'Correo'
    },
    {
        'label': 'Rol'
    },
    {
        'label': 'Acciones'
    },    
]

export const UserHeaders = () => {
    return (
        <Thead>
            <Tr>
                {TableHeaders.map(header => (
                    <Td key={header.label}>
                        <Th>{header.label}</Th>
                    </Td>
                ))}
            </Tr>
        </Thead>
    )
}