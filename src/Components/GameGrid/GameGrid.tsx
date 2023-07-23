import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../../services/api-client";

interface GameProp {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: GameProp[];
}

const GameGrid = () => {
  const [games, setGames] = useState<GameProp[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
