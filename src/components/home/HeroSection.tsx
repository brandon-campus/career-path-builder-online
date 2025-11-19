import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
// import { Rocket, PlayCircle } from 'lucide-react'; // Iconos de ejemplo, no necesarios para este cambio específico

const HeroSection = () => {
  return (
    <section className="pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 md:pb-10 overflow-hidden relative" style={{ backgroundColor: '#dbeafe' }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <p className="text-base sm:text-lg md:text-xl text-primary font-semibold mb-2 sm:mb-3">
              Hola, soy Hernan Lamanna 👋
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Te ayudo a buscar trabajo.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground mb-6 sm:mb-8 leading-relaxed">
              Te ayudamos a construir el CV, LinkedIn y estrategia laboral que te abrirán puertas a nuevas oportunidades.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button className="bg-primary hover:bg-primary/90 text-white text-sm sm:text-base md:text-lg py-4 sm:py-5 md:py-6 px-6 sm:px-7 md:px-8 button-glow w-full sm:w-auto">
                <Link to="/servicios/cv-harvard">
                  Quiero armar mi CV
                </Link>
              </Button>
              <Button variant="ghost" className="text-primary hover:bg-secondary/10 text-sm sm:text-base md:text-lg py-4 sm:py-5 md:py-6 px-6 sm:px-7 md:px-8 w-full sm:w-auto" style={{ backgroundColor: 'transparent' }}>
                <Link to="/servicios">Explorar servicios</Link>
              </Button>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center bg-gray-100/50 p-3 sm:p-4 rounded-lg w-full sm:w-fit">
              <div className="flex -space-x-4 rtl:space-x-reverse mb-2 sm:mb-0 sm:mr-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Profesional 1"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  alt="Profesional 2"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/33.jpg"
                  alt="Profesional 3"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white"
                />
              </div>
              <p className="text-foreground text-xs sm:text-sm md:text-base">
                <span className="text-primary font-semibold">+20.000</span> profesionales han mejorado su carrera con nosotros
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center relative h-64 sm:h-80 md:h-96 lg:h-auto">
            <img 
              src="/hernan-lamanna-perfil.jpg"
              alt="Hernan Lamanna sonriendo con los brazos cruzados"
              className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] rounded-lg shadow-2xl h-auto relative z-10"
            />
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
