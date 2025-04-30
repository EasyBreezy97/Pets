import { Pet } from "@/api/getPets";
import Card from "../UI/Card/Card";
import { FC } from "react";

interface IPetsList {
  filteredPets: Pet[];
}

const PetsList: FC<IPetsList> = ({ filteredPets }) => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredPets?.map((pet) => (
        <div className="md:flex sm:block" key={pet.id}>
          <Card
            image={pet.image}
            text={pet.name}
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
