
import React from "react";

type ONGCardProps = {
  name: string;
  city: string;
  state: string;
  description: string;
  tags: string[];
  website: string;
  colorClass: string;
};

const ONGCard: React.FC<ONGCardProps> = ({
  name,
  city,
  state,
  description,
  tags,
  website,
  colorClass,
}) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{city}, {state}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className={`${colorClass} text-sm px-3 py-1 rounded-full`}
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm mb-4">{description}</p>
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-eixo-purple hover:underline font-medium inline-block mb-3"
      >
        {website.replace(/^https?:\/\//, "")}
      </a>
      <div className="flex items-center gap-3">
        <button className="btn btn-yellow w-full">Ver detalhes</button>
      </div>
    </div>
  </div>
);

export default ONGCard;
