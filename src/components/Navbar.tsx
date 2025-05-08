
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white py-4 px-6 md:px-12 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/public/lovable-uploads/a2901278-687c-4ed9-843b-4aa480d74fbc.png" 
            alt="Logo Eixo" 
            className="h-8"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-eixo-purple transition-colors">
            INÍCIO
          </Link>
          <Link to="/projeto" className="font-medium hover:text-eixo-purple transition-colors">
            O PROJETO
          </Link>
          <Link to="/historias" className="font-medium hover:text-eixo-purple transition-colors">
            HISTÓRIAS
          </Link>
          <Link to="/duvidas" className="font-medium hover:text-eixo-purple transition-colors">
            DÚVIDAS
          </Link>
          <Link to="/encontre-ong" className="font-medium hover:text-eixo-purple transition-colors">
            ENCONTRE UMA ONG
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-eixo-black"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-white z-50 flex flex-col p-6 transition-transform duration-300 transform",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <img 
                src="/public/lovable-uploads/a2901278-687c-4ed9-843b-4aa480d74fbc.png" 
                alt="Logo Eixo" 
                className="h-8"
              />
            </Link>
            <button
              className="text-eixo-black"
              onClick={toggleMenu}
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 text-xl">
            <Link 
              to="/" 
              className="font-medium hover:text-eixo-purple transition-colors" 
              onClick={closeMenu}
            >
              INÍCIO
            </Link>
            <Link 
              to="/projeto" 
              className="font-medium hover:text-eixo-purple transition-colors"
              onClick={closeMenu}
            >
              O PROJETO
            </Link>
            <Link 
              to="/historias" 
              className="font-medium hover:text-eixo-purple transition-colors"
              onClick={closeMenu}
            >
              HISTÓRIAS
            </Link>
            <Link 
              to="/duvidas" 
              className="font-medium hover:text-eixo-purple transition-colors"
              onClick={closeMenu}
            >
              DÚVIDAS
            </Link>
            <Link 
              to="/encontre-ong" 
              className="font-medium hover:text-eixo-purple transition-colors"
              onClick={closeMenu}
            >
              ENCONTRE UMA ONG
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
