
import React from "react";
import { Button } from "@/components/ui/button";

type AdvancedSearchFormProps = {
  // Add props as needed (for now, standalone UI)
};

const AdvancedSearchForm: React.FC<AdvancedSearchFormProps> = () => {
  return (
    <div className="p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6">Busca avançada</h2>
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
        <label className="block text-sm font-medium mb-2">
          Tipo de serviço
        </label>
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
      <Button className="btn btn-primary">Buscar</Button>
    </div>
  );
};

export default AdvancedSearchForm;
