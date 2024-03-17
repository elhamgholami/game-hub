import { HStack, Img, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

export function GenreList() {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner></Spinner>;
  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="10px">
          <HStack>
            <Img boxSize="32px" borderRadius={8} src={genre.image_background} />
            <Text fontSize="20px"> {genre.name} </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
