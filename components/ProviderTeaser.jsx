import Reveal from "./Reveal";
import CTAButton from "./CTAButton";

export default function ProviderTeaser() {
  return (
    <section className="bg-sage-mist/60 py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Portrait */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div aria-hidden className="absolute -inset-3 rounded-xl2 bg-apricot-soft/50 blur-2xl" />
              {/* Replace with a real photo: place /public/nechama.jpg and swap to <Image /> */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl2 border border-forest/10 bg-gradient-to-br from-forest-soft to-forest-deep">
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-canvas/80">
                  <span className="font-display text-6xl">NK</span>
                  <span className="text-sm">Photo: /public/nechama.jpg</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={0.08} className="lg:col-span-7">
            <p className="text-sm font-medium uppercase tracking-wider text-apricot-deep">
              Meet your provider
            </p>
            <h2 className="mt-3 text-3xl text-forest-deep sm:text-4xl">
              Nechama Keller-Sabel, PMHNP
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Nechama is a Psychiatric Nurse Practitioner who built State of Mind
              Health around a simple belief: every patient deserves to be truly
              listened to.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              She takes the time to understand your full story — your symptoms,
              your history, your goals — and partners with you to create a plan
              that fits your life. Warm, attentive, and deeply knowledgeable,
              Nechama is the kind of provider patients wish they&apos;d found sooner.
            </p>
            <div className="mt-8">
              <CTAButton href="/about" variant="secondary">
                Learn More About Nechama →
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
