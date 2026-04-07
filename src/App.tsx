import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";

// Pages
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Startups from "./pages/Startups";
import Investors from "./pages/Investors";
import Jobs from "./pages/Jobs";
import Messages from "./pages/Messages";
import Events from "./pages/Events";
import Matches from "./pages/Matches";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Layout wrapper for authenticated pages
function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* Authenticated Routes */}
          <Route path="/dashboard" element={<AuthenticatedLayout><Dashboard /></AuthenticatedLayout>} />
          <Route path="/discover" element={<AuthenticatedLayout><Startups /></AuthenticatedLayout>} />
          <Route path="/startups" element={<AuthenticatedLayout><Startups /></AuthenticatedLayout>} />
          <Route path="/investors" element={<AuthenticatedLayout><Investors /></AuthenticatedLayout>} />
          <Route path="/matches" element={<AuthenticatedLayout><Matches /></AuthenticatedLayout>} />
          <Route path="/messages" element={<AuthenticatedLayout><Messages /></AuthenticatedLayout>} />
          <Route path="/jobs" element={<AuthenticatedLayout><Jobs /></AuthenticatedLayout>} />
          <Route path="/events" element={<AuthenticatedLayout><Events /></AuthenticatedLayout>} />
          <Route path="/mentorship" element={<AuthenticatedLayout><Dashboard /></AuthenticatedLayout>} />
          <Route path="/notifications" element={<AuthenticatedLayout><Dashboard /></AuthenticatedLayout>} />
          <Route path="/settings" element={<AuthenticatedLayout><Dashboard /></AuthenticatedLayout>} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
