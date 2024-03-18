import { HStack, Image } from "@chakra-ui/react";
import apilogo from "../assets/logo.png";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

interface Props
{
    onSearch: (searchQuery:string) => void;
}

function NavBar({onSearch}:Props) {
  return (
    <>
      <HStack  padding="10px">
        <Image src={apilogo} boxSize="60px"></Image>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavBar;
