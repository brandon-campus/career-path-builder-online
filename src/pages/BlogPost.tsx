import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { useBlogPost } from '@/hooks/useBlogPosts';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading, error } = useBlogPost(slug || '');
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow flex items-center justify-center px-4">
          <p className="text-sm sm:text-base text-gray-600">Cargando artículo...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <p className="text-sm sm:text-base text-red-600 mb-4">{error || 'No se encontró el artículo'}</p>
            <Button
              onClick={() => navigate('/blog')}
              variant="outline"
              className="text-sm sm:text-base"
            >
              Volver al blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      {/* Hero visual - Mobile First */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 flex items-end">
        <img
          src={post.image_url}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay oscuro para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30 z-[1]"></div>
        <div className="relative z-10 w-full px-4 pb-4 sm:pb-6 md:pb-8">
          <div className="container mx-auto max-w-3xl">
            <span className="inline-block bg-blue-600/80 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full mb-2 sm:mb-3 shadow">
              {post.category}
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white drop-shadow mb-2 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-white/90 text-xs sm:text-sm">
              <span>{post.date}</span>
              <span className="hidden sm:inline">•</span>
              <span>{post.read_time}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden md:inline">Por Hernán Lamanna</span>
            </div>
          </div>
        </div>
        {/* Botón volver - Mobile First */}
        <button
          onClick={() => navigate('/blog')}
          className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/90 hover:bg-white text-blue-700 font-semibold text-xs sm:text-sm px-2 sm:px-4 py-1.5 sm:py-2 rounded shadow transition"
          aria-label="Volver al blog"
        >
          <span className="hidden sm:inline">← </span>Volver
        </button>
      </div>
      {/* Cuerpo del artículo - Mobile First */}
      <main className="flex-grow">
        <section className="py-6 sm:py-8 md:py-12">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
            <article className="prose prose-sm sm:prose-base md:prose-lg prose-blue max-w-none text-gray-900 leading-relaxed 
              [&_p]:mb-4 sm:[&_p]:mb-6 
              [&_h1]:text-2xl sm:[&_h1]:text-3xl md:[&_h1]:text-4xl
              [&_h2]:text-xl sm:[&_h2]:text-2xl md:[&_h2]:text-3xl
              [&_h3]:text-lg sm:[&_h3]:text-xl md:[&_h3]:text-2xl
              [&_ul]:mb-4 sm:[&_ul]:mb-6 
              [&_ol]:mb-4 sm:[&_ol]:mb-6 
              [&_li]:mb-2
              [&_img]:rounded-lg [&_img]:my-4
              [&_strong]:font-semibold
              [&_a]:text-blue-600 [&_a]:underline [&_a]:break-words">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            {/* Autor y CTA - Mobile First */}
            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center px-2">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <img
                  src="/hernan-lamanna-perfil.jpg"
                  alt="Hernán Lamanna"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-blue-200 object-cover flex-shrink-0"
                />
                <div className="text-center sm:text-left">
                  <div className="font-bold text-sm sm:text-base text-blue-700">Hernán Lamanna</div>
                  <div className="text-xs sm:text-sm text-gray-500">Fundador de AyudarteAR</div>
                </div>
              </div>
              <p className="mt-4 sm:mt-6 text-center text-sm sm:text-base text-gray-600 px-2">
                ¿Querés más herramientas para potenciar tu perfil profesional?{' '}
                <a 
                  href="https://ayudartear.com" 
                  className="text-blue-600 hover:underline break-words" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visitá ayudartear.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost; 