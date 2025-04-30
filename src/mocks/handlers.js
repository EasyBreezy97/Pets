import { rest } from "msw";
import { Pet } from "@/api/getPets";

export const handlers = [
  rest.post<Pet>(
    "http://localhost:3000/pets",
    async (req, res, ctx) => {
      const newPet = await req.json();
      return res(ctx.status(201), ctx.json({ ...newPet, id: "1234" }));
    },
  ),
];
