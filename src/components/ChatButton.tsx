
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from './ui/button';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from './ui/popover';
import { Input } from './ui/input';

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

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, sender: 'user' | 'volunteer'}[]>([
    {
      text: 'Olá! Como posso ajudá-lo(a) hoje? Sou um voluntário treinado e estou aqui para oferecer apoio e responder suas dúvidas sobre HIV.',
      sender: 'volunteer'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  // Register the setIsOpen function with our chat state manager
  useEffect(() => {
    useChatState.registerSetIsOpen(setIsOpen);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Adicionar mensagem do usuário
      setMessages([...messages, {text: newMessage, sender: 'user'}]);
      setNewMessage('');
      
      // Simular resposta do voluntário após 1 segundo
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: 'Obrigado por sua mensagem. Um de nossos voluntários capacitados irá responder em breve. Estamos aqui para ajudar com informações e apoio.',
          sender: 'volunteer'
        }]);
      }, 1000);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button 
          id="chat"
          className="fixed bottom-6 right-6 rounded-full p-6 shadow-lg bg-eixo-purple text-white hover:bg-eixo-purple/90"
          onClick={() => setIsOpen(prev => !prev)}
          style={{ width: '64px', height: '64px' }} // Making the chat button bigger
        >
          {isOpen ? <X size={48} /> : <MessageCircle size={48} />}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-80 sm:w-96 p-0 border-2 border-eixo-purple" 
        side="top" 
        align="end"
      >
        <div className="flex flex-col h-96">
          <div className="bg-eixo-purple text-white p-3">
            <h3 className="font-bold">Chat de Apoio</h3>
            <p className="text-xs">Converse com nossos voluntários capacitados</p>
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
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
            <Input
              placeholder="Digite sua mensagem..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="bg-eixo-purple hover:bg-eixo-purple/90">
              Enviar
            </Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ChatButton;
