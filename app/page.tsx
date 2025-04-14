import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WellnessSection from '../components/WellnessSection';
import HealthcareSection from '../components/HealthcareSection';
import FormSection from '../components/FormSection';
import CostInfo from '@/components/cost-info';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main>
        <HeroSection />
        <WellnessSection />
        <CostInfo/>
        <HealthcareSection />
        <FormSection />
      </main>
      <Footer />
    </div>
  );
}