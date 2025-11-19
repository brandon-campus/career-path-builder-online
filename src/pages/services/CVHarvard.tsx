import ServiceLayout from '@/components/services/ServiceLayout';
import { CheckCircle, FileText, Search, Award, Download, Star, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Testimonios reales - imágenes de capturas de pantalla de clientes
const testimonios = [
  {
    imagen: "/drive-download-20250617T193555Z-1-001/IMG_3816.PNG",
    alt: "Testimonio CV Harvard 1"
  },
  {
    imagen: "/drive-download-20250617T193555Z-1-001/IMG_3818.PNG",
    alt: "Testimonio CV Harvard 2"
  },
  {
    imagen: "/drive-download-20250617T193555Z-1-001/IMG_3814.PNG",
    alt: "Testimonio CV Harvard 3"
  },
  {
    imagen: "/drive-download-20250617T193555Z-1-001/IMG_3616.PNG",
    alt: "Testimonio CV Harvard 4"
  }
];

const CVHarvard = () => {
  return (
    <ServiceLayout
      title="CV Profesional TIPO HARVARD"
      description="El CV que abre puertas en empresas y consultoras. Formato internacional, estructura clara y optimizado para sistemas ATS."
      price="$18.000"
      deliveryTime="5 a 7 días hábiles"
      paymentMethods={[
        "Mercado Pago",
        "Transferencia bancaria",
        "Rapipago",
        "Pago Fácil"
      ]}
      features={[
        "Guía de Trabajo 2025 con enlaces a portales y agencias reales",
        "50 preguntas de entrevista + respuestas",
        "Tips para optimizar tu perfil de LinkedIn",
        "Formato entregado en Word y PDF",
        "Estructura profesional y prolija"
      ]}
      mainButtonLink="https://mpago.li/2NvV5cA"
    >
      {/* Bloque valor añadido - Mobile First */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-6 rounded-xl mb-8 sm:mb-10 md:mb-12">
        <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
          <Star className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">¿Por qué elegir este CV?</h3>
        </div>
        <ul className="list-none pl-0 space-y-2 text-sm sm:text-base text-blue-800">
          <li className="flex items-center gap-2"><Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" /> Recomendado por reclutadores de empresas top</li>
          <li className="flex items-center gap-2"><Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" /> Ideal para aplicar a multinacionales y consultoras</li>
          <li className="flex items-center gap-2"><Search className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" /> Optimizado para sistemas ATS</li>
        </ul>
      </section>

      {/* Características principales - Mobile First */}
      <section className="mb-8 sm:mb-10 md:mb-12">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">Características principales</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <li className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-3 sm:p-4 shadow-sm">
            <FileText className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" /> <span className="text-sm sm:text-base">Formato limpio y profesional</span>
          </li>
          <li className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-3 sm:p-4 shadow-sm">
            <CheckCircle className="text-green-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" /> <span className="text-sm sm:text-base">Estructura cronológica inversa</span>
          </li>
          <li className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-3 sm:p-4 shadow-sm">
            <Star className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" /> <span className="text-sm sm:text-base">Énfasis en logros y resultados</span>
          </li>
          <li className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-3 sm:p-4 shadow-sm">
            <Search className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" /> <span className="text-sm sm:text-base">Optimizado para sistemas ATS</span>
          </li>
          <li className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-3 sm:p-4 shadow-sm">
            <FileText className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" /> <span className="text-sm sm:text-base">Entrega en Word y PDF</span>
          </li>
        </ul>
      </section>

      {/* Proceso de creación - Mobile First */}
      <section className="mb-8 sm:mb-10 md:mb-12">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">¿Cómo es el proceso?</h3>
        <ol className="list-decimal pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-blue-900">
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> Análisis inicial de tu experiencia y objetivos</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> Estructuración del contenido siguiendo el formato Harvard</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> Optimización de palabras clave para ATS</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> Revisión y ajustes</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> Entrega en formatos Word y PDF</li>
        </ol>
      </section>

      {/* Guía de Trabajo 2025 - Mobile First */}
      <section className="mb-8 sm:mb-10 md:mb-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 bg-blue-50 rounded-xl p-4 sm:p-6">
        <img
          src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=200&q=80"
          alt="Guía de Trabajo 2025"
          className="rounded-lg border-2 border-blue-100 shadow-md w-24 h-32 sm:w-32 sm:h-40 object-cover flex-shrink-0"
        />
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">Incluye: Guía de Trabajo 2025</h3>
          <p className="text-sm sm:text-base text-blue-900 mb-2">
            Esta guía descargable te brinda acceso directo a más oportunidades laborales con recursos prácticos y actualizados. Incluye:<br /><br />
            ✅ 11 páginas con enlaces directos a portales de empleo, agencias de trabajo, agencias eventuales y empresas para postularte de forma inmediata y cargar tu CV sin perder tiempo.<br />
            ✅ Guía paso a paso para optimizar tu perfil de LinkedIn: desde cómo elegir tu foto y portada, hasta qué escribir en tu descripción, cómo publicar contenido y llegar a más reclutadores.<br />
            ✅ 50 preguntas de entrevistas laborales frecuentes, cada una con 2 respuestas posibles para que llegues preparado y seguro.<br />
            💡 Además, contiene consejos extra, tips para destacar y recomendaciones basadas en lo que buscan hoy las empresas en Argentina.<br /><br />
            Ideal si estás en búsqueda activa o querés actualizar tu estrategia de postulación. ¡Es práctica, concreta y diseñada para ayudarte a conseguir trabajo más rápido!
          </p>
        </div>
      </section>

      {/* Testimonios - Mobile First */}
      <section className="mb-8 sm:mb-10 md:mb-12">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 sm:mb-6">Testimonios de quienes ya lo usaron</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {testimonios.map((testimonio, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-3 sm:p-4 flex items-center justify-center overflow-hidden">
              <img 
                src={testimonio.imagen} 
                alt={testimonio.alt} 
                className="rounded-lg object-contain w-full h-auto max-h-96"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </ServiceLayout>
  );
};

export default CVHarvard; 