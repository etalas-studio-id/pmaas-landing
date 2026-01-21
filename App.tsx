import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Brands } from './sections/Brands';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

// Lazy load sections below the fold
const WhatIsPmaas = lazy(() => import('./sections/WhatIsPmaas').then(module => ({ default: module.WhatIsPmaas })));
const Benefits = lazy(() => import('./sections/Benefits').then(module => ({ default: module.Benefits })));
const Services = lazy(() => import('./sections/Services').then(module => ({ default: module.Services })));
const UseCases = lazy(() => import('./sections/UseCases').then(module => ({ default: module.UseCases })));
const HowItWorks = lazy(() => import('./sections/HowItWorks').then(module => ({ default: module.HowItWorks })));
const Testimonials = lazy(() => import('./sections/Testimonials').then(module => ({ default: module.Testimonials })));
const Pricing = lazy(() => import('./sections/Pricing').then(module => ({ default: module.Pricing })));
const Faq = lazy(() => import('./sections/Faq').then(module => ({ default: module.Faq })));

const SectionLoader = () => (
  <div className="py-32 flex items-center justify-center min-h-[50vh] w-full" aria-label="Loading content">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function AppContent() {
  return (
    <div className="min-h-screen text-primary selection:bg-primary selection:text-background transition-colors duration-300">
      <Navbar />
      <main>
        {/* Hero and Brands are critical for LCP, keep them eager */}
        <Hero />
        <Brands />
        
        {/* Lazy load the rest */}
        <Suspense fallback={<SectionLoader />}>
          <WhatIsPmaas />
          <Benefits />
          <UseCases />
          <Services />
          <HowItWorks />
          <Testimonials />
          <Pricing />
          <Faq />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;