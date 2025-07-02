// src/pages/Index.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import FeatureSection from '../components/FeatureSection';
import TestimonialCard from '../components/TestimonialCard';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useChatState } from '../components/ChatButton';

// Componente principal da página inicial (Home).
const Index = () => {
  // Hook para gerenciar o estado do chat (abrir/fechar).
  const { openChat } = useChatState;

  // Função para lidar com o clique no botão "Converse com alguém", abrindo o chat.
  const handleChatClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Impede o comportamento padrão do link.
    openChat(); // Chama a função para abrir o chat.
  };

  return (
    // Componente de layout que envolve todo o conteúdo da página.
    <Layout>
      {/* Seção Hero: A primeira seção de destaque da página, com título, botões e imagem. */}
      <section className="relative bg-white py-24 md:py-32 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            {/* Conteúdo de texto e botões da seção Hero. */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Olá, <br /> estamos aqui para te mostrar que não é o fim.
              </h1>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
                {/* Botão para conversar com alguém, que abre o chat. */}
                <a 
                  href="#" 
                  onClick={handleChatClick} 
                  className="btn btn-yellow text-lg font-semibold shadow-lg transform hover:scale-105 transition-all bg-eixo-yellow text-black py-3 px-6 rounded-full"
                >
                  Converse com alguém
                </a>
                {/* Botões adicionais para navegação em outras seções do projeto. */}
                <div className="flex flex-wrap gap-4 mt-4 sm:mt-0">
                  <Link to="/projeto" className="btn btn-primary">
                    Entenda o Projeto
                  </Link>
                  <Link to="/duvidas" className="btn btn-secondary">
                    Tire suas Dúvidas
                  </Link>
                </div>
              </div>
            </div>
            {/* Imagem da seção Hero, com proporção de aspecto e fallback para erro. */}
            <div className="w-full md:w-1/2">
              <AspectRatio ratio={3/2} className="max-w-md mx-auto">
                <img 
                  alt="Eixo - HIV não é o fim" 
                  className="w-full h-full object-contain" 
                  src="/lovable-uploads/fe33eafd-ae4d-4a34-8dfc-dfd92a1031a0.png"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1579684288307-5e0d45789e8d?q=80&w=580&auto=format&fit=crop";
                  }}
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre o Eixo: Informações gerais sobre o projeto. */}
      <section className="bg-eixo-purple bg-opacity-20 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">Sobre o Eixo</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            O Eixo é um projeto dedicado a oferecer apoio, informação de qualidade e um espaço seguro para pessoas que vivem com HIV,
            seus amigos e familiares. Nosso objetivo é combater a desinformação, reduzir o estigma e mostrar que é possível viver uma vida plena e feliz com HIV.
          </p>
          <Link to="/projeto" className="btn btn-primary">
            Conheça Mais
          </Link>
        </div>
      </section>

      {/* Seção de Serviços/Recursos: Usa o componente FeatureSection para listar as principais funcionalidades. */}
      <section className="bg-white">
        {/* Recurso 1: Encontrar apoio (ONGs). */}
        <FeatureSection
          title="Encontre apoio perto de você"
          description="Descubra organizações e casas de apoio em todo o Brasil. Um lugar seguro para encontrar acolhimento e suporte especializado."
          imageSrc="/locais.svg"
          buttonText="Buscar ONGs"
          buttonLink="/encontre-apoio"
          imagePosition="left"
        />

        {/* Recurso 2: Histórias de vida. */}
        <FeatureSection
          title="Inspire-se com histórias de vida"
          description="Leia relatos reais de pessoas que vivem com HIV, compartilhando suas jornadas de superação, aprendizado e esperança."
          imageSrc="/historias.svg"
          buttonText="Ver Histórias"
          buttonLink="/historias"
          imagePosition="right"
        />

        {/* Recurso 3: Perguntas e respostas (dúvidas e chat). */}
        <FeatureSection
          title="Tire todas as suas dúvidas"
          description="Acesse informações confiáveis e respostas claras sobre HIV, tratamento, prevenção e direitos. Conte também com nosso chat de apoio."
          imageSrc="/duvidas.svg"
          buttonText="Ver Perguntas"
          buttonLink="/duvidas"
          imagePosition="left"
        />
      </section>

      {/* Seção de Depoimentos: Exibe uma grade de cards de depoimentos. */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto">
          {/* Título opcional para a seção de depoimentos (pode ser adicionado aqui se desejar). */}
          {/* <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800">O que as pessoas estão dizendo</h2> */}

          {/* Grade de cards de depoimentos. */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Card de Depoimento 1. */}
            <TestimonialCard 
              id="eduardo" // ID único do depoimento.
              quote="É muito ruim ter alguma coisa na gente sobre a qual você não se sente confortável de falar. Isso impede muitos processos de cura." 
              name="Eduardo" 
              role="Criador de conteúdo" 
              bgColor="bg-eixo-yellow" 
            />
            
            {/* Card de Depoimento 2. */}
            <TestimonialCard 
              id="lara" // ID único do depoimento.
              quote="Sei que o assunto ainda é tabu, não há informação correta, muitas coisas são estigmatizadas; precisamos dar visibilidade a pauta do HIV nos espaços que ocupamos." 
              name="Lara" 
              role="Psicóloga e ativista" 
              bgColor="bg-eixo-lightBlue" 
            />

            {/* Card de Depoimento 3. */}
            <TestimonialCard 
              id="camila" // ID único do depoimento.
              quote="É legal ter HIV? Claro que não. Mas é importante saber que qualquer um que tenha uma vida sexual ativa é vulnerável ao vírus. As pessoas precisam cair na real." 
              name="Camila" 
              role="Ativista e consultora" 
              bgColor="bg-eixo-lightGreen" 
            />

            {/* Card de Depoimento 4. */}
            <TestimonialCard 
              id="guilherme" // ID único do depoimento.
              quote="O indetectável é aquele cara que tem uma carga viral tão baixa que não pode mais transmitir o vírus. Então, quando a gente chega nesse ponto, se sente meio super-herói mesmo." 
              name="Guilherme" 
              role="Criador de conteúdo" 
              bgColor="bg-eixo-lightPurple" 
            />
          </div>
          
          {/* Botão centralizado para "Conheça mais histórias". */}
          <div className="text-center mt-12">
            <Link to="/historias" className="btn btn-primary">
              Conheça mais histórias
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index; // <-- ESTA LINHA É FUNDAMENTAL E FOI RE-ADICIONADA