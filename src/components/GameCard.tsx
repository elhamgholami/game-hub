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
      <Image objectFit='cover' src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack paddingX={1} justifyContent="space-between">
          <PlatFormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatFormIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
}
