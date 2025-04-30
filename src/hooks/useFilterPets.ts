import { useState, useEffect } from "react";
import { Pet } from "@/api/getPets";

interface UseFilterProps {
  pets: Pet[];
}

const useFilterPets = ({ pets }: UseFilterProps) => {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [filteredPets, setFilteredPets] = useState<Pet[]>(pets);

  useEffect(() => {
    let filtered = [...pets];

    if (search.trim()) {
      const lowerSearch = search.toLowerCase();

      filtered = filtered.filter((pet) =>
        [pet.name, pet.status, pet.category, ...pet.tags]
          .join(" ")
          .toLowerCase()
          .includes(lowerSearch),
      );
    }

    filtered.sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
    );

    setFilteredPets(filtered);
  }, [search, sortAsc, pets]);

  const toggleSort = () => {
    setSortAsc((prev) => !prev);
  };

  return {
    search,
    setSearch,
    filteredPets,
    toggleSort,
    sortAsc,
  };
};

export default useFilterPets;
