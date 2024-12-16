import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Book from "./pages/Book";
import Services from "./pages/Services";
import ProcessAutomation from "./pages/ProcessAutomation";
import DataAnalytics from "./pages/DataAnalytics";
import CustomSolutions from "./pages/CustomSolutions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book" element={<Book />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/process-automation" element={<ProcessAutomation />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/custom-solutions" element={<CustomSolutions />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;