import { Button, HStack, Img, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props
{
    onSelectedGenre: (genre:Genre) => void;
    selectedGenre: Genre|null;
}
export function GenreList({onSelectedGenre, selectedGenre}:Props) {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner></Spinner>;
  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="10px">
          <HStack>
            <Img boxSize="32px" borderRadius={8} src={genre.image_background} />
            <Button fontWeight= { genre=== selectedGenre? 'bold':'normal'} onClick= { ()=> onSelectedGenre(genre)}fontSize="lg" variant='link'> {genre.name} </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
