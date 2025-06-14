import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CVHarvard from "./pages/services/CVHarvard";
import CVDiseno from "./pages/services/CVDiseno";
import LinkedIn from "./pages/services/LinkedIn";
import ComboCVLinkedIn from "./pages/services/ComboCVLinkedIn";
import ComboCVPortales from "./pages/services/ComboCVPortales";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/servicios/cv-harvard" element={<CVHarvard />} />
          <Route path="/servicios/cv-diseno" element={<CVDiseno />} />
          <Route path="/servicios/linkedin" element={<LinkedIn />} />
          <Route path="/servicios/combo-cv-linkedin" element={<ComboCVLinkedIn />} />
          <Route path="/servicios/combo-cv-portales" element={<ComboCVPortales />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
