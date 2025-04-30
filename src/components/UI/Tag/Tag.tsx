import { FC } from "react";

interface ITag {
  text: string;
}

const Tag: FC<ITag> = ({ text = "tag" }) => {
  return (
    <span className="bg-green-500 text-amber-50 px-6 py-1 text-xs rounded-full">
      {text}
    </span>
  );
};

export default Tag;
