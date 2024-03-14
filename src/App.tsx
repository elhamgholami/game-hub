import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import { ColorModeSwitch } from "./components/ColorModeSwitch";
import { GameGrid } from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{ lg: `"nav nav" "aside main"`, base: `"nav" "main"` }}
    >
      <GridItem area="nav">
      <NavBar/>
      </GridItem>
      <Show above='lg'>

      <GridItem area="aside"></GridItem>
      </Show>
      <GridItem area="main"></GridItem>
      <GameGrid/>
    </Grid>
  );
}

export default App;
