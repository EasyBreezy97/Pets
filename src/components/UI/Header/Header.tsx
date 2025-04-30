import { FC } from "react";
import Button from "@/components/UI/Button/Button";
import Logo from "@/components/UI/Logo/Logo";

const Header: FC = () => {
  return (
    <header className="shadow-md bg-green-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Logo />
        </div>

        <div className="block">
          <Button size="md" className="cursor-pointer">
            Add pet
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
