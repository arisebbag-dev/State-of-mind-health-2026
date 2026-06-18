import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionsSection from "@/components/SolutionsSection";
import TrustBadges from "@/components/TrustBadges";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ProviderTeaser from "@/components/ProviderTeaser";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionsSection />
      <TrustBadges />
      <Testimonials />
      <ProviderTeaser />
      <FAQ />
      <FinalCTA />
    </>
  );
}
