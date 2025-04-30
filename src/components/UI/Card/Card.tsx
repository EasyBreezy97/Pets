import { FC, useState } from "react";
import Tag from "@/components/UI/Tag/Tag";

interface ICard {
  category: string;
  image: string;
  text: string;
  status: string;
  tags: string[];
}

const fallbackImage =
  "https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk=";

const Card: FC<ICard> = ({ image, text, category, status, tags }) => {
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <div className="rounded-2xl overflow-hidden shadow-inner bg-white min-w-3xs">
      <img
        src={imgSrc}
        alt={text}
        className="w-full h-48 object-cover"
        onError={() => setImgSrc(fallbackImage)}
        loading="lazy"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{text}</h2>
        <p className="text-sm text-gray-500 mb-1">
          <strong>Category:</strong> {category}
        </p>
        <p className="text-sm text-gray-500 mb-1">
          <strong>Status:</strong> {status}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, idx) => (
            <Tag key={idx} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
