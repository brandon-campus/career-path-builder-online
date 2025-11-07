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
    <header className="w-full bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">AYUDARTEAR</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/servicios" className="font-medium text-foreground hover:text-primary transition-colors">
              Servicios
            </Link>
            <Link to="/asesorias" className="font-medium text-foreground hover:text-primary transition-colors">
              Asesorías
            </Link>
            <Link to="/blog" className="font-medium text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/sobre-mi" className="font-medium text-foreground hover:text-primary transition-colors">
              Sobre mí
            </Link>
            <Link to="/contacto" className="font-medium text-foreground hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-secondary/10 button-glow">
              <a href="https://wa.me/5491131985450?text=%C2%A1Hola!%20Quiero%20agendar%20una%20asesor%C3%ADa" target="_blank" rel="noopener noreferrer">
                Agenda tu asesoría
              </a>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white button-glow">
              <Link to="/servicios/cv-harvard">
                Quiero armar mi CV
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              className="p-2 text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link
              to="/servicios"
              className="block font-medium text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Servicios
            </Link>
            <Link
              to="/asesorias"
              className="block font-medium text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Asesorías
            </Link>
            <Link
              to="/blog"
              className="block font-medium text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="/sobre-mi"
              className="block font-medium text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Sobre mí
            </Link>
            <Link
              to="/contacto"
              className="block font-medium text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-secondary/10 button-glow">
                <a href="https://wa.me/5491131985450?text=%C2%A1Hola!%20Quiero%20agendar%20una%20asesor%C3%ADa" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
                  Agenda tu asesoría
                </a>
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white button-glow">
                <Link to="/servicios/cv-harvard" onClick={toggleMenu}>
                  Quiero armar mi CV
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
