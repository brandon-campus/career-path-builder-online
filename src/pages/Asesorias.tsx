import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, Linkedin, Users, Clock, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const testimonios = [
  {
    nombre: 'Sofía R.',
    texto: 'La asesoría fue súper clara y personalizada. Me ayudaron a entender cómo buscar trabajo de forma estratégica y a mejorar mi CV. ¡Conseguí entrevistas en menos de dos semanas!',
    foto: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    nombre: 'Martín D.',
    texto: 'Gracias a la asesoría, logré optimizar mi perfil de LinkedIn y aprendí a postularme en los portales correctos. Hoy tengo un nuevo empleo.',
    foto: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    nombre: 'Valeria S.',
    texto: 'Me sentí acompañado en todo el proceso. La guía fue práctica y concreta. Recomiendo la asesoría a todos los que buscan trabajo.',
    foto: 'https://randomuser.me/api/portraits/women/43.jpg',
  },
];

const whatsappLink =
  'https://wa.me/5491131985450?text=Quiero%20agendar%20mi%20asesor%C3%ADa';

const Asesorias = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-blue-600 py-16 text-white text-center">
          <div className="container mx-auto max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Asesoría personalizada para impulsar tu carrera
            </h1>
            <p className="text-xl mb-8">
              Recibí una guía clara para tu búsqueda laboral: dónde buscar, cómo postular y cómo destacarte.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8">
                <a
                  href="https://wa.me/5491131985450?text=%C2%A1Hola!%20Quiero%20agendar%20una%20asesor%C3%ADa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agenda tu asesoría
                </a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-700 text-lg py-6 px-8" style={{ backgroundColor: 'transparent' }}>
                <Link to="/servicios">Ver servicios</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Detalle del servicio */}
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              ¿Para quién es esta asesoría?
            </h2>
            <p className="text-gray-700 text-lg">
              Personas que necesiten una guía práctica sobre su búsqueda laboral. Te enseñamos dónde buscar empleo, cómo hacerlo estratégicamente y cómo destacar tu perfil.
            </p>
          </div>
        </section>

        {/* ¿Qué incluye? */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">¿Qué incluye?</h2>
            <ul className="space-y-4">
              <li className="flex items-center text-blue-900 text-lg">
                <FileText className="w-6 h-6 text-green-500 mr-3" /> Armado de CV profesional
              </li>
              <li className="flex items-center text-blue-900 text-lg">
                <Linkedin className="w-6 h-6 text-green-500 mr-3" /> Optimización de perfil de LinkedIn
              </li>
              <li className="flex items-center text-blue-900 text-lg">
                <Users className="w-6 h-6 text-green-500 mr-3" /> Revisión de perfiles y portales de empleo
              </li>
            </ul>
          </div>
        </section>

        {/* Duración y Precio */}
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-3xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-blue-800">Duración</h3>
                <p className="text-gray-700">40 minutos a 1 hora</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MessageCircle className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-blue-800">Valor</h3>
                <p className="text-gray-700 font-bold text-2xl">$30.000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Testimonios de quienes ya tomaron la asesoría</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["IMG_3816.PNG", "IMG_3818.PNG", "IMG_3814.PNG"].map((img, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center">
                  <img
                    src={`/drive-download-20250617T193555Z-1-001/${img}`}
                    alt={`Testimonio ${i + 1}`}
                    className="rounded-xl object-cover w-full h-64"
                    style={{ maxWidth: '350px' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action final */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para avanzar con tu carrera?</h2>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-blue-600 hover:bg-blue-100 text-lg px-8 py-4 font-semibold shadow-md">
                Reservá tu asesoría ahora
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Asesorias; 