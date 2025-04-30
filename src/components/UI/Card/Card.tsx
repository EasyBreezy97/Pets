import { FC } from "react";
import Tag from "../Tag/Tag";

interface ICard {
  category: string;
  image: string;
  text: string;
  description: string;
  status: string;
  tags: string[];
}

const Card: FC<ICard> = ({
  image,
  text,
  description,
  category,
  status,
  tags,
}) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
      <img src={image} alt={text} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{text}</h2>
        <p className="text-sm text-gray-500 mb-1">
          <strong>Category:</strong> {category}
        </p>
        <p className="text-sm text-gray-500 mb-1">
          <strong>Status:</strong> {status}
        </p>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <Tag key={idx} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
