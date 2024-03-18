import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react"
export function ColorModeSwitch()
{
    const {toggleColorMode, colorMode } = useColorMode();
    return(

        <HStack>
            <Text whiteSpace={"nowrap"}>dark mode</Text>
            <Switch colorScheme="red" onChange={toggleColorMode} isChecked = {colorMode === 'dark'}>
            </Switch>
        </HStack>
    )
}
