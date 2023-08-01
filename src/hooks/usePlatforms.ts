import platforms from '../data/platfroms'

interface PlatformProp{
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => ({data: platforms, isLoading: false, error: null});

export default usePlatforms;