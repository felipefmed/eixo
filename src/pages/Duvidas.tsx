
import React from "react";
import Layout from "../components/Layout";
import AIQuestionBox from "../components/AIQuestionBox";
import FAQAccordion from "../components/FAQAccordion";
import ContactBox from "../components/ContactBox";

const Duvidas = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Dúvidas Frequentes
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Respostas para as perguntas mais comuns sobre HIV, tratamentos, 
          prevenção e como viver bem após o diagnóstico.
        </p>
        <div className="max-w-3xl mx-auto mb-16">
          <AIQuestionBox />
          <FAQAccordion />
          <ContactBox />
        </div>
      </div>
    </Layout>
  );
};

export default Duvidas;
