
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const allCourses = [
  {
    id: 1,
    title: 'Masterclass CV ATS',
    description: 'Aprende a crear un CV que pase los filtros automáticos y llegue a manos de los reclutadores.',
    fullDescription: 'Este curso completo te enseñará cómo crear un CV que no solo destaca visualmente, sino que está optimizado para los sistemas de seguimiento de candidatos (ATS) que utilizan las empresas. Dominarás las técnicas para hacer que tu CV sea seleccionado en los filtros automáticos y llegue a manos de los reclutadores.',
    price: 49.99,
    lessons: 12,
    duration: '3 horas',
    level: 'Todos los niveles',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    popular: true,
    category: 'CV'
  },
  {
    id: 2,
    title: 'LinkedIn para profesionales',
    description: 'Domina la red profesional más importante y conviértela en tu mejor herramienta de networking.',
    fullDescription: 'Aprenderás estrategias avanzadas para optimizar tu perfil de LinkedIn, aumentar tu visibilidad y crear una red de contactos profesionales valiosa. Descubrirás cómo crear contenido que atraiga a reclutadores y posibles clientes, así como técnicas de networking efectivas.',
    price: 69.99,
    lessons: 15,
    duration: '4 horas',
    level: 'Intermedio',
    image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    popular: false,
    category: 'LinkedIn'
  },
  {
    id: 3,
    title: 'Entrevistas laborales exitosas',
    description: 'Prepárate para destacar en cualquier entrevista con técnicas probadas y ejercicios prácticos.',
    fullDescription: 'Este curso te proporcionará todas las herramientas necesarias para enfrentar con confianza cualquier entrevista laboral. Desde la preparación previa, técnicas para responder preguntas difíciles, lenguaje corporal efectivo, hasta estrategias de seguimiento post-entrevista que te darán ventaja sobre otros candidatos.',
    price: 59.99,
    lessons: 14,
    duration: '3.5 horas',
    level: 'Todos los niveles',
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    popular: false,
    category: 'Entrevistas'
  },
  {
    id: 4,
    title: 'Negociación salarial para profesionales',
    description: 'Aprende a valorar correctamente tu trabajo y negocia el salario que mereces con confianza y estrategia.',
    fullDescription: 'En este curso práctico aprenderás a investigar rangos salariales de mercado, valorar tu experiencia y habilidades correctamente, y establecer una estrategia de negociación efectiva. Incluye ejercicios de role-play y scripts para diferentes escenarios de negociación.',
    price: 54.99,
    lessons: 10,
    duration: '2.5 horas',
    level: 'Intermedio',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    popular: false,
    category: 'Desarrollo Profesional'
  },
  {
    id: 5,
    title: 'Marca personal para profesionales',
    description: 'Desarrolla una estrategia efectiva de marca personal que te diferencie en tu sector profesional.',
    fullDescription: 'Descubre cómo definir, construir y promocionar tu marca personal profesional en canales online y offline. Aprenderás a crear un posicionamiento único, desarrollar contenido de valor y gestionar tu reputación profesional para atraer oportunidades alineadas con tus objetivos.',
    price: 64.99,
    lessons: 16,
    duration: '4.5 horas',
    level: 'Avanzado',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    popular: true,
    category: 'Marca Personal'
  },
  {
    id: 6,
    title: 'Comunicación efectiva en entornos profesionales',
    description: 'Mejora tus habilidades de comunicación verbal y escrita para destacar en cualquier entorno laboral.',
    fullDescription: 'Curso completo sobre comunicación profesional efectiva que abarca habilidades de comunicación escrita, verbal, y no verbal. Aprenderás a crear presentaciones impactantes, mejorar tu expresión en reuniones, y redactar emails y documentos profesionales persuasivos.',
    price: 49.99,
    lessons: 12,
    duration: '3 horas',
    level: 'Todos los niveles',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    popular: false,
    category: 'Comunicación'
  }
];

const Courses = () => {
  const [courses, setCourses] = useState(allCourses);
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  const categories = ['Todos', 'CV', 'LinkedIn', 'Entrevistas', 'Marca Personal', 'Desarrollo Profesional', 'Comunicación'];
  
  const filterCourses = (category: string) => {
    setActiveCategory(category);
    if (category === 'Todos') {
      setCourses(allCourses);
    } else {
      setCourses(allCourses.filter(course => course.category === category));
    }
  };
  
  const handlePurchase = (courseId: number, courseTitle: string) => {
    // Aquí iría la lógica para procesar la compra
    console.log(`Comprar curso ${courseId}: ${courseTitle}`);
    toast.success(`¡Curso "${courseTitle}" añadido al carrito!`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 py-16 text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cursos online para potenciar tu carrera</h1>
              <p className="text-xl mb-8">
                Formación práctica y actualizada impartida por especialistas en empleabilidad y desarrollo profesional.
              </p>
            </div>
          </div>
        </section>

        {/* Categorías */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button 
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={activeCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
                  onClick={() => filterCourses(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {course.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-500 hover:bg-green-600">Más popular</Badge>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="outline" className="bg-white text-blue-600 border-blue-200">
                        {course.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                    <div className="flex justify-between items-center">
                      <CardDescription className="text-blue-600 font-medium text-lg">
                        €{course.price}
                      </CardDescription>
                      <div className="flex space-x-2 text-sm text-gray-500">
                        <span>{course.lessons} lecciones</span>
                        <span>•</span>
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      {course.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      Nivel: {course.level}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Ver detalles</Button>
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => handlePurchase(course.id, course.title)}
                    >
                      Comprar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {courses.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-600">No hay cursos disponibles en esta categoría</h3>
                <p className="mt-2 text-gray-500">Prueba otra categoría o vuelve más tarde</p>
                <Button className="mt-4" onClick={() => filterCourses('Todos')}>
                  Ver todos los cursos
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-blue-800">¿Por qué elegir nuestros cursos?</h2>
              <p className="text-lg text-gray-600">
                Formación práctica diseñada para generar resultados inmediatos en tu carrera profesional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Enfoque práctico</h3>
                <p className="text-gray-600">
                  Contenido aplicable inmediatamente a tu búsqueda laboral y desarrollo profesional.
                </p>
              </div>

              <div className="text-center p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Soporte continuo</h3>
                <p className="text-gray-600">
                  Acceso a foro de preguntas con respuestas de expertos en menos de 24 horas.
                </p>
              </div>

              <div className="text-center p-6 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Actualización constante</h3>
                <p className="text-gray-600">
                  Contenido siempre al día con las últimas tendencias en selección y desarrollo profesional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Buscas una formación personalizada?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contáctanos para conocer nuestros planes corporativos o para solicitar una asesoría personalizada.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="/contacto">Contactar ahora</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
