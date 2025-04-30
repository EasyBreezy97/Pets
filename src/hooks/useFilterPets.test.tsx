import { renderHook, act } from "@testing-library/react";
import useFilterPets from "./useFilterPets";
import { Pet } from "@/api/getPets";

const mockPets: Pet[] = [
  {
    name: "Buddy",
    status: "available",
    category: "dog",
    tags: ["friendly"],
    id: "1",
    image: "testSrc",
  },
  {
    name: "Mittens",
    status: "sold",
    category: "cat",
    tags: ["cute"],
    id: "2",
    image: "testSrc",
  },
  {
    name: "Charlie",
    status: "pending",
    category: "dog",
    tags: ["active"],
    id: "3",
    image: "testSrc",
  },
];

describe("useFilterPets", () => {
  it("initially returns all pets sorted ascending by name", () => {
    const { result } = renderHook(() => useFilterPets({ pets: mockPets }));

    expect(result.current.filteredPets.map((p) => p.name)).toEqual([
      "Buddy",
      "Charlie",
      "Mittens",
    ]);
    expect(result.current.sortAsc).toBe(true);
  });

  it("filters pets by search query", () => {
    const { result } = renderHook(() => useFilterPets({ pets: mockPets }));

    act(() => {
      result.current.setSearch("cat");
    });

    expect(result.current.filteredPets).toEqual([
      mockPets[1], // Mittens, the cat
    ]);
  });

  it("toggles sorting order", () => {
    const { result } = renderHook(() => useFilterPets({ pets: mockPets }));

    act(() => {
      result.current.toggleSort();
    });

    expect(result.current.sortAsc).toBe(false);
    expect(result.current.filteredPets.map((p) => p.name)).toEqual([
      "Mittens",
      "Charlie",
      "Buddy",
    ]);
  });
});
