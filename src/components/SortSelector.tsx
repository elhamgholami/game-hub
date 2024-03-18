import { MenuList, Menu, Button, MenuButton, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export function SortSelector()
{
    return(
        <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            </MenuButton>
         <MenuList>
            <MenuItem>Relevence</MenuItem>
            <MenuItem>Date added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release date</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Average rating</MenuItem>
            </MenuList>   
        </Menu>
    )
}