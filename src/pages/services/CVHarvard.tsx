import ServiceLayout from '@/components/services/ServiceLayout';
import { CheckCircle, FileText, Search, Award, Download, Star, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const testimonios = [
  {
    nombre: "María G.",
    texto: "¡Conseguí entrevistas en empresas top gracias al CV Harvard! El formato es súper profesional y la guía de trabajo me ayudó muchísimo.",
    foto: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    nombre: "Lucas P.",
    texto: "Me llamaron de dos consultoras apenas actualicé mi CV. El proceso fue claro y el resultado, impecable.",
    foto: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

const CVHarvard = () => {
  return (
    <ServiceLayout
      title="CV Profesional TIPO HARVARD"
      description="El CV que abre puertas en empresas y consultoras. Formato internacional, estructura clara y optimizado para sistemas ATS."
      price="$16.000"
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
    >
      {/* Bloque valor añadido */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl mb-12">
        <div className="flex items-center gap-4 mb-2">
          <Star className="text-yellow-400" />
          <h3 className="text-2xl font-bold text-blue-900">¿Por qué elegir este CV?</h3>
        </div>
        <ul className="list-none pl-0 space-y-2 text-blue-800">
          <li className="flex items-center gap-2"><Award className="w-5 h-5 text-blue-400" /> Recomendado por reclutadores de empresas top</li>
          <li className="flex items-center gap-2"><Briefcase className="w-5 h-5 text-blue-400" /> Ideal para aplicar a multinacionales y consultoras</li>
          <li className="flex items-center gap-2"><Search className="w-5 h-5 text-blue-400" /> Optimizado para sistemas ATS</li>
        </ul>
      </section>

      {/* Características principales */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Características principales</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <FileText className="text-blue-600" /> Formato limpio y profesional
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <CheckCircle className="text-green-500" /> Estructura cronológica inversa
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <Star className="text-yellow-400" /> Énfasis en logros y resultados
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <Search className="text-blue-400" /> Optimizado para sistemas ATS
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <FileText className="text-blue-600" /> Entrega en Word y PDF
          </li>
        </ul>
      </section>

      {/* Proceso de creación */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">¿Cómo es el proceso?</h3>
        <ol className="list-decimal pl-6 space-y-2 text-blue-900">
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Análisis inicial de tu experiencia y objetivos</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Estructuración del contenido siguiendo el formato Harvard</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Optimización de palabras clave para ATS</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Revisión y ajustes</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Entrega en formatos Word y PDF</li>
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
            <li>Enlaces directos a portales de empleo relevantes</li>
            <li>Lista de agencias de reclutamiento verificadas</li>
            <li>50 preguntas frecuentes en entrevistas con respuestas modelo</li>
            <li>Guía paso a paso para optimizar tu perfil de LinkedIn</li>
            <li>Tips para mantener tu CV actualizado</li>
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

export default CVHarvard; 