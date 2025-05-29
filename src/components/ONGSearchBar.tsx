import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type ONGSearchBarProps = {
  cidade: string;
  setCidade: (cidade: string) => void;
  onSearch?: () => void;
};

const ONGSearchBar: React.FC<ONGSearchBarProps> = ({
  cidade,
  setCidade,
  onSearch,
}) => {
  return (
    // Removi 'relative' e 'pr-2' do div pai. Mantemos 'flex' e 'items-center'
    <div className="mt-10 bg-white rounded-full shadow-xl flex items-center overflow-hidden max-w-xl">
      
      {/* O Input agora não tem ícone interno, apenas um padding padrão */}
      <Input
        type="text"
        placeholder="Em que cidade você está?"
        // Removi o pl-12, e o padding lateral do input será o padrão da classe flex-grow
        className="flex-grow border-0 focus-visible:ring-0 text-base px-6 py-6 h-auto"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        onKeyPress={(e) => {
            if (e.key === 'Enter' && onSearch) {
                onSearch();
            }
        }}
      />
      
      {/* O Botão agora contém o ícone da lupa e é o botão de busca */}
      <Button
        // Classes para centralizar o ícone e fazer o botão circular
        className="bg-white hover:bg-gray-100 text-eixo-black rounded-full w-16 h-16 flex items-center justify-center p-0 flex-shrink-0" 
        onClick={onSearch}
        type="button"
      >
        <Search size={24} /> {/* O ícone da lupa no tamanho original */}
      </Button>
    </div>
  );
};

export default ONGSearchBar;