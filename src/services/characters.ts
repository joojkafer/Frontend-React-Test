import type { AxiosRequestConfig } from "axios";
import apiClient from "../config/apiClient";
import type { Character } from "../types/character";

// Tipagem da resposta (simplificada — você pode expandir conforme necessário)

export const getCharacters = async (): Promise<Character[]> => {
  const config: AxiosRequestConfig = {
    url: "/api/characters",
    method: "GET",
  };

  const response = await apiClient(config);
  console.log("API Response: ", response)
  return response.data as Character[];
};
