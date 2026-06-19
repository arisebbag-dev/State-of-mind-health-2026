import Image from "next/image";
import Reveal from "./Reveal";
import CTAButton from "./CTAButton";

export default function ProviderIntro() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Portrait */}
          <Reveal className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl3 border border-olive/15 bg-gradient-to-br from-sand-deep to-olive-soft shadow-soft">
              <Image
                src="/nechama.jpg"
                alt="Nechama Keller-Sabel, PMHNP-BC"
                fill
                sizes="(max-width: 768px) 90vw, 24rem"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Bio */}
          <div>
            <Reveal as="p" className="text-sm font-semibold uppercase tracking-wider text-coral-deep">
              Meet your provider
            </Reveal>
            <Reveal as="h2" delay={0.05} className="mt-3 font-display text-3xl font-semibold text-olive-deep sm:text-4xl">
              Nechama Keller-Sabel, PMHNP-BC
            </Reveal>
            <Reveal as="p" delay={0.1} className="mt-5 font-display text-lg italic leading-relaxed text-olive">
              "I have undertaken to help individuals restore their vitality and resume a life of meaning and purpose."
            </Reveal>

            <div className="mt-6 space-y-4 text-[0.97rem] font-light leading-relaxed text-ink-soft">
              <Reveal as="p" delay={0.12}>
                Nechama is a board-certified Psychiatric Mental Health Nurse Practitioner with experience across inpatient psychiatric hospital and outpatient community settings. She trained at Hunter Bellevue School of Nursing and brings a thorough, holistic lens to every patient.
              </Reveal>
              <Reveal as="p" delay={0.16}>
                Her approach considers the whole picture — medical history, laboratory and genetic testing, hormones, and lived experience — to do more than quiet symptoms. The goal is to restore energy, motivation, clarity, and a genuine sense of self.
              </Reveal>
              <Reveal as="p" delay={0.2}>
                She sees patients ages 7 and up, offers flexible scheduling, and collaborates with primary care and other specialists when it helps coordinate the best possible care.
              </Reveal>
            </div>

            <Reveal as="div" delay={0.24} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/intake">Schedule Your Consultation</CTAButton>
              <CTAButton href="/about" variant="secondary">Read her full story</CTAButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
