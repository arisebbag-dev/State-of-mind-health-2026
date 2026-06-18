import Reveal from "./Reveal";

const conditions = [
  "Anxiety",
  "Depression",
  "ADHD",
  "Mood Disorders",
  "OCD",
  "Irritability",
];

export default function ProblemSection() {
  return (
    <section className="problem py-12 sm:py-16 md:py-20 bg-gradient-to-b from-canvas via-canvas to-slate-soft/20">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Reveal as="h2" className="text-3xl sm:text-4xl text-slate-deep mb-4 font-serif font-bold">
            You don't have to keep pushing through it alone.
          </Reveal>

          <Reveal as="p" delay={0.05} className="text-base sm:text-lg text-ink-soft leading-relaxed font-light">
            Some days feel heavier than they should. The anxiety that won't quiet down. The focus that slips away. The low moods, the irritability, the sense that you're not quite <span className="italic font-medium text-slate-deep">you</span> anymore.
          </Reveal>

          <Reveal as="p" delay={0.1} className="mt-6 text-base sm:text-lg text-ink-soft leading-relaxed font-light">
            These feelings don't have to be permanent. With the right support and treatment, you can feel like yourself again.
          </Reveal>
        </div>

        <Reveal as="div" delay={0.15} className="mt-10">
          <p className="text-sm font-medium uppercase tracking-wider text-sage-deep text-center mb-6">
            We treat
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {conditions.map((condition) => (
              <Reveal
                key={condition}
                delay={0.01}
                as="span"
                className="px-4 py-2 rounded-full bg-slate/10 border border-slate/20 text-sm font-medium text-slate-deep hover:bg-slate/15 hover:border-slate/30 transition-all duration-300"
              >
                {condition}
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="p" delay={0.2} className="text-center text-sm text-ink-muted mt-8">
          And more. If you're struggling with something not listed here, reach out — we may be able to help.
        </Reveal>
      </div>
    </section>
  );
}
