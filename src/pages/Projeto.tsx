
import React from 'react';
import Layout from '../components/Layout';

const Projeto = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">O Projeto</h1>
        <div className="max-w-3xl mx-auto">
          <p className="mb-6 text-lg">
            O Eixo nasceu da necessidade de fornecer informação confiável e apoio 
            para pessoas que acabaram de descobrir que vivem com HIV. Nosso objetivo 
            é combater o estigma, promover o diálogo aberto e mostrar que um 
            diagnóstico de HIV não é o fim, mas um novo capítulo.
          </p>
          <p className="mb-6 text-lg">
            Nossa equipe multidisciplinar inclui profissionais de saúde, pessoas 
            que vivem com HIV e especialistas em comunicação em saúde, todos 
            comprometidos em criar um espaço seguro e informativo.
          </p>
          <p className="mb-10 text-lg">
            Trabalhamos em colaboração com ONGs e serviços de saúde para garantir 
            que nossas informações sejam precisas e atualizadas, e para conectar 
            as pessoas aos recursos necessários para seu tratamento e bem-estar.
          </p>
          
          <div className="bg-eixo-lightPurple p-8 rounded-xl mb-10">
            <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
            <p className="text-lg">
              Promover informação de qualidade, combater o estigma e conectar 
              pessoas que vivem com HIV a uma rede de apoio, mostrando que é possível 
              viver uma vida plena e saudável após o diagnóstico.
            </p>
          </div>
          
          <div className="bg-eixo-lightBlue p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Nossa Visão</h2>
            <p className="text-lg">
              Um mundo onde o HIV não seja mais fonte de discriminação ou estigma, 
              e onde todas as pessoas que vivem com o vírus tenham acesso a tratamento, 
              apoio e possam viver sem medo ou preconceito.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projeto;
