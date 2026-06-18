import Reveal from "./Reveal";
import CTAButton from "./CTAButton";

export default function ProviderTeaser() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-12 items-center md:gap-16">
          {/* Photo */}
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-xl2 border border-forest/10 bg-gradient-to-br from-sage-mist to-forest-soft md:order-2">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-forest/40 bg-sage-mist">
              <span className="font-display text-6xl font-light">NK</span>
              <span className="text-xs text-center px-4">
                📷 Replace with nechama.jpg later
              </span>
            </div>
            {/* 
            When you have the photo, replace the div above with:
            <Image 
              src="/nechama.jpg" 
              alt="Nechama Keller-Sabel, PMHNP" 
              fill 
              className="object-cover"
            />
            */}
          </Reveal>

          {/* Bio */}
          <div className="md:order-1">
            <Reveal as="p" className="text-sm font-medium uppercase tracking-wider text-apricot-deep">
              Meet Your Provider
            </Reveal>

            <Reveal as="h2" delay={0.05} className="mt-4 text-3xl text-forest-deep sm:text-4xl">
              Nechama Keller-Sabel, <span className="font-normal">PMHNP-BC</span>
            </Reveal>

            <Reveal as="p" delay={0.1} className="mt-6 text-lg text-forest-deep font-medium italic">
              "I have undertaken to try and help individuals restore their vitality and resume a life of meaning and purpose."
            </Reveal>

            <Reveal as="div" delay={0.15} className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-ink-soft">
              <p>
                Nechama is a Board Certified Psychiatric Mental Health Nurse Practitioner with years of experience in both inpatient psychiatric hospital and outpatient community settings. She graduated from Hunter Bellevue School of Nursing and brings a compassionate, holistic approach to every patient.
              </p>

              <p>
                Her philosophy centers on helping individuals transform the difficulties in their lives into triumph and achievement. She believes that with proper support and guidance, everyone has the capacity to see their own human potential and become the person they aspire to be.
              </p>

              <p>
                Nechama takes a comprehensive diagnostic approach, considering medical history, laboratory testing, genetics, and life experiences. She uses multiple therapeutic treatment options and medications to not only manage symptoms, but to revitalize her patients' energy, motivation, and love of self.
              </p>

              <p>
                She treats patients ages 7 and up, offering flexible hours to accommodate school and work schedules. When appropriate, she collaborates with school administration, primary care providers, and specialists to ensure integrative, coordinated care.
              </p>
            </Reveal>

            <Reveal as="div" delay={0.2} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/contact" size="lg">
                Schedule with Nechama →
              </CTAButton>
              <CTAButton href="/contact" variant="secondary">
                New patient intake form
              </CTAButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
