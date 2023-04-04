import {List, ListIcon, ListItem} from "@chakra-ui/react";
import {NavLink, useLoaderData} from "react-router-dom";
import {AtSignIcon, CalendarIcon, EditIcon} from "@chakra-ui/icons";


export default function Sidebar(props) {
    return (
        <List spacing={4} color="white">
            <ListItem>
                <NavLink to="/">
                    <ListIcon as={CalendarIcon} color="white" />
                    Dashboard
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink to="/create">
                    <ListIcon as={EditIcon} color="white" />
                    New Task
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink to="/profile">
                    <ListIcon as={AtSignIcon} color="white" />
                    Profile
                </NavLink>
            </ListItem>
        </List>
    );
}

