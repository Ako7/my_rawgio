import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuaries } from "../App";
import ApiClient, { FetchResponse } from "../services/apiClient";
import { Platform } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}
const apiClient = new ApiClient<Game>("/games")
const useGames = (gameQuery: GameQuaries) => useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam
        },
    }),
    staleTime: 24 * 60 * 60 * 1000,//24h
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
        if (lastPage.next !== null) {
            const nextPageUrl = new URL(lastPage.next).searchParams.get('page');
            return nextPageUrl;
        } else { return undefined; }
    },

})
export default useGames;