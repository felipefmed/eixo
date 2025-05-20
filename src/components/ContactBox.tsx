
import React from "react";
import { useChatState } from "../components/ChatButton";

const ContactBox: React.FC = () => {
  const openChat = useChatState.openChat;
  return (
    <div className="mt-12 bg-eixo-lightGreen p-8 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h2>
      <p className="mb-6">
        Se você não encontrou resposta para suas dúvidas aqui, entre em 
        contato conosco ou consulte um profissional de saúde.
      </p>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => openChat()}
      >
        Entre em contato
      </button>
    </div>
  );
};

export default ContactBox;
