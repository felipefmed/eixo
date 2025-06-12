import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { ArrowRight } from 'lucide-react'; 
import { cn } from '@/lib/utils'; 
import { Button } from '@/components/ui/button'; 

// Definição dos tipos (props) que o componente TestimonialCard aceita. Isso garante que o componente receba os dados esperados e ajuda o TypeScript a validar o uso.
type TestimonialCardProps = {
  id: string; // ID único do depoimento, usado para criar um link específico para a história completa.
  quote: string; // O texto principal do depoimento (a citação).
  name: string; // Nome da pessoa que deu o depoimento.
  role: string; // Cargo ou função da pessoa (ex: "Criador de conteúdo", "Psicóloga e ativista").
  bgColor: string; // Classe CSS que define a cor de fundo do "balão" do depoimento (ex: "bg-eixo-yellow").
};

// Componente funcional TestimonialCard.
// Ele recebe as propriedades definidas em TestimonialCardProps.
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  id,
  quote,
  name,
  role,
  bgColor,
}) => {
  return (
    // Contêiner principal do card de depoimento.
    // Este <div> encapsula todo o visual do card.
    <div className={cn(
      "relative", // Permite o posicionamento absoluto de elementos filhos (como o rabo do balão).
      "rounded-lg", // Arredonda os cantos do card com um raio grande (Tailwind por padrão).
      "shadow-lg", // Aplica uma sombra ao card para dar profundidade.
      "overflow-hidden", // Garante que qualquer conteúdo que exceda os limites do card seja cortado (útil para bordas arredondadas).
      "flex flex-col", // Transforma o <div> em um contêiner flexbox com itens organizados em coluna.
      "h-full", // Faz com que o card ocupe 100% da altura do seu contêiner pai (útil em grids).

      // Classes de transição e hover:
      // Estas classes definem o comportamento de animação quando o mouse passa sobre o card.
      "transition-all duration-100 ease-in-out", // Aplica uma transição suave (duração de 100ms, curva ease-in-out) para TODAS as propriedades CSS que mudarem no hover.
      "hover:scale-105", // No hover, o card aumenta seu tamanho em 5% (scale de 1 para 1.05).
      "hover:shadow-xl" // No hover, a sombra do card se torna mais proeminente (shadow-xl é maior que shadow-lg).
    )}>

      {/* Seção superior do card: o "balão" com a citação do depoimento. */}
      {/* Este <div> é a área onde a citação e a cor de fundo do balão são exibidas. */}
      <div className={cn(
        "relative", // Permite o posicionamento absoluto do "rabo" do balão dentro desta seção.
        "px-6 py-4", // Adiciona preenchimento horizontal (6 unidades) e vertical (4 unidades).
        "flex-grow", // Permite que esta seção ocupe o máximo de espaço vertical possível dentro do card flexbox.
        bgColor, // Aplica a cor de fundo recebida via prop (ex: "bg-eixo-yellow").
        "rounded-t-lg", // Arredonda apenas os cantos superiores do balão.
        // Define alturas mínimas e máximas para o balão em diferentes tamanhos de tela (mobile, médio, grande).
        "min-h-[100px] max-h-[150px] md:min-h-[120px] md:max-h-[160px] lg:min-h-[140px] lg:max-h-[180px]",
        "flex items-center" // Usa flexbox para centralizar verticalmente o conteúdo (a citação) dentro do balão.
      )}>
        {/* Parágrafo que contém o texto da citação. */}
        <p className="text-eixo-black text-base md:text-lg leading-relaxed line-clamp-4">
            "{quote}" {/* A citação é exibida entre aspas. */}
        </p>
        {/* Elemento que cria o "rabo" ou "ponta" do balão de fala, apontando para baixo. */}
        {/* É um triângulo CSS puro, posicionado de forma absoluta. */}
        <div className={cn(
            "absolute bottom-0 left-6", // Posiciona o elemento na parte inferior, 6 unidades da esquerda.
            "transform translate-y-full", // Move o elemento para baixo pela sua própria altura, colocando-o abaixo da borda inferior do balão.
            "border-t-[15px] border-l-[15px] border-r-[15px]", // Cria um triângulo usando bordas: borda superior é a base, laterais são transparentes.
            "border-l-transparent border-r-transparent", // Garante que as bordas esquerda e direita sejam transparentes.
            // Lógica condicional para definir a cor da borda superior (o "rabo") com base na cor de fundo do balão.
            bgColor === 'bg-eixo-yellow' ? 'border-t-eixo-yellow' :
            bgColor === 'bg-eixo-lightBlue' ? 'border-t-eixo-lightBlue' :
            bgColor === 'bg-eixo-lightGreen' ? 'border-t-eixo-lightGreen' :
            bgColor === 'bg-eixo-lightPurple' ? 'border-t-eixo-lightPurple' :
            'border-t-gray-200' // Cor padrão (fallback) se nenhuma cor corresponder.
        )}></div>
      </div>

      {/* Seção inferior do card: informações do autor e botão "Conheça mais". */}
      {/* Esta seção fica abaixo do balão e contém os detalhes da pessoa e o link. */}
      <div className="px-6 py-3 bg-white flex items-center justify-between rounded-b-lg">
        {/* Contêiner para o nome e função do autor do depoimento. */}
        <div className="flex flex-col items-start">
          {/* Título com o nome do autor. */}
          <h4 className="font-semibold text-sm">{name}</h4>
          {/* Parágrafo com a função ou cargo do autor, em texto menor e cinza. */}
          <p className="text-gray-600 text-xs">{role}</p>
        </div>
        {/* Link para a página de histórias completas do autor. */}
        <Link to={`/historias/${id}`} className="group">
          {/* Componente Button (provavelmente Shadcn UI) com estilo transparente. */}
          <Button
            variant="ghost" // Estilo "fantasma" (sem fundo, transparente).
            size="sm" // Tamanho pequeno do botão.
            className="p-0 h-auto text-black hover:text-gray-700 hover:bg-transparent text-xs"
          >
            Conheça mais <ArrowRight size={12} className="ml-1" /> {/* Texto e ícone de seta. */}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TestimonialCard; // Exporta o componente TestimonialCard como a exportação padrão deste módulo.