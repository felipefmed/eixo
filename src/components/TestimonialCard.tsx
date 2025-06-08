import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type TestimonialCardProps = {
  id: string;
  quote: string;
  name: string;
  role: string;
  bgColor: string;
  imageUrl: string; // <-- CORREÇÃO: Adicione esta linha
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  id,
  quote,
  name,
  role,
  bgColor,
  imageUrl // <-- CORREÇÃO: Desestruture imageUrl, pois você está passando-o.
            // Mesmo que não use o prop aqui, o TypeScript precisa saber que ele é recebido.
}) => {
  return (
    <div className="relative rounded-lg shadow-lg overflow-hidden flex flex-col h-full"> {/* Adicionado flex flex-col h-full */}
      {/* Corpo do balão com a citação */}
      <div className={cn(
        "relative px-6 py-4 flex-grow", // Flex-grow para ocupar espaço disponível
        bgColor,
        "rounded-t-lg", // Arredondar apenas topo
        // Estilos para simular o balão
        "min-h-[100px] max-h-[150px] md:min-h-[120px] md:max-h-[160px] lg:min-h-[140px] lg:max-h-[180px]", // Altura controlada
        "flex items-center" // Alinhar texto verticalmente no centro
      )}>
        {/* A classe 'italic' foi removida daqui! */}
        <p className="text-eixo-black text-base md:text-lg leading-relaxed line-clamp-4">
            "{quote}"
        </p>
        {/* Opcional: Adicione um pequeno "rabo" ao balão no topo */}
        <div className={cn(
            "absolute bottom-0 left-6 transform translate-y-full", // Posição do rabo
            "border-t-[15px] border-l-[15px] border-r-[15px] border-l-transparent border-r-transparent",
            // A cor da borda-t deve ser a mesma do bgColor do balão
            bgColor === 'bg-eixo-yellow' ? 'border-t-eixo-yellow' :
            bgColor === 'bg-eixo-lightBlue' ? 'border-t-eixo-lightBlue' :
            bgColor === 'bg-eixo-lightGreen' ? 'border-t-eixo-lightGreen' :
            bgColor === 'bg-eixo-lightPurple' ? 'border-t-eixo-lightPurple' :
            'border-t-gray-200' // Cor padrão se nenhuma corresponder
        )}></div>
      </div>

      {/* Seção do autor e botão */}
      <div className="px-6 py-3 bg-white flex items-center justify-between rounded-b-lg"> {/* Arredondar apenas base */}
        <div className="flex flex-col items-start">
          {/* Se você quisesse exibir a imagem, faria algo como: */}
          {/* {imageUrl && <img src={imageUrl} alt={name} className="w-10 h-10 rounded-full mr-2" />} */}
          <h4 className="font-semibold text-sm">{name}</h4>
          <p className="text-gray-600 text-xs">{role}</p>
        </div>
        <Link to={`/historias/${id}`} className="group">
          <Button
            variant="ghost"
            size="sm"
            className="p-0 h-auto text-black hover:text-gray-700 hover:bg-transparent text-xs"
          >
            Conheça mais <ArrowRight size={12} className="ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TestimonialCard;