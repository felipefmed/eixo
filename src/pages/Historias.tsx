import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";

// Helper para decidir cor do fundo do carrossel e hover dos botões
const solidBackgroundColors: Record<string, string> = {
  "bg-eixo-lightPurple": "bg-[#B19AFF]", // roxo forte
  "bg-eixo-lightBlue": "bg-[#1EAEDB]",   // azul vibrante
  "bg-eixo-lightGreen": "bg-[#5EE2A0]",  // verde vibrante
  "bg-eixo-yellow": "bg-[#FFD875]",      // amarelo vibrante
};

interface StoryProps {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  quote: string;
  bgColor: string;
  extendedQuote?: string;
  tags?: string[];
}

const StoryCard: React.FC<StoryProps> = ({
  id,
  name,
  role,
  imageUrl,
  quote,
  bgColor,
  extendedQuote,
  tags = []
}) => {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('');

  // Mapeamento para hover color mais vibrante (usando Tailwind + bg personalizada se necessário)
  const hoverBgColors: Record<string, string> = {
    "bg-eixo-lightPurple": "hover:bg-eixo-purple",
    "bg-eixo-lightBlue": "hover:bg-[#1EAEDB]",
    "bg-eixo-lightGreen": "hover:bg-[#5EE2A0]",
    "bg-eixo-yellow": "hover:bg-[#FFD875]",
  };
  // Usa classe CSS padrão se não encontrado
  const hoverClass = hoverBgColors[bgColor] || "hover:bg-eixo-purple";

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
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
            <>
              <Separator className="my-4" />
              <p className="text-gray-700 text-sm">{extendedQuote}</p>
            </>
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
              className={`w-full mt-2 font-semibold border-0 transition-colors duration-300 ease-in-out bg-eixo-purple text-white ${hoverClass}`}
              // Remove estilo inline
            >
              <span>Conheça mais</span>
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

const FeaturedStory = ({ story }: { story: StoryProps }) => (
  <div className={`relative w-full overflow-hidden rounded-2xl ${solidBackgroundColors[story.bgColor] || "bg-[#B19AFF]"}`} >
    {/* Apenas cor sólida no fundo */}
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
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(story.name)}&size=200&background=B19AFF&color=fff`;
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
              {story.extendedQuote || "Clique em 'Conheça mais' para ler o relato completo."}
            </p>
          </div>
          
          {story.tags && story.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {story.tags.map((tag, idx) => (
                <span key={idx} className={`px-3 py-1 rounded-full text-sm bg-white/20`}>{tag}</span>
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

const ShareStorySection = () => {
  return (
    <div className="bg-eixo-lightPurple bg-opacity-20 rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-6">Compartilhe sua história</h3>
      <p className="text-gray-700 mb-4">
        Sua experiência pode inspirar outras pessoas. Compartilhe sua jornada conosco e ajude a quebrar estigmas.
      </p>
      <p className="text-gray-700 mb-6">
        Para compartilhar sua história, envie um email para <a href="mailto:contato@eixo.org" className="text-eixo-purple font-semibold hover:text-violet-500 underline">contato@eixo.org</a> com o assunto "Minha História".
      </p>
      <p className="text-gray-700 italic">
        Todas as histórias passam por um processo de revisão antes de serem publicadas. Sua privacidade será respeitada.
      </p>
    </div>
  );
};

const Historias = () => {
  const stories: StoryProps[] = [
    {
      id: 'gabriel-estrela',
      quote: "É muito ruim ter alguma coisa na gente sobre a qual você não se sente confortável de falar. Isso impede muitos processos de cura.",
      name: "Gabriel Estrela",
      role: "Criador de conteúdo",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      bgColor: "bg-eixo-lightPurple",
      extendedQuote: "Quando recebi meu diagnóstico, pensei que minha vida tinha acabado. Passei semanas em negação, com medo de contar para qualquer pessoa. O estigma em torno do HIV é tão forte que eu mesmo me culpava e me envergonhava, apesar de saber que isso poderia acontecer com qualquer pessoa.",
      tags: ["Visibilidade", "Educação", "Indetectável"]
    },
    {
      id: 'tamillys-lirio',
      quote: "Sei que o assunto ainda é tabu, não há informação correta, muitas coisas são estigmatizadas; precisamos dar visibilidade a pauta do HIV nos espaços que ocupamos.",
      name: "Tamillys Lírio",
      role: "Psicóloga e ativista",
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      bgColor: "bg-eixo-lightBlue",
      extendedQuote: "Como psicóloga, vejo muitos pacientes soropositivos que sofrem não com a doença em si, mas com o preconceito. A medicação moderna é eficaz, mas ainda precisamos tratar o estigma social.",
      tags: ["Saúde Mental", "Ativismo", "Educação"]
    },
    {
      id: 'silvia-almeida',
      quote: "É legal ter HIV? Claro que não. Mas é importante saber que qualquer um que tenha uma vida sexual ativa é vulnerável ao vírus. As pessoas precisam cair na real.",
      name: "Silvia Almeira",
      role: "Ativista e consultora",
      imageUrl: "https://randomuser.me/api/portraits/women/29.jpg",
      bgColor: "bg-eixo-lightGreen",
      extendedQuote: "Vivo com HIV há mais de 15 anos. Passei por todas as fases de medicação, e hoje posso dizer que levo uma vida completamente normal. As pessoas precisam entender que HIV não é sentença de morte.",
      tags: ["Prevenção", "Conscientização", "PrEP"]
    },
    {
      id: 'joao-netto',
      quote: "O indetectável é aquele cara que tem uma carga viral tão baixa que não pode mais transmitir o vírus. Então, quando a gente chega nesse ponto, se sente meio super-herói mesmo.",
      name: "João Netto",
      role: "Criador de conteúdo",
      imageUrl: "https://randomuser.me/api/portraits/men/64.jpg",
      bgColor: "bg-eixo-lightPurple",
      extendedQuote: "Comecei a tomar medicação logo após o diagnóstico, e em apenas três meses já estava indetectável. Isso me mostrou o quanto a medicina avançou. Hoje ajudo outros jovens a entenderem a importância do diagnóstico precoce.",
      tags: ["Indetectável", "Juventude", "Redes sociais"]
    },
    {
      id: 'mariana-santos',
      quote: "Quando descobri meu diagnóstico, pensei que minha vida tinha acabado. Hoje, vivo normalmente, sigo meu tratamento e tenho um filho que nasceu sem o vírus.",
      name: "Mariana Santos",
      role: "Professora",
      imageUrl: "https://randomuser.me/api/portraits/women/17.jpg",
      bgColor: "bg-eixo-yellow",
      extendedQuote: "Graças ao acompanhamento pré-natal adequado e ao tratamento antirretroviral durante a gestação, meu filho nasceu soronegativo. Isso é um milagre da ciência moderna.",
      tags: ["Maternidade", "Família", "Gravidez"]
    },
    {
      id: 'carlos-ribeiro',
      quote: "É importante falar: viver com HIV hoje não é como nos anos 80 ou 90. A medicina avançou muito e podemos ter uma vida normal, com qualidade e longevidade.",
      name: "Carlos Ribeiro",
      role: "Médico e ativista",
      imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
      bgColor: "bg-eixo-lightBlue",
      extendedQuote: "Como médico infectologista, tenho acompanhado a evolução dos tratamentos nos últimos 30 anos. O que vemos hoje é uma revolução na qualidade de vida dos pacientes soropositivos.",
      tags: ["Medicina", "Tratamento", "Saúde pública"]
    },
    {
      id: 'paulo-henrique',
      quote: "Falar abertamente sobre meu status sorológico me libertou. O segredo só aumenta o estigma, e o estigma mata mais que o próprio vírus.",
      name: "Paulo Henrique",
      role: "Designer e voluntário",
      imageUrl: "https://randomuser.me/api/portraits/men/42.jpg",
      bgColor: "bg-eixo-lightGreen",
      extendedQuote: "Trabalho como voluntário em uma ONG ajudando pessoas recém-diagnosticadas. Mostrar que é possível viver bem com HIV é a melhor forma de combater o preconceito.",
      tags: ["Voluntariado", "Suporte", "Aceitação"]
    }
  ];

  return (
    <Layout>
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] max-w-none bg-white py-16 px-0">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Histórias Reais</h1>
          <p className="text-lg text-gray-600 mb-10">
            Conheça histórias inspiradoras de pessoas que vivem com HIV e como encontraram 
            força, apoio e uma nova perspectiva de vida após o diagnóstico.
          </p>
          <Separator className="max-w-xs mx-auto" />
        </div>
        
        <section className="mb-24">
          {/* Carousel agora está full width (fora do container padrão) */}
          <Carousel 
            className="w-screen max-w-none mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="cursor-grab active:cursor-grabbing">
              {stories.map((story, index) => (
                <CarouselItem key={story.id} className="transition-transform duration-500 px-4">
                  <FeaturedStory story={story} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="relative static translate-y-0 left-0 hover:bg-eixo-purple hover:text-white transition-colors" />
              <CarouselNext className="relative static translate-y-0 right-0 hover:bg-eixo-purple hover:text-white transition-colors" />
            </div>
          </Carousel>
        </section>
        
        <section className="mb-16 max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-10 text-center">Outras Histórias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <StoryCard key={index} {...story} />
            ))}
          </div>
        </section>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <ShareStorySection />
        </div>
      </div>
    </Layout>
  );
};

export default Historias;
