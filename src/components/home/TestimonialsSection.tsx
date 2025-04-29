
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Laura Martínez',
    position: 'Especialista en Marketing Digital',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Gracias a la asesoría en CV y LinkedIn, conseguí entrevistas en empresas donde antes nunca me habían contactado. En menos de un mes tenía 3 ofertas de trabajo. ¡La mejor inversión en mi carrera!',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    position: 'Desarrollador Frontend',
    image: 'https://randomuser.me/api/portraits/men/86.jpg',
    text: 'El curso de LinkedIn fue revelador. Implementé las estrategias y en pocas semanas los reclutadores comenzaron a contactarme. Ahora trabajo en mi empresa soñada con un salario 30% superior.',
    rating: 5
  },
  {
    id: 3,
    name: 'María Gómez',
    position: 'Gerente de Recursos Humanos',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    text: 'Como profesional de RRHH, puedo asegurar que los consejos y técnicas enseñados son exactamente lo que buscamos los reclutadores. Mi CV ahora destaca entre cientos y he mejorado mi tasa de entrevistas.',
    rating: 5
  },
  {
    id: 4,
    name: 'Antonio López',
    position: 'Analista de Datos',
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
    text: 'Después de 6 meses buscando trabajo sin éxito, contraté el servicio de asesoría personalizada. La estrategia fue completamente diferente a lo que hacía y en 3 semanas ya estaba firmando contrato.',
    rating: 5
  },
  {
    id: 5,
    name: 'Elena Torres',
    position: 'Arquitecta de Software',
    image: 'https://randomuser.me/api/portraits/women/66.jpg',
    text: 'El enfoque en logros cuantificables revolucionó mi CV. Las técnicas para entrevistas me dieron la confianza que necesitaba. Ahora tengo un trabajo remoto y bien pagado en una empresa internacional.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      const slideWidth = slideRef.current.clientWidth;
      setTranslateValue(-currentIndex * (slideWidth + 32)); // 32px is the gap
    }
  }, [currentIndex, slidesToShow]);

  const nextSlide = () => {
    if (currentIndex < testimonials.length - slidesToShow) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - slidesToShow);
    }
  };

  // Renderizar estrellas basado en el rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor" 
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-gray-600">
            Historias reales de profesionales que han transformado su carrera con nuestros servicios.
          </p>
        </div>

        <div className="relative overflow-hidden px-4">
          <div 
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${translateValue}px)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                ref={slideRef}
                className="min-w-[calc(100%-2rem)] md:min-w-[calc(50%-2rem)] lg:min-w-[calc(33.333%-2rem)] px-4"
              >
                <Card className="h-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md z-10"
            onClick={prevSlide}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md z-10"
            onClick={nextSlide}
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
