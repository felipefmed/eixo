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
  // Adicionado `flex-col` e `h-full` para que o flexbox funcione e ocupe a altura total do CarouselItem
  // Removido 'rounded-2xl' conforme combinado anteriormente
  <div
    className={`relative w-full overflow-hidden flex flex-col h-full`} // Adicionado flex-col e h-full
    style={{ background: getHexColor(story.bgColor) }}
  >
    <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start h-full"> {/* Adicionado h-full e items-start para alinhar ao topo */}
      <div className="w-full md:w-1/3 flex-shrink-0"> {/* Adicionado flex-shrink-0 para que a imagem não encolha */}
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
      <div className="w-full md:w-2/3 text-white flex flex-col justify-between h-full"> {/* Adicionado flex-col e justify-between para distribuir conteúdo */}
        <div> {/* Agrupando o cabeçalho e a citação principal */}
          <h2 className="text-3xl font-bold mb-4">{story.name}</h2>
          <p className="text-lg mb-2">{story.role}</p>
          <div className="mt-6">
            <p className="text-xl italic mb-6">"{story.quote}"</p>
            <p className="mb-4">
              {story.extendedQuote ||
                "Clique em 'Conheça mais' para ler o relato completo."}
            </p>
          </div>
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
        <div className="mt-6"> {/* Isso garante que o botão fique sempre na parte inferior */}
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
);

export default FeaturedStory;