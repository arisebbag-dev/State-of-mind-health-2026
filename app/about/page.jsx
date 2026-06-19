import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "About Nechama Keller-Sabel, PMHNP-BC | State of Mind Health",
  description:
    "Meet Nechama Keller-Sabel, a board-certified psychiatric nurse practitioner in Suffern, NY practicing root-cause, whole-person psychiatry.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A different kind of psychiatric care"
        intro="Whole-person psychiatry that takes the time to understand the biology, history, and life behind your symptoms."
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal className="relative mx-auto w-full max-w-sm lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl3 border border-olive/15 bg-gradient-to-br from-sand-deep to-olive-soft shadow-soft">
                <Image
                  src="/nechama.jpeg"
                  alt="Nechama Keller-Sabel, PMHNP-BC"
                  fill
                  sizes="(max-width: 768px) 90vw, 24rem"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div>
              <Reveal as="h2" className="font-display text-3xl font-semibold text-olive-deep">
                Nechama Keller-Sabel, PMHNP-BC
              </Reveal>
              <Reveal as="p" delay={0.05} className="mt-5 font-display text-lg italic leading-relaxed text-olive">
                "I have undertaken to help individuals restore their vitality and resume a life of meaning and purpose."
              </Reveal>
              <div className="mt-6 space-y-4 text-[0.97rem] font-light leading-relaxed text-ink-soft">
                <Reveal as="p" delay={0.1}>
                  Nechama is a board-certified Psychiatric Mental Health Nurse Practitioner with experience in both inpatient psychiatric hospital and outpatient community settings. She graduated from Hunter Bellevue School of Nursing.
                </Reveal>
                <Reveal as="p" delay={0.14}>
                  Her philosophy centers on helping people transform difficulty into growth. She believes that with the right support and guidance, everyone has the capacity to realize their own potential and become the person they aspire to be.
                </Reveal>
                <Reveal as="p" delay={0.18}>
                  She takes a comprehensive diagnostic approach — weighing medical history, laboratory and genetic testing, hormones, and life experience — and uses a range of therapeutic options to do more than manage symptoms. The aim is to revitalize energy, motivation, and a real sense of self.
                </Reveal>
                <Reveal as="p" delay={0.22}>
                  Nechama treats patients ages 7 and up, offers flexible hours for school and work schedules, and collaborates with primary care providers, specialists, and schools when it supports coordinated, whole-person care.
                </Reveal>
              </div>
              <Reveal as="div" delay={0.26} className="mt-8">
                <CTAButton href="/intake">Schedule Your Consultation</CTAButton>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
