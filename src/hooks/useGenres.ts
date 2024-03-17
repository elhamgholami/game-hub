import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

export interface Genre
{
    id: number;
    name: string;

}
 
interface FetchGenreResponse
{
    results: Genre[];
}

export function useGenres()
{
    const [Genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        apiClients
        .get<FetchGenreResponse>("/genres", { signal: controller.signal })
        .then((res) => setGenres(res.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError("Some error occured -details: " + err.message);
        });
        return () => controller.abort();
    }, []);

  return { Genres, error };
}