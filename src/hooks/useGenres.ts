import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../constants";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
// const useGenres = () => useData<Genre>("/genres")
//const useGenres = () => ({ data: genres, isLoading: false, error: null })
const useGenres = () => {
    return useQuery<Genre[], Error>({
        queryKey: CACHE_KEY_GENRES,
        queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data.results),
        staleTime: 24 * 60 * 60 * 1000, //24h
        initialData: genres,
    });
}
export default useGenres