import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/apiClient";
import { Platform } from "./usePlatforms";
import ms from 'ms';
import useGameQueryStore from "../store";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}
const apiClient = new ApiClient<Game>("/games")
const useGames = () => {
    const gameQuery = useGameQueryStore((s) => s.gameQuery);
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) => apiClient.getAll({
            params: {
                genres: gameQuery.genreId,
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            },
        }),
        staleTime: ms('1d'),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            if (lastPage.next !== null) {
                const nextPageUrl = new URL(lastPage.next).searchParams.get('page');
                return nextPageUrl;
            } else { return undefined; }
        },

    })
}
export default useGames;