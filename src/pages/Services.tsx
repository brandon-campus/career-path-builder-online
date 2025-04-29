
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, Linkedin, Users, BookOpen, Calendar } from 'lucide-react';

const serviceItems = [
  {
    id: 1,
    title: 'Creación de CV Profesional',
    description: 'Desarrollamos un CV optimizado para sistemas ATS, visualmente atractivo y estratégicamente estructurado para destacar tus logros y habilidades más relevantes.',
    features: [
      'Análisis personalizado de tu trayectoria profesional',
      'Diseño moderno y adaptado a tu sector',
      'Optimización de palabras clave para ATS',
      'Formato adaptado a estándares internacionales',
      'Versiones en Word y PDF editables'
    ],
    icon: <FileText className="h-12 w-12 text-blue-600" />,
    price: '89€',
    link: '/contacto',
    buttonText: 'Solicitar servicio'
  },
  {
    id: 2,
    title: 'Optimización de LinkedIn',
    description: 'Potenciamos tu perfil de LinkedIn para aumentar tu visibilidad, generar conexiones de calidad y atraer a reclutadores de tu sector.',
    features: [
      'Optimización SEO del titular y resumen',
      'Estrategia de contenido para tu feed',
      'Mejora de experiencia y logros destacados',
      'Recomendaciones para foto y banner profesionales',
      'Guía de networking efectivo'
    ],
    icon: <Linkedin className="h-12 w-12 text-blue-600" />,
    price: '99€',
    link: '/contacto',
    buttonText: 'Solicitar servicio'
  },
  {
    id: 3,
    title: 'Asesoría Personalizada',
    description: 'Sesiones individuales donde diseñamos juntos una estrategia integral para tu búsqueda laboral y desarrollo profesional.',
    features: [
      'Evaluación completa de tu perfil profesional',
      'Estrategia de búsqueda de empleo personalizada',
      'Preparación para entrevistas laborales',
      'Plan de acción con objetivos medibles',
      'Seguimiento y ajuste de estrategia (1 mes)'
    ],
    icon: <Users className="h-12 w-12 text-blue-600" />,
    price: '149€',
    link: '/contacto',
    buttonText: 'Agendar asesoría'
  },
  {
    id: 4,
    title: 'Cursos Online',
    description: 'Aprende a tu ritmo con nuestros cursos especializados en empleabilidad, LinkedIn, entrevistas y más. Material actualizado y práctico.',
    features: [
      'Acceso ilimitado al contenido',
      'Ejercicios prácticos y plantillas',
      'Certificado de finalización',
      'Foro de consultas con respuestas en 24h',
      'Actualizaciones incluidas'
    ],
    icon: <BookOpen className="h-12 w-12 text-blue-600" />,
    price: 'Desde 49.99€',
    link: '/cursos',
    buttonText: 'Ver cursos'
  },
  {
    id: 5,
    title: 'Pack Completo',
    description: 'La solución integral que incluye CV profesional, optimización de LinkedIn, asesoría personalizada y acceso a un curso a elección.',
    features: [
      'Todo lo incluido en los servicios individuales',
      'Estrategia coordinada entre CV y LinkedIn',
      'Dos sesiones de asesoría personalizada',
      'Un curso online a elección',
      '30% de descuento vs. servicios por separado'
    ],
    icon: <Calendar className="h-12 w-12 text-blue-600" />,
    price: '249€',
    link: '/contacto',
    buttonText: 'Solicitar pack'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 py-16 text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Servicios profesionales para impulsar tu carrera</h1>
              <p className="text-xl mb-8">
                Soluciones diseñadas para cada etapa de tu desarrollo profesional, desde la creación de tu CV hasta la estrategia completa de búsqueda laboral.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceItems.map((service) => (
                <Card key={service.id} className="border border-gray-200 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="mr-4">{service.icon}</div>
                      <div>
                        <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                        <CardDescription className="text-blue-600 text-lg font-medium mt-1">
                          {service.price}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    <h4 className="font-semibold text-lg mb-4">Incluye:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link to={service.link} className="w-full">{service.buttonText}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Preguntas frecuentes</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">¿Cuánto tiempo tarda el proceso de creación de CV?</h3>
                  <p className="text-gray-700">El proceso completo toma entre 3 y 5 días hábiles desde la consulta inicial hasta la entrega de la versión final. Para casos urgentes, consulta nuestro servicio express con entrega en 24h.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">¿Cómo se realizan las asesorías personalizadas?</h3>
                  <p className="text-gray-700">Las sesiones se realizan por videoconferencia (Zoom o Google Meet) con una duración de 60 minutos. Incluye análisis previo de tu perfil y envío posterior de materiales y plan de acción.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">¿Ofrecen alguna garantía de satisfacción?</h3>
                  <p className="text-gray-700">Sí, todos nuestros servicios incluyen garantía de satisfacción. Si no estás conforme con el resultado, realizamos ajustes sin costo adicional hasta que cumpla con tus expectativas.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">¿Cuáles son las formas de pago disponibles?</h3>
                  <p className="text-gray-700">Aceptamos tarjetas de crédito/débito, PayPal, y transferencia bancaria. Para los cursos online ofrecemos también opciones de pago en cuotas sin intereses.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿No encuentras lo que buscas?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Podemos crear un plan personalizado adaptado a tus necesidades específicas. Contáctanos para discutir tu caso.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
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
