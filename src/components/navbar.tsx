import { HStack, Image, Text } from "@chakra-ui/react";
import * as React from "react";
import apilogo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";

function NavBar() {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={apilogo} boxSize="60px"></Image>
        <Text>NavBar</Text>
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavBar;
