import HeroSection from "@/components/HeroSection";
import DeveloperSection from "@/components/DeveloperSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <DeveloperSection />
      <Footer />
    </main>
  );
};

export default Index;
