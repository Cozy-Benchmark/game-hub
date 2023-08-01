import useData from "./useData";
import { GenreProp } from "./useGenre";

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
  selectedGenre: GenreProp | null, selectedPlatform: Platform | null) => 
  useData<GameProp>('/games', 
  {params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, 
  [selectedGenre?.id, selectedPlatform?.id]) // recieves the selected genre and platform

export default useGames