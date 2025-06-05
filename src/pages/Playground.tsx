import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import TestimonialCard from '../components/TestimonialCard';
import { cn } from '@/lib/utils'; // Importar cn se não estiver importado

// Certifique-se que esses dados não tenham imageUrl, como conversamos
const stories = {
  'gabriel-estrela': {
    id: 'gabriel-estrela',
    quote: 'É muito ruim ter alguma coisa na gente sobre a qual você não se sente confortável de falar. Isso impede muitos processos de cura.',
    name: 'Gabriel Estrela',
    role: 'Criador de conteúdo',
    bgColor: 'bg-eixo-yellow',
  },
  'tamillys-lirio': {
    id: 'tamillys-lirio',
    quote: 'Sei que o assunto ainda é tabu, não há informação correta, muitas coisas são estigmatizadas; precisamos dar visibilidade a pauta do HIV nos espaços que ocupamos.',
    name: 'Tamillys Lírio',
    role: 'Psicóloga e ativista',
    bgColor: 'bg-eixo-lightBlue',
  },
  'silvia-almeida': {
    id: 'silvia-almeida',
    quote: 'É legal ter HIV? Claro que não. Mas é importante saber que qualquer um que tenha uma vida sexual ativa é vulnerável ao vírus. As pessoas precisam cair na real.',
    name: 'Silvia Almeira',
    role: 'Ativista e consultora',
    bgColor: 'bg-eixo-lightGreen',
  },
  'joao-netto': {
    id: 'joao-netto',
    quote: 'O indetectável é aquele cara que tem uma carga viral tão baixa que não pode mais transmitir o vírus. Então, quando a gente chega nesse ponto, se sente meio super-herói mesmo.',
    name: 'João Netto',
    role: 'Criador de conteúdo',
    bgColor: 'bg-eixo-lightPurple',
  },
    'mariana-santos': {
    id: 'mariana-santos',
    quote: 'Quando descobri meu diagnóstico, pensei que minha vida tinha acabado. Hoje, vivo normalmente, sigo meu tratamento e tenho um filho que nasceu sem o vírus.',
    name: 'Mariana Santos',
    role: 'Professora',
    bgColor: 'bg-eixo-yellow',
  },
  'carlos-ribeiro': {
    id: 'carlos-ribeiro',
    quote: 'É importante falar: viver com HIV hoje não é como nos anos 80 ou 90. A medicina avançou muito e podemos ter uma vida normal, com qualidade e longevidade.',
    name: 'Carlos Ribeiro',
    role: 'Médico e ativista',
    bgColor: 'bg-eixo-lightBlue',
  },
};

const TestimonialsPlayground = () => {
  // Iterando diretamente sobre os valores do objeto 'stories'
  const testimonialItems = Object.values(stories);

  return (
    <Layout>
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Elemento de fundo gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-eixo-lightPurple/20 to-eixo-yellow/20 -z-10"></div>

        {/* Formas nos cantos (ajuste a cor e o tamanho conforme necessário) */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-eixo-lightBlue/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-eixo-yellow/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800">
            O que as pessoas estão dizendo
          </h2>

          {/* NOVO LAYOUT - Grid com ajustes finos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-start">
            {testimonialItems.map((story, index) => {
              // Estilos de rotação e um leve deslocamento para dar um toque "solto" no estado normal
              let rotation = 0;
              let translateX = 0;
              let translateY = 0;
              let zIndex = 10; // Z-index base para todos

              // <<-- DECLARAÇÕES MOVIDAS PARA CÁ PARA RESOLVER O ERRO DE TIPAGEM -->>
              let hoverRotation = 0;
              let hoverTranslateX = 0;
              let hoverTranslateY = 0;
              // <<----------------------------------------------------------------->>


              // Variações para criar o efeito "bagunçado" de forma controlada (estado normal)
              switch (index % 6) { // Usando módulo 6 para um ciclo de 6 variações de posição inicial
                case 0: rotation = -2; translateX = -8; translateY = 5; zIndex = 20; break;
                case 1: rotation = 3; translateX = 10; translateY = -5; zIndex = 30; break;
                case 2: rotation = 1; translateX = -5; translateY = 10; zIndex = 25; break;
                case 3: rotation = -3; translateX = 12; translateY = -8; zIndex = 35; break;
                case 4: rotation = 2; translateX = -10; translateY = 3; zIndex = 22; break;
                case 5: rotation = -1; translateX = 5; translateY = -10; zIndex = 32; break;
                default: break;
              }

              // Novas variações para a rotação e translação no HOVER
              switch (index % 3) { // 3 variações para o hover, baseadas no índice
                  case 0: hoverRotation = 2; hoverTranslateX = 8; hoverTranslateY = -8; break;
                  case 1: hoverRotation = -2; hoverTranslateX = -8; hoverTranslateY = 8; break;
                  case 2: hoverRotation = 0; hoverTranslateX = 0; hoverTranslateY = -12; break; // Apenas levantar mais
                  default: break;
              }

              // Classes de hover combinadas para todos os efeitos
              const hoverClasses = cn(
                `hover:scale-105`, // Leve aumento de escala
                `hover:rotate-[${hoverRotation}deg]`, // Nova rotação sutil no hover
                `hover:translate-x-[${hoverTranslateX}px]`, // Deslocamento horizontal no hover
                `hover:translate-y-[${hoverTranslateY}px]`, // Deslocamento vertical no hover
                `transition-all duration-300 ease-in-out`, // Transição suave
                `hover:shadow-xl` // Sombra mais forte
              );

              return (
                <div
                  key={story.id}
                  // Aplicando as transformações e z-index ao container do card no grid
                  // Adicionado mb-12 para compensar o 'rabo' do balão e o espaço abaixo do card no grid
                  className={cn(
                    "mb-12", // Margem inferior para espaçamento entre linhas do grid
                    `transform rotate-[${rotation}deg] translate-x-[${translateX}px] translate-y-[${translateY}px]`, // Transformações iniciais
                    hoverClasses, // Classes de hover
                    `z-[${zIndex}]`, // z-index aplicado para sobreposição sutil
                    `origin-center` // Ponto de origem da transformação no centro
                  )}
                >
                  <TestimonialCard
                    id={story.id}
                    quote={story.quote}
                    name={story.name}
                    role={story.role}
                    bgColor={story.bgColor}
                  />
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16"> {/* Ajuste a margem superior se necessário */}
            <Link to="/historias" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-eixo-purple hover:bg-eixo-purple/90 md:py-4 md:text-lg md:px-10 transition duration-300">
              Conheça mais histórias
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestimonialsPlayground;