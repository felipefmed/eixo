import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img alt="Logo Eixo" className="h-8" src="/eixo.svg" />
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Uma plataforma para apoiar e acolher pessoas que vivem com HIV, combater a desinformação e reduzir o estigma.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-eixo-purple transition-colors">Início</Link></li>
              <li><Link to="/projeto" className="hover:text-eixo-purple transition-colors">O Projeto</Link></li>
              <li><Link to="/historias" className="hover:text-eixo-purple transition-colors">Histórias</Link></li>
              <li><Link to="/duvidas" className="hover:text-eixo-purple transition-colors">Dúvidas</Link></li>
              <li><Link to="/encontre-ong" className="hover:text-eixo-purple transition-colors">Encontre uma ONG</Link></li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li><a href="mailto:felipe.fmed@gmail.com " className="hover:text-eixo-purple transition-colors">felipe.fmed@gmail.com</a></li>
              <li><a href="tel:+553400000000" className="hover:text-eixo-purple transition-colors">+55 34 0000 0000</a></li>
              <li className="pt-4">
                <a href="#" className="hover:text-eixo-purple transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="hover:text-eixo-purple transition-colors">Termos de Uso</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Eixo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
