import { useState, useMemo } from 'react';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { useBlogCategories } from '@/hooks/useBlogCategories';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const { posts, loading, error } = useBlogPosts(true); // Solo posts publicados
  const { categories: blogCategories, loading: categoriesLoading } = useBlogCategories(true); // Solo categorías activas
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Construir array de categorías con "Todos" al inicio
  const categories = useMemo(() => {
    return ['Todos', ...blogCategories.map(cat => cat.name)];
  }, [blogCategories]);
  
  // Filtrar posts según categoría y búsqueda
  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filtrar por categoría
    if (activeCategory !== 'Todos') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }

    // Filtrar por búsqueda
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [posts, activeCategory, searchQuery]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // La búsqueda se maneja automáticamente con useMemo
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - Mobile First */}
        <section className="bg-blue-600 py-8 sm:py-12 md:py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Recursos y consejos para tu desarrollo profesional
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-2">
                Artículos prácticos sobre CV, entrevistas, LinkedIn y desarrollo profesional para potenciar tu carrera.
              </p>
              
              {/* Buscador - Mobile First */}
              <form onSubmit={handleSearch} className="max-w-xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                  <Input 
                    type="text" 
                    placeholder="Buscar artículos..." 
                    className="border-2 border-white bg-blue-500 text-white placeholder:text-blue-100 focus-visible:ring-white text-base sm:text-sm flex-1"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button 
                    type="submit" 
                    className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto px-6"
                  >
                    Buscar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Categorías - Mobile First con scroll horizontal */}
        <section className="py-4 sm:py-6 md:py-8 bg-white border-b sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto px-4">
            {categoriesLoading ? (
              <div className="flex justify-center py-2">
                <p className="text-sm text-gray-500">Cargando categorías...</p>
              </div>
            ) : (
              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="flex gap-2 sm:flex-wrap sm:justify-center min-w-max sm:min-w-0">
                  {categories.map((category) => (
                    <Button 
                      key={category}
                      variant={activeCategory === category ? "default" : "outline"}
                      className={`
                        ${activeCategory === category ? "bg-blue-600 hover:bg-blue-700 text-white" : ""}
                        whitespace-nowrap text-sm sm:text-base
                        flex-shrink-0
                      `}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Blog Posts Grid - Mobile First */}
        <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {loading && (
              <div className="text-center py-8 sm:py-12">
                <p className="text-sm sm:text-base text-gray-600">Cargando artículos...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-8 sm:py-12 px-4">
                <p className="text-sm sm:text-base text-red-600">Error al cargar los artículos: {error}</p>
              </div>
            )}

            {!loading && !error && (
              <>
                {/* Contador de resultados - Mobile First */}
                {filteredPosts.length > 0 && (
                  <div className="mb-4 sm:mb-6 text-center sm:text-left">
                    <p className="text-sm sm:text-base text-gray-600">
                      {filteredPosts.length} {filteredPosts.length === 1 ? 'artículo encontrado' : 'artículos encontrados'}
                      {activeCategory !== 'Todos' && ` en "${activeCategory}"`}
                      {searchQuery && ` para "${searchQuery}"`}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {filteredPosts.map((post) => (
                    <Link 
                      key={post.id} 
                      to={post.link}
                      className="block h-full"
                    >
                      <Card className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-blue-300 h-full flex flex-col cursor-pointer group">
                        <div className="h-40 sm:h-48 md:h-52 overflow-hidden">
                          <img 
                            src={post.image_url} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <CardHeader className="p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs sm:text-sm text-blue-600 border-blue-200 bg-blue-50 w-fit">
                              {post.category}
                            </Badge>
                            <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-500">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              <span>{post.read_time}</span>
                            </div>
                          </div>
                          <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-blue-600 transition-colors leading-tight">
                            {post.title}
                          </CardTitle>
                          <div className="text-xs sm:text-sm text-gray-500 mt-1">{post.date}</div>
                        </CardHeader>
                        <CardContent className="flex-grow p-4 sm:p-6 pt-0">
                          <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
                            {post.excerpt}
                          </p>
                        </CardContent>
                        <CardFooter className="p-4 sm:p-6 pt-0">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">
                            Leer artículo
                          </Button>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>

                {filteredPosts.length === 0 && (
                  <div className="text-center py-8 sm:py-12 px-4">
                    <h3 className="text-lg sm:text-xl font-medium text-gray-600 mb-2">No se encontraron artículos</h3>
                    <p className="text-sm sm:text-base text-gray-500 mb-4">Prueba con otra categoría o término de búsqueda</p>
                    <Button 
                      className="text-sm sm:text-base" 
                      onClick={() => {setSearchQuery(''); setActiveCategory('Todos');}}
                    >
                      Ver todos los artículos
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Newsletter Section - Mobile First */}
        <section className="py-8 sm:py-12 md:py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-blue-800">
                Suscríbete a nuestro newsletter
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 px-2">
                Recibe artículos exclusivos, consejos profesionales y recursos útiles directamente en tu bandeja de entrada.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto">
                <Input 
                  type="email" 
                  placeholder="Tu email" 
                  className="flex-grow text-sm sm:text-base" 
                  required
                />
                <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto text-sm sm:text-base">
                  Suscribirse
                </Button>
              </form>
              <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 px-2">
                Prometemos no enviarte spam. Puedes darte de baja en cualquier momento.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Blog;
