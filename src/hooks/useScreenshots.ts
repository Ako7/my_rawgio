import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/apiClient";
import Screenshot from "../entities/Screenshot";

const useScreenshots = (gameId: number) => {
    const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);
    return useQuery<FetchResponse<Screenshot>, Error>({
        queryKey: ["screenshots", gameId],
        queryFn: () => apiClient.getAll()
    })
}
export default useScreenshots;