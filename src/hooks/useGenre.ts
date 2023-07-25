import useData from "./useData";

export interface GenreProp {
    id: number;
    name: string;
    image_background: string;
  }
  
const useGenre = () => useData<GenreProp>('/genres');

export default useGenre