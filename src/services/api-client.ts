import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '814fddce99e24ae8967461987fba4e17',
    }
})