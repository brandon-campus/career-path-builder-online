
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para impulsar tu carrera profesional?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Da el primer paso hacia mejores oportunidades laborales. Agenda una asesoría personalizada o explora nuestros cursos online.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8">
            <Link to="/contacto">Agenda tu asesoría</Link>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-blue-700 text-lg py-6 px-8">
            <Link to="/cursos">Explora los cursos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
