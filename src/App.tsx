import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Game, Platform } from "./hooks/useGames";
import { PlatformSelector } from "./components/PlatformSelector";


export interface GameQuery
{
  genre: Genre| null;
  platform: Platform| null;
}

function App() {
  const[gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
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
            <GenreList selectedGenre = {gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector onSelectPlatform={platform => setGameQuery({...gameQuery, platform})}/>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
