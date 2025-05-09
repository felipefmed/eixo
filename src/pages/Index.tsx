import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import FeatureSection from '../components/FeatureSection';
import TestimonialCard from '../components/TestimonialCard';
const Index = () => {
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
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/projeto" className="btn btn-primary">
                  Conheça o projeto
                </Link>
                <Link to="/duvidas" className="btn btn-secondary">
                  Tire suas dúvidas
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img alt="Eixo - HIV não é o fim" className="max-w-md mx-auto" src="/lovable-uploads/fe33eafd-ae4d-4a34-8dfc-dfd92a1031a0.png" />
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

      {/* Services Section */}
      <section className="bg-white">
        <FeatureSection title="Encontrar locais de apoio" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alique." imageSrc="https://cdn.pixabay.com/photo/2017/09/28/13/38/map-2795425_1280.png" buttonText="Saiba mais" buttonLink="/encontre-ong" imagePosition="left" />

        <FeatureSection title="Conhecer histórias" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alique." imageSrc="https://cdn.pixabay.com/photo/2017/08/06/00/27/people-2587156_1280.png" buttonText="Saiba mais" buttonLink="/historias" imagePosition="right" />

        <FeatureSection title="Sanar dúvidas" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alique." imageSrc="https://cdn.pixabay.com/photo/2017/01/31/15/33/question-2025102_1280.png" buttonText="Saiba mais" buttonLink="/duvidas" imagePosition="left" />
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <TestimonialCard quote="É muito ruim ter alguma coisa na gente sobre a qual você não se sente confortável de falar. Isso impede muitos processos de cura." name="Gabriel Estrela" role="Criador de conteúdo" imageUrl="https://randomuser.me/api/portraits/men/32.jpg" bgColor="bg-eixo-yellow" />
            
            <TestimonialCard quote="Sei que o assunto ainda é tabu, não há informação correta, muitas coisas são estigmatizadas; precisamos dar visibilidade a pauta do HIV nos espaços que ocupamos." name="Tamillys Lírio" role="Psicóloga e ativista" imageUrl="https://randomuser.me/api/portraits/women/44.jpg" bgColor="bg-eixo-lightBlue" />

            <TestimonialCard quote="É legal ter HIV? Claro que não. Mas é importante saber que qualquer um que tenha uma vida sexual ativa é vulnerável ao vírus. As pessoas precisam cair na real." name="Silvia Almeira" role="Ativista e consultora" imageUrl="https://randomuser.me/api/portraits/women/29.jpg" bgColor="bg-eixo-lightGreen" />

            <TestimonialCard quote="O indetectável é aquele cara que tem uma carga viral tão baixa que não pode mais transmitir o vírus. Então, quando a gente chega nesse ponto, se sente meio super-herói mesmo." name="João Netto" role="Criador de conteúdo" imageUrl="https://randomuser.me/api/portraits/men/64.jpg" bgColor="bg-eixo-lightPurple" />
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