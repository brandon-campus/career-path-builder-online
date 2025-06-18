import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonialImages = [
  "/drive-download-20250617T193555Z-1-001/IMG_3816.PNG",
  "/drive-download-20250617T193555Z-1-001/IMG_3818.PNG",
  "/drive-download-20250617T193555Z-1-001/IMG_3814.PNG",
  "/drive-download-20250617T193555Z-1-001/651539e1-c4ac-4ed0-b0e1-c4dbbc1d9ad5.JPG",
  "/drive-download-20250617T193555Z-1-001/IMG_3616.PNG",
  "/drive-download-20250617T193555Z-1-001/IMG_3819.PNG",
  "/drive-download-20250617T193555Z-1-001/IMG_3822.PNG",
  "/drive-download-20250617T193555Z-1-001/IMG_3821.PNG",
  "/drive-download-20250617T193555Z-1-001/IMG_3817.PNG",
  "/drive-download-20250617T193555Z-1-001/IMG_3824.PNG",
  "/drive-download-20250617T193555Z-1-001/IMG_3820.PNG",
  "/drive-download-20250617T193555Z-1-001/IMG_0025.PNG",
  "/drive-download-20250617T193555Z-1-001/IMG_3815.PNG",
  "/drive-download-20250617T193555Z-1-001/IMG_3813.PNG",
  "/drive-download-20250617T193555Z-1-001/IMG_3812.PNG",
  "/drive-download-20250617T193555Z-1-001/8f91ddba-e39b-4203-a011-94202aa1b2e2.jpg",
  "/drive-download-20250617T193555Z-1-001/IMG_3823.PNG",
  "/drive-download-20250617T193555Z-1-001/IMG_3588.PNG"
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [drag, setDrag] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);

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

  const nextSlide = () => {
    if (currentIndex < testimonialImages.length - slidesToShow) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonialImages.length - slidesToShow);
    }
  };

  const openModal = (img: string) => {
    setModalImg(img);
    setModalOpen(true);
    setZoomed(false);
    setDrag({ x: 0, y: 0 });
    setDragStart(null);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
    setZoomed(false);
    setDrag({ x: 0, y: 0 });
    setDragStart(null);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (!zoomed) return;
    setDragStart({ x: e.clientX - drag.x, y: e.clientY - drag.y });
    document.body.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (dragStart && zoomed) {
      setDrag({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };

  const handleMouseUp = () => {
    setDragStart(null);
    document.body.style.cursor = '';
  };

  useEffect(() => {
    if (dragStart && zoomed) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragStart, zoomed]);

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
          <div className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}>
            {testimonialImages.map((img, idx) => (
              <div
                key={idx}
                className="min-w-[calc(100%/3)] md:min-w-[calc(100%/2)] lg:min-w-[calc(100%/3)] px-4 flex justify-center"
                style={{ maxWidth: '400px' }}
              >
                <img
                  src={img}
                  alt={`Testimonio ${idx + 1}`}
                  className="rounded-xl shadow-md object-cover w-full h-80 cursor-pointer hover:scale-105 transition-transform"
                  loading="lazy"
                  onClick={() => openModal(img)}
                />
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
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl w-full flex justify-center" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 z-10"
              onClick={closeModal}
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={modalImg!}
              alt="Testimonio ampliado"
              className={`rounded-xl shadow-2xl max-h-[80vh] w-auto object-contain transition-transform duration-300 ${zoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'}`}
              style={{
                transition: 'transform 0.3s',
                transform: `${zoomed ? `scale(1.5) translate(${drag.x}px, ${drag.y}px)` : 'scale(1) translate(0,0)'}`
              }}
              onClick={() => {
                if (zoomed) {
                  setZoomed(false);
                  setDrag({ x: 0, y: 0 });
                } else {
                  setZoomed(true);
                }
              }}
              onMouseDown={handleMouseDown}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
