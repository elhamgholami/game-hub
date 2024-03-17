import { Badge } from "@chakra-ui/react";

interface Props
{
    score: number;
}
export function CriticScore({score}:Props)
{
    let color = score > 85? 'green' : score <=85? 'yellow' : 'red';
    return(
        <Badge colorScheme = {color} borderRadius={5}>{score}</Badge>
    )
}