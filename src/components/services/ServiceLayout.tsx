import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface ServiceLayoutProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  deliveryTime: string;
  paymentMethods: string[];
  features: string[];
  mainButtonLink: string;
  children?: React.ReactNode;
}

const ServiceLayout = ({
  title,
  description,
  price,
  originalPrice,
  deliveryTime,
  paymentMethods,
  features,
  mainButtonLink,
  children
}: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Breadcrumb - Mobile First */}
        <div className="bg-gray-50 py-3 sm:py-4">
          <div className="container mx-auto px-4 sm:px-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-sm sm:text-base">Inicio</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/servicios" className="text-sm sm:text-base">Servicios</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-sm sm:text-base">{title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Hero Section - Mobile First */}
        <section className="bg-blue-600 py-8 sm:py-12 md:py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{title}</h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">{description}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <a href={mainButtonLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 text-sm sm:text-base md:text-lg py-5 sm:py-6 px-6 sm:px-8 w-full sm:w-auto">
                    Solicitar servicio
                  </Button>
                </a>
                <a href={`https://wa.me/5491123844473?text=%C2%A1Hola!%20Quiero%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" className="border-green-500 text-green-700 hover:bg-green-50 text-sm sm:text-base md:text-lg py-5 sm:py-6 px-6 sm:px-8 w-full sm:w-auto sm:ml-0">
                    Hablar por Whatsapp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content - Mobile First */}
        <section className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {children}
              </div>

              {/* Sidebar - Mobile First */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg lg:sticky lg:top-24">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Detalles del servicio</h3>
                  
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Inversión</h4>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-bold text-blue-600">{price}</span>
                      {originalPrice && (
                        <span className="text-base sm:text-lg text-gray-500 line-through">{originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Tiempo de entrega</h4>
                    <p className="text-sm sm:text-base text-gray-600">{deliveryTime}</p>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Métodos de pago</h4>
                    <ul className="space-y-1">
                      {paymentMethods.map((method, index) => (
                        <li key={index} className="text-sm sm:text-base text-gray-600">{method}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Incluye</h4>
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-sm sm:text-base text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href={mainButtonLink} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base py-5 sm:py-6">
                      Solicitar ahora
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceLayout; 