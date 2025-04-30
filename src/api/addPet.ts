import axios from "axios";
import { Pet } from "./getPets";

export const addPet = async (newPet: Pet): Promise<Pet> => {
  const response = await axios.post<Pet>(
    `${import.meta.env.VITE_API_URL}/pets`,
    newPet,
  );
  return response.data;
};
