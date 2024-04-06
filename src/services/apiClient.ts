import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
    count: number;
    results: T[];
}
const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '814fddce99e24ae8967461987fba4e17',
    }
})
class ApiClient<T>{
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    }
}
export default ApiClient;