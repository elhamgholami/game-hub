import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import { PlatformSelector } from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform|null>(null);
  return (
    <>
      <Grid
        templateAreas={{ lg: `"nav nav" "aside main"`, base: `"nav" "main"` }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList selectedGenre = {selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector onSelectPlatform={platform => setSelectedPlatform(platform)}/>
          <GameGrid selectedGenre={selectedGenre} selectedPlatform ={selectedPlatform} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
