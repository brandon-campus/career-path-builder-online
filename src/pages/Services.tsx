import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, Linkedin, Users, BookOpen, Calendar, Gift } from 'lucide-react';

const serviceItems = [
  {
    id: 1,
    title: 'CV Profesional TIPO HARVARD',
    description: 'CV profesional optimizado con formato Harvard, ideal para destacar en procesos de selección.',
    features: [
      'Guía de Trabajo 2025 con enlaces a portales y agencias reales',
      '50 preguntas de entrevista + respuestas',
      'Tips para optimizar tu perfil de LinkedIn',
      'Formato entregado en Word y PDF',
      'Estructura profesional y prolija'
    ],
    icon: <FileText className="h-12 w-12 text-blue-600" />,
    price: '$18.000',
    link: 'https://mpago.li/2NvV5cA',
    buttonText: 'Solicitar servicio',
    deliveryTime: '5 a 7 días hábiles',
    paymentMethods: 'Mercado Pago, transferencia, Rapipago o Pago Fácil',
    mainButtonLink: 'https://mpago.li/2NvV5cA'
  },
  {
    id: 2,
    title: 'CV Profesional CON DISEÑO',
    description: 'CV profesional con diseño moderno y atractivo, perfecto para destacar visualmente.',
    features: [
      'Guía de Trabajo 2025 con enlaces a portales y agencias reales',
      '50 preguntas de entrevista + respuestas',
      'Tips para optimizar tu perfil de LinkedIn',
      'Formato entregado en PDF con diseño y foto',
      'Estructura profesional y visualmente atractiva'
    ],
    icon: <FileText className="h-12 w-12 text-blue-600" />,
    price: '$20.000',
    link: 'https://mpago.li/34nz9hp',
    buttonText: 'Solicitar servicio',
    deliveryTime: '5 a 7 días hábiles',
    paymentMethods: 'Mercado Pago, transferencia, Rapipago o Pago Fácil',
    mainButtonLink: 'https://mpago.li/34nz9hp'
  },
  {
    id: 3,
    title: 'Armado de LinkedIn Profesional',
    description: 'Optimización completa de tu perfil de LinkedIn para atraer reclutadores y oportunidades.',
    features: [
      'Perfil optimizado al 100%',
      'Foto de perfil y portada profesional',
      'Guía en PDF con estrategias para mejorar tu búsqueda laboral',
      'Optimización SEO del perfil',
      'Estrategias de networking efectivo'
    ],
    icon: <Linkedin className="h-12 w-12 text-blue-600" />,
    price: '$17.000',
    link: 'https://mpago.li/1t981Xr',
    buttonText: 'Solicitar servicio',
    deliveryTime: '7 a 10 días hábiles',
    paymentMethods: 'Mercado Pago, transferencia, Rapipago o Pago Fácil',
    mainButtonLink: 'https://mpago.li/1t981Xr'
  },
  {
    id: 4,
    title: 'Combo CV + LinkedIn',
    description: 'La solución integral que incluye CV profesional y optimización completa de LinkedIn.',
    features: [
      'CV profesional optimizado (Diseño moderno o formato ATS)',
      'Perfil de LinkedIn optimizado',
      'Guía de trabajo 2025 con 50 preguntas de entrevistas y respuestas',
      '50 enlaces directos a empresas y portales de empleo',
      'Mini guía de publicaciones en LinkedIn',
      'Acceso al taller gratuito de LinkedIn'
    ],
    icon: <Calendar className="h-12 w-12 text-blue-600" />,
    price: '$30.000',
    originalPrice: '$34.000',
    link: 'https://mpago.li/2ahZhsp',
    buttonText: 'Solicitar combo',
    deliveryTime: '2 semanas',
    paymentMethods: 'Mercado Pago, transferencia, Rapipago o Pago Fácil',
    mainButtonLink: 'https://mpago.li/2ahZhsp'
  },
  {
    id: 5,
    title: 'Combo: CV + 2 portales de empleo',
    description: 'CV profesional más optimización de perfiles en dos portales de empleo de tu elección.',
    features: [
      'CV optimizado',
      'Creación y optimización de perfiles en 2 portales de empleo',
      'Opciones: Bumeran, Computrabajo, Randstad, Zonajobs, Indeed',
      'Guía de uso de los portales',
      'Estrategias de postulación efectiva'
    ],
    icon: <Users className="h-12 w-12 text-blue-600" />,
    price: '$41.000',
    link: 'https://mpago.li/11fUvKR',
    buttonText: 'Solicitar combo',
    deliveryTime: '7 a 10 días hábiles',
    paymentMethods: 'Mercado Pago, transferencia, Rapipago o Pago Fácil',
    mainButtonLink: 'https://mpago.li/11fUvKR'
  },
  {
    id: 6,
    title: 'Bonus',
    description: 'Recursos complementarios para potenciar tu búsqueda laboral. Incluye guías, preguntas de entrevista y tips de LinkedIn.',
    features: [
      'Guía de Trabajo 2025 con enlaces a portales y agencias reales',
      '50 preguntas de entrevista + respuestas',
      'Tips para optimizar tu perfil de LinkedIn'
    ],
    icon: <Gift className="h-12 w-12 text-blue-600" />,
    price: '$10.000',
    link: 'https://mpago.li/31Rge4T',
    buttonText: 'Solicitar bonus',
    deliveryTime: 'Inmediato',
    paymentMethods: 'Mercado Pago, transferencia, Rapipago o Pago Fácil',
    mainButtonLink: 'https://mpago.li/31Rge4T'
  }
];

function getServiceDetailLink(title: string) {
  switch (title) {
    case 'CV Profesional TIPO HARVARD':
      return '/servicios/cv-harvard';
    case 'CV Profesional CON DISEÑO':
      return '/servicios/cv-diseno';
    case 'Armado de LinkedIn Profesional':
      return '/servicios/linkedin';
    case 'Combo CV + LinkedIn':
      return '/servicios/combo-cv-linkedin';
    case 'Combo: CV + 2 portales de empleo':
      return '/servicios/combo-cv-portales';
    case 'Bonus':
      return '/servicios';
    default:
      return '/servicios';
  }
}

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - Mobile First */}
        <section className="bg-blue-600 py-8 sm:py-12 md:py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Servicios profesionales para impulsar tu carrera</h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
                Soluciones diseñadas para cada etapa de tu desarrollo profesional, desde la creación de tu CV hasta la estrategia completa de búsqueda laboral.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid - Mobile First */}
        <section className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {serviceItems.map((service) => (
                <Card key={service.id} className="border border-gray-200 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                  <Link to={getServiceDetailLink(service.title)} style={{ textDecoration: 'none' }}>
                    <CardHeader className="cursor-pointer hover:bg-blue-50 transition-colors p-4 sm:p-6">
                      <div className="flex items-center">
                        <div className="mr-3 sm:mr-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                            {service.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold break-words">{service.title}</CardTitle>
                          <CardDescription className="text-blue-600 text-base sm:text-lg font-medium mt-1">
                            {service.price}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Link>
                  <CardContent className="flex-grow p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">{service.description}</p>
                    <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Incluye:</h4>
                    <ul className="space-y-2 sm:space-y-2.5">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-4 sm:p-6 pt-0">
                    <div className="flex flex-col gap-2 sm:gap-3 w-full">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base py-5 sm:py-6">
                        <a href={service.link} target="_blank" rel="noopener noreferrer" className="w-full">{service.buttonText}</a>
                      </Button>
                      <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 text-sm sm:text-base py-5 sm:py-6">
                        <Link to={getServiceDetailLink(service.title)} className="w-full">Ver Servicio</Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Mobile First */}
        <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-blue-800">Preguntas frecuentes</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-blue-600">¿Cuánto tiempo tarda el proceso de creación de CV?</h3>
                  <p className="text-sm sm:text-base text-gray-700">El proceso completo toma entre 3 y 5 días hábiles desde la consulta inicial hasta la entrega de la versión final. Para casos urgentes, consulta nuestro servicio express con entrega en 24h.</p>
                </div>
                
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-blue-600">¿Cómo se realizan las asesorías personalizadas?</h3>
                  <p className="text-sm sm:text-base text-gray-700">Las sesiones se realizan por videoconferencia (Zoom o Google Meet) con una duración de 60 minutos. Incluye análisis previo de tu perfil y envío posterior de materiales y plan de acción.</p>
                </div>
                
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-blue-600">¿Ofrecen alguna garantía de satisfacción?</h3>
                  <p className="text-sm sm:text-base text-gray-700">Sí, todos nuestros servicios incluyen garantía de satisfacción. Si no estás conforme con el resultado, realizamos ajustes sin costo adicional hasta que cumpla con tus expectativas.</p>
                </div>
                
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-blue-600">¿Cuáles son las formas de pago disponibles?</h3>
                  <p className="text-sm sm:text-base text-gray-700">Aceptamos tarjetas de crédito/débito, PayPal, y transferencia bancaria. Para los cursos online ofrecemos también opciones de pago en cuotas sin intereses.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Mobile First */}
        <section className="py-8 sm:py-12 md:py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">¿No encuentras lo que buscas?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
              Podemos crear un plan personalizado adaptado a tus necesidades específicas. Contáctanos para discutir tu caso.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-sm sm:text-base md:text-lg py-5 sm:py-6 px-6 sm:px-8">
              <Link to="/contacto">Contactar ahora</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
