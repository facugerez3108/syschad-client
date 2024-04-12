import React, { useEffect, useState } from "react";
import {
    Table,
    Tbody,
    Tr,
    Td,
    TableCaption,
    TableContainer,
    IconButton,
    Tooltip,
    useToast
} from "@chakra-ui/react";
import { UserHeaders } from "./columns";
import { getUsers, deleteUser } from "../../../../actions/user-actions";
import { UserProps } from "../../../../../types";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";


const UserTable = () => {
  const [users, setUsers] = useState<UserProps[]>([]);  
  const toast = useToast();

  useEffect(() => {
    const fetchusers = async () => {
      try{
        const data = await getUsers();
        setUsers(data)
      }catch(error){
        console.error("Error al obtener los usuarios", error);
      }
    };
    fetchusers();
  }, [])
  
  const onDelete = () => {
    

    toast({
      position: "top",
      title: "Usuario eliminado",
      description: "El usuario ha sido eliminado correctamente.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }
  

  return (
        <>
          <TableContainer>
            <Table variant="simple" size='lg'>
                <UserHeaders />
              <Tbody>
                {users.map((user) => (
                  <Tr key={user.id}>
                    <Td>{user.name}</Td>
                    <Td>{user.lastname}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.role}</Td>
                    <Td>
                       <Tooltip label="Editar usuario">
                        <IconButton 
                          aria-label="Editar usuario"
                          icon={<EditIcon />}
                          onClick={() => {

                          }}
                        />
                       </Tooltip>
                       <Tooltip label="Eliminar usuario">
                            <IconButton 
                              aria-label="Eliminar usuario"
                              icon={<DeleteIcon />}
                              onClick={() => {
                                  
                              }}
                            />
                       </Tooltip>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      );
}


export default UserTable;