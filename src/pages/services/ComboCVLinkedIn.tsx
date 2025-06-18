import ServiceLayout from '@/components/services/ServiceLayout';
import { CheckCircle, FileText, Linkedin, Award, Download, Star, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonios = [
  {
    nombre: "Andrea F.",
    texto: "El combo me permitió renovar mi CV y LinkedIn al mismo tiempo. ¡Me contactaron de varias empresas en pocos días!",
    foto: "https://randomuser.me/api/portraits/women/55.jpg"
  },
  {
    nombre: "Carlos T.",
    texto: "Muy completo, el taller de LinkedIn fue un plus. Recomiendo el pack a quienes buscan un cambio laboral real.",
    foto: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const ComboCVLinkedIn = () => {
  return (
    <ServiceLayout
      title="Combo CV + LinkedIn"
      description="La solución integral que incluye CV profesional optimizado y perfil de LinkedIn listo para atraer empresas y reclutadores."
      price="$30.000"
      originalPrice="$34.000"
      deliveryTime="Hasta 2 semanas"
      paymentMethods={[
        "Mercado Pago",
        "Transferencia bancaria",
        "Rapipago",
        "Pago Fácil"
      ]}
      features={[
        "CV profesional optimizado (Diseño moderno o formato ATS)",
        "Perfil de LinkedIn optimizado",
        "Guía de trabajo 2025 con 50 preguntas de entrevistas y respuestas",
        "50 enlaces directos a empresas y portales de empleo",
        "Mini guía de publicaciones en LinkedIn",
        "Acceso al taller gratuito de LinkedIn"
      ]}
      mainButtonLink="https://mpago.li/2ahZhsp"
    >
      {/* Bloque valor añadido */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl mb-12">
        <div className="flex items-center gap-4 mb-2">
          <Star className="text-yellow-400" />
          <h3 className="text-2xl font-bold text-blue-900">¿Por qué elegir el combo?</h3>
        </div>
        <ul className="list-none pl-0 space-y-2 text-blue-800">
          <li className="flex items-center gap-2"><Award className="w-5 h-5 text-blue-400" /> Solución integral para tu búsqueda laboral</li>
          <li className="flex items-center gap-2"><Linkedin className="w-5 h-5 text-blue-600" /> LinkedIn y CV alineados y optimizados</li>
          <li className="flex items-center gap-2"><Briefcase className="w-5 h-5 text-blue-400" /> Incluye taller gratuito y guía exclusiva</li>
        </ul>
      </section>

      {/* Características principales */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Características principales</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <FileText className="text-blue-600" /> CV optimizado (diseño o formato ATS)
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <Linkedin className="text-blue-600" /> Perfil de LinkedIn profesional
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <Star className="text-yellow-400" /> Acceso a taller gratuito de LinkedIn
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <Award className="text-blue-400" /> Guía de trabajo 2025 incluida
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <Briefcase className="text-blue-400" /> Mini guía de publicaciones efectivas
          </li>
        </ul>
      </section>

      {/* Proceso de creación */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">¿Cómo es el proceso?</h3>
        <ol className="list-decimal pl-6 space-y-2 text-blue-900">
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Análisis de tu perfil y objetivos</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Creación del CV y revisión contigo</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Optimización de LinkedIn tras aprobar el CV</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Acceso al taller y entrega de guías</li>
        </ol>
      </section>

      {/* Guía de Trabajo 2025 */}
      <section className="mb-12 flex flex-col md:flex-row items-center gap-8 bg-blue-50 rounded-xl p-6">
        <img
          src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=200&q=80"
          alt="Guía de Trabajo 2025"
          className="rounded-lg border-2 border-blue-100 shadow-md w-32 h-40 object-cover"
        />
        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-2">Incluye: Guía de Trabajo 2025</h3>
          <p className="text-blue-900 mb-2">
            Esta guía descargable te brinda acceso directo a más oportunidades laborales con recursos prácticos y actualizados. Incluye:<br /><br />
            ✅ 11 páginas con enlaces directos a portales de empleo, agencias de trabajo, agencias eventuales y empresas para postularte de forma inmediata y cargar tu CV sin perder tiempo.<br />
            ✅ Guía paso a paso para optimizar tu perfil de LinkedIn: desde cómo elegir tu foto y portada, hasta qué escribir en tu descripción, cómo publicar contenido y llegar a más reclutadores.<br />
            ✅ 50 preguntas de entrevistas laborales frecuentes, cada una con 2 respuestas posibles para que llegues preparado y seguro.<br />
            💡 Además, contiene consejos extra, tips para destacar y recomendaciones basadas en lo que buscan hoy las empresas en Argentina.<br /><br />
            Ideal si estás en búsqueda activa o querés actualizar tu estrategia de postulación. ¡Es práctica, concreta y diseñada para ayudarte a conseguir trabajo más rápido!
          </p>
        </div>
      </section>

      {/* Testimonios */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-blue-800 mb-6">Testimonios de quienes ya lo usaron</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonios.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <img src={t.foto} alt={t.nombre} className="w-16 h-16 rounded-full mb-3 border-2 border-blue-200" />
              <p className="text-blue-900 italic mb-2">“{t.texto}”</p>
              <span className="font-semibold text-blue-700">{t.nombre}</span>
            </div>
          ))}
        </div>
      </section>
    </ServiceLayout>
  );
};

export default ComboCVLinkedIn; 