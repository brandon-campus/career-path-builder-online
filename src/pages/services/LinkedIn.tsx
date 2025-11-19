import ServiceLayout from '@/components/services/ServiceLayout';
import { CheckCircle, Users, Linkedin, Award, Download, Star, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonios = [
  {
    nombre: "Valeria S.",
    texto: "Mi perfil de LinkedIn empezó a recibir muchas más visitas y mensajes de reclutadores. ¡El cambio fue inmediato!",
    foto: "https://randomuser.me/api/portraits/women/43.jpg"
  },
  {
    nombre: "Javier M.",
    texto: "Gracias a la optimización, logré entrevistas en empresas que antes ni me miraban. El servicio es súper completo.",
    foto: "https://randomuser.me/api/portraits/men/36.jpg"
  }
];

const LinkedIn = () => {
  return (
    <ServiceLayout
      title="Armado de LinkedIn Profesional"
      description="Optimización completa de tu perfil de LinkedIn para atraer reclutadores y oportunidades laborales de calidad."
      price="$17.000"
      deliveryTime="7 a 10 días hábiles"
      paymentMethods={[
        "Mercado Pago",
        "Transferencia bancaria",
        "Rapipago",
        "Pago Fácil"
      ]}
      features={[
        "Perfil optimizado al 100%",
        "Foto de perfil y portada profesional",
        "Guía en PDF con estrategias para mejorar tu búsqueda laboral",
        "Optimización SEO del perfil",
        "Estrategias de networking efectivo"
      ]}
      mainButtonLink="https://mpago.li/1t981Xr"
    >
      {/* Bloque valor añadido - Mobile First */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-6 rounded-xl mb-8 sm:mb-10 md:mb-12">
        <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
          <Star className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">¿Por qué optimizar tu LinkedIn?</h3>
        </div>
        <ul className="list-none pl-0 space-y-2 text-sm sm:text-base text-blue-800">
          <li className="flex items-center gap-2"><Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" /> Recomendado por expertos en empleabilidad</li>
          <li className="flex items-center gap-2"><Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" /> Mayor visibilidad ante reclutadores</li>
          <li className="flex items-center gap-2"><UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" /> Perfil profesional y confiable</li>
        </ul>
      </section>

      {/* Características principales - Mobile First */}
      <section className="mb-8 sm:mb-10 md:mb-12">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">Características principales</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <li className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-3 sm:p-4 shadow-sm">
            <Linkedin className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" /> <span className="text-sm sm:text-base">Optimización SEO del perfil</span>
          </li>
          <li className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-3 sm:p-4 shadow-sm">
            <CheckCircle className="text-green-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" /> <span className="text-sm sm:text-base">Foto y portada profesional</span>
          </li>
          <li className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-3 sm:p-4 shadow-sm">
            <Users className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" /> <span className="text-sm sm:text-base">Estrategias de networking efectivo</span>
          </li>
          <li className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-3 sm:p-4 shadow-sm">
            <Star className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" /> <span className="text-sm sm:text-base">Guía en PDF con tips exclusivos</span>
          </li>
          <li className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-3 sm:p-4 shadow-sm">
            <UserCheck className="text-green-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" /> <span className="text-sm sm:text-base">Perfil alineado a tu objetivo laboral</span>
          </li>
        </ul>
      </section>

      {/* Proceso de optimización - Mobile First */}
      <section className="mb-8 sm:mb-10 md:mb-12">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">¿Cómo es el proceso?</h3>
        <ol className="list-decimal pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-blue-900">
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> Análisis de tu perfil actual y objetivos</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> Optimización de cada sección del perfil</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> Creación de foto y portada profesional</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> Revisión y entrega de guía personalizada</li>
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
          {testimonios.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-3 sm:p-4 flex flex-col items-center text-center">
              <img src={t.foto} alt={t.nombre} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-2 sm:mb-3 border-2 border-blue-200" />
              <p className="text-sm sm:text-base text-blue-900 italic mb-2">"{t.texto}"</p>
              <span className="font-semibold text-sm sm:text-base text-blue-700">{t.nombre}</span>
            </div>
          ))}
        </div>
      </section>
    </ServiceLayout>
  );
};

export default LinkedIn; 