import React from 'react';
import './styles/global.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { CredentialsBar } from './components/CredentialsBar/CredentialsBar';
import { ProblemSection } from './components/ProblemSection/ProblemSection';
import { TreatmentsSection } from './components/TreatmentsSection/TreatmentsSection';
import { AboutSection } from './components/AboutSection/AboutSection';
import { HowItWorksSection } from './components/HowItWorksSection/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection/TestimonialsSection';
import { FaqSection } from './components/FaqSection/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection/FinalCtaSection';
import { WhatsAppSticky } from './components/WhatsAppSticky/WhatsAppSticky';
import { Footer } from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredentialsBar />
        <ProblemSection />
        <TreatmentsSection />
        <AboutSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <WhatsAppSticky />
      <Footer />
    </>
  );
};

export default App;
