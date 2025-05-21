
import React from "react";
import ONGCard from "./ONGCard";

const ongData = [
  {
    name: "GIV - Grupo de Incentivo à Vida",
    city: "São Paulo",
    state: "SP",
    description:
      "O GIV é uma ONG que trabalha em defesa dos direitos das pessoas que vivem com HIV/AIDS, oferecendo grupos de apoio e informação.",
    tags: ["Grupos de apoio", "Informação"],
    website: "http://giv.org.br",
    colorClass: "bg-eixo-lightPurple",
  },
  {
    name: "ABIA - Associação Brasileira Interdisciplinar de AIDS",
    city: "Rio de Janeiro",
    state: "RJ",
    description:
      "A ABIA atua na promoção da educação em HIV/AIDS e direitos humanos, trabalhando para reduzir o estigma e promover políticas públicas.",
    tags: ["Educação", "Direitos humanos"],
    website: "http://abiaids.org.br",
    colorClass: "bg-eixo-lightBlue",
  },
  {
    name: "GAPA - Grupo de Apoio à Prevenção da AIDS",
    city: "Salvador",
    state: "BA",
    description:
      "O GAPA oferece testagem gratuita para HIV, apoio psicológico para pessoas vivendo com o vírus e seus familiares, além de promover campanhas de prevenção.",
    tags: ["Testagem", "Apoio psicológico"],
    website: "http://gapabahia.org.br",
    colorClass: "bg-eixo-lightGreen",
  },
];

const ONGList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {ongData.map((ong, idx) => (
      <ONGCard key={idx} {...ong} />
    ))}
  </div>
);

export default ONGList;
