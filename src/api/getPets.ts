import axios from "axios";

export interface Pet {
  id: string;
  name: string;
  image: string;
  status: string;
  category: string;
  tags: string[];
}

export const getPets = async (): Promise<Pet[]> => {
  const response = await axios.get<Pet[]>("http://localhost:3000/pets");
  return response.data;
};
