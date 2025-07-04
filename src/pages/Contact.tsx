import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { toast } from 'sonner';
import { Mail, Phone, Linkedin, Instagram, Youtube } from 'lucide-react';

// Añade este componente para el icono de TikTok
const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <g>
      <path d="M21.5 2v4.5c0 2.5 2 4.5 4.5 4.5h2V16c0 6.6-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4h5.5z" fill="#000"/>
      <path d="M28 10.5c-2.5 0-4.5-2-4.5-4.5H21.5V22c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.2 0 .5 0 .7.1v4.1c-.2-.1-.5-.2-.7-.2-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V2h4.5c0 2.5 2 4.5 4.5 4.5V10.5z" fill="#fff"/>
    </g>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    toast.success("¡Gracias por contactarnos! Te responderemos a la brevedad.");
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 py-16 text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
            <p className="text-xl mb-4 max-w-3xl mx-auto">
              ¿Tienes alguna pregunta o deseas agendar una asesoría? Estamos aquí para ayudarte en tu camino profesional.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulario de contacto */}
              <div>
                <Card className="border border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-blue-800">Envíanos un mensaje</CardTitle>
                    <CardDescription>
                      Completa el formulario y te responderemos a la brevedad.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Nombre completo
                        </label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre completo" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email
                        </label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="correo@ejemplo.com" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Teléfono (opcional)
                        </label>
                        <Input 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Tu número de contacto" 
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-1">
                          Servicio de interés
                        </label>
                        <Select value={formData.service} onValueChange={handleSelectChange}>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Selecciona un servicio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cv-harvard">CV Profesional TIPO HARVARD</SelectItem>
                            <SelectItem value="cv-diseno">CV Profesional CON DISEÑO</SelectItem>
                            <SelectItem value="linkedin">Armado de LinkedIn Profesional</SelectItem>
                            <SelectItem value="combo-cv-linkedin">Combo CV + LinkedIn</SelectItem>
                            <SelectItem value="combo-cv-portales">Combo: CV + 2 portales de empleo</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          Mensaje
                        </label>
                        <Textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="¿En qué podemos ayudarte?" 
                          className="min-h-[150px]"
                          required 
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        Enviar mensaje
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              {/* Información de contacto */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-blue-800 mb-6">Información de contacto</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-700">Ayudartear@gmail.com</p>
                        <p className="text-sm text-gray-500 mt-1">Respondemos en menos de 24 horas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Teléfono</h3>
                        <p className="text-gray-700">1131985450</p>
                        <p className="text-sm text-gray-500 mt-1">Lunes a viernes, 9:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-blue-800 mb-6">Síguenos en redes sociales</h2>
                  
                  <div className="space-y-6">
                    <a href="https://www.linkedin.com/in/gabriel-hernan-lamanna-b0178b192/" target="_blank" rel="noopener noreferrer" className="flex items-start hover:bg-blue-50 p-4 rounded-lg transition-colors">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Linkedin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">LinkedIn</h3>
                        <p className="text-gray-700">Gabriel Hernan Lamanna</p>
                        <p className="text-sm text-gray-500 mt-1">Consejos profesionales y novedades</p>
                      </div>
                    </a>
                    
                    <a href="https://www.instagram.com/hernilamanna/" target="_blank" rel="noopener noreferrer" className="flex items-start hover:bg-blue-50 p-4 rounded-lg transition-colors">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Instagram className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Instagram</h3>
                        <p className="text-gray-700">@hernilamanna</p>
                        <p className="text-sm text-gray-500 mt-1">Tips diarios e inspiración profesional</p>
                      </div>
                    </a>
                    
                    <a href="https://www.tiktok.com/@hernilamanna" target="_blank" rel="noopener noreferrer" className="flex items-start hover:bg-blue-50 p-4 rounded-lg transition-colors">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <TiktokIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">TikTok</h3>
                        <p className="text-gray-700">@hernilamanna</p>
                        <p className="text-sm text-gray-500 mt-1">Contenido profesional en video</p>
                      </div>
                    </a>
                    
                    <a href="https://www.youtube.com/@hernanlamanna" target="_blank" rel="noopener noreferrer" className="flex items-start hover:bg-blue-50 p-4 rounded-lg transition-colors">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Youtube className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">YouTube</h3>
                        <p className="text-gray-700">@hernanlamanna</p>
                        <p className="text-sm text-gray-500 mt-1">Tutoriales y charlas sobre empleabilidad</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Preguntas frecuentes</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">¿Cuánto tiempo tarda en responder a las consultas?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Respondemos a todos los mensajes en un plazo máximo de 24 horas laborables. Para consultas urgentes, recomendamos contactarnos por teléfono.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">¿Cómo se realizan las asesorías?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Las asesorías se realizan principalmente por videoconferencia (Zoom o Google Meet). También ofrecemos la posibilidad de sesiones presenciales en Madrid para casos específicos.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">¿Cuáles son las formas de pago aceptadas?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Aceptamos pagos con tarjeta de crédito/débito, PayPal y transferencia bancaria. Para los cursos online ofrecemos también opciones de pago en cuotas.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">¿Ofrecen servicios para empresas?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Sí, contamos con servicios corporativos de formación y desarrollo para equipos de recursos humanos y programas de outplacement. Contáctanos para una propuesta personalizada.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA para agendar */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¿Prefieres agendar directamente?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Si ya tienes claro qué servicio necesitas, puedes agendar directamente una sesión en nuestro calendario.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="#" target="_blank" rel="noopener noreferrer">Ver disponibilidad en el calendario</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
