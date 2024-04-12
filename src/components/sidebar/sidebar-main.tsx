import { useState, useEffect } from "react";
import { List, ListItem, Avatar, Text, Button, Link } from "@chakra-ui/react";
import { getUserRole } from "../../actions/user-actions";
import { redirect } from "react-router-dom";

const adminItems = [
  {
    type: "link",
    name: "Home",
    ref: "/",
  },
  {
    type: "link",
    name: "Gestión de Materias",
    ref: "/",
  },
  {
    type: "link",
    name: "Gestión de Asignaturas",
    ref: "/",
  },
  {
    type: "link",
    name: "Gestión de Alumnos",
    ref: "/gestion-alumnos",
  },
  {
    type: "link",
    name: "Iniciar Sesión",
    ref: "/signin",
  },
  {
    type: "link",
    name: "Cerrar Sesión",
    ref: "/",
  },
];

const userItems = [
  {
    type: "link",
    name: "Materias del Plan",
    ref: "/",
  },
  {
    type: "link",
    name: "Calificaciones",
    ref: "/",
  },
  {
    type: "link",
    name: "Inscripción a Materias",
    ref: "/",
  },
  {
    type: "link",
    name: "Mis Datos",
    ref: "/",
  },
  {
    type: "link",
    name: "Iniciar Sesión",
    ref: "/signin",
  },
  {
    type: "link",
    name: "Cerrar Sesión",
    ref: "/",
  },
];

export const SidebarMain = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [userRole, setUserRole] = useState<string>("");

  useEffect(() => {
    const logged = localStorage.getItem("logged");
    setIsLogged(logged === "true");
  }, []);

  useEffect(() => {
    if (isLogged) {
      const token = localStorage.getItem("token");
      console.log(token);
      if (token) {
        getUserData(token);
        console.log(token);
      } else {
        setMenuItems(userItems);
      }
    }
  }, [isLogged]);

  const getUserData = async (token: string) => {
    try {
      console.log('Token enviado desde el frontend:', token);
      const response = await getUserRole(token);
      localStorage.setItem("token", token);
      setUserRole(response); // Actualiza el estado userRole después de obtener la respuesta
    } catch (error) {
      console.error("Error obteniendo los datos del usuario:", error);
    }
  };

  useEffect(() => {
    if (userRole !== null) {
      setMenuItems(getMenuItemsForUserRole(userRole));
    }
  }, [userRole]);

  const getMenuItemsForUserRole = (role: string | null) => {
    return role === "ADMIN" ? adminItems : userItems;
  };

  const handleLoginClick = () => {
    redirect("/signin");
  };

  return (
    <List w="full" my="8">
      {menuItems.map((item, index) => (
        <ListItem key={index}>
          <Link
            key={index}
            href={item.ref}
            mr={4}
            _hover={{ textDecoration: "underline" }}
          >
            {item.name}
          </Link>
        </ListItem>
      ))}
      {!isLogged && (
        <ListItem>
          <Button onClick={handleLoginClick}>Iniciar Sesión</Button>
        </ListItem>
      )}
    </List>
  );
};
