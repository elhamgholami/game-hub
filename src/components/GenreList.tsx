import { HStack, Img, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres"

export function GenreList()
{
    const {data} = useGenres();
    return(
        <List>
            {
                data.map (
                    genre=> 
                    (
                        <ListItem key={genre.id} paddingY='10px'>

                            <HStack>
                                <Img boxSize='32px' borderRadius={8} src={genre.image_background}/>
                                <Text fontSize='20px'> {genre.name} </Text>
                            </HStack>
                        </ListItem>

                    )
                )
            }
           

        </List>
      
    )
}