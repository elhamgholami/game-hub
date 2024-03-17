import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import { ColorModeSwitch } from "./components/ColorModeSwitch";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";

function App() {
  return (
    <>
    <Grid
      templateAreas={{ lg: `"nav nav" "aside main"`, base: `"nav" "main"` }}
      >
      <GridItem area="nav">
      <NavBar/>
      </GridItem>
      <Show above='lg'>

      <GridItem area="aside" paddingX={5}>
        <GenreList/>
      </GridItem>
      </Show>
      <GridItem area="main">

      <GameGrid/>
      </GridItem>
    </Grid>
      </>
    
  );
}

export default App;
