import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface GenreProp {
    id: number;
    name: string;
  }
  
  interface FetchGenreResponse {
    count: number;
    results: GenreProp[];
  }
  
const useGenre = () => {
    const [genres, setGenre] = useState<GenreProp[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
       const controller = new AbortController();
       
      setLoading(true)
      apiClient
        .get<FetchGenreResponse>("/genres", {signal: controller.signal})
        .then((res) => {
          setGenre(res.data.results), 
          setLoading(false)
        })
        .catch((err) => {
          if(err instanceof CanceledError) return;
          setError(err.message)
          setLoading(false)
        });

    return () => controller.abort()
    }, []);

    return {genres, error, isLoading}
}

export default useGenre