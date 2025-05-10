
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';

interface StoryData {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  quote: string;
  fullStory: string[];
  bgColor: string;
  tags: string[];
}

const stories: Record<string, StoryData> = {
  'gabriel-estrela': {
    id: 'gabriel-estrela',
    name: 'Gabriel Estrela',
    role: 'Criador de conteúdo',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'É muito ruim ter alguma coisa na gente sobre a qual você não se sente confortável de falar. Isso impede muitos processos de cura.',
    fullStory: [
      'Quando recebi meu diagnóstico, pensei que minha vida tinha acabado. Passei semanas em negação, com medo de contar para qualquer pessoa. O estigma em torno do HIV é tão forte que eu mesmo me culpava e me envergonhava, apesar de saber que isso poderia acontecer com qualquer pessoa.',
      'Os primeiros meses foram os mais difíceis. Eu me isolei, evitava encontros sociais, e parei de usar as redes sociais. Sentia como se estivesse carregando um segredo pesado demais. Foi só quando conheci outras pessoas vivendo com HIV em um grupo de apoio que percebi que não estava sozinho.',
      'Conversar com outras pessoas que passavam pela mesma situação me deu forças para aceitar minha condição e buscar tratamento adequado. Comecei a medicação antirretroviral e, em apenas três meses, já estava com carga viral indetectável.',
      'Hoje, cinco anos depois, vivo uma vida plena. A medicina evoluiu tanto que minha saúde é melhor do que nunca. Decidi usar minhas redes sociais para falar abertamente sobre o assunto e ajudar outras pessoas que estão passando pelo mesmo. Percebi que muitas pessoas ainda têm informações desatualizadas sobre o HIV.',
      'Indetectável significa intransmissível. Esse é um fato científico que muitas pessoas ainda desconhecem. Quando atingimos a carga viral indetectável através do tratamento contínuo, não transmitimos o vírus, mesmo em relações sexuais sem preservativo. Claro que ainda recomendo o uso de preservativos para prevenir outras ISTs.',
      'Minha mensagem para quem acabou de descobrir o diagnóstico é: respire fundo, busque informação de qualidade, comece o tratamento o quanto antes, e saiba que você vai ficar bem. HIV hoje é uma condição crônica controlável, não uma sentença de morte como era nos anos 80.'
    ],
    bgColor: 'bg-eixo-lightPurple',
    tags: ['Visibilidade', 'Educação', 'Indetectável']
  },
  'tamillys-lirio': {
    id: 'tamillys-lirio',
    name: 'Tamillys Lírio',
    role: 'Psicóloga e ativista',
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Sei que o assunto ainda é tabu, não há informação correta, muitas coisas são estigmatizadas; precisamos dar visibilidade a pauta do HIV nos espaços que ocupamos.',
    fullStory: [
      'Como psicóloga, vejo muitos pacientes soropositivos que sofrem não com a doença em si, mas com o preconceito. A medicação moderna é eficaz, mas ainda precisamos tratar o estigma social.',
      'Durante minha formação acadêmica, percebi que havia pouco espaço para discussões sobre HIV/AIDS nos currículos de psicologia. Foi quando decidi me especializar nessa área e oferecer apoio psicológico para pessoas vivendo com HIV.',
      'O impacto psicológico do diagnóstico pode ser devastador. Muitos pacientes relatam sentimentos de vergonha, culpa e medo do julgamento. Meu trabalho é ajudá-los a processar essas emoções e reconhecer que o HIV não define quem eles são.',
      'A saúde mental é tão importante quanto o tratamento médico. Estudos mostram que pessoas com bom suporte emocional têm melhor adesão ao tratamento e, consequentemente, melhor qualidade de vida.',
      'Outro aspecto importante do meu trabalho é auxiliar na revelação do diagnóstico para parceiros, familiares e amigos. Esse é um processo delicado que requer planejamento e apoio profissional.',
      'Hoje, além do consultório, participo de grupos de apoio e palestras educativas. Acredito que a informação é a melhor ferramenta para combater o preconceito. Quando as pessoas entendem os fatos sobre o HIV, o medo e a discriminação diminuem.'
    ],
    bgColor: 'bg-eixo-lightBlue',
    tags: ['Saúde Mental', 'Ativismo', 'Educação']
  },
  'silvia-almeida': {
    id: 'silvia-almeida',
    name: 'Silvia Almeida',
    role: 'Ativista e consultora',
    imageUrl: 'https://randomuser.me/api/portraits/women/29.jpg',
    quote: 'É legal ter HIV? Claro que não. Mas é importante saber que qualquer um que tenha uma vida sexual ativa é vulnerável ao vírus. As pessoas precisam cair na real.',
    fullStory: [
      'Vivo com HIV há mais de 15 anos. Passei por todas as fases de medicação, e hoje posso dizer que levo uma vida completamente normal. As pessoas precisam entender que HIV não é sentença de morte.',
      'Meu diagnóstico veio em 2007, numa época em que os medicamentos já haviam evoluído bastante, mas ainda causavam mais efeitos colaterais do que hoje. No início, foi difícil me adaptar ao tratamento, mas com o tempo e com o desenvolvimento de novos medicamentos, tudo ficou mais fácil.',
      'Como mulher heterossexual e de meia-idade, percebi que não me encaixava no estereótipo que muitas pessoas têm sobre quem vive com HIV. Isso me motivou a me tornar ativista e mostrar que o vírus não escolhe gênero, idade ou orientação sexual.',
      'Um dos maiores desafios que enfrentei foi no ambiente de trabalho. Quando souberam do meu diagnóstico, fui vítima de discriminação e até mesmo assédio moral. Foi aí que decidi estudar direitos humanos e me tornar consultora em políticas de inclusão para empresas.',
      'Hoje, trabalho com grandes corporações implementando políticas contra a discriminação de pessoas que vivem com HIV no ambiente de trabalho. Também oriento sobre a importância de programas de prevenção e testagem.',
      'Minha mensagem é direta: uso de preservativo, PrEP e testagem regular são fundamentais. HIV pode afetar qualquer pessoa que tenha vida sexual ativa. A prevenção combinada é o melhor caminho.'
    ],
    bgColor: 'bg-eixo-lightGreen',
    tags: ['Prevenção', 'Conscientização', 'PrEP']
  },
  'joao-netto': {
    id: 'joao-netto',
    name: 'João Netto',
    role: 'Criador de conteúdo',
    imageUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
    quote: 'O indetectável é aquele cara que tem uma carga viral tão baixa que não pode mais transmitir o vírus. Então, quando a gente chega nesse ponto, se sente meio super-herói mesmo.',
    fullStory: [
      'Comecei a tomar medicação logo após o diagnóstico, e em apenas três meses já estava indetectável. Isso me mostrou o quanto a medicina avançou. Hoje ajudo outros jovens a entenderem a importância do diagnóstico precoce.',
      'O diagnóstico veio logo depois que completei 23 anos. Foi um choque, claro, mas tive a sorte de ter um médico que me explicou com clareza sobre o tratamento e as perspectivas de vida com HIV nos dias de hoje.',
      'Como jovem gay e soropositivo, decidi usar minhas redes sociais para compartilhar informações sobre prevenção, tratamento e vida com HIV. Percebi que muitos jovens ainda têm informações desatualizadas e baseadas no medo dos anos 80 e 90.',
      'Minha rotina inclui tomar um comprimido por dia. Só isso. Faço exames a cada seis meses para monitorar minha saúde, e os resultados são sempre excelentes. Meu sistema imunológico está forte e a carga viral continua indetectável.',
      'Uma das coisas que mais gosto de explicar é o conceito de I=I (Indetectável = Intransmissível). Muita gente ainda não sabe que uma pessoa com HIV em tratamento eficaz, com carga viral indetectável, não transmite o vírus nas relações sexuais.',
      'Decidi ser um rosto jovem e positivo para essa causa. Quero mostrar que é possível viver bem com HIV, sem esconder ou se envergonhar. O estigma mata mais que o vírus.'
    ],
    bgColor: 'bg-eixo-lightPurple',
    tags: ['Indetectável', 'Juventude', 'Redes sociais']
  },
  'mariana-santos': {
    id: 'mariana-santos',
    name: 'Mariana Santos',
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
  'carlos-ribeiro': {
    id: 'carlos-ribeiro',
    name: 'Carlos Ribeiro',
    role: 'Médico e ativista',
    imageUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
    quote: 'É importante falar: viver com HIV hoje não é como nos anos 80 ou 90. A medicina avançou muito e podemos ter uma vida normal, com qualidade e longevidade.',
    fullStory: [
      'Como médico infectologista, tenho acompanhado a evolução dos tratamentos nos últimos 30 anos. O que vemos hoje é uma revolução na qualidade de vida dos pacientes soropositivos.',
      'Comecei minha carreira médica no início da epidemia de AIDS, nos anos 80. Naquela época, o diagnóstico de HIV era praticamente uma sentença de morte. Não tínhamos tratamentos eficazes e perdíamos pacientes diariamente.',
      'A introdução da terapia antirretroviral de alta potência em meados dos anos 90 foi um divisor de águas. Pela primeira vez, vimos pacientes se recuperando e voltando a ter uma vida produtiva. Desde então, os avanços não pararam.',
      'Hoje, temos medicamentos que combinam vários princípios ativos em um único comprimido diário, com mínimos efeitos colaterais. A expectativa de vida de uma pessoa com HIV em tratamento é praticamente igual à da população geral.',
      'Como médico e também como ativista, luto pela universalização do acesso ao tratamento. No Brasil, temos um dos melhores programas de combate ao HIV do mundo, com distribuição gratuita de medicamentos pelo SUS.',
      'Meu maior desafio hoje é combater a desinformação. Mesmo com tantos avanços científicos, ainda vejo pacientes chegando ao consultório com ideias equivocadas e medos baseados em informações desatualizadas sobre o HIV.'
    ],
    bgColor: 'bg-eixo-lightBlue',
    tags: ['Medicina', 'Tratamento', 'Saúde pública']
  },
  'paulo-henrique': {
    id: 'paulo-henrique',
    name: 'Paulo Henrique',
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
};

const StoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const story = id ? stories[id] : null;
  
  if (!story) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-bold mb-6">História não encontrada</h1>
          <Button onClick={() => navigate('/historias')}>Voltar para Histórias</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <Button 
          variant="outline"
          onClick={() => navigate('/historias')}
          className="mb-8 flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          <span>Voltar para histórias</span>
        </Button>
        
        <div className="max-w-4xl mx-auto">
          <div className={`h-4 ${story.bgColor} rounded-t-md`}></div>
          <div className="bg-white shadow-xl rounded-b-md p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mx-auto md:mx-0">
                <img 
                  src={story.imageUrl} 
                  alt={story.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(story.name)}&size=200&background=B19AFF&color=fff`;
                  }}
                />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">{story.name}</h1>
                <p className="text-gray-600 mt-2 text-center md:text-left">{story.role}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-2xl italic font-light mb-8">"{story.quote}"</p>
              
              <Separator className="my-8" />
              
              <div className="space-y-6">
                {story.fullStory.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-10">
              {story.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className={`px-4 py-2 rounded-full text-sm font-medium ${story.bgColor}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StoryDetail;
