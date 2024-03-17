import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform| null;
}

export function GameGrid({ selectedGenre, selectedPlatform }: Props) {
  const { data, error } = useGames(selectedGenre, selectedPlatform);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}{" "}
      </SimpleGrid>
    </>
  );
}
