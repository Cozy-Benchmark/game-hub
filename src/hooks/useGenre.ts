import useData from "./useData";

export interface GenreProp {
    id: number;
    name: string;
  }
  
const useGenre = () => useData<GenreProp>('/genres');

export default useGenre