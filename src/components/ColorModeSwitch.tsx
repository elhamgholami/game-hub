import { HStack, Switch, ColorMode, useColorMode, Text } from "@chakra-ui/react"
export function ColorModeSwitch()
{
    const {toggleColorMode, colorMode } = useColorMode();
    return(

        <HStack>
            <Text>dark mode</Text>
            <Switch colorScheme="red" onChange={toggleColorMode} isChecked = {colorMode === 'dark'}>
            </Switch>
        </HStack>
    )
}
