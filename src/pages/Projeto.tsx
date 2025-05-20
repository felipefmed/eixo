
import React from "react";
import Layout from "../components/Layout";
import ProjectTextSection from "../components/ProjectTextSection";
import ProjectMission from "../components/ProjectMission";
import ProjectVision from "../components/ProjectVision";

const Projeto = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          O Projeto
        </h1>
        <ProjectTextSection />
        <ProjectMission />
        <ProjectVision />
      </div>
    </Layout>
  );
};

export default Projeto;
