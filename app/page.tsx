import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhatIsSection from '@/components/WhatIsSection';
import ServicesSection from '@/components/ServicesSection';
import OfferingsSection from '@/components/OfferingsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <WhatIsSection />
      <WhyChooseUsSection />
      <OfferingsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
