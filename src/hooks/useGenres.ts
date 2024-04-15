import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../constants";
import ApiClient from "../services/apiClient";
import { FetchResponse } from "../services/apiClient";
import genres from "../data/genres";
import ms from "ms";
import Genre from "../entities/Genre";

const apiClient = new ApiClient<Genre>("/genres")
const useGenres = () => {
    return useQuery<FetchResponse<Genre>, Error>({
        queryKey: CACHE_KEY_GENRES,
        queryFn: apiClient.getAll,
        staleTime: ms('1d'),
        initialData: genres,
    });
}
export default useGenres