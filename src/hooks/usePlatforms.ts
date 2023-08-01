import useData from "./useData";

interface PlatformProp{
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<PlatformProp>('/platforms/lists/parents')

export default usePlatforms;