
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type StoryProps = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  quote: string;
  bgColor: string;
  extendedQuote?: string;
  tags?: string[];
};

const solidBackgroundColors: Record<string, string> = {
  "bg-eixo-lightPurple": "#B19AFF",
  "bg-eixo-lightBlue": "#1EAEDB",
  "bg-eixo-lightGreen": "#5EE2A0",
  "bg-eixo-yellow": "#FFD875",
};

const getHexColor = (bgColor: string): string =>
  solidBackgroundColors[bgColor] || "#B19AFF";

const FeaturedStory: React.FC<{ story: StoryProps }> = ({ story }) => (
  <div
    className={`relative w-full overflow-hidden rounded-2xl`}
    style={{ background: getHexColor(story.bgColor) }}
  >
    <div className="relative z-10 p-6 md:p-10">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/3">
          <div className="rounded-xl overflow-hidden">
            <img
              src={story.imageUrl}
              alt={story.name}
              className="w-full aspect-square object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  story.name
                )}&size=200&background=B19AFF&color=fff`;
              }}
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 text-white">
          <h2 className="text-3xl font-bold mb-4">{story.name}</h2>
          <p className="text-lg mb-2">{story.role}</p>
          <div className="mt-6">
            <p className="text-xl italic mb-6">"{story.quote}"</p>
            <p className="mb-4">
              {story.extendedQuote ||
                "Clique em 'Conheça mais' para ler o relato completo."}
            </p>
          </div>
          {story.tags && story.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {story.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-full text-sm bg-white/20`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="mt-6">
            <Link to={`/historias/${story.id}`}>
              <Button className="flex items-center gap-2 bg-white/20 hover:bg-white/40 text-white font-bold transition-colors">
                Conheça mais
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedStory;
