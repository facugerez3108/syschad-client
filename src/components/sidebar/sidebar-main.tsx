import { useState, useEffect } from "react";
import { List, ListItem, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SidebarMain: React.FC = () => {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [randomAvatar, setRandomAvatar] = useState<string | null>(null);

    useEffect(() => {
        const logged = localStorage.getItem('logged');
        setIsLogged(logged === 'true');

        // Lógica para cargar un avatar aleatorio si el usuario está autenticado
        if (logged === 'true') {
            fetchRandomAvatar();
        }
    }, []);

    const fetchRandomAvatar = () => {
        // Lógica para obtener un avatar aleatorio, puede ser una llamada a una API o un conjunto de avatares predefinidos
        // En este ejemplo, se establece un avatar predefinido
        const avatars: string[] = [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150"
        ];
        const randomIndex = Math.floor(Math.random() * avatars.length);
        setRandomAvatar(avatars[randomIndex]);
    };

    const items = [
        {
            type: "link",
            name: "Home",
            ref: "/"
        },
        {
            type: "link",
            name: "Gestión de Materias",
            ref: "/"
        },
        {
            type: "link",
            name: "Gestión de Asignaturas",
            ref: "/"
        },
        {
            type: "link",
            name: "Gestión de Alumnos",
            ref: "/"
        },
        {
            type: "link",
            name: "Administradores",
            ref: "/"
        },
        {
            type: "link",
            name: "Nose",
            ref: "/"
        },
        {
            type: "footer",
            name: "Iniciar Sesión",
            ref: "/signin"
        },
        {
            type: "footer",
            name: "Cerrar Sesión",
            ref: "/"
        }
    ];

    return (
        <List w='full' my='8' mx='6' flex='items-center'>
            {items.map((item, index) => (
                <ListItem
                    my='2'
                    fontSize='lg'
                    fontWeight='bold'
                    listStyleType='none'
                    listStylePosition='inside'
                    key={index}
                >
                    {item.type === "link" ? (
                        <Link to={item.ref}>{item.name}</Link>
                    ) : (
                        <>
                            {isLogged && randomAvatar && (
                                <Avatar src={randomAvatar} mr="2" />
                            )}
                            <Link to={item.ref}>{item.name}</Link>
                            <hr />
                        </>
                    )}
                </ListItem>
            ))}
        </List>
    );
};

export default SidebarMain;