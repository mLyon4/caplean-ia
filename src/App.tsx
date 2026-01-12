import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ConsultanteNotion from "./pages/ConsultanteNotion";

// Only load analytics dashboard in development mode
const AnalyticsDashboard = import.meta.env.DEV 
  ? lazy(() => import("./pages/AnalyticsDashboard"))
  : null;

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/consultante-notion-certifiee-notion-service-specialist-lyon-structuration-pilotage-pme" element={<ConsultanteNotion />} />
              {/* Analytics debug route only available in development */}
              {import.meta.env.DEV && AnalyticsDashboard && (
                <Route 
                  path="/analytics-debug" 
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <AnalyticsDashboard />
                    </Suspense>
                  } 
                />
              )}
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;