import ServiceLayout from '@/components/services/ServiceLayout';
import { CheckCircle, FileText, Brush, Award, Download, Star, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonios = [
  {
    nombre: "Sofía R.",
    texto: "El CV con diseño me ayudó a destacar en procesos creativos. ¡Recibí comentarios positivos de los reclutadores!",
    foto: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    nombre: "Martín D.",
    texto: "Me encantó el formato visual, es fácil de editar y realmente llama la atención.",
    foto: "https://randomuser.me/api/portraits/men/45.jpg"
  }
];

const CVDiseno = () => {
  return (
    <ServiceLayout
      title="CV Profesional CON DISEÑO"
      description="CV profesional con diseño moderno y atractivo, perfecto para destacar visualmente en sectores creativos y empresas innovadoras."
      price="$20.000"
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
        "Formato entregado en PDF con diseño y foto",
        "Estructura profesional y visualmente atractiva"
      ]}
      mainButtonLink="https://mpago.li/34nz9hp"
    >
      {/* Bloque valor añadido */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl mb-12">
        <div className="flex items-center gap-4 mb-2">
          <Star className="text-yellow-400" />
          <h3 className="text-2xl font-bold text-blue-900">¿Por qué elegir este CV?</h3>
        </div>
        <ul className="list-none pl-0 space-y-2 text-blue-800">
          <li className="flex items-center gap-2"><Award className="w-5 h-5 text-blue-400" /> Recomendado para sectores creativos y empresas innovadoras</li>
          <li className="flex items-center gap-2"><Brush className="w-5 h-5 text-pink-400" /> Diseño visual atractivo y profesional</li>
          <li className="flex items-center gap-2"><ImageIcon className="w-5 h-5 text-blue-400" /> Incluye foto y elementos gráficos</li>
        </ul>
      </section>

      {/* Características principales */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Características principales</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <FileText className="text-blue-600" /> Formato PDF con diseño moderno
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <CheckCircle className="text-green-500" /> Incluye foto y colores personalizados
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <Star className="text-yellow-400" /> Destaca tus logros y creatividad
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <Brush className="text-pink-400" /> Editable en Canva (requiere conocimientos básicos)
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
            <FileText className="text-blue-600" /> Estructura profesional y prolija
          </li>
        </ul>
      </section>

      {/* Proceso de creación */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">¿Cómo es el proceso?</h3>
        <ol className="list-decimal pl-6 space-y-2 text-blue-900">
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Análisis de tu perfil y objetivos</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Selección de diseño acorde a tu sector</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Personalización de colores y foto</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Revisión y ajustes</li>
          <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Entrega en PDF editable</li>
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

export default CVDiseno; 