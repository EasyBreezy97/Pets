import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPets } from "@/api/getPets";
import Card from "@/components/UI/Card/Card";
import Message from "@/components/UI/Message/Message";
import Spinner from "@/components/UI/Spinner/Spinner";

const PetsList: React.FC = () => {
  const {
    data: pets,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pets"],
    queryFn: getPets,
  });

  if (isLoading) return <Spinner />;
  if (isError) return <Message type="error" text="Error Loading pets..." />;

  console.log({ pets });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {pets?.map((pet) => (
        <div className="flex" key={pet.id}>
          <Card
            image={pet.image}
            text={pet.name}
            description={pet.breed}
            status={pet.status}
            tags={pet.tags}
            category={pet.category}
          />
        </div>
      ))}
    </div>
  );
};

export default PetsList;
