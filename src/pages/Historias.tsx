import React from 'react';
import Layout from '../components/Layout';
import { Separator } from '@/components/ui/separator';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import StoryCard from '../components/StoryCard';
import FeaturedStory from '../components/FeaturedStory';
import ShareStorySection from '../components/ShareStorySection';

const stories = [
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

const Historias = () => (
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

export default Historias;
