
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const blogPosts = [
  {
    id: 1,
    title: '10 errores comunes en el CV que te impiden conseguir entrevistas',
    excerpt: 'Descubre los fallos más frecuentes que cometen los candidatos y cómo evitarlos para aumentar tus posibilidades de ser seleccionado para una entrevista.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero vel bibendum lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    date: '20 Abr 2024',
    category: 'CV',
    link: '/blog/errores-cv',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'Cómo destacar en LinkedIn ante los reclutadores',
    excerpt: 'Estrategias probadas para optimizar tu perfil y aparecer en las búsquedas de oportunidades que realmente te interesan. Aprende qué valoran los reclutadores.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero vel bibendum lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus.',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    date: '12 Abr 2024',
    category: 'LinkedIn',
    link: '/blog/destacar-linkedin',
    readTime: '8 min'
  },
  {
    id: 3,
    title: 'Preguntas difíciles de entrevista y cómo responderlas con éxito',
    excerpt: 'Guía completa para dar respuestas impactantes a las preguntas más complicadas que suelen hacer los entrevistadores y dejar una impresión memorable.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero vel bibendum lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus.',
    image: 'https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    date: '5 Abr 2024',
    category: 'Entrevistas',
    link: '/blog/preguntas-entrevista',
    readTime: '7 min'
  },
  {
    id: 4,
    title: 'La importancia del networking estratégico para tu carrera',
    excerpt: 'Descubre cómo construir y mantener una red de contactos profesionales que realmente aporte valor a tu carrera y te abra nuevas oportunidades.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero vel bibendum lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    date: '28 Mar 2024',
    category: 'Networking',
    link: '/blog/networking-estrategico',
    readTime: '6 min'
  },
  {
    id: 5,
    title: '5 estrategias para negociar un mejor salario',
    excerpt: 'Técnicas efectivas que te ayudarán a preparar y conducir una negociación salarial exitosa, tanto en un nuevo empleo como en tu puesto actual.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero vel bibendum lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus.',
    image: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    date: '15 Mar 2024',
    category: 'Negociación',
    link: '/blog/negociar-salario',
    readTime: '9 min'
  },
  {
    id: 6,
    title: 'Cómo crear una marca personal que te diferencie profesionalmente',
    excerpt: 'Pasos prácticos para definir y desarrollar una marca personal auténtica y diferenciadora que te ayude a destacar en tu sector profesional.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero vel bibendum lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    date: '2 Mar 2024',
    category: 'Marca Personal',
    link: '/blog/marca-personal',
    readTime: '10 min'
  }
];

const Blog = () => {
  const [posts, setPosts] = useState(blogPosts);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['Todos', 'CV', 'LinkedIn', 'Entrevistas', 'Networking', 'Negociación', 'Marca Personal'];
  
  const filterPosts = (category: string) => {
    setActiveCategory(category);
    if (category === 'Todos') {
      setPosts(searchQuery ? 
        blogPosts.filter(post => 
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        ) : 
        blogPosts
      );
    } else {
      setPosts(blogPosts.filter(post => {
        const matchesCategory = post.category === category;
        const matchesSearch = !searchQuery || 
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      }));
    }
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeCategory === 'Todos') {
      setPosts(searchQuery ? 
        blogPosts.filter(post => 
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        ) : 
        blogPosts
      );
    } else {
      filterPosts(activeCategory);
    }
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
                  onClick={() => filterPosts(category)}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
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
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{post.readTime}</span>
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

            {posts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-600">No se encontraron artículos</h3>
                <p className="mt-2 text-gray-500">Prueba con otra categoría o término de búsqueda</p>
                <Button className="mt-4" onClick={() => {setSearchQuery(''); filterPosts('Todos');}}>
                  Ver todos los artículos
                </Button>
              </div>
            )}

            {posts.length > 0 && posts.length < blogPosts.length && (
              <div className="text-center mt-8">
                <Button variant="outline" onClick={() => {setSearchQuery(''); filterPosts('Todos');}}>
                  Cargar más artículos
                </Button>
              </div>
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
