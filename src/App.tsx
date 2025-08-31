import { useState } from 'react';
import { Navigation } from "./components/Navigation";
import { StickyActions } from "./components/StickyActions";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { BaristasSection } from "./components/BaristasSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { MenuPage } from "./components/MenuPage";
import { AboutUsPage } from "./components/AboutUsPage";
import { FranchisePage } from "./components/FranchisePage";
import { ContactUsPage } from "./components/ContactUsPage";
import { TermsConditionsPage } from "./components/TermsConditionsPage";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <MenuPage />;
      case 'about':
        return <AboutUsPage />;
      case 'franchise':
        return <FranchisePage />;
      case 'contact':
        return <ContactUsPage />;
      case 'terms':
        return <TermsConditionsPage onPageChange={setCurrentPage} />;
      case 'privacy':
        return <PrivacyPolicyPage onPageChange={setCurrentPage} />;
      default:
        return (
          <>
            {/* Hero Section */}
            <HeroSection />

            {/* About Bubble Tea Section */}
            <AboutSection />

            {/* Our Seoul Cha Baristas */}
            <BaristasSection />

            {/* Why Choose Seoul Cha */}
            <WhyChooseUsSection />

            {/* Contact Section */}
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      {/* Sticky Social Actions */}
      <StickyActions />
      
      {/* Page Content */}
      {renderPage()}
      
      {/* Footer */}
      <Footer onPageChange={setCurrentPage} />
      
      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
