
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  {
    id: 1,
    title: '10 errores comunes en el CV que te impiden conseguir entrevistas',
    excerpt: 'Descubre los fallos más frecuentes que cometen los candidatos y cómo evitarlos para aumentar tus posibilidades.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    date: '20 Abr 2024',
    category: 'CV',
    link: '/blog/errores-cv'
  },
  {
    id: 2,
    title: 'Cómo destacar en LinkedIn ante los reclutadores',
    excerpt: 'Estrategias probadas para optimizar tu perfil y aparecer en las búsquedas de oportunidades que realmente te interesan.',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    date: '12 Abr 2024',
    category: 'LinkedIn',
    link: '/blog/destacar-linkedin'
  },
  {
    id: 3,
    title: 'Preguntas difíciles de entrevista y cómo responderlas con éxito',
    excerpt: 'Guía completa para dar respuestas impactantes a las preguntas más complicadas que suelen hacer los entrevistadores.',
    image: 'https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    date: '5 Abr 2024',
    category: 'Entrevistas',
    link: '/blog/preguntas-entrevista'
  }
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">Artículos recientes</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Conocimiento práctico para impulsar tu carrera profesional y estar al día en tendencias de empleabilidad.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            <Link to="/blog" className="flex items-center">
              Ver todos los artículos
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-800 p-0 flex items-center group">
                  <Link to={post.link} className="flex items-center">
                    Leer artículo completo
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
