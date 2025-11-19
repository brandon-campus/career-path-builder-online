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
      <div className="container mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Columna 1 - Logo y descripción - Mobile First */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-3 sm:mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">AYUDARTEAR</h2>
            </Link>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Te ayudamos a potenciar tu perfil profesional para conseguir mejores oportunidades laborales.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href="https://www.linkedin.com/in/gabriel-hernan-lamanna-b0178b192/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="LinkedIn de AyudarteAR"
              >
                <Linkedin size={20} className="sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://www.instagram.com/hernilamanna/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Instagram de AyudarteAR"
              >
                <Instagram size={20} className="sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@hernanlamanna" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="YouTube de AyudarteAR"
              >
                <Youtube size={20} className="sm:w-5 sm:h-5" />
              </a>
              <a 
                href="mailto:contacto@ayudartear.com" 
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Email de AyudarteAR"
              >
                <Mail size={20} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Columna 2 - Enlaces rápidos - Mobile First */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Enlaces rápidos</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              <li>
                <Link 
                  to="/" 
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors block py-1"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicios" 
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors block py-1"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link 
                  to="/asesorias" 
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors block py-1"
                >
                  Asesorías
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors block py-1"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre-mi" 
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors block py-1"
                >
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacto" 
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors block py-1"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Servicios - Mobile First */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Servicios</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              <li>
                <Link 
                  to="/servicios/cv-harvard" 
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors block py-1"
                >
                  CV Harvard
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicios/cv-diseno" 
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors block py-1"
                >
                  CV Diseño
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicios/linkedin" 
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors block py-1"
                >
                  Optimización de LinkedIn
                </Link>
              </li>
              <li>
                <Link 
                  to="/asesorias" 
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors block py-1"
                >
                  Asesoría Personalizada
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Newsletter - Mobile First */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Newsletter</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Recibí consejos profesionales y ofertas exclusivas directamente en tu bandeja de entrada.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2 sm:space-y-3">
              <Input
                type="email"
                name="email"
                placeholder="Tu email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 text-sm sm:text-base h-10 sm:h-11 focus:ring-2 focus:ring-blue-500"
                required
              />
              <Button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 w-full text-sm sm:text-base h-10 sm:h-11 transition-colors"
              >
                Suscribirse
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright - Mobile First */}
        <div className="border-t border-gray-800 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} AyudarteAR. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
