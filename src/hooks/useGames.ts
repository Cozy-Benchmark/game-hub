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

const useGames = (selectedGenre: GenreProp | null) => useData<GameProp>('/games', {params: { genres: selectedGenre?.id}}, [selectedGenre?.id])

export default useGames