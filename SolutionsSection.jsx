import Reveal from "./Reveal";
import CTAButton from "./CTAButton";

const Icons = {
  brain: (
    <path d="M12 5a3 3 0 0 0-3 3 3 3 0 0 0-2 5.2A3 3 0 0 0 9 18a3 3 0 0 0 3 1 3 3 0 0 0 3-1 3 3 0 0 0 2-4.8A3 3 0 0 0 15 8a3 3 0 0 0-3-3Zm0 0v14" />
  ),
  dna: (
    <>
      <path d="M7 4c0 6 10 10 10 16M17 4c0 6-10 10-10 16" />
      <path d="M8.5 7h7M8.5 17h7M10 10.5h4M10 13.5h4" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6.5L5.5 18A1.5 1.5 0 0 0 7 20h10a1.5 1.5 0 0 0 1.5-2L14 9.5V3" />
      <path d="M7.5 14h9" />
    </>
  ),
  screen: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  chat: (
    <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l.9-5A8 8 0 1 1 21 12Z" />
  ),
};

const services = [
  {
    icon: "brain",
    title: "Expert Medication Management",
    body: "Thoughtful, carefully monitored medication management led by an experienced psychiatric nurse practitioner. We start low, go slow, and adjust based on how you respond — never a rushed prescription.",
  },
  {
    icon: "dna",
    title: "Genetic (Pharmacogenomic) Testing",
    body: "A simple cheek swab can reveal how your body processes certain medications. This helps us narrow down options more likely to work for you — reducing the trial-and-error so many patients dread.",
    featured: true,
  },
  {
    icon: "flask",
    title: "Hormone Testing",
    body: "Hormonal imbalances can quietly fuel anxiety, low mood, and fatigue. Identifying and addressing them gives us a fuller, more complete picture of your mental health — not just half the story.",
    featured: true,
  },
  {
    icon: "screen",
    title: "Telepsychiatry",
    body: "Skip the commute and the waiting room. Get the same expert care from the privacy and comfort of home, available across New York and the tri-state area.",
  },
  {
    icon: "chat",
    title: "Consultations",
    body: "Not sure where to start? A consultation gives you space to be heard, ask questions, and understand your options — no pressure, no judgment.",
  },
];

function Card({ icon, title, body, featured, index }) {
  return (
    <Reveal
      delay={index * 0.06}
      className={`group flex flex-col rounded-xl2 border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
        featured
          ? "border-forest/20 bg-forest text-canvas"
          : "border-forest/10 bg-canvas text-ink"
      }`}
    >
      <span
        className={`grid h-12 w-12 place-items-center rounded-2xl ${
          featured ? "bg-canvas/15 text-canvas" : "bg-sage-mist text-forest"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden
        >
          {Icons[icon]}
        </svg>
      </span>
      <h3
        className={`mt-5 text-xl ${featured ? "text-canvas" : "text-forest-deep"}`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 text-[0.95rem] leading-relaxed ${
          featured ? "text-sage-mist/90" : "text-ink-soft"
        }`}
      >
        {body}
      </p>
    </Reveal>
  );
}

export default function SolutionsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="p" className="text-sm font-medium uppercase tracking-wider text-apricot-deep">
            How we help
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-3 text-3xl text-forest-deep sm:text-4xl">
            Care built around your biology — not guesswork.
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-5 text-lg leading-relaxed text-ink-soft">
            Mental health isn&apos;t one-size-fits-all, and your treatment
            shouldn&apos;t be either. We combine expert psychiatric care with
            advanced testing to understand what&apos;s really happening beneath
            the surface — so we can find what works for you, faster.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Card key={s.title} index={i} {...s} />
          ))}
        </div>

        <Reveal as="div" delay={0.1} className="mt-12 text-center">
          <CTAButton href="/services" variant="secondary" size="lg">
            Explore Our Services →
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
