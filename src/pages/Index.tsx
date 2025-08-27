import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

import MethodSection from "@/components/MethodSection";
import DetailedServicesSection from "@/components/DetailedServicesSection";
import OffersSection from "@/components/OffersSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import TestSection from "@/components/TestSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <DetailedServicesSection />
      <OffersSection />
      <ProcessSection />
      <MethodSection />
      <BenefitsSection />
      <AboutSection />
      <TestSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;