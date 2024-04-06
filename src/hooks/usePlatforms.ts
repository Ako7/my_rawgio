import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { CACHE_KEY_PLATFORMS } from "../constants";
import ApiClient from "../services/apiClient";
import { FetchResponse } from "../services/apiClient";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
const apiClient = new ApiClient<Platform>("/platforms/lists/parents")
const usePlatforms = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    //queryFn: apiclient.getAll
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
})
export default usePlatforms;