import genres from '../data/genre'

export interface GenreProp {
    id: number;
    name: string;
    image_background: string;
  }
  
const useGenre = () => ({data: genres, isLoading: false, error: null});

export default useGenre