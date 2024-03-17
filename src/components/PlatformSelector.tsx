import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props
{
    onSelectPlatform: (selectedPlatform: Platform|null) => void;
    
}
export const PlatformSelector = ({onSelectPlatform}:Props) =>  {
  const { data, error } = usePlatforms();
  if (error) return;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem onClick={()=>onSelectPlatform(platform)}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
