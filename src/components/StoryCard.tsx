
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type StoryCardProps = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  quote: string;
  bgColor: string;
  extendedQuote?: string;
  tags?: string[];
};

const buttonColors: Record<string, { base: string; hover: string }> = {
  "bg-eixo-lightPurple": { base: "#B19AFF", hover: "#9B87F5" },
  "bg-eixo-lightBlue": { base: "#1EAEDB", hover: "#0EA5E9" },
  "bg-eixo-lightGreen": { base: "#5EE2A0", hover: "#22C55E" },
  "bg-eixo-yellow": { base: "#FFD875", hover: "#FFC300" },
};

const getButtonColors = (bgColor: string) =>
  buttonColors[bgColor] || { base: "#B19AFF", hover: "#9B87F5" };

const StoryCard: React.FC<StoryCardProps> = ({
  id,
  name,
  role,
  imageUrl,
  quote,
  bgColor,
  extendedQuote,
  tags = [],
}) => {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");
  const { base, hover } = getButtonColors(bgColor);

  return (
    <div className="overflow-hidden transition-all duration-300 hover:shadow-xl bg-white rounded-lg">
      <div className={`h-4 ${bgColor}`}></div>
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="h-16 w-16 border-2 border-gray-100 shadow">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback className={`${bgColor} text-gray-800 text-xl`}>
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
        <div className="my-4">
          <p className="text-lg italic mb-6">"{quote}"</p>
          {extendedQuote && (
            <p className="text-gray-700 text-sm">{extendedQuote}</p>
          )}
        </div>
        <div className="mt-auto">
          {tags.length > 0 && (
            <div className="pt-4 flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`inline-block px-3 py-1 rounded-full text-xs ${bgColor} bg-opacity-30`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <Link to={`/historias/${id}`}>
            <Button
              variant="outline"
              className="w-full mt-2 font-semibold border-0 story-cta-btn"
              style={{
                background: base,
                color: "#fff",
                ["--btn-hover-bg" as any]: hover,
              }}
            >
              <span>Conheça mais</span>
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
