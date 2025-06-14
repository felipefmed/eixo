import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from './ui/popover';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';
import ReactMarkdown from 'react-markdown';

// Create a chat context to control the chat state from other components
export const useChatState = (() => {
  let setIsOpenFunction: React.Dispatch<React.SetStateAction<boolean>> | null = null;
  
  return {
    registerSetIsOpen: (func: React.Dispatch<React.SetStateAction<boolean>>) => {
      setIsOpenFunction = func;
    },
    openChat: () => {
      if (setIsOpenFunction) {
        setIsOpenFunction(true);
      }
    }
  };
})();

// Definindo o tipo para as mensagens do chat
type ChatMessage = {
  text: string;
  sender: 'user' | 'ai' | 'volunteer';
};

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useState(false); // Estado: controla se o disclaimer foi aceito
  const [messages, setMessages] = useState<ChatMessage[]>([]); // Mensagens iniciam vazias
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // URL da sua Cloud Function
  const CLOUD_FUNCTION_URL = "https://askfaq-wx5kmwezkq-uc.a.run.app"; // Substitua pelo URL real se for diferente

  // Register the setIsOpen function with our chat state manager
  useEffect(() => {
    useChatState.registerSetIsOpen(setIsOpen);
  }, []);

  // Efeito para rolar automaticamente para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Efeito para adicionar a mensagem inicial da IA APENAS QUANDO O CHAT É ABERTO E O DISCLAIMER É ACEITO
  useEffect(() => {
    if (isOpen && hasAcceptedDisclaimer && messages.length === 0) {
      setMessages([{
        text: 'Olá! Estou aqui para oferecer apoio e informações sobre HIV. Como você está se sentindo hoje? Quer conversar sobre algo?',
        sender: 'ai'
      }]);
    }
    // Se o chat for fechado e depois reaberto SEM aceitar o disclaimer, as mensagens são resetadas
    // Isso garante que o usuário veja o disclaimer novamente ao reabrir o chat sem ter aceito
    if (!isOpen && !hasAcceptedDisclaimer && messages.length > 0) {
        setMessages([]);
    }
  }, [isOpen, hasAcceptedDisclaimer, messages.length]);


  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) {
      toast({
        title: "Mensagem vazia",
        description: "Por favor, digite sua mensagem.",
        variant: "destructive",
      });
      return;
    }

    const userMessageText = newMessage.trim();
    setMessages(prev => [...prev, { text: userMessageText, sender: 'user' }]);
    setNewMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(CLOUD_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          question: userMessageText,
          interactionType: "chat_acolhimento", 
          // O histórico completo será enviado aqui no próximo passo, quando a CF estiver pronta
          // history: messages.map(msg => ({ text: msg.text, sender: msg.sender })) 
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(
          `Erro na requisição: ${response.status} ${response.statusText} - Detalhes: ${errorData}`
        );
      }

      const data = await response.json();
      setMessages(prev => [...prev, { text: data.answer, sender: 'ai' }]);

    } catch (error) {
      console.error("Erro ao chamar Cloud Function para o chat:", error);
      toast({
        title: "Erro no chat",
        description: "Não foi possível obter uma resposta do assistente. Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
      setMessages(prev => [...prev, { text: "Ops! Não consegui processar sua mensagem agora. Por favor, tente novamente mais tarde ou entre em contato com nosso suporte.", sender: 'ai' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAcceptDisclaimer = () => {
    setHasAcceptedDisclaimer(true);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
    // Não alteramos hasAcceptedDisclaimer aqui, então o disclaimer aparecerá novamente.
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div
          className="fixed bottom-10 right-10 z-50"
          style={{ width: '64px', height: '64px' }}
        >
          <div
            className={`
              relative w-full h-full rounded-full flex items-center justify-center
              ${!isOpen ? 'eixo-chat-button-animation-wrapper' : 'bg-eixo-purple'}
            `}
          >
            <Button
              id="chat"
              className="w-full h-full rounded-full p-6 text-white hover:bg-eixo-purple/90 bg-eixo-purple"
              onClick={() => setIsOpen(prev => !prev)}
            > 
              {isOpen ? <X className="!size-7" /> : <MessageCircle className="!size-7" />}
            </Button>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent 
        className="w-80 sm:w-96 p-0 border-2 border-eixo-purple shadow-lg" 
        side="top" 
        align="end"
      >
        <div className="flex flex-col h-96">
          {/* Renderização Condicional do Disclaimer ou do Chat */}
          {!hasAcceptedDisclaimer ? (
            <div className="flex flex-col p-6 h-full text-center bg-white">
              <h3 className="font-bold text-lg mb-4 text-eixo-darkBlue">Bem-vindo ao chat do Eixo!</h3>
              
              {/* Container para o texto do disclaimer com scroll */}
              <div className="flex-1 overflow-y-auto px-2 mb-6">
                <p className="text-sm mb-4 text-gray-700">
                  Nossa proposta original é conectar você com <strong>voluntários humanos</strong> para um acolhimento empático e anônimo.
                  <br/><br/>
                  Atualmente, para fins de estudo e desenvolvimento de portfólio, este chat é operado por um <strong>assistente virtual de IA</strong>. Ele foi treinado para oferecer apoio e informações gerais sobre HIV.
                  <br/><br/>
                  Lembre-se: esta IA <strong>não substitui</strong> o aconselhamento profissional de médicos, psicólogos ou outros especialistas. Para orientações personalizadas e decisões de saúde, <strong>sempre procure um profissional qualificado.</strong>
                </p>
                <p className="text-sm text-gray-700">
                  Para saber mais sobre a missão e o futuro do projeto Eixo, visite a seção <a href="/projeto" className="text-eixo-purple hover:underline font-semibold">Projeto</a>.
                </p>
              </div>
              
              <Button 
                onClick={handleAcceptDisclaimer} 
                className="bg-eixo-purple hover:bg-eixo-purple/90 w-full mb-3"
              >
                Entendi e desejo continuar
              </Button>
              <Button 
                onClick={handleCloseChat} 
                variant="outline" 
                className="w-full text-eixo-purple border-eixo-purple hover:bg-eixo-purple/5"
              >
                Fechar
              </Button>
            </div>
          ) : (
            <>
              {/* Conteúdo do Chat Normal */}
              <div className="bg-eixo-purple text-white p-3">
                <h3 className="font-bold">Chat de Apoio (IA)</h3>
                <p className="text-xs">Converse com nosso assistente virtual.</p>
              </div>
              
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {messages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-2 rounded-lg ${
                        msg.sender === 'user' 
                          ? 'bg-eixo-purple text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {/* ReactMarkdown continua aqui para as mensagens do chat */}
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
                <Input
                  placeholder={isLoading ? "Enviando..." : "Digite sua mensagem..."}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button type="submit" className="bg-eixo-purple hover:bg-eixo-purple/90" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    'Enviar'
                  )}
                </Button>
              </form>
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ChatButton;