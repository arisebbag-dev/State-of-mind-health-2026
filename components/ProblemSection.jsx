import Reveal from "./Reveal";

const conditions = [
  "Anxiety & persistent worry",
  "Depression & low mood",
  "ADHD & difficulty focusing",
  "Irritability & mood disorders",
  "OCD & intrusive thoughts",
];

export default function ProblemSection() {
  return (
    <section className="bg-sage-mist/60 py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-prose text-center">
          <Reveal as="h2" className="text-3xl text-forest-deep sm:text-4xl">
            You don&apos;t have to keep pushing through it alone.
          </Reveal>

          <Reveal as="div" delay={0.05}>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Some days feel heavier than they should. The anxiety that won&apos;t
              quiet down. The focus that slips away. The low moods, the
              irritability, the sense that you&apos;re not quite{" "}
              <span className="italic text-forest">you</span> anymore.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              You&apos;ve probably been managing it for a while — telling yourself
              it&apos;s just stress, just a phase, just life. But you deserve more
              than just getting by.
            </p>
          </Reveal>
        </div>

        <Reveal as="div" delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-forest">
            We help adults navigating
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-3">
            {conditions.map((c) => (
              <li
                key={c}
                className="rounded-full border border-forest/15 bg-canvas px-5 py-2.5 text-[0.95rem] text-ink"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center text-lg text-forest-deep">
            Whatever brought you here, you&apos;re in the right place — and there
            is a path forward.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
