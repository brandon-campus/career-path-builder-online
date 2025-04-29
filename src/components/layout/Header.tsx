
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Hernan Lamanna</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/servicios" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Servicios
            </Link>
            <Link to="/cursos" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Cursos Online
            </Link>
            <Link to="/blog" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link to="/sobre-mi" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Sobre mí
            </Link>
            <Link to="/contacto" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="button-blue-glow">
              <Link to="/contacto">Agenda tu asesoría</Link>
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 button-glow">
              <Link to="/cursos">Comprar cursos</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4 py-4">
              <Link 
                to="/servicios" 
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={toggleMenu}
              >
                Servicios
              </Link>
              <Link 
                to="/cursos" 
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={toggleMenu}
              >
                Cursos Online
              </Link>
              <Link 
                to="/blog" 
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link 
                to="/sobre-mi" 
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={toggleMenu}
              >
                Sobre mí
              </Link>
              <Link 
                to="/contacto" 
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={toggleMenu}
              >
                Contacto
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="w-full button-blue-glow" onClick={toggleMenu}>
                  <Link to="/contacto" className="w-full">Agenda tu asesoría</Link>
                </Button>
                <Button className="w-full bg-green-500 hover:bg-green-600 button-glow" onClick={toggleMenu}>
                  <Link to="/cursos" className="w-full">Comprar cursos</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
