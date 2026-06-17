import PageHeader from "@/components/PageHeader";
import ProviderTeaser from "@/components/ProviderTeaser";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "About Nechama | State of Mind Health",
  description:
    "Meet Nechama Keller-Sabel, PMHNP — a compassionate psychiatric care provider serving Rockland County and the tri-state area.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Meet your provider."
        intro="Psychiatric care starts with trust. Learn more about Nechama and how she approaches treatment."
      />

      <ProviderTeaser />

      <FinalCTA />
    </>
  );
}
