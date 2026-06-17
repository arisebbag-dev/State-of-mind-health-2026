import Reveal from "./Reveal";

export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-sage-mist blur-3xl" />
      </div>
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl py-20 text-center sm:py-24">
          {eyebrow && (
            <Reveal as="p" className="text-sm font-medium uppercase tracking-wider text-apricot-deep">
              {eyebrow}
            </Reveal>
          )}
          <Reveal as="h1" delay={0.05} className="mt-3 text-4xl leading-tight text-forest-deep sm:text-5xl">
            {title}
          </Reveal>
          {intro && (
            <Reveal as="p" delay={0.1} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {intro}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
