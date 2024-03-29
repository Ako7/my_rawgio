import axios from "axios";

export default axios.create({
    params: {
        baseURL: 'https://api.rawg.io/api',
        key: '814fddce99e24ae8967461987fba4e17'
    }
})