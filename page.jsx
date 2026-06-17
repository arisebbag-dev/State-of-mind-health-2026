import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Medication Management & Telepsychiatry | Rockland County",
  description:
    "Expert medication management, telepsychiatry & genetic testing in Suffern, NY. Personalized psychiatric care for the tri-state area. Schedule your visit today.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Medication Management",
    body: "Finding the right medication — and the right dose — takes expertise and careful attention. We monitor your progress closely, adjust thoughtfully, and make sure you always understand what you're taking and why. The goal is simple: relief that lasts, with as few side effects as possible.",
  },
  {
    title: "Telepsychiatry",
    body: "Quality psychiatric care shouldn't depend on your zip code or your schedule. Our secure telehealth visits let you connect with Nechama from anywhere in New York and the tri-state area — the same expert care, none of the commute. It's private, convenient, and just as personal as an in-office visit.",
  },
  {
    title: "Genetic & Hormone Testing",
    body: "Sometimes the missing piece isn't what you're feeling — it's why. Pharmacogenomic (genetic) testing helps us understand how your body may respond to certain medications, while hormone testing uncovers imbalances that can affect your mood and energy. Together, they help us tailor a plan to your unique biology — less guesswork, more clarity.",
  },
  {
    title: "Consultations",
    body: "A consultation is a no-pressure conversation to explore what's going on and how we can help. You'll have space to share your concerns, ask questions, and get honest, expert guidance on your next steps — whether or not you decide to move forward with us.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Personalized, evidence-based psychiatric care."
        intro="In person in Suffern, NY and online across the tri-state area — care designed around you, your biology, and your goals."
      />

      <section className="pb-8">
        <div className="container-x">
          <div className="mx-auto grid max-w-4xl gap-5">
            {services.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 0.05}
                className="rounded-xl2 border border-forest/10 bg-canvas p-8 transition-shadow hover:shadow-card sm:p-10"
              >
                <div className="flex items-start gap-5">
                  <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sage-mist font-display text-forest">
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="text-2xl text-forest-deep">{s.title}</h2>
                    <p className="mt-3 text-[1.05rem] leading-relaxed text-ink-soft">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
