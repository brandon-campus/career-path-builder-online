import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">¿Listo para impulsar tu carrera profesional?</h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
          Da el primer paso hacia mejores oportunidades laborales. Agenda una asesoría personalizada o explora todos nuestros servicios.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 text-sm sm:text-base md:text-lg py-5 sm:py-6 px-6 sm:px-8 w-full sm:w-auto">
            <a
              href="https://wa.me/5491123844473?text=%C2%A1Hola!%20Quiero%20agendar%20una%20asesor%C3%ADa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agenda tu asesoría
            </a>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-blue-700 text-sm sm:text-base md:text-lg py-5 sm:py-6 px-6 sm:px-8 w-full sm:w-auto" style={{ backgroundColor: 'transparent' }}>
            <Link to="/servicios">Ver servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
