import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ONGSearchBar from "../components/ONGSearchBar";
import AdvancedSearchForm from "../components/AdvancedSearchForm";
import ONGList from "../components/ONGList";

// Rename the component to match the new URL
const EncontreApoio = () => {
  const [cidade, setCidade] = useState("");
  return (
    <Layout>
      <section className="bg-eixo-yellow min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Encontre o apoio<br />que você precisa.
            </h1>
            <ONGSearchBar cidade={cidade} setCidade={setCidade} />
          </div>
        </div>
        {/* Decorative illustration */}
        <div className="absolute right-0 top-0 h-full w-1/3 hidden lg:flex items-center justify-end pr-6">
          <div className="relative h-4/5 w-full">
            <img
              alt="Person searching for local ONGs"
              className="h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=870&auto=format&fit=crop";
              }}
              src="/lovable-uploads/593ecd22-2e34-41d0-8a9e-57cd64fb3756.png"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-12">
            <AdvancedSearchForm />
          </div>
          <ONGList />
          <div className="text-center mt-12">
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Sua organização oferece apoio e quer fazer parte da nossa rede?
              Ou encontrou algo que precisa ser atualizado?
            </p>
            <button className="btn btn-primary">
              Fale Conosco
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default EncontreApoio;