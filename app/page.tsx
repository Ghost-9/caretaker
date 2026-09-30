'use client';

import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import EditorialHeadlineSection from '../components/EditorialHeadlineSection';
import BentoShowcaseSection from '../components/BentoShowcaseSection';
import FormSection from '../components/FormSection';
import Footer from '../components/Footer';

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState('12-Hour Shift');

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-stone-800 font-sans antialiased selection:bg-stone-900 selection:text-white">
      <Header />
      <main>
        <HeroSection />
        <EditorialHeadlineSection />
        <BentoShowcaseSection onSelectPlan={handleSelectPlan} />
        <FormSection selectedPlan={selectedPlan} />
      </main>
      <Footer />
    </div>
  );
}
