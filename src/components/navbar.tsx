import { HStack, Image } from "@chakra-ui/react";
import apilogo from "../assets/logo.png";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

function NavBar() {
  return (
    <>
      <HStack  padding="10px">
        <Image src={apilogo} boxSize="60px"></Image>
        <SearchInput/>
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavBar;
