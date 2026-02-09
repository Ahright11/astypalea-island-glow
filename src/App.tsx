import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Ferries from "./pages/Ferries";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Packages from "./pages/Packages";
import Excursions from "./pages/Excursions";
import Yachts from "./pages/Yachts";
import Weddings from "./pages/Weddings";
import Transfers from "./pages/Transfers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/ferries" element={<Ferries />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/excursions" element={<Excursions />} />
            <Route path="/yachts" element={<Yachts />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
