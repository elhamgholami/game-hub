import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { FaWindows, FaPlaystation, FaXbox, FaApple } from "react-icons/fa";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}
export function PlatFormIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key= {platform.id}as={iconMap[platform.slug]} color='gray.500'></Icon>
      ))}
    </HStack>
  );
}
