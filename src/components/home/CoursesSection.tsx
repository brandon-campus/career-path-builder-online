import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const courses = [
  {
    id: 1,
    title: 'Masterclass CV ATS',
    description: 'Aprende a crear un CV que pase los filtros automáticos y llegue a manos de los reclutadores.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    popular: true,
    link: '/cursos/masterclass-cv-ats'
  },
  {
    id: 2,
    title: 'LinkedIn para profesionales',
    description: 'Domina la red profesional más importante y conviértela en tu mejor herramienta de networking.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    popular: false,
    link: '/cursos/linkedin-profesionales'
  },
  {
    id: 3,
    title: 'Entrevistas laborales exitosas',
    description: 'Prepárate para destacar en cualquier entrevista con técnicas probadas y ejercicios prácticos.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    popular: false,
    link: '/cursos/entrevistas-exitosas'
  }
];

const CoursesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Cursos Online</h2>
          <p className="text-lg text-foreground">
            Aprende a tu ritmo con nuestros cursos especializados en empleabilidad y desarrollo profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden border border-border transition-all duration-300 hover:shadow-lg h-full flex flex-col">
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
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-secondary">{course.title}</CardTitle>
                <CardDescription className="text-primary font-medium text-lg">
                  €{course.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground">
                  {course.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-secondary">
                  <Link to={course.link}>Comprar curso</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-secondary button-glow">
            <Link to="/cursos">Ver todos los cursos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
