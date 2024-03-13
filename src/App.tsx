import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import { ColorModeSwitch } from "./components/ColorModeSwitch";

function App() {
  return (
    <Grid
      templateAreas={{ lg: `"nav nav" "aside main"`, base: `"nav" "main"` }}
    >
      <GridItem area="nav">
      <NavBar/>
      </GridItem>
      <Show above='lg'>

      <GridItem area="aside">aside</GridItem>
      </Show>
      <GridItem area="main">main</GridItem>
    </Grid>
  );
}

export default App;
