import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface GameProp {
    id: number;
    name: string;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: GameProp[];
  }
  

const useGames = () => {
    const [games, setGames] = useState<GameProp[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
       const controller = new AbortController();
       
       
      apiClient
        .get<FetchGamesResponse>("/games", {signal: controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) => {
          if(err instanceof CanceledError) return;
          setError(err.message)
        });

    return () => controller.abort()
    }, []);

    return {games, error}
}

export default useGames