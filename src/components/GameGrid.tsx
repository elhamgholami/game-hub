import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
interface Game {
  name: string;
  id: number;
}

interface responseType {
  results: Game[];
}

export function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClients
      .get<responseType>("/games")
      .then((res) => setGames(res.data.results))
      .catch(err => setError('Some error occured'+err.message));
  });

  return(
    <ul>{games.map(game => <li key={game.id}>{game.name}</li>)} </ul>
  )
}
