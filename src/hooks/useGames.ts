import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface GameProp {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
  }

const useGames = (
  gameQuery: GameQuery) => 
  useData<GameProp>('/games', 
  {params: { 
    genres: gameQuery.genre?.id, 
    platforms: gameQuery.platform?.id, ordering: 
    gameQuery.sortOrder,
    search: gameQuery.searchText,
  }}, 
  [gameQuery]) // recieves the selected genre and platform

export default useGames