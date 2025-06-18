import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LinkedinIcon, InstagramIcon, YoutubeIcon, FileText } from 'lucide-react';

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
                  src="/hernanlamana.jpg" 
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
                  Hola, soy Hernan Lamanna. Creador de contenido dedicado a inspirar y conectar con una
                  audiencia activa y comprometida. Mis redes sociales reúnen a una comunidad interesada en
                  búsquedas laborales, empleo remoto y aplicaciones de aprendizaje, donde comparto contenido
                  auténtico, educativo y entretenido que genera conversaciones y fidelidad.
                </p>
                <p>
                  Estoy interesado en colaborar con marcas que compartan mi visión de ofrecer valor real y
                  soluciones a las personas, adaptando estrategias creativas y efectivas para potenciar sus
                  objetivos.
                </p>
                <p>
                  Mi compromiso con las marcas con las que trabajo es total: cada colaboración se aborda con
                  profesionalismo, autenticidad y un enfoque personalizado para garantizar resultados de alto
                  impacto. Estoy listo para explorar cómo podemos trabajar juntos para generar valor y hacer
                  crecer tu marca.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Datos y Resultados */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Resultados que avalan mi experiencia</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center bg-blue-700/50 p-6 rounded-lg">
                <div className="text-5xl font-bold mb-2">+500</div>
                <p className="text-xl">Profesionales asesorados</p>
              </div>
              <div className="text-center bg-blue-700/50 p-6 rounded-lg">
                <div className="text-5xl font-bold mb-2">+15K</div>
                <p className="text-xl">CVs evaluados</p>
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
                <a href="https://wa.me/5491131985450?text=%C2%A1Hola!%20Quiero%20agendar%20una%20asesor%C3%ADa" target="_blank" rel="noopener noreferrer">
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
