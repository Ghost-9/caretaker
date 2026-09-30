'use client';

import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WellnessSection from '../components/WellnessSection';
import HealthcareSection from '../components/HealthcareSection';
import PlansSection from '../components/PlansSection';
import FormSection from '../components/FormSection';
import Footer from '../components/Footer';

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState('12-Hour Shift');

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <div className="min-h-screen bg-sand-100 text-stone-800 font-sans antialiased selection:bg-forest-900 selection:text-sand-100">
      <Header />
      <main>
        <HeroSection />
        <WellnessSection />
        <HealthcareSection />
        <PlansSection onSelectPlan={handleSelectPlan} />
        <FormSection selectedPlan={selectedPlan} />
      </main>
      <Footer />
    </div>
  );
}
