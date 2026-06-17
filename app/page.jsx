import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProviderTeaser from "@/components/ProviderTeaser";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Psychiatric Care in Suffern, NY | State of Mind Health",
  description:
    "Compassionate psychiatric care & medication management in Rockland County, NY. In-person & telehealth for anxiety, depression & ADHD. Book today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionsSection />
      <ProviderTeaser />
      <FinalCTA />
    </>
  );
}
