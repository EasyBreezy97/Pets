import { FC } from "react";
import Button from "@/components/UI/Button/Button";
import Logo from "@/components/UI/Logo/Logo";
import { Link, useLocation } from "react-router";

const Header: FC = () => {
  const { pathname } = useLocation();

  console.log({ pathname });

  return (
    <header className="shadow-md bg-green-400 sticky top-0 z-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">
            <span className="flex items-center gap-1">
              <Logo />
              PetsLand
            </span>
          </Link>
        </div>
        {pathname !== "/add" && (
          <div className="block">
            <Link to={"/add"}>
              <Button size="md" className="cursor-pointer">
                Add pet
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
