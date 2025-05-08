
import React from 'react';
import Layout from '../components/Layout';

const EncontreONG = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Encontre uma ONG</h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Conecte-se com organizações que oferecem suporte, orientação e serviços 
          para pessoas que vivem com HIV em todo o Brasil.
        </p>

        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-12">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Buscar ONG</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Estado</label>
                <select className="w-full p-3 border border-gray-300 rounded-md">
                  <option value="">Selecione um estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Cidade</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-md" 
                  placeholder="Digite o nome da cidade"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Tipo de serviço</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Testagem</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Distribuição de PrEP</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Apoio psicológico</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Grupos de apoio</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Assistência jurídica</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Informação e educação</span>
                </label>
              </div>
            </div>
            
            <button className="btn btn-primary">
              Buscar
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* ONG Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">GIV - Grupo de Incentivo à Vida</h3>
              <p className="text-gray-600 mb-4">São Paulo, SP</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-eixo-lightPurple text-sm px-3 py-1 rounded-full">Grupos de apoio</span>
                <span className="bg-eixo-lightPurple text-sm px-3 py-1 rounded-full">Informação</span>
              </div>
              <p className="text-sm mb-4">
                O GIV é uma ONG que trabalha em defesa dos direitos das pessoas que 
                vivem com HIV/AIDS, oferecendo grupos de apoio e informação.
              </p>
              <a 
                href="http://giv.org.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-eixo-purple hover:underline font-medium inline-block mb-3"
              >
                giv.org.br
              </a>
              <div className="flex items-center gap-3">
                <button className="btn btn-yellow w-full">
                  Ver detalhes
                </button>
              </div>
            </div>
          </div>
          
          {/* ONG Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">ABIA - Associação Brasileira Interdisciplinar de AIDS</h3>
              <p className="text-gray-600 mb-4">Rio de Janeiro, RJ</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-eixo-lightBlue text-sm px-3 py-1 rounded-full">Educação</span>
                <span className="bg-eixo-lightBlue text-sm px-3 py-1 rounded-full">Direitos humanos</span>
              </div>
              <p className="text-sm mb-4">
                A ABIA atua na promoção da educação em HIV/AIDS e direitos humanos, 
                trabalhando para reduzir o estigma e promover políticas públicas.
              </p>
              <a 
                href="http://abiaids.org.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-eixo-purple hover:underline font-medium inline-block mb-3"
              >
                abiaids.org.br
              </a>
              <div className="flex items-center gap-3">
                <button className="btn btn-yellow w-full">
                  Ver detalhes
                </button>
              </div>
            </div>
          </div>
          
          {/* ONG Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">GAPA - Grupo de Apoio à Prevenção da AIDS</h3>
              <p className="text-gray-600 mb-4">Salvador, BA</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-eixo-lightGreen text-sm px-3 py-1 rounded-full">Testagem</span>
                <span className="bg-eixo-lightGreen text-sm px-3 py-1 rounded-full">Apoio psicológico</span>
              </div>
              <p className="text-sm mb-4">
                O GAPA oferece testagem gratuita para HIV, apoio psicológico para 
                pessoas vivendo com o vírus e seus familiares, além de promover campanhas de prevenção.
              </p>
              <a 
                href="http://gapabahia.org.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-eixo-purple hover:underline font-medium inline-block mb-3"
              >
                gapabahia.org.br
              </a>
              <div className="flex items-center gap-3">
                <button className="btn btn-yellow w-full">
                  Ver detalhes
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Quer incluir sua organização em nosso diretório ou reportar informações incorretas?
          </p>
          <button className="btn btn-primary">
            Entre em contato
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default EncontreONG;
