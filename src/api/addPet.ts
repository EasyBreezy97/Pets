import axios from "axios";
import { Pet } from "./getPets";

export const addPet = async (newPet: Pet): Promise<Pet> => {
  const response = await axios.post<Pet>("http://localhost:3000/pets", newPet);
  return response.data;
};
