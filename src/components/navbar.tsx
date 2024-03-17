import { HStack, Image } from "@chakra-ui/react";
import apilogo from "../assets/logo.png";
import { ColorModeSwitch } from "./ColorModeSwitch";

function NavBar() {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={apilogo} boxSize="60px"></Image>
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavBar;
