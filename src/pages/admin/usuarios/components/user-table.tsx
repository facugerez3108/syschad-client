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
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from "@chakra-ui/react";
import { UserHeaders } from "./columns";
import { getUsers, deleteUser } from "../../../../actions/user-actions";
import { UserProps } from "../../../../../types";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";


const UserTable = () => {
  const [users, setUsers] = useState<UserProps[]>([]);  
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toast = useToast();

  const navigate = useNavigate();

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
  
  const onDelete = async (id: number) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id)); 
      toast({
        position: "top",
        title: "Usuario eliminado",
        description: "El usuario ha sido eliminado correctamente.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error al eliminar el usuario", error);
      toast({
        position: "top",
        title: "Error al eliminar usuario",
        description: "Hubo un error al eliminar el usuario.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }
  
  const openModal = (id: number) => {
    setSelectedUserId(id);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  if (!users.length) {
    return <p>No hay usuarios/alumnos registrados en el sistema.</p>;
  }

  const onEdit = () => {
    navigate('/gestion-alumnos/editar/')
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
                          m={2} 
                          aria-label="Editar usuario"
                          icon={<EditIcon />}
                          onClick={() => onEdit()}
                        />
                       </Tooltip>
                       <Tooltip label="Eliminar usuario">
                            <IconButton 
                              aria-label="Eliminar usuario"
                              icon={<DeleteIcon />}
                              onClick={() => openModal(user.id)}
                            />
                       </Tooltip>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>

          {/** MODAL DELETE */}

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Eliminar usuario</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  ¿Estas seguro de eliminar este usuario?
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="red" mr={3} onClick={closeModal}>
                    Cancelar
                  </Button>
                  <Button colorScheme="green" onClick={() => onDelete(selectedUserId!)}>
                    Eliminar
                  </Button>
                </ModalFooter>
            </ModalContent>
          </Modal>

        </>
      );
}


export default UserTable;