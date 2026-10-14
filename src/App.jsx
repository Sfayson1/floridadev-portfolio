import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import LumaArtifact from "./pages/LumaArtifact";
import ResourceHubArtifact from "./pages/ResourceHubArtifact";
import CrucibleArtifact from "./pages/CrucibleArtifact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/casestudies/luma" element={<LumaArtifact />} />
          <Route path="/casestudies/resourcehub" element={<ResourceHubArtifact />} />
          <Route path="/casestudies/crucible" element={<CrucibleArtifact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
