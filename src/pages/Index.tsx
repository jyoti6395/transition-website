import Navbar from "@/components/landing/Navbar-Landingpage";
import HeroSection from "@/components/landing/HeroSection";
import SuperAppSection from "@/components/landing/SuperAppSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BlogSection from "@/components/landing/BlogSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <SuperAppSection />
    <FeaturesSection/>
    <CTASection />
    <BlogSection/>
    <Footer />
  </div>
);

export default Index;
