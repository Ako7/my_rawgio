import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/apiClient";
import { Trailer } from "../entities/Trailer";
const useTrailers = (gameId: number) => {
    const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);
    return useQuery<FetchResponse<Trailer>, Error>({
        queryKey: ["trailers", gameId],
        queryFn: () => apiClient.getAll()
    })
}
export default useTrailers; 