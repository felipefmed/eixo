
import React from 'react';
import Layout from '../components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Duvidas = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Dúvidas Frequentes</h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Respostas para as perguntas mais comuns sobre HIV, tratamentos, 
          prevenção e como viver bem após o diagnóstico.
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">O que é HIV?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  HIV significa Vírus da Imunodeficiência Humana. É um vírus que 
                  ataca o sistema imunológico, especificamente as células CD4, 
                  que ajudam o corpo a combater infecções.
                </p>
                <p>
                  Sem tratamento, o HIV pode reduzir gradualmente o número dessas 
                  células, tornando a pessoa mais vulnerável a infecções oportunistas 
                  ou câncer. Com o tratamento adequado, no entanto, é possível 
                  manter uma carga viral indetectável e viver uma vida saudável.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Como o HIV é transmitido?</AccordionTrigger>
              <AccordionContent>
                <p>
                  O HIV pode ser transmitido através do contato com certos fluidos 
                  corporais de uma pessoa com HIV, incluindo sangue, sêmen, 
                  fluidos vaginais, fluidos retais e leite materno. As formas 
                  mais comuns de transmissão são:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Relações sexuais sem preservativo com uma pessoa com HIV</li>
                  <li>Compartilhamento de agulhas ou seringas</li>
                  <li>De mãe para bebê durante a gravidez, parto ou amamentação</li>
                </ul>
                <p className="mt-4">
                  É importante ressaltar que pessoas em tratamento com carga viral 
                  indetectável NÃO transmitem o HIV por via sexual.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">O que significa "indetectável = intransmissível"?</AccordionTrigger>
              <AccordionContent>
                <p>
                  "Indetectável = Intransmissível" (I=I) significa que uma pessoa 
                  com HIV que está em tratamento e mantém uma carga viral indetectável 
                  (tão baixa que os testes não conseguem detectá-la) não transmite 
                  o vírus por via sexual.
                </p>
                <p className="mt-4">
                  Estudos científicos extensos comprovaram que pessoas que estão 
                  em tratamento e atingem e mantêm uma carga viral indetectável 
                  não transmitem o HIV para parceiros sexuais, mesmo sem o uso 
                  de preservativos.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">Qual é o tratamento para o HIV?</AccordionTrigger>
              <AccordionContent>
                <p>
                  O tratamento para HIV é chamado de terapia antirretroviral (TARV). 
                  Envolve tomar medicamentos diariamente que impedem que o vírus 
                  se multiplique no corpo.
                </p>
                <p className="mt-4">
                  O tratamento é altamente eficaz e, atualmente, muitas pessoas 
                  tomam apenas um comprimido por dia. No Brasil, o tratamento é 
                  fornecido gratuitamente pelo Sistema Único de Saúde (SUS) para 
                  todas as pessoas diagnosticadas com HIV.
                </p>
                <p className="mt-4">
                  Com o tratamento adequado, a maioria das pessoas com HIV pode 
                  alcançar e manter uma carga viral indetectável, permitindo que 
                  vivam uma vida longa e saudável.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">Posso ter filhos se vivo com HIV?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Sim! Pessoas que vivem com HIV podem ter filhos sem transmitir 
                  o vírus para o bebê ou para o parceiro. Com tratamento adequado 
                  durante a gravidez e medidas preventivas durante o parto, o 
                  risco de transmissão vertical (da mãe para o bebê) é reduzido 
                  para menos de 1%.
                </p>
                <p className="mt-4">
                  Para casais sorodiferentes (onde um parceiro tem HIV e o outro não) 
                  que desejam ter filhos, há várias opções seguras, incluindo:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Quando a pessoa com HIV está com carga viral indetectável, pode haver relações sem preservativo</li>
                  <li>Profilaxia pré-exposição (PrEP) para o parceiro HIV-negativo</li>
                  <li>Técnicas de reprodução assistida</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">O que fazer após um diagnóstico positivo para HIV?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Receber um diagnóstico positivo para HIV pode ser um momento 
                  difícil, mas é importante saber que com os avanços médicos 
                  atuais, pessoas com HIV podem viver vidas longas e saudáveis. 
                  Aqui estão algumas medidas importantes a serem tomadas:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Inicie o tratamento o quanto antes - quanto mais cedo começar, melhor para sua saúde</li>
                  <li>Encontre um médico especializado em HIV (infectologista)</li>
                  <li>Busque apoio emocional através de grupos de apoio, amigos confiáveis ou terapia</li>
                  <li>Informe-se sobre o HIV através de fontes confiáveis</li>
                  <li>Considere informar parceiros sexuais que possam ter sido expostos</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 bg-eixo-lightGreen p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h2>
            <p className="mb-6">
              Se você não encontrou resposta para suas dúvidas aqui, entre em 
              contato conosco ou consulte um profissional de saúde.
            </p>
            <button className="btn btn-primary">
              Entre em contato
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Duvidas;
