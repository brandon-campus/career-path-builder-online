
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 leading-tight">
            Potencia tu carrera profesional
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Te ayudamos a construir el CV, LinkedIn y estrategia laboral que te abrirán puertas a nuevas oportunidades.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 button-blue-glow text-lg py-6 px-8">
              <Link to="/contacto">Agenda tu asesoría</Link>
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg py-6 px-8">
              <Link to="/cursos">Explora nuestros cursos</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center">
            <div className="flex -space-x-4">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Cliente satisfecho" 
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <img 
                src="https://randomuser.me/api/portraits/men/86.jpg" 
                alt="Cliente satisfecho" 
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <img 
                src="https://randomuser.me/api/portraits/women/33.jpg" 
                alt="Cliente satisfecho" 
                className="w-12 h-12 rounded-full border-2 border-white"
              />
            </div>
            <p className="ml-4 text-gray-600">
              <span className="text-blue-600 font-semibold">+500</span> profesionales han mejorado su carrera con nosotros
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
            alt="Persona trabajando en un portátil" 
            className="rounded-lg shadow-2xl max-w-full md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
