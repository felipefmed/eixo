
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return <header className="fixed w-full top-0 left-0 z-50 bg-white py-4 px-6 md:px-12 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img alt="Logo Eixo" className="h-8" src="/eixo-icon.svg" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={cn("font-medium transition-colors", isActive('/') ? "text-eixo-purple" : "hover:text-eixo-purple")}>
            INÍCIO
          </Link>
          <Link to="/projeto" className={cn("font-medium transition-colors", isActive('/projeto') ? "text-eixo-purple" : "hover:text-eixo-purple")}>
            O EIXO
          </Link>
          <Link to="/historias" className={cn("font-medium transition-colors", isActive('/historias') ? "text-eixo-purple" : "hover:text-eixo-purple")}>
            HISTÓRIAS
          </Link>
          <Link to="/duvidas" className={cn("font-medium transition-colors", isActive('/duvidas') ? "text-eixo-purple" : "hover:text-eixo-purple")}>
            DÚVIDAS
          </Link>
          <Link to="/encontre-apoio" className={cn(
            "rounded-full px-5 py-2 bg-eixo-yellow text-black font-medium hover:bg-eixo-yellow/90 transition-colors shadow-sm"
          )}>
            ENCONTRE APOIO
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-eixo-black" onClick={toggleMenu} aria-label="Abrir menu">
          <Menu size={24} />
        </button>

        {/* Mobile Menu */}
        <div className={cn("fixed inset-0 bg-white z-50 flex flex-col p-6 transition-transform duration-300 transform", isMenuOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <img src="/lovable-uploads/b36f9cde-8da7-4627-ab5c-7d56a3c2b400.png" alt="Logo Eixo" className="h-8" />
            </Link>
            <button className="text-eixo-black" onClick={toggleMenu} aria-label="Fechar menu">
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 text-xl">
            <Link to="/" className={cn("font-medium", isActive('/') ? "text-eixo-purple" : "hover:text-eixo-purple transition-colors")} onClick={closeMenu}>
              INÍCIO
            </Link>
            <Link to="/projeto" className={cn("font-medium", isActive('/projeto') ? "text-eixo-purple" : "hover:text-eixo-purple transition-colors")} onClick={closeMenu}>
              O PROJETO
            </Link>
            <Link to="/historias" className={cn("font-medium", isActive('/historias') ? "text-eixo-purple" : "hover:text-eixo-purple transition-colors")} onClick={closeMenu}>
              HISTÓRIAS
            </Link>
            <Link to="/duvidas" className={cn("font-medium", isActive('/duvidas') ? "text-eixo-purple" : "hover:text-eixo-purple transition-colors")} onClick={closeMenu}>
              DÚVIDAS
            </Link>
            <Link to="/encontre-apoio" 
              className="bg-eixo-yellow text-black font-medium px-4 py-2 rounded-full text-center hover:bg-eixo-yellow/90 transition-colors shadow-sm"
              onClick={closeMenu}
            >
              ENCONTRE APOIO
            </Link>
          </nav>
        </div>
      </div>
    </header>;
};

export default Navbar;
