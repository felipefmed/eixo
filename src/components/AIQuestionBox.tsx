import React, { useState } from "react";
import { Loader2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from 'react-markdown';

const AIQuestionBox: React.FC = () => {
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const CLOUD_FUNCTION_URL = "https://askfaq-wx5kmwezkq-uc.a.run.app"; // Seu URL da Cloud Function

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!aiQuestion.trim()) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor digite sua pergunta antes de enviar.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setAiAnswer(null);

    try {
      const response = await fetch(CLOUD_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: aiQuestion }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(
          `Erro na requisição: ${response.status} ${response.statusText} - Detalhes: ${errorData}`
        );
      }

      const data = await response.json();
      setAiAnswer(data.answer);

    } catch (error) {
      console.error("Erro ao chamar Cloud Function:", error);
      toast({
        title: "Erro ao processar sua pergunta",
        description: "Por favor tente novamente mais tarde. Detalhes: " + (error instanceof Error ? error.message : String(error)),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-eixo-lightBlue bg-opacity-20 p-8 rounded-xl mb-12">
      <h2 className="text-2xl font-bold mb-4">Pergunte à IA</h2>
      <p className="mb-6">
        Tem uma pergunta específica? Nosso assistente de IA pode ajudar a responder suas dúvidas sobre HIV e saúde.
      </p>
      <form onSubmit={handleAskAI} className="flex gap-4 mb-6 items-center">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Digite sua pergunta..."
            value={aiQuestion}
            onChange={(e) => setAiQuestion(e.target.value)}
            className="pr-10 py-6"
            disabled={isLoading}
          />
          {isLoading && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
            </div>
          )}
        </div>
        <Button type="submit" disabled={isLoading}>
          <Search className="mr-2 h-4 w-4" />
          Perguntar
        </Button>
      </form>
      {aiAnswer && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium mb-2">Resposta:</h3>
          <div className="text-gray-700">
            <ReactMarkdown>{aiAnswer}</ReactMarkdown>
          </div>
        </div>
      )}

      {/* NOVO: Seção de Disclaimer da IA */}
      {aiAnswer && ( // Mostra o disclaimer apenas se houver uma resposta
        <div className="bg-eixo-darkBlue bg-opacity-5 p-4 rounded-lg mt-4 text-sm text-eixo-darkBlue">
          <p className="font-semibold mb-1">Atenção:</p>
          <p>Este assistente de IA está em fase de evolução e aprendizado. As informações fornecidas são para fins de apoio geral e não substituem a consulta a profissionais de saúde. Para informações precisas sobre diagnóstico, tratamento ou aconselhamento pessoal, sempre procure um médico, terapeuta ou especialista da área. Não confie 100% nas respostas geradas pela IA.</p>
        </div>
      )}
    </div>
  );
};

export default AIQuestionBox;