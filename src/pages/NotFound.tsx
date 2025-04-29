
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="container mx-auto text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
            <p className="text-2xl font-semibold text-gray-800 mb-6">Página no encontrada</p>
            <p className="text-lg text-gray-600 mb-8">
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Link to="/">Volver al inicio</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
