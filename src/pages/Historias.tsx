
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface StoryProps {
  name: string;
  role: string;
  imageUrl: string;
  quote: string;
  bgColor: string;
  extendedQuote?: string;
  tags?: string[];
}

const StoryCard: React.FC<StoryProps> = ({
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
        
        {tags.length > 0 && (
          <div className="mt-auto pt-4 flex flex-wrap gap-2">
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
      </div>
    </Card>
  );
};

const FeaturedStory = () => (
  <div className="relative w-full overflow-hidden rounded-2xl bg-eixo-purple bg-opacity-10 p-6 md:p-10">
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="w-full md:w-1/3">
        <div className="rounded-xl overflow-hidden shadow-xl">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="Gabriel Estrela"
            className="w-full aspect-square object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://ui-avatars.com/api/?name=Gabriel+Estrela&size=200&background=B19AFF&color=fff`;
            }}
          />
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <h2 className="text-3xl font-bold mb-4">Gabriel Estrela</h2>
        <p className="text-lg text-gray-600 mb-2">Criador de conteúdo</p>
        
        <div className="mt-6">
          <p className="text-xl italic mb-6">
            "É muito ruim ter alguma coisa na gente sobre a qual você não se sente confortável de falar. Isso impede muitos processos de cura."
          </p>
          <p className="mb-4">
            Quando recebi meu diagnóstico, pensei que minha vida tinha acabado. Passei semanas em negação, com medo de contar para qualquer pessoa. O estigma em torno do HIV é tão forte que eu mesmo me culpava e me envergonhava, apesar de saber que isso poderia acontecer com qualquer pessoa.
          </p>
          <p>
            Hoje, cinco anos depois, vivo uma vida plena. O tratamento evoluiu tanto que minha carga viral é indetectável, o que significa que não posso transmitir o vírus. Decidi usar minhas redes sociais para falar abertamente sobre o assunto e ajudar outras pessoas que estão passando pelo mesmo.
          </p>
        </div>
        
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="bg-eixo-lightPurple px-3 py-1 rounded-full text-sm">Visibilidade</span>
          <span className="bg-eixo-lightPurple px-3 py-1 rounded-full text-sm">Educação</span>
          <span className="bg-eixo-lightPurple px-3 py-1 rounded-full text-sm">Indetectável</span>
        </div>
      </div>
    </div>
  </div>
);

const Historias = () => {
  const stories: StoryProps[] = [
    {
      quote: "Sei que o assunto ainda é tabu, não há informação correta, muitas coisas são estigmatizadas; precisamos dar visibilidade a pauta do HIV nos espaços que ocupamos.",
      name: "Tamillys Lírio",
      role: "Psicóloga e ativista",
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      bgColor: "bg-eixo-lightBlue",
      extendedQuote: "Como psicóloga, vejo muitos pacientes soropositivos que sofrem não com a doença em si, mas com o preconceito. A medicação moderna é eficaz, mas ainda precisamos tratar o estigma social.",
      tags: ["Saúde Mental", "Ativismo", "Educação"]
    },
    {
      quote: "É legal ter HIV? Claro que não. Mas é importante saber que qualquer um que tenha uma vida sexual ativa é vulnerável ao vírus. As pessoas precisam cair na real.",
      name: "Silvia Almeira",
      role: "Ativista e consultora",
      imageUrl: "https://randomuser.me/api/portraits/women/29.jpg",
      bgColor: "bg-eixo-lightGreen",
      extendedQuote: "Vivo com HIV há mais de 15 anos. Passei por todas as fases de medicação, e hoje posso dizer que levo uma vida completamente normal. As pessoas precisam entender que HIV não é sentença de morte.",
      tags: ["Prevenção", "Conscientização", "PrEP"]
    },
    {
      quote: "O indetectável é aquele cara que tem uma carga viral tão baixa que não pode mais transmitir o vírus. Então, quando a gente chega nesse ponto, se sente meio super-herói mesmo.",
      name: "João Netto",
      role: "Criador de conteúdo",
      imageUrl: "https://randomuser.me/api/portraits/men/64.jpg",
      bgColor: "bg-eixo-lightPurple",
      extendedQuote: "Comecei a tomar medicação logo após o diagnóstico, e em apenas três meses já estava indetectável. Isso me mostrou o quanto a medicina avançou. Hoje ajudo outros jovens a entenderem a importância do diagnóstico precoce.",
      tags: ["Indetectável", "Juventude", "Redes sociais"]
    },
    {
      quote: "Quando descobri meu diagnóstico, pensei que minha vida tinha acabado. Hoje, vivo normalmente, sigo meu tratamento e tenho um filho que nasceu sem o vírus.",
      name: "Mariana Santos",
      role: "Professora",
      imageUrl: "https://randomuser.me/api/portraits/women/17.jpg",
      bgColor: "bg-eixo-yellow",
      extendedQuote: "Graças ao acompanhamento pré-natal adequado e ao tratamento antirretroviral durante a gestação, meu filho nasceu soronegativo. Isso é um milagre da ciência moderna.",
      tags: ["Maternidade", "Família", "Gravidez"]
    },
    {
      quote: "É importante falar: viver com HIV hoje não é como nos anos 80 ou 90. A medicina avançou muito e podemos ter uma vida normal, com qualidade e longevidade.",
      name: "Carlos Ribeiro",
      role: "Médico e ativista",
      imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
      bgColor: "bg-eixo-lightBlue",
      extendedQuote: "Como médico infectologista, tenho acompanhado a evolução dos tratamentos nos últimos 30 anos. O que vemos hoje é uma revolução na qualidade de vida dos pacientes soropositivos.",
      tags: ["Medicina", "Tratamento", "Saúde pública"]
    },
    {
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
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Histórias Reais</h1>
          <p className="text-lg text-gray-600 mb-10">
            Conheça histórias inspiradoras de pessoas que vivem com HIV e como encontraram 
            força, apoio e uma nova perspectiva de vida após o diagnóstico.
          </p>
          <Separator className="max-w-xs mx-auto" />
        </div>
        
        <section className="mb-24">
          <FeaturedStory />
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-10 text-center">Outras Histórias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <StoryCard key={index} {...story} />
            ))}
          </div>
        </section>
        
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-4">Sua história também importa</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Compartilhe sua jornada e inspire outras pessoas que estão passando por situações semelhantes. 
            Juntos, podemos combater o estigma e mostrar que viver com HIV não é o fim.
          </p>
          <Button className="btn btn-primary">
            Compartilhe sua história
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Historias;
