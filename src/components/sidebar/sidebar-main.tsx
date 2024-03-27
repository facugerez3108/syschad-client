import { List, ListItem } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const SidebarMain = () => {
    
    const items = [
        {
            type: "link",
            name: "Home",
            ref: "/"
        },
        {
            type: "link",
            name: "Estado Académico",
            ref: "/"
        },
        {
            type: "link",
            name: "Materias del plan",
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
    ]
    
    return (
        <List w='full' my='8' mx='6' flex='items-center'>
            {items.map((item, index) => (
                <ListItem 
                    my='2' 
                    fontSize='lg' 
                    fontWeight='bold' 
                    listStyleType='none' 
                    listStylePosition='inside' 
                    key={index}>
                    <Link to={item.ref} >
                        {item.name}
                    </Link>
                    {item.type === "footer" && <hr />}
                </ListItem>
            ))}
        </List>
    )
}

export default SidebarMain;