import { ArrowRight, FileText, Linkedin, Users, Calendar, Globe, Mail, Phone, Instagram, Youtube } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const serviceItems = [
  {
    id: 1,
    title: 'CV Profesional TIPO HARVARD',
    description: 'CV profesional optimizado con formato Harvard, ideal para destacar en procesos de selección.',
    icon: <FileText className="h-10 w-10 text-blue-600" />,
    link: '/servicios/cv-harvard'
  },
  {
    id: 2,
    title: 'CV Profesional CON DISEÑO',
    description: 'CV profesional con diseño moderno y atractivo, perfecto para destacar visualmente.',
    icon: <FileText className="h-10 w-10 text-blue-600" />,
    link: '/servicios/cv-diseno'
  },
  {
    id: 3,
    title: 'Armado de LinkedIn Profesional',
    description: 'Optimización completa de tu perfil de LinkedIn para atraer reclutadores y oportunidades.',
    icon: <Linkedin className="h-10 w-10 text-blue-600" />,
    link: '/servicios/linkedin'
  },
  {
    id: 4,
    title: 'Combo CV + LinkedIn',
    description: 'La solución integral que incluye CV profesional y optimización completa de LinkedIn.',
    icon: <Calendar className="h-10 w-10 text-blue-600" />,
    link: '/servicios/combo-cv-linkedin'
  },
  {
    id: 5,
    title: 'Combo: CV + 2 portales de empleo',
    description: 'CV profesional más optimización de perfiles en dos portales de empleo de tu elección.',
    icon: <Globe className="h-10 w-10 text-blue-600" />,
    link: '/servicios/combo-cv-portales'
  }
];

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <g>
      <path d="M21.5 2v4.5c0 2.5 2 4.5 4.5 4.5h2V16c0 6.6-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4h5.5z" fill="#000"/>
      <path d="M28 10.5c-2.5 0-4.5-2-4.5-4.5H21.5V22c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.2 0 .5 0 .7.1v4.1c-.2-.1-.5-.2-.7-.2-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V2h4.5c0 2.5 2 4.5 4.5 4.5V10.5z" fill="#fff"/>
    </g>
  </svg>
);

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
