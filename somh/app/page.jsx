import Hero from "@/components/Hero";
import ProviderIntro from "@/components/ProviderIntro";
import ApproachPillars from "@/components/ApproachPillars";
import ServicesStrip from "@/components/ServicesStrip";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProviderIntro />
      <ApproachPillars />
      <ServicesStrip />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
