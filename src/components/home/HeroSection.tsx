import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
// import { Rocket, PlayCircle } from 'lucide-react'; // Iconos de ejemplo, no necesarios para este cambio específico

const HeroSection = () => {
  return (
    <section className="pt-10 pb-10 overflow-hidden relative" style={{ backgroundColor: '#dbeafe' }}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <p className="text-lg md:text-xl text-primary font-semibold mb-2">
            Hola, soy Hernan Lamanna 👋
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
            Te ayudo a buscar trabajo.
          </h2>
          <p className="text-xl text-foreground mb-8 leading-relaxed">
            Te ayudamos a construir el CV, LinkedIn y estrategia laboral que te abrirán puertas a nuevas oportunidades.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button className="bg-primary hover:bg-primary/90 text-white text-lg py-6 px-8 button-glow">
              <a href="https://tally.so/r/wQW0Wl" target="_blank" rel="noopener noreferrer">
                Quiero armar mi CV
              </a>
            </Button>
            <Button variant="ghost" className="text-primary hover:bg-secondary/10 text-lg py-6 px-8" style={{ backgroundColor: 'transparent' }}>
              <Link to="/servicios">Explorar servicios</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center bg-gray-100/50 p-3 rounded-lg w-fit">
            <div className="flex -space-x-4 rtl:space-x-reverse mr-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profesional 1"
                className="w-9 h-9 rounded-full border-2 border-white dark:border-background"
              />
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                alt="Profesional 2"
                className="w-9 h-9 rounded-full border-2 border-white dark:border-background"
              />
              <img
                src="https://randomuser.me/api/portraits/women/33.jpg"
                alt="Profesional 3"
                className="w-9 h-9 rounded-full border-2 border-white dark:border-background"
              />
            </div>
            <p className="text-foreground text-sm md:text-base">
              <span className="text-primary font-semibold">+500</span> profesionales han mejorado su carrera con nosotros
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center items-center relative h-96 md:h-auto">
          <img 
            src="/fotoprincipal.jpg"
            alt="Hernan Lamanna sonriendo con los brazos cruzados"
            style={{ width: '100%', maxWidth: '500px' }}
            className="rounded-lg shadow-2xl h-auto relative z-10"
          />
          <div className="absolute top-0 right-0 w-48 h-48 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
