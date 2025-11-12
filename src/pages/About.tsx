import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LinkedinIcon, InstagramIcon, YoutubeIcon, FileText, Eye, Target, Heart, Sparkles, Users, Handshake, Briefcase } from 'lucide-react';

// Añade este componente para el icono de TikTok
const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <g>
      <path d="M21.5 2v4.5c0 2.5 2 4.5 4.5 4.5h2V16c0 6.6-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4h5.5z" fill="#000"/>
      <path d="M28 10.5c-2.5 0-4.5-2-4.5-4.5H21.5V22c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.2 0 .5 0 .7.1v4.1c-.2-.1-.5-.2-.7-.2-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V2h4.5c0 2.5 2 4.5 4.5 4.5V10.5z" fill="#fff"/>
    </g>
  </svg>
);

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 py-16 text-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img 
                  src="/hernan-lamanna-perfil.jpg" 
                  alt="Hernan Lamanna" 
                  className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-xl mx-auto"
                />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Hernan Lamanna</h1>
                <p className="text-xl mb-6">Especialista en Empleabilidad y Desarrollo Profesional</p>
                <div className="flex space-x-4 justify-center md:justify-start mb-6">
                  <a href="https://www.linkedin.com/in/gabriel-hernan-lamanna-b0178b192/" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors">
                    <LinkedinIcon size={24} />
                  </a>
                  <a href="https://www.instagram.com/hernilamanna/" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors">
                    <InstagramIcon size={24} />
                  </a>
                  <a href="https://www.tiktok.com/@hernilamanna" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors">
                    <TiktokIcon className="h-6 w-6" />
                  </a>
                  <a href="https://www.youtube.com/@hernanlamanna" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors">
                    <YoutubeIcon size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mi Historia */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">Mi Historia</h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Hola, soy Hernán Lamanna, creador de AyudarteAR. Este proyecto nació de una
                  necesidad real: miles de personas buscaban trabajo, pero no sabían por dónde
                  empezar, cómo armar un CV, dónde postularse, o cómo presentarse en una
                  entrevista. Y yo estuve en ese lugar.
                </p>
                <p>
                  Con el tiempo descubrí que compartir mis aprendizajes, mis errores y mi experiencia
                  podía ayudar a otros a conseguir oportunidades reales. Así empezó AyudarteAR: como
                  un puente entre las personas y el trabajo que están buscando.
                </p>
                <p>
                  Hoy, mi comunidad reúne a miles de personas interesadas en búsqueda laboral, empleo
                  remoto y desarrollo profesional, donde comparto contenido claro, educativo y práctico,
                  pensado para generar impacto real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visión */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center mb-8">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl shadow-lg mb-6 transform hover:scale-105 transition-transform">
                  <Eye className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-4 text-blue-800 text-center">Nuestra Visión</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-100">
                <p className="text-gray-700 text-xl leading-relaxed text-center">
                  Ser la <span className="font-semibold text-blue-700">comunidad laboral más accesible y cercana</span> de Argentina, donde cualquier
                  persona —sin importar su experiencia, recursos o contexto— pueda encontrar
                  herramientas, acompañamiento y oportunidades para crecer profesionalmente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Misión */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col items-center mb-12">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg mb-6 transform hover:scale-105 transition-transform">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-4 text-blue-800 text-center">Nuestra Misión</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 mb-6">
                <p className="text-gray-700 text-xl leading-relaxed text-center mb-6">
                  Brindar contenido, recursos, asesorías y acompañamiento para que las personas
                  puedan:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-gray-700 text-lg font-medium">Crear un CV claro y profesional.</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Sparkles className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-gray-700 text-lg font-medium">Saber dónde y cómo postularse.</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-gray-700 text-lg font-medium">Prepararse para entrevistas y procesos.</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Heart className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-gray-700 text-lg font-medium">Reconectar con su seguridad personal y sus capacidades.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl shadow-lg text-center">
                <p className="text-white text-xl font-semibold">
                  Todo con un enfoque humano, directo y simple.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col items-center mb-12">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl shadow-lg mb-6 transform hover:scale-105 transition-transform">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-4 text-blue-800 text-center">Nuestros Valores</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-blue-800">Humanidad</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Primero las personas. Cada historia cuenta.</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-blue-800">Claridad</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Hablar fácil, sin complicar lo que puede ser simple.</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-blue-800">Accesibilidad</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Que cualquiera pueda aprender, sin importar su punto de partida.</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-blue-800">Acompañamiento</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">No solo damos información, caminamos con la persona el proceso.</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 group md:col-span-2 lg:col-span-1">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-blue-800">Compromiso</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Si trabajamos con una marca o proyecto, lo hacemos con respeto, profesionalismo y autenticidad.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Colaboraciones */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center mb-12">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl shadow-lg mb-6 transform hover:scale-105 transition-transform">
                  <Briefcase className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-4 text-blue-800 text-center">Colaboraciones</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl shadow-xl border border-blue-100">
                <p className="text-gray-700 text-xl leading-relaxed text-center">
                  Busco trabajar con marcas que compartan esta visión: <span className="font-semibold text-blue-700">ofrecer soluciones reales</span>,
                  generar impacto social y construir mensajes que conecten con la vida cotidiana de las
                  personas. Cada colaboración se aborda con <span className="font-semibold text-blue-700">profesionalismo y cercanía</span>, adaptando la
                  estrategia a los objetivos de la marca para lograr resultados reales y significativos.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                    <Target className="w-6 h-6 text-blue-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-blue-800 mb-2">Soluciones Reales</h3>
                  <p className="text-gray-600 text-sm">Impacto tangible y medible</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                    <Heart className="w-6 h-6 text-blue-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-blue-800 mb-2">Impacto Social</h3>
                  <p className="text-gray-600 text-sm">Mensajes que conectan</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                    <Handshake className="w-6 h-6 text-blue-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-blue-800 mb-2">Profesionalismo</h3>
                  <p className="text-gray-600 text-sm">Estrategias personalizadas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Datos y Resultados */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Resultados que avalan nuestra experiencia</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-blue-700/50 p-6 rounded-lg hover:bg-blue-700/70 transition-colors">
                <div className="text-5xl font-bold mb-2">+40.000</div>
                <p className="text-xl">CVs evaluados</p>
              </div>
              <div className="text-center bg-blue-700/50 p-6 rounded-lg hover:bg-blue-700/70 transition-colors">
                <div className="text-5xl font-bold mb-2">+20.000</div>
                <p className="text-xl">Profesionales asesorados</p>
              </div>
              <div className="text-center bg-blue-700/50 p-6 rounded-lg hover:bg-blue-700/70 transition-colors">
                <div className="text-5xl font-bold mb-2">+25.000</div>
                <p className="text-xl">Clientes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-blue-800 text-center">Resultados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <img src="/drive-download-20250617T193555Z-1-001/IMG_3816.PNG" alt="Resultado 1" className="rounded-lg shadow-lg" />
              <img src="/drive-download-20250617T193555Z-1-001/IMG_3818.PNG" alt="Resultado 2" className="rounded-lg shadow-lg" />
              <img src="/drive-download-20250617T193555Z-1-001/IMG_3814.PNG" alt="Resultado 3" className="rounded-lg shadow-lg" />
              <img src="/drive-download-20250617T193555Z-1-001/651539e1-c4ac-4ed0-b0e1-c4dbbc1d9ad5.JPG" alt="Resultado 4" className="rounded-lg shadow-lg" />
              <img src="/drive-download-20250617T193555Z-1-001/IMG_3616.PNG" alt="Resultado 5" className="rounded-lg shadow-lg" />
              <img src="/drive-download-20250617T193555Z-1-001/IMG_3819.PNG" alt="Resultado 6" className="rounded-lg shadow-lg" />
              <img src="/drive-download-20250617T193555Z-1-001/IMG_3822.PNG" alt="Resultado 7" className="rounded-lg shadow-lg" />
              <img src="/drive-download-20250617T193555Z-1-001/IMG_3821.PNG" alt="Resultado 8" className="rounded-lg shadow-lg" />
              <img src="/drive-download-20250617T193555Z-1-001/IMG_3817.PNG" alt="Resultado 9" className="rounded-lg shadow-lg" />
              <img src="/drive-download-20250617T193555Z-1-001/IMG_3824.PNG" alt="Resultado 10" className="rounded-lg shadow-lg" />
              <img src="/drive-download-20250617T193555Z-1-001/IMG_3820.PNG" alt="Resultado 11" className="rounded-lg shadow-lg" />
              <img src="/drive-download-20250617T193555Z-1-001/IMG_0025.PNG" alt="Resultado 12" className="rounded-lg shadow-lg" />
              <img src="/drive-download-20250617T193555Z-1-001/IMG_3815.PNG" alt="Resultado 13" className="rounded-lg shadow-lg" />
              <img src="/drive-download-20250617T193555Z-1-001/IMG_3813.PNG" alt="Resultado 14" className="rounded-lg shadow-lg" />
              <img src="/drive-download-20250617T193555Z-1-001/IMG_3812.PNG" alt="Resultado 15" className="rounded-lg shadow-lg" />
              <img src="/drive-download-20250617T193555Z-1-001/8f91ddba-e39b-4203-a011-94202aa1b2e2.jpg" alt="Resultado 16" className="rounded-lg shadow-lg" />
              <img src="/drive-download-20250617T193555Z-1-001/IMG_3823.PNG" alt="Resultado 17" className="rounded-lg shadow-lg" />
              <img src="/drive-download-20250617T193555Z-1-001/IMG_3588.PNG" alt="Resultado 18" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">¿Listo para impulsar tu carrera profesional?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
              Contacta conmigo para descubrir cómo puedo ayudarte a conseguir tus objetivos profesionales.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 button-blue-glow text-lg py-6 px-8">
                <Link to="/servicios/cv-harvard">Quiero armar mi CV</Link>
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg py-6 px-8">
                <Link to="/servicios">Ver todos los servicios</Link>
              </Button>
              <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 text-lg py-6 px-8">
                <a href="https://wa.me/5491123844473?text=%C2%A1Hola!%20Quiero%20agendar%20una%20asesor%C3%ADa" target="_blank" rel="noopener noreferrer">
                  Agenda tu asesoría
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
