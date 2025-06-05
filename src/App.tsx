
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projeto from "./pages/Projeto";
import Historias from "./pages/Historias";
import StoryDetail from "./pages/StoryDetail";
import Duvidas from "./pages/Duvidas";
import EncontreONG from "./pages/EncontreONG";
import NotFound from "./pages/NotFound";
import Playground from "./pages/Playground";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/historias" element={<Historias />} />
          <Route path="/historias/:id" element={<StoryDetail />} />
          <Route path="/duvidas" element={<Duvidas />} />
          <Route path="/encontre-apoio" element={<EncontreONG />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
