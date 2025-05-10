
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import FeatureSection from '../components/FeatureSection';
import TestimonialCard from '../components/TestimonialCard';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useChatState } from '../components/ChatButton';

// Array of features to rotate through
const features = [
  {
    title: "Encontrar locais de apoio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alique.",
    imageSrc: "https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder.png?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3",
    buttonText: "Saiba mais",
    buttonLink: "/encontre-apoio",
    imagePosition: "left" as const
  },
  {
    title: "Conhecer histórias",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alique.",
    imageSrc: "https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder.png?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
    buttonText: "Saiba mais",
    buttonLink: "/historias",
    imagePosition: "right" as const
  },
  {
    title: "Sanar dúvidas",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alique.",
    imageSrc: "https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder.png?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
    buttonText: "Saiba mais",
    buttonLink: "/duvidas",
    imagePosition: "left" as const
  },
  {
    title: "Viver positivamente",
    description: "Informações e recursos para viver uma vida plena e positiva, mesmo com diagnóstico de HIV, garantindo qualidade de vida e bem-estar.",
    imageSrc: "https://images.unsplash.com/photo-1579684288307-5e0d45789e8d?q=80&w=580&auto=format&fit=crop",
    buttonText: "Descubra mais",
    buttonLink: "/projeto",
    imagePosition: "right" as const
  },
  {
    title: "Conectar com a comunidade",
    description: "Entre em contato com uma rede de apoio formada por pessoas que vivem experiências semelhantes e profissionais dedicados.",
    imageSrc: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=580&auto=format&fit=crop",
    buttonText: "Conecte-se",
    buttonLink: "/encontre-apoio",
    imagePosition: "left" as const
  }
];

const Index = () => {
  const { openChat } = useChatState;
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [showFeature, setShowFeature] = useState(true);

  // Function to rotate through features
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFeature(false);
      
      setTimeout(() => {
        setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
        setShowFeature(true);
      }, 500); // Time for exit animation to complete
      
    }, 8000); // Change every 8 seconds
    
    return () => clearInterval(interval);
  }, []);

  const handleChatClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openChat();
  };

  return <Layout>
      {/* Hero Section */}
      <section className="relative bg-white py-24 md:py-32 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Olá, <br />
                estamos aqui pra te <br />
                mostrar que não é o fim.
              </h1>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
                <a 
                  href="#" 
                  onClick={handleChatClick} 
                  className="btn btn-yellow text-lg font-semibold transform hover:scale-105 transition-all bg-eixo-yellow text-black py-3 px-6 rounded-full"
                >
                  Converse com alguém
                </a>
                <div className="flex flex-wrap gap-4 mt-4 sm:mt-0">
                  <Link to="/projeto" className="btn btn-primary">
                    Conheça o projeto
                  </Link>
                  <Link to="/duvidas" className="btn btn-secondary">
                    Tire suas dúvidas
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo quis nostris 
            nibh cras. Ut pharetra sit amet aliquam id diam.
          </p>
          <Link to="/projeto" className="btn btn-primary">
            Saiba mais
          </Link>
        </div>
      </section>

      {/* Services Section with rotating features */}
      <section className="bg-white">
        {showFeature && (
          <FeatureSection 
            key={currentFeatureIndex}
            title={features[currentFeatureIndex].title} 
            description={features[currentFeatureIndex].description} 
            imageSrc={features[currentFeatureIndex].imageSrc} 
            buttonText={features[currentFeatureIndex].buttonText} 
            buttonLink={features[currentFeatureIndex].buttonLink} 
            imagePosition={features[currentFeatureIndex].imagePosition}
            isAnimated={true}
          />
        )}
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <TestimonialCard quote="É muito ruim ter alguma coisa na gente sobre a qual você não se sente confortável de falar. Isso impede muitos processos de cura." name="Gabriel Estrela" role="Criador de conteúdo" imageUrl="https://i.pravatar.cc/150?u=gabriel" bgColor="bg-eixo-yellow" />
            
            <TestimonialCard quote="Sei que o assunto ainda é tabu, não há informação correta, muitas coisas são estigmatizadas; precisamos dar visibilidade a pauta do HIV nos espaços que ocupamos." name="Tamillys Lírio" role="Psicóloga e ativista" imageUrl="https://i.pravatar.cc/150?u=tamillys" bgColor="bg-eixo-lightBlue" />

            <TestimonialCard quote="É legal ter HIV? Claro que não. Mas é importante saber que qualquer um que tenha uma vida sexual ativa é vulnerável ao vírus. As pessoas precisam cair na real." name="Silvia Almeira" role="Ativista e consultora" imageUrl="https://i.pravatar.cc/150?u=silvia" bgColor="bg-eixo-lightGreen" />

            <TestimonialCard quote="O indetectável é aquele cara que tem uma carga viral tão baixa que não pode mais transmitir o vírus. Então, quando a gente chega nesse ponto, se sente meio super-herói mesmo." name="João Netto" role="Criador de conteúdo" imageUrl="https://i.pravatar.cc/150?u=joao" bgColor="bg-eixo-lightPurple" />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/historias" className="btn btn-primary">
              Conheça mais histórias
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;
