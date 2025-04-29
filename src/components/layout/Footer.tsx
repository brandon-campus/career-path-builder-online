
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    
    // Aquí iría la lógica para suscribir al newsletter
    console.log('Email suscrito:', email);
    toast.success("¡Gracias por suscribirte a nuestro newsletter!");
    form.reset();
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1 - Logo y descripción */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold text-white">CareerBoost</h2>
            </Link>
            <p className="text-gray-300 mb-4">
              Te ayudamos a potenciar tu perfil profesional para conseguir mejores oportunidades laborales.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Youtube size={20} />
              </a>
              <a href="mailto:info@careerboost.com" className="text-gray-300 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2 - Enlaces */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-gray-300 hover:text-white transition-colors">
                  Cursos Online
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/sobre-mi" className="text-gray-300 hover:text-white transition-colors">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios/cv-profesional" className="text-gray-300 hover:text-white transition-colors">
                  Creación de CV Profesional
                </Link>
              </li>
              <li>
                <Link to="/servicios/linkedin" className="text-gray-300 hover:text-white transition-colors">
                  Optimización de LinkedIn
                </Link>
              </li>
              <li>
                <Link to="/servicios/asesoria" className="text-gray-300 hover:text-white transition-colors">
                  Asesoría Personalizada
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-gray-300 hover:text-white transition-colors">
                  Cursos Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suscríbete al newsletter</h3>
            <p className="text-gray-300 mb-4">
              Recibe consejos profesionales y ofertas exclusivas directamente en tu bandeja de entrada.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="Tu email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                required
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} CareerBoost. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
