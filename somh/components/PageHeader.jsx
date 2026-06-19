import Reveal from "./Reveal";

export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="relative overflow-hidden border-b border-olive/10">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-coral-soft/40 blur-3xl" />
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-olive-soft/50 blur-3xl" />
      </div>
      <div className="container-x relative py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <Reveal as="p" className="text-sm font-semibold uppercase tracking-wider text-coral-deep">
              {eyebrow}
            </Reveal>
          )}
          <Reveal as="h1" delay={0.05} className="mt-3 font-display text-4xl font-semibold text-olive-deep sm:text-5xl">
            {title}
          </Reveal>
          {intro && (
            <Reveal as="p" delay={0.1} className="mt-5 text-lg font-light leading-relaxed text-ink-soft">
              {intro}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
