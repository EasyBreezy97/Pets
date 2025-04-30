import { addPet } from "./addPet";

describe("addPet API", () => {
  it("sends a POST request and returns the new pet", async () => {
    const newPet = {
      name: "Rover",
      status: "available",
      category: "dog",
      tags: ["playful"],
      id: "",
      image: "",
    };

    const result = await addPet(newPet);

    expect(result).toEqual(
      expect.objectContaining({
        name: "Rover",
        status: "available",
        category: "dog",
        tags: ["playful"],
        id: expect.any(String),
      }),
    );
  });
});
