import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

export interface Platform
{
    id: number;
    name: string;
    slug: string;
}
export interface Game {
  name: string;
  id: number;
  background_image: string;
  parent_platforms: {platform: Platform}[]
}

interface responseType {
  results: Game[];
}

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClients
      .get<responseType>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError("Some error occured -details: " + err.message);
      });
      return () => controller.abort();
  }, []);

  return { games, error };
}
