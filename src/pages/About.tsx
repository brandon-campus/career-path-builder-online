
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LinkedinIcon, InstagramIcon, YoutubeIcon, FileText } from 'lucide-react';

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
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Hernan Lamanna" 
                  className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-xl mx-auto"
                />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Hernan Lamanna</h1>
                <p className="text-xl mb-6">Especialista en Empleabilidad y Desarrollo Profesional</p>
                <div className="flex space-x-4 justify-center md:justify-start mb-6">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors">
                    <LinkedinIcon size={24} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors">
                    <InstagramIcon size={24} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors">
                    <YoutubeIcon size={24} />
                  </a>
                </div>
                <p className="text-blue-100">
                  Ex-reclutador con +12 años de experiencia en selección de talento y desarrollo profesional.
                </p>
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
                  Mi nombre es Hernan Lamanna y soy especialista en empleabilidad con más de 12 años de experiencia en el campo de recursos humanos y selección de personal. Durante mi carrera como reclutador en importantes empresas del sector tecnológico y consultoría, he entrevistado a más de 3.000 profesionales y he revisado más de 15.000 CV.
                </p>
                <p>
                  A lo largo de los años, observé un patrón consistente: profesionales talentosos y capacitados que no conseguían avanzar en procesos de selección debido a errores evitables en sus CV, perfiles de LinkedIn o preparación para entrevistas. Esta realidad me llevó a querer cambiar de perspectiva y ayudar a los candidatos a presentar su mejor versión profesional.
                </p>
                <p>
                  En 2019 dejé mi puesto como director de talento en una multinacional para dedicarme completamente a ayudar a profesionales a mejorar su empleabilidad y conseguir las oportunidades que realmente merecen. Desde entonces, he asesorado a más de 500 profesionales que han logrado avanzar significativamente en sus carreras.
                </p>
                <p>
                  Mi enfoque combina el conocimiento interno de los procesos de selección con estrategias prácticas y actualizadas, adaptadas a cada sector y nivel profesional. Me apasiona especialmente ayudar a profesionales en transición de carrera y a aquellos que buscan dar un salto cualitativo en su trayectoria.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="inline-block bg-blue-100 p-3 rounded-full mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Misión</h3>
                <p className="text-gray-700">
                  Empoderar a profesionales con las herramientas, conocimientos y estrategias necesarias para mostrar su verdadero potencial en el mercado laboral y acceder a oportunidades alineadas con sus aspiraciones y capacidades.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="inline-block bg-blue-100 p-3 rounded-full mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Visión</h3>
                <p className="text-gray-700">
                  Crear un mundo donde cada profesional pueda acceder a las oportunidades que merece basándose en su talento y capacidades reales, eliminando las barreras causadas por la presentación ineficiente de sus habilidades y experiencia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Formación y Experiencia */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-blue-800 text-center">Formación y Experiencia</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="border-l-4 border-blue-600 pl-8 space-y-12 relative">
                {/* Experiencia 1 */}
                <div className="relative">
                  <div className="absolute -left-12 bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
                    <FileText className="text-white" size={16} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Director de Talento</h3>
                  <p className="text-lg text-blue-600 mb-2">TechGlobal Corp. (2016-2019)</p>
                  <p className="text-gray-600">
                    Dirección del departamento de adquisición de talento para Europa. Responsable de más de 500 contrataciones anuales, desarrollo de programas de selección y formación de equipos de reclutamiento.
                  </p>
                </div>
                
                {/* Experiencia 2 */}
                <div className="relative">
                  <div className="absolute -left-12 bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
                    <FileText className="text-white" size={16} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Responsable de Selección Senior</h3>
                  <p className="text-lg text-blue-600 mb-2">HRConsulting Solutions (2012-2016)</p>
                  <p className="text-gray-600">
                    Dirección de procesos de selección para clientes del sector tecnológico y financiero. Especialización en perfiles directivos y posiciones de alta cualificación técnica.
                  </p>
                </div>
                
                {/* Formación */}
                <div className="relative">
                  <div className="absolute -left-12 bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
                    <FileText className="text-white" size={16} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Formación Académica</h3>
                  <p className="text-lg text-blue-600 mb-2">2008-2012</p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Máster en Dirección y Gestión de Recursos Humanos - Universidad Complutense de Madrid</li>
                    <li>• Licenciatura en Psicología - Universidad de Barcelona</li>
                    <li>• Certificación en Coaching Profesional - International Coaching Federation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Datos y Resultados */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Resultados que avalan mi experiencia</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-blue-700/50 p-6 rounded-lg">
                <div className="text-5xl font-bold mb-2">+500</div>
                <p className="text-xl">Profesionales asesorados</p>
              </div>
              <div className="text-center bg-blue-700/50 p-6 rounded-lg">
                <div className="text-5xl font-bold mb-2">87%</div>
                <p className="text-xl">Tasa de éxito en entrevistas</p>
              </div>
              <div className="text-center bg-blue-700/50 p-6 rounded-lg">
                <div className="text-5xl font-bold mb-2">+15K</div>
                <p className="text-xl">CVs evaluados</p>
              </div>
              <div className="text-center bg-blue-700/50 p-6 rounded-lg">
                <div className="text-5xl font-bold mb-2">+3K</div>
                <p className="text-xl">Entrevistas realizadas</p>
              </div>
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
                <Link to="/contacto">Agenda tu asesoría</Link>
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg py-6 px-8">
                <Link to="/servicios">Ver todos los servicios</Link>
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
