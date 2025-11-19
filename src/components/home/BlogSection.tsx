import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { useBlogPosts } from '@/hooks/useBlogPosts';

const BlogSection = () => {
  const { posts, loading } = useBlogPosts(true); // Solo posts publicados
  const recentPosts = posts.slice(0, 3); // Mostrar solo los 3 más recientes

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-10 md:mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-blue-800">Artículos recientes</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl">
              Conocimiento práctico para impulsar tu carrera profesional y estar al día en tendencias de empleabilidad.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 text-sm sm:text-base w-full sm:w-auto">
            <Link to="/blog" className="flex items-center">
              Ver todos los artículos
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>

        {loading && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-sm sm:text-base text-gray-600">Cargando artículos...</p>
          </div>
        )}

        {!loading && recentPosts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {recentPosts.map((post) => (
              <Link 
                key={post.id} 
                to={post.link}
                className="block h-full"
              >
                <Card className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-blue-300 h-full flex flex-col cursor-pointer group">
                  <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                    <img 
                      src={post.image_url} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs sm:text-sm text-blue-600 border-blue-200 bg-blue-50">
                        {post.category}
                      </Badge>
                      <span className="text-xs sm:text-sm text-gray-500">{post.date}</span>
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-blue-600 transition-colors">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-4 sm:p-6 pt-0">
                    <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 sm:p-6 pt-0">
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-800 p-0 flex items-center w-full justify-start group-hover:translate-x-1 transition-transform text-sm sm:text-base">
                      Leer artículo completo
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {!loading && recentPosts.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-sm sm:text-base text-gray-600">No hay artículos disponibles</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
