import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import useGames from "../hooks/useGames";
import { GameQuery } from "../App";

interface Props {

 gameQuery: GameQuery

}

export function GameGrid({ gameQuery }: Props) {
  const { data, error } = useGames(gameQuery);
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
