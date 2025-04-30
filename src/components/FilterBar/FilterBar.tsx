import { FC, useEffect, SetStateAction, Dispatch } from "react";
import Button from "@/components/UI/Button/Button";
import { Pet } from "@/api/getPets";
import useFilterPets from "@/hooks/useFilterPets";

interface FilterBarProps {
  pets: Pet[];
  setFiltered: Dispatch<SetStateAction<Pet[]>>;
}

const FilterBar: FC<FilterBarProps> = ({ pets, setFiltered }) => {
  const { search, setSearch, filteredPets, toggleSort, sortAsc } =
    useFilterPets({
      pets,
    });

  useEffect(() => {
    setFiltered(filteredPets);
  }, [filteredPets, setFiltered]);

  return (
    <div className="flex flex-col sm:flex-row justify-between md:items-start mb-6 sticky top-18 py-2 bg-amber-50">
      <input
        type="text"
        placeholder="Search pets..."
        className="border border-gray-300 rounded-xl px-4 py-2 w-full sm:w-100 mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={toggleSort} variant="outline">
        Sort {sortAsc ? "Z-A" : "A-Z"}
      </Button>
    </div>
  );
};

export default FilterBar;
