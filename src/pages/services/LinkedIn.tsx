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
    >
      {/* Bloque valor añadido */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl mb-12">
        <div className="flex items-center gap-4 mb-2">
          <Star className="text-yellow-400" />
          <h3 className="text-2xl font-bold text-blue-900">¿Por qué optimizar tu LinkedIn?</h3>
        </div>
        <ul className="list-none pl-0 space-y-2 text-blue-800">
          <li className="flex items-center gap-2"><Award className="w-5 h-5 text-blue-400" /> Recomendado por expertos en empleabilidad</li>
          <li className="flex items-center gap-2"><Linkedin className="w-5 h-5 text-blue-600" /> Mayor visibilidad ante reclutadores</li>
          <li className="flex items-center gap-2"><UserCheck className="w-5 h-5 text-green-500" /> Perfil profesional y confiable</li>
        </ul>
      </section>

      {/* Características principales */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Características principales</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <Linkedin className="text-blue-600" /> Optimización SEO del perfil
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <CheckCircle className="text-green-500" /> Foto y portada profesional
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <Users className="text-blue-400" /> Estrategias de networking efectivo
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <Star className="text-yellow-400" /> Guía en PDF con tips exclusivos
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <UserCheck className="text-green-500" /> Perfil alineado a tu objetivo laboral
          </li>
        </ul>
      </section>

      {/* Proceso de optimización */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">¿Cómo es el proceso?</h3>
        <ol className="list-decimal pl-6 space-y-2 text-blue-900">
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Análisis de tu perfil actual y objetivos</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Optimización de cada sección del perfil</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Creación de foto y portada profesional</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Revisión y entrega de guía personalizada</li>
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
          <ul className="list-disc pl-6 text-blue-900 mb-2">
            <li>Tips para mejorar tu perfil y networking</li>
            <li>50 preguntas frecuentes en entrevistas con respuestas modelo</li>
            <li>Enlaces a portales y agencias reales</li>
            <li>Consejos para publicaciones efectivas</li>
          </ul>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100 flex items-center gap-2">
            <Download className="w-4 h-4" /> Descargar muestra
          </Button>
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

export default LinkedIn; 