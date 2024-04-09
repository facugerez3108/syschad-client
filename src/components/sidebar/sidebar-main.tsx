import { useState, useEffect } from "react";
import { List, ListItem, Avatar, Text, Link } from "@chakra-ui/react";
import { getUserRole} from "../../actions/user-actions";

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
    ref: "/",
  },
  {
    type: "link",
    name: "Administradores",
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
  const [userId, setUserId] = useState<number | null>(null);
  const [userRole, setUserRole] = useState<string>("");

  useEffect(() => {
    const logged = localStorage.getItem("logged");
    setIsLogged(logged === "true");

    if(isLogged) {
      const token = localStorage.getItem("token");
      console.log(token);
      if (token) {
        getUserData(token);
      }
    }
  }, [isLogged]);

  useEffect(() => {
      if(userRole !== ""){
        setMenuItems(getMenuItemsForUserRole(userRole));
      }
  }, [userRole])

  const [menuItems, setMenuItems] = useState<any[]>([]);

  const getMenuItemsForUserRole = (role: string) => {
    return role === "ADMIN" ? adminItems : userItems;
  };

  const getUserData = async (token: string) => {
    try {
      const response = await getUserRole(token); 
      setUserId(response.id); 
      setUserRole(response.role); 
    } catch (error) {
      console.error("Error obteniendo los datos del usuario:", error);
    }
  };

  return (
    <List w="full" my="8">
      {isLogged && menuItems.length > 0 && menuItems.map((item, index) => (
      <ListItem key={index}>
        <Link
          key={index}
          href={item.ref}
          mr={4}
          _hover={{ textDecoration: "underline" }}
        >
          {item.name}
        </Link>
        <Avatar src="https://bit.ly/sage-adebayo"/>
      </ListItem>
    ))}
    </List>
  );
};
