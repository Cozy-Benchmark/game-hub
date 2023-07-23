import axios from "axios";

// TO BE IMPROVED BY ADDING MORE SECURITY 
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '5e2906a2c7984b6a905690c5865c2a62'
    },
})