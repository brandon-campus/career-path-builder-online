import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { useBlogPost } from '@/hooks/useBlogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading, error } = useBlogPost(slug || '');
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-gray-600">Cargando artículo...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 mb-4">Error al cargar el artículo: {error || 'No se encontró el artículo'}</p>
            <button
              onClick={() => navigate('/blog')}
              className="text-blue-600 hover:underline"
            >
              Volver al blog
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      {/* Hero visual */}
      <div className="relative w-full h-80 md:h-96 flex items-end">
        <img
          src={post.image_url}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
        />
        <div className="relative z-10 w-full px-4 md:px-0 pb-8">
          <div className="container mx-auto max-w-3xl">
            <span className="inline-block bg-blue-600/80 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 shadow">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow mb-2">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.read_time}</span>
              <span>•</span>
              <span>Por Hernán Lamanna</span>
            </div>
          </div>
        </div>
        {/* Botón volver */}
        <button
          onClick={() => navigate('/blog')}
          className="absolute top-4 left-4 bg-white/80 hover:bg-white text-blue-700 font-semibold px-4 py-2 rounded shadow transition"
        >
          ← Volver al blog
        </button>
      </div>
      {/* Cuerpo del artículo */}
      <main className="flex-grow">
        <section className="py-12">
          <div className="container mx-auto max-w-3xl px-4 md:px-0">
            <article className="prose prose-lg prose-blue max-w-none text-gray-900 leading-relaxed [&_p]:mb-6 [&_ul]:mb-6 [&_ol]:mb-6 [&_li]:mb-2">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            {/* Autor y CTA */}
            <div className="mt-12 flex flex-col items-center">
              <div className="flex items-center gap-3">
                <img
                  src="/hernan-lamanna-perfil.jpg"
                  alt="Hernán Lamanna"
                  className="w-14 h-14 rounded-full border-2 border-blue-200 object-cover"
                />
                <div>
                  <div className="font-bold text-blue-700">Hernán Lamanna</div>
                  <div className="text-sm text-gray-500">Fundador de AyudarteAR</div>
                </div>
              </div>
              <p className="mt-4 text-center text-gray-600">
                ¿Querés más herramientas para potenciar tu perfil profesional? <br />
                <a href="https://ayudartear.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
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