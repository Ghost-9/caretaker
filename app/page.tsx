import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WellnessSection from '../components/WellnessSection';
import HealthcareSection from '../components/HealthcareSection';
import FormSection from '../components/FormSection';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main>
        <HeroSection />
        <WellnessSection />
        <HealthcareSection />
        <FormSection />
      </main>
    </div>
  );
}