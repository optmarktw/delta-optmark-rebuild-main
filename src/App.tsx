import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Industries from "./components/Industries";
import NotFound from "./pages/NotFound";
import TaxPreparationPlanning from "./pages/services/TaxPreparationPlanning";

import BookkeepingPayroll from "./pages/services/BookkeepingPayroll";
import ManagementAccounting from "./pages/services/ManagementAccounting";
import BusinessAdvisory from "./pages/services/BusinessAdvisory";
import CompanySecretarial from "./pages/services/CompanySecretarial";
import TechnologyStartups from "./pages/industries/TechnologyStartups";
import RetailEcommerce from "./pages/industries/RetailEcommerce";
import ProfessionalServices from "./pages/industries/ProfessionalServices";
import PropertyRealEstate from "./pages/industries/PropertyRealEstate";
import HealthcareMedical from "./pages/industries/HealthcareMedical";
import ConstructionTrades from "./pages/industries/ConstructionTrades";
import CreativeMedia from "./pages/industries/CreativeMedia";
import TransportLogistics from "./pages/industries/TransportLogistics";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";
import BookConsultation from "./pages/BookConsultation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/services/tax-preparation-planning" element={<TaxPreparationPlanning />} />
              
              <Route path="/services/bookkeeping-payroll" element={<BookkeepingPayroll />} />
              <Route path="/services/management-accounting" element={<ManagementAccounting />} />
              <Route path="/services/business-advisory" element={<BusinessAdvisory />} />
              <Route path="/services/company-secretarial" element={<CompanySecretarial />} />
              <Route path="/industries/technology-startups" element={<TechnologyStartups />} />
              <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
              <Route path="/industries/professional-services" element={<ProfessionalServices />} />
              <Route path="/industries/property-real-estate" element={<PropertyRealEstate />} />
              <Route path="/industries/healthcare-medical" element={<HealthcareMedical />} />
              <Route path="/industries/construction-trades" element={<ConstructionTrades />} />
              <Route path="/industries/creative-media" element={<CreativeMedia />} />
              <Route path="/industries/transport-logistics" element={<TransportLogistics />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/book-consultation" element={<BookConsultation />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
