import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import FeatureSection from '../components/FeatureSection';
import TestimonialCard from '../components/TestimonialCard';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useChatState } from '../components/ChatButton';

const Index = () => {
  const { openChat } = useChatState;

  const handleChatClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openChat();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white py-24 md:py-32 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Olá, <br />
                estamos aqui para te mostrar que não é o fim.
              </h1>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
                <a 
                  href="#" 
                  onClick={handleChatClick} 
                  className="btn btn-yellow text-lg font-semibold shadow-lg transform hover:scale-105 transition-all bg-eixo-yellow text-black py-3 px-6 rounded-full"
                >
                  Converse com alguém
                </a>
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

      {/* About Section */}
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

      {/* Services Section */}
      <section className="bg-white">
        <FeatureSection
          title="Encontre apoio perto de você"
          description="Descubra organizações e casas de apoio em todo o Brasil. Um lugar seguro para encontrar acolhimento e suporte especializado."
          imageSrc="https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder.png?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3"
          buttonText="Buscar ONGs"
          buttonLink="/encontre-apoio"
          imagePosition="left"
        />

        <FeatureSection
          title="Inspire-se com histórias de vida"
          description="Leia relatos reais de pessoas que vivem com HIV, compartilhando suas jornadas de superação, aprendizado e esperança."
          imageSrc="https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder.png?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3"
          buttonText="Ver Histórias"
          buttonLink="/historias"
          imagePosition="right"
        />

        <FeatureSection
          title="Tire todas as suas dúvidas"
          description="Acesse informações confiáveis e respostas claras sobre HIV, tratamento, prevenção e direitos. Conte também com nosso chat de apoio."
          imageSrc="https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder.png?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3"
          buttonText="Ver Perguntas"
          buttonLink="/duvidas"
          imagePosition="left"
        />
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Adicionado o 'id' para cada TestimonialCard */}
            <TestimonialCard 
              id="gabriel-estrela" // ID adicionado
              quote="É muito ruim ter alguma coisa na gente sobre a qual você não se sente confortável de falar. Isso impede muitos processos de cura." 
              name="Gabriel Estrela" 
              role="Criador de conteúdo" 
              imageUrl="https://i.pravatar.cc/150?u=gabriel" 
              bgColor="bg-eixo-yellow" 
            />
            
            <TestimonialCard 
              id="tamillys-lirio" // ID adicionado
              quote="Sei que o assunto ainda é tabu, não há informação correta, muitas coisas são estigmatizadas; precisamos dar visibilidade a pauta do HIV nos espaços que ocupamos." 
              name="Tamillys Lírio" 
              role="Psicóloga e ativista" 
              imageUrl="https://i.pravatar.cc/150?u=tamillys" 
              bgColor="bg-eixo-lightBlue" 
            />

            <TestimonialCard 
              id="silvia-almeida" // ID adicionado
              quote="É legal ter HIV? Claro que não. Mas é importante saber que qualquer um que tenha uma vida sexual ativa é vulnerável ao vírus. As pessoas precisam cair na real." 
              name="Silvia Almeira" 
              role="Ativista e consultora" 
              imageUrl="https://i.pravatar.cc/150?u=silvia" 
              bgColor="bg-eixo-lightGreen" 
            />

            <TestimonialCard 
              id="joao-netto" // ID adicionado
              quote="O indetectável é aquele cara que tem uma carga viral tão baixa que não pode mais transmitir o vírus. Então, quando a gente chega nesse ponto, se sente meio super-herói mesmo." 
              name="João Netto" 
              role="Criador de conteúdo" 
              imageUrl="https://i.pravatar.cc/150?u=joao" 
              bgColor="bg-eixo-lightPurple" 
            />
          </div>
          
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

export default Index;