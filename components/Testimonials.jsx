import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Patient",
    text: "Nechama took the time to truly understand what I was going through. After struggling with anxiety for years, I finally feel like myself again. Her compassionate approach and willingness to listen made all the difference.",
    initials: "SM",
  },
  {
    name: "James T.",
    role: "Patient",
    text: "The genetic testing was a game-changer for me. Instead of trying different medications endlessly, we found what works based on my biology. Professional, caring, and genuinely invested in my success.",
    initials: "JT",
  },
  {
    name: "Elena R.",
    role: "Patient",
    text: "I was skeptical about telepsychiatry, but Nechama made me feel completely comfortable. The private office setting is beautiful, and the care is exactly the same whether in-person or online. Highly recommended.",
    initials: "ER",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-sage-mist/60 py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Reveal as="p" className="text-sm font-medium uppercase tracking-wider text-apricot-deep">
            What patients say
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-3 text-3xl text-forest-deep sm:text-4xl">
            Real transformations, real people.
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.06}
              className="rounded-xl2 border border-forest/10 bg-canvas p-6 transition-shadow hover:shadow-card"
            >
              {/* Star rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-apricot-deep">★</span>
                ))}
              </div>

              {/* Testimonial text */}
              <p className="mb-6 text-[0.95rem] leading-relaxed text-ink-soft italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-canvas font-medium text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-medium text-forest-deep text-sm">{t.name}</p>
                  <p className="text-xs text-ink-muted">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" delay={0.2} className="mt-12 text-center text-sm text-ink-muted">
          ★ Replace these with real patient testimonials. HIPAA-compliant names/initials only.
        </Reveal>
      </div>
    </section>
  );
}
