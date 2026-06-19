import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Patient Resources & FAQ | State of Mind Health",
  description:
    "What to expect, how billing works, and answers to common questions about root-cause psychiatric care at State of Mind Health in Suffern, NY.",
};

const resources = [
  {
    t: "What to expect at your first visit",
    d: "Your initial evaluation is unhurried — usually 45 to 60 minutes. We'll review your history and goals and, where it helps, discuss testing so your plan fits you.",
  },
  {
    t: "How billing & superbills work",
    d: "We're out-of-network and don't bill insurance directly. We provide detailed superbills you can submit for possible out-of-network reimbursement.",
  },
  {
    t: "Preparing for your appointment",
    d: "Bring a photo ID, a list of current medications, and any prior records or test results that might help us understand your history.",
  },
  {
    t: "Telehealth across the tri-state area",
    d: "Secure video visits with the same quality and privacy as in-person care, available throughout the tri-state region.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Patient resources"
        title="Everything you need to feel prepared"
        intro="Helpful guidance for new and returning patients — and answers to the questions we hear most."
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
            {resources.map((r, i) => (
              <Reveal key={r.t} delay={i * 0.05} className="rounded-xl2 border border-olive/12 bg-white/60 p-7">
                <h2 className="font-display text-lg font-medium text-olive-deep">{r.t}</h2>
                <p className="mt-2.5 text-[0.95rem] font-light leading-relaxed text-ink-soft">{r.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      <section className="pb-20">
        <div className="container-x text-center">
          <CTAButton href="/intake" size="lg">Schedule Your Consultation</CTAButton>
        </div>
      </section>
    </>
  );
}
