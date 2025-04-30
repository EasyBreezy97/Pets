import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPets, Pet } from "@/api/getPets";
import Message from "@/components/UI/Message/Message";
import Spinner from "@/components/UI/Spinner/Spinner";
import FilterBar from "@/components/FilterBar/FilterBar";
import PetsList from "../PetsLits/PetsList";

const Pets: React.FC = () => {
  const {
    data: pets,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pets"],
    queryFn: getPets,
  });

  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);

  useEffect(() => {
    if (pets) {
      setFilteredPets(pets);
    }
  }, [pets]);

  if (isLoading) return <Spinner />;
  if (isError) return <Message type="error" text="Error Loading pets..." />;

  return (
    <>
      {pets && <FilterBar pets={pets} setFiltered={setFilteredPets} />}
      <PetsList filteredPets={filteredPets} />
    </>
  );
};

export default Pets;
