import { useState, useMemo } from 'react';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const { posts, loading, error } = useBlogPosts(true); // Solo posts publicados
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['Todos', 'CV', 'LinkedIn', 'Entrevistas', 'Networking', 'Negociación', 'Marca Personal'];
  
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
        {/* Hero Section */}
        <section className="bg-blue-600 py-16 text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Recursos y consejos para tu desarrollo profesional</h1>
              <p className="text-xl mb-8">
                Artículos prácticos sobre CV, entrevistas, LinkedIn y desarrollo profesional para potenciar tu carrera.
              </p>
              
              {/* Buscador */}
              <form onSubmit={handleSearch} className="max-w-xl mx-auto flex items-center gap-2">
                <Input 
                  type="text" 
                  placeholder="Buscar artículos..." 
                  className="border-2 border-white bg-blue-500 text-white placeholder:text-blue-100 focus-visible:ring-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" className="bg-white text-blue-600 hover:bg-blue-50">
                  Buscar
                </Button>
              </form>
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
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            {loading && (
              <div className="text-center py-12">
                <p className="text-gray-600">Cargando artículos...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <p className="text-red-600">Error al cargar los artículos: {error}</p>
              </div>
            )}

            {!loading && !error && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image_url} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                            {post.category}
                          </Badge>
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>{post.read_time}</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
                        <div className="text-sm text-gray-500 mt-1">{post.date}</div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-gray-600">
                          {post.excerpt}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <Link to={post.link} className="w-full">Leer artículo</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-gray-600">No se encontraron artículos</h3>
                    <p className="mt-2 text-gray-500">Prueba con otra categoría o término de búsqueda</p>
                    <Button className="mt-4" onClick={() => {setSearchQuery(''); setActiveCategory('Todos');}}>
                      Ver todos los artículos
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-blue-800">Suscríbete a nuestro newsletter</h2>
              <p className="text-lg text-gray-600 mb-8">
                Recibe artículos exclusivos, consejos profesionales y recursos útiles directamente en tu bandeja de entrada.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input 
                  type="email" 
                  placeholder="Tu email" 
                  className="flex-grow" 
                  required
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Suscribirse
                </Button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
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
