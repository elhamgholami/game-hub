import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";


 
interface FetchResponse<T>
{
    results: T[];
}

export function useData <T>
(endpoint: string) 
{

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        apiClients
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
        .then((res) => setData(res.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError("Some error occured -details: " + err.message);
        });
        return () => controller.abort();
    }, []);

  return { data, error };
}