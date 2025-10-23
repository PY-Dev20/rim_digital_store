import Navigation from "@/components/sections/navigation";
import HeroSlider from "@/components/sections/hero-slider";
import AboutIntro from "@/components/sections/about-intro";
import PartnerFeatures from "@/components/sections/partner-features";
import ResultsShowcase from "@/components/sections/results-showcase";
import LeadershipCarousel from "@/components/sections/leadership-carousel";
import FeaturesTimeline from "@/components/sections/features-timeline";
import CtaCards from "@/components/sections/cta-cards";
import BrandsMarquee from "@/components/sections/brands-marquee";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import FinalCta from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-[90px]">
        <HeroSlider />
        <AboutIntro />
        <PartnerFeatures />
        <ResultsShowcase />
        <LeadershipCarousel />
        <FeaturesTimeline />
        <CtaCards />
        <BrandsMarquee />
        <TestimonialsCarousel />
        <FinalCta />
        <Footer />
      </div>
    </main>
  );
}