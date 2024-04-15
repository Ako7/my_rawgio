import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { CACHE_KEY_PLATFORMS } from "../constants";
import ApiClient from "../services/apiClient";
import { FetchResponse } from "../services/apiClient";
import ms from "ms";
import Platform from "../entities/Platform";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents")
const usePlatforms = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: apiClient.getAll,
    staleTime: ms('1d'),
    initialData: platforms,
})
export default usePlatforms;