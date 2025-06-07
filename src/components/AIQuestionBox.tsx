import React, { useState } from "react";
import { Loader2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const AIQuestionBox: React.FC = () => {
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // ***** SUBSTITUA ESTE PLACEHOLDER PELO URL REAL DA SUA CLOUD FUNCTION *****
  const CLOUD_FUNCTION_URL = "https://askfaq-wx5kmwezkq-uc.a.run.app";

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
      // ***** AQUI VAI A CHAMADA REAL PARA A CLOUD FUNCTION *****
      const response = await fetch(CLOUD_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: aiQuestion }), // Envia a pergunta do usuário
      });

      if (!response.ok) {
        // Se a resposta não for OK (status 200), joga um erro
        // Tenta pegar mais detalhes do erro do corpo da resposta, se disponível
        const errorData = await response.text(); // Pega o corpo da resposta como texto
        throw new Error(
          `Erro na requisição: ${response.status} ${response.statusText} - Detalhes: ${errorData}`
        );
      }

      const data = await response.json(); // Espera a resposta em JSON do Cloud Function
      setAiAnswer(data.answer); // Define a resposta recebida da IA

    } catch (error) {
      console.error("Erro ao chamar Cloud Function:", error); // Loga o erro completo para depuração
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
          <p className="text-gray-700">{aiAnswer}</p>
        </div>
      )}
    </div>
  );
};

export default AIQuestionBox;