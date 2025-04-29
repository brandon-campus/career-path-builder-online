
import { ArrowRight, FileText, Linkedin, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const serviceItems = [
  {
    id: 1,
    title: 'Creación de CV Profesional',
    description: 'Creamos un CV optimizado para ATS, visualmente atractivo y enfocado en destacar tus logros profesionales.',
    icon: <FileText className="h-10 w-10 text-blue-600" />,
    link: '/servicios/cv-profesional'
  },
  {
    id: 2,
    title: 'Optimización de LinkedIn',
    description: 'Potenciamos tu perfil para aumentar tu visibilidad, generar conexiones de calidad y atraer reclutadores.',
    icon: <Linkedin className="h-10 w-10 text-blue-600" />,
    link: '/servicios/linkedin'
  },
  {
    id: 3,
    title: 'Asesoría Personalizada',
    description: 'Sesiones individuales donde diseñamos juntos una estrategia efectiva para tu búsqueda laboral.',
    icon: <Users className="h-10 w-10 text-blue-600" />,
    link: '/servicios/asesoria'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white" id="servicios">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600">
            Soluciones profesionales diseñadas para potenciar tu perfil y maximizar tus oportunidades laborales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={service.id} className="border border-gray-200 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-800 p-0 flex items-center group">
                  <Link to={service.link} className="flex items-center">
                    Ver detalles
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 button-blue-glow">
            <Link to="/servicios">Ver todos los servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
