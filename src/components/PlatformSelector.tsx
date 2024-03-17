import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

function PlatformSelector() {
    const {data, error} = usePlatforms();
    if (error) return;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                platforms
            </MenuButton>
            <MenuList>
               {data.map(platform => <MenuItem>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
}
export default PlatformSelector;
