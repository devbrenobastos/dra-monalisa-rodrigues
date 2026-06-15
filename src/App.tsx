import React, { lazy, Suspense } from 'react';
import './styles/global.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { CredentialsBar } from './components/CredentialsBar/CredentialsBar';
import { ProblemSection } from './components/ProblemSection/ProblemSection';
import { TreatmentsSection } from './components/TreatmentsSection/TreatmentsSection';
import { AboutSection } from './components/AboutSection/AboutSection';
import { SocialProofSection } from './components/SocialProofSection/SocialProofSection';
import { HowItWorksSection } from './components/HowItWorksSection/HowItWorksSection';
import { WhatsAppSticky } from './components/WhatsAppSticky/WhatsAppSticky';

const TestimonialsSection = lazy(() => import('./components/TestimonialsSection/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const FaqSection = lazy(() => import('./components/FaqSection/FaqSection').then(m => ({ default: m.FaqSection })));
const FinalCtaSection = lazy(() => import('./components/FinalCtaSection/FinalCtaSection').then(m => ({ default: m.FinalCtaSection })));
const Footer = lazy(() => import('./components/Footer/Footer').then(m => ({ default: m.Footer })));

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredentialsBar />
        <AboutSection />
        <SocialProofSection />
        <ProblemSection />
        <TreatmentsSection />
        <HowItWorksSection />
        <Suspense fallback={<div style={{ minHeight: '600px' }} />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
          <FaqSection />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
          <FinalCtaSection />
        </Suspense>
      </main>
      <WhatsAppSticky />
      <Suspense fallback={<div style={{ minHeight: '250px' }} />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
