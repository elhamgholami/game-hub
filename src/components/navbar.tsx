import { HStack, Image, Text } from "@chakra-ui/react";
import * as React from 'react';
import apilogo from '../assets/api.svg'

function NavBar()
{
    return(
        <>
        <HStack><Image src={apilogo} boxSize='60px'></Image>
        <Text>NavBar</Text>
        </HStack>
        </>

    );
}

export default NavBar;