import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutUsSection } from './components/sections/AboutUsSection';
import { MetricsSection } from './components/sections/MetricsSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { OperatingSystemSection } from './components/sections/OperatingSystemSection';
import { AutomationSection } from './components/sections/AutomationSection';
import { SecuritySection } from './components/sections/SecuritySection';
import { CTASection } from './components/sections/CTASection';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="font-sans antialiased bg-dark-primary text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutUsSection />
        <MetricsSection />
        <FeaturesSection />
        <OperatingSystemSection />
        <AutomationSection />
        <SecuritySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
