import React from 'react';
import Layout from '../components/Layout';
import { Separator } from '@/components/ui/separator';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import StoryCard from '../components/StoryCard';
import FeaturedStory from '../components/FeaturedStory';
import ShareStorySection from '../components/ShareStorySection';

// ... (seus dados de 'stories' permanecem os mesmos) ...
const stories = [
  {
    id: 'eduardo',
    quote: "É muito ruim ter alguma coisa na gente sobre a qual você não se sente confortável de falar. Isso impede muitos processos de cura.",
    name: "Eduardo",
    role: "Criador de conteúdo",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    bgColor: "bg-eixo-lightPurple",
    extendedQuote: "Quando recebi meu diagnóstico, pensei que minha vida tinha acabado. Passei semanas em negação, com medo de contar para qualquer pessoa. O estigma em torno do HIV é tão forte que eu mesmo me culpava e me envergonhava, apesar de saber que isso poderia acontecer com qualquer pessoa.",
    tags: ["Visibilidade", "Educação", "Indetectável"]
  },
  {
    id: 'lara',
    quote: "Sei que o assunto ainda é tabu, não há informação correta, muitas coisas são estigmatizadas; precisamos dar visibilidade a pauta do HIV nos espaços que ocupamos.",
    name: "lara",
    role: "Psicóloga e ativista",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    bgColor: "bg-eixo-lightBlue",
    extendedQuote: "Como psicóloga, vejo muitos pacientes soropositivos que sofrem não com a doença em si, mas com o preconceito. A medicação moderna é eficaz, mas ainda precisamos tratar o estigma social.",
    tags: ["Saúde Mental", "Ativismo", "Educação"]
  },
  {
    id: 'camila',
    quote: "É legal ter HIV? Claro que não. Mas é importante saber que qualquer um que tenha uma vida sexual ativa é vulnerável ao vírus. As pessoas precisam cair na real.",
    name: "Camila",
    role: "Ativista e consultora",
    imageUrl: "https://randomuser.me/api/portraits/women/29.jpg",
    bgColor: "bg-eixo-lightGreen",
    extendedQuote: "Vivo com HIV há mais de 15 anos. Passei por todas as fases de medicação, e hoje posso dizer que levo uma vida completamente normal. As pessoas precisam entender que HIV não é sentença de morte.",
    tags: ["Prevenção", "Conscientização", "PrEP"]
  },
  {
    id: 'guilherme',
    quote: "O indetectável é aquele cara que tem uma carga viral tão baixa que não pode mais transmitir o vírus. Então, quando a gente chega nesse ponto, se sente meio super-herói mesmo.",
    name: "Guilherme",
    role: "Criador de conteúdo",
    imageUrl: "https://randomuser.me/api/portraits/men/64.jpg",
    bgColor: "bg-eixo-lightPurple",
    extendedQuote: "Comecei a tomar medicação logo após o diagnóstico, e em apenas três meses já estava indetectável. Isso me mostrou o quanto a medicina avançou. Hoje ajudo outros jovens a entenderem a importância do diagnóstico precoce.",
    tags: ["Indetectável", "Juventude", "Redes sociais"]
  },
  {
    id: 'marina',
    name: 'Marina',
    role: 'Professora',
    imageUrl: 'https://randomuser.me/api/portraits/women/17.jpg',
    quote: 'Quando descobri meu diagnóstico, pensei que minha vida tinha acabado. Hoje, vivo normalmente, sigo meu tratamento e tenho um filho que nasceu sem o vírus.',
    fullStory: [
      'Graças ao acompanhamento pré-natal adequado e ao tratamento antirretroviral durante a gestação, meu filho nasceu soronegativo. Isso é um milagre da ciência moderna.',
      'Descobri que tinha HIV durante os exames de rotina da minha primeira consulta pré-natal. Foi um momento devastador, pois além da preocupação comigo, havia o medo de transmitir o vírus para o bebê.',
      'Imediatamente, iniciei o tratamento antirretroviral e fui acompanhada de perto por uma equipe multidisciplinar durante toda a gestação. Os médicos me explicaram que, com o tratamento adequado, as chances de transmissão vertical eram mínimas.',
      'Meu marido realizou os testes e descobrimos que ele era soronegativo. Foi um período de muita tensão no nosso relacionamento, mas com diálogo e informação, conseguimos superar juntos.',
      'Meu filho nasceu por cesariana planejada e não pude amamentá-lo para evitar qualquer risco de transmissão. Mesmo assim, criamos um vínculo forte e saudável. Hoje ele tem 5 anos, é saudável e soronegativo.',
      'Como professora, acredito na educação como ferramenta de transformação. Por isso, decidi compartilhar minha história, especialmente com outras mulheres grávidas vivendo com HIV. Quero que saibam que maternidade segura é possível.'
    ],
    bgColor: 'bg-eixo-yellow',
    tags: ['Maternidade', 'Família', 'Gravidez']
  },
  {
    id: 'rodrigo',
    name: 'Rodrigo',
    role: 'Médico e ativista',
    imageUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
    quote: 'É importante falar: viver com HIV hoje não é como nos anos 80 ou 90. A medicina avançou muito e podemos ter uma vida normal, com qualidade e longevidade.',
    fullStory: [
      'Como médico infectologista, tenho acompanhado a evolução dos tratamentos nos últimos 30 anos. O que vemos hoje é uma revolução na qualidade de vida dos pacientes soropositivos.',
      'Comecei minha carreira médica no início da epidemia de AIDS, nos 80. Naquela época, o diagnóstico de HIV era praticamente uma sentença de morte. Não tínhamos tratamentos eficazes e perdíamos pacientes diariamente.',
      'A introdução da terapia antirretroviral de alta potência em meados dos anos 90 foi um divisor de águas. Pela primeira vez, vimos pacientes se recuperando e voltando a ter uma vida produtiva. Desde então, os avanços não pararam.',
      'Hoje, temos medicamentos que combinam vários princípios ativos em um único comprimido diário, com mínimos efeitos colaterais. A expectativa de vida de uma pessoa com HIV em tratamento é praticamente igual à da população geral.',
      'Como médico e também como ativista, luto pela universalização do acesso ao tratamento. No Brasil, temos um dos melhores programas de combate ao HIV do mundo, com distribuição gratuita de medicamentos pelo SUS.',
      'Meu maior desafio hoje é combater a desinformação. Mesmo com tantos avanços científicos, ainda vejo pacientes chegando ao consultório com ideias equivocadas e medos baseados em informações desatualizadas sobre o HIV.'
    ],
    bgColor: 'bg-eixo-lightBlue',
    tags: ['Medicina', 'Tratamento', 'Saúde pública']
  },
  {
    id: 'paulo',
    name: 'Paulo',
    role: 'Designer e voluntário',
    imageUrl: 'https://randomuser.me/api/portraits/men/42.jpg',
    quote: 'Falar abertamente sobre meu status sorológico me libertou. O segredo só aumenta o estigma, e o estigma mata mais que o próprio vírus.',
    fullStory: [
      'Trabalho como voluntário em uma ONG ajudando pessoas recém-diagnosticadas. Mostrar que é possível viver bem com HIV é a melhor forma de combater o preconceito.',
      'Recebi meu diagnóstico há 8 anos, quando tinha 31 anos. Na época, trabalhava em uma grande agência de publicidade e tinha muito medo de que meus colegas descobrissem. Vivi anos escondendo medicamentos e inventando desculpas para ir às consultas médicas.',
      'O ponto de virada foi quando um colega de trabalho também soropositivo percebeu meus remédios e iniciamos uma amizade baseada na confiança mútua. Foi a primeira pessoa com quem pude falar abertamente sobre minha condição.',
      'Aos poucos, fui ganhando confiança para falar sobre o assunto com amigos próximos e familiares. Para minha surpresa, encontrei muito mais apoio do que julgamento. Percebi que grande parte do preconceito estava dentro de mim mesmo.',
      'Hoje, trabalho como voluntário em uma ONG que oferece suporte para pessoas recém-diagnosticadas. Compartilho minha experiência para mostrar que é possível ter uma vida plena, com relacionamentos saudáveis e carreira de sucesso, mesmo vivendo com HIV.',
      'Como designer, também colaboro criando campanhas educativas que ajudam a disseminar informações corretas sobre prevenção e tratamento. Acredito que a arte e a comunicação são ferramentas poderosas na luta contra o estigma.'
    ],
    bgColor: 'bg-eixo-lightGreen',
    tags: ['Voluntariado', 'Suporte', 'Aceitação']
  }
];

const Historias = () => (
  <Layout>
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] max-w-none bg-white py-16 px-0">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossas Histórias</h1>
        <p className="text-lg text-gray-600 mb-10">
          Descubra histórias inspiradoras de pessoas que vivem com HIV.
          Veja como elas encontraram força, apoio e uma nova perspectiva de vida
          depois do diagnóstico.
        </p>
        <Separator className="max-w-xs mx-auto" />
      </div>
      <section className="mb-24 relative"> {/* Adicionado 'relative' aqui para posicionar as setas */}
        <Carousel
          // Removido 'w-screen max-w-none mx-auto' do Carousel, pois a section pai já está controlando a largura total.
          // Adicionado 'h-full' para garantir que o Carousel ocupe a altura total do seu conteúdo.
          className="h-full" 
          opts={{
            align: "start",
            loop: true,
          }}
        >
          {/* Adicionado h-full para CarouselContent para que ele ocupe a altura total */}
          <CarouselContent className="cursor-grab active:cursor-grabbing h-full"> 
            {stories.map((story, index) => (
              // Adicionado 'h-full' ao CarouselItem para que ele force a altura do FeaturedStory
              <CarouselItem key={story.id} className="transition-transform duration-500 h-full"> 
                <FeaturedStory story={story} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Posicionamento das setas ajustado para dentro da section, no centro vertical */}
          <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 hover:bg-eixo-purple hover:text-white transition-colors" />
          <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 hover:bg-eixo-purple hover:text-white transition-colors" />
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