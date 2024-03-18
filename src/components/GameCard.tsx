import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { PlatFormIconList } from "./PlatformiconList";
import { CriticScore } from "./CriticScore";

interface Props {
  game: Game;
}

export function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image objectFit="cover" src={game.background_image}></Image>
      <CardBody>
        <HStack paddingX={1} justifyContent="space-between" marginBottom={3}>
          <PlatFormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatFormIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}
