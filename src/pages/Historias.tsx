
import React from 'react';
import Layout from '../components/Layout';
import TestimonialCard from '../components/TestimonialCard';

const Historias = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Histórias</h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Conheça histórias de pessoas que vivem com HIV e como encontraram força, 
          apoio e uma nova perspectiva de vida após o diagnóstico.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TestimonialCard 
            quote="É muito ruim ter alguma coisa na gente sobre a qual você não se sente confortável de falar. Isso impede muitos processos de cura."
            name="Gabriel Estrela"
            role="Criador de conteúdo"
            imageUrl="https://randomuser.me/api/portraits/men/32.jpg"
            bgColor="bg-eixo-yellow"
          />
          
          <TestimonialCard 
            quote="Sei que o assunto ainda é tabu, não há informação correta, muitas coisas são estigmatizadas; precisamos dar visibilidade a pauta do HIV nos espaços que ocupamos."
            name="Tamillys Lírio"
            role="Psicóloga e ativista"
            imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
            bgColor="bg-eixo-lightBlue"
          />
          
          <TestimonialCard 
            quote="É legal ter HIV? Claro que não. Mas é importante saber que qualquer um que tenha uma vida sexual ativa é vulnerável ao vírus. As pessoas precisam cair na real."
            name="Silvia Almeira"
            role="Ativista e consultora"
            imageUrl="https://randomuser.me/api/portraits/women/29.jpg"
            bgColor="bg-eixo-lightGreen"
          />
          
          <TestimonialCard 
            quote="O indetectável é aquele cara que tem uma carga viral tão baixa que não pode mais transmitir o vírus. Então, quando a gente chega nesse ponto, se sente meio super-herói mesmo."
            name="João Netto"
            role="Criador de conteúdo"
            imageUrl="https://randomuser.me/api/portraits/men/64.jpg"
            bgColor="bg-eixo-lightPurple"
          />
          
          <TestimonialCard 
            quote="Quando descobri meu diagnóstico, pensei que minha vida tinha acabado. Hoje, vivo normalmente, sigo meu tratamento e tenho um filho que nasceu sem o vírus."
            name="Mariana Santos"
            role="Professora"
            imageUrl="https://randomuser.me/api/portraits/women/17.jpg"
            bgColor="bg-eixo-yellow"
          />
          
          <TestimonialCard 
            quote="É importante falar: viver com HIV hoje não é como nos anos 80 ou 90. A medicina avançou muito e podemos ter uma vida normal, com qualidade e longevidade."
            name="Carlos Ribeiro"
            role="Médico e ativista"
            imageUrl="https://randomuser.me/api/portraits/men/22.jpg"
            bgColor="bg-eixo-lightBlue"
          />
        </div>
        
        <div className="text-center mt-12">
          <button className="btn btn-primary">
            Compartilhe sua história
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Historias;
