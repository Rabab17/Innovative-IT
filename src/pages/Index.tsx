import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimationEffect from "@/components/AnimationEffect";
import LoadingScreen from "@/components/LoadingScreen";
import MouseTracker from "@/components/MouseTracker";


const Index = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <LoadingScreen />
      <MouseTracker />
      {/* This div is the main container for the entire page. 
        We apply 'bg-background' for light mode and 'dark:bg-dark-background' 
        for dark mode to ensure the whole page's background changes. 
        We also set the default text color to 'text-foreground' and 
        change it to 'dark:text-dark-foreground' in dark mode.
      */}
      <div className="bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground min-h-screen transition-all duration-300 overflow-x-hidden">
        <Header />
        <HeroSection />
        
        <AnimationEffect animationType="slideUp" delay={100}>
          <AboutSection />
        </AnimationEffect>
        
        <AnimationEffect animationType="stagger" delay={200}>
          <ServicesSection />
        </AnimationEffect>
        
        <AnimationEffect animationType="slideLeft" delay={100}>
          <ClientsSection />
        </AnimationEffect>
        
        <AnimationEffect animationType="scale" delay={150}>
          <PortfolioSection />
        </AnimationEffect>
        
        <AnimationEffect animationType="slideRight" delay={100}>
          <TestimonialsSection />
        </AnimationEffect>
        
        <AnimationEffect animationType="slideUp" delay={200}>
          <ContactSection />
        </AnimationEffect>
        
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;