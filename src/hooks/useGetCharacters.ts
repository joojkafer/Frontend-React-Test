import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../services/characters";

export const useGetCharacters = () => {
  return useQuery({
    queryKey: ["characters"],
    queryFn: getCharacters,
    retry: 3,
    refetchOnWindowFocus: true,
  });
};
