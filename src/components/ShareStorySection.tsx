
import React from "react";

const ShareStorySection = () => {
  return (
    <div className="bg-eixo-lightPurple bg-opacity-20 rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-6">Compartilhe sua história</h3>
      <p className="text-gray-700 mb-4">
        Sua experiência pode inspirar outras pessoas. Compartilhe sua jornada conosco e ajude a quebrar estigmas.
      </p>
      <p className="text-gray-700 mb-6">
        Para compartilhar sua história, envie um email para <a href="mailto:contato@eixo.org" className="text-eixo-purple font-semibold hover:text-violet-500 underline">contato@eixo.org</a> com o assunto "Minha História".
      </p>
      <p className="text-gray-700 italic">
        Todas as histórias passam por um processo de revisão antes de serem publicadas. Sua privacidade será respeitada.
      </p>
    </div>
  );
};

export default ShareStorySection;
