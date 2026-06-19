import Reveal from "./Reveal";

const pillars = [
  {
    num: "01",
    title: "Genetic testing & metabolism",
    body: "How your body processes medication is written partly in your genes. We use pharmacogenomic testing — including markers like MTHFR — to understand metabolism and mood regulation, an underused tool we believe belongs at the front of outpatient psychiatry.",
  },
  {
    num: "02",
    title: "Hormonal psychiatry",
    body: "The link between hormones and mental health has been overlooked for decades. We evaluate estrogen, progesterone, and the role of HRT, treating hormonal health as an essential — and often missing — piece of psychiatric care, especially for women.",
  },
  {
    num: "03",
    title: "Religiously sensitive, discreet care",
    body: "For observant patients, we offer respectful, discreet clinical support — including thoughtful hormonal cycle management around meaningful lifecycle events. It's a quietly underserved need, and we treat it with the seriousness and sensitivity it deserves.",
  },
  {
    num: "04",
    title: "The nervous system in focus",
    body: "Psychiatric symptoms rarely exist in isolation. We assess the state of your autonomic nervous system, because chronic dysregulation can drive or worsen a wide range of symptoms — a view that also informs our work with NMDA-pathway treatments.",
  },
  {
    num: "05",
    title: "Beyond dopamine & serotonin",
    body: "Standard care has focused narrowly on a handful of neurotransmitters. We take a broader view — incorporating glutamate, neuroinflammatory mechanisms, and other pathways that conventional outpatient psychiatry too often leaves out.",
  },
];

export default function ApproachPillars() {
  return (
    <section className="bg-sand-light py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="p" className="text-sm font-semibold uppercase tracking-wider text-coral-deep">
            Our approach
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-3 font-display text-3xl font-semibold text-olive-deep sm:text-4xl">
            Psychiatry that looks for the root, not just the symptom.
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-4 text-lg font-light leading-relaxed text-ink-soft">
            Five ideas shape how we practice — each one a piece of the picture that standard outpatient care tends to miss.
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {pillars.map((p, i) => (
            <Reveal
              key={p.num}
              delay={i * 0.05}
              className={`flex flex-col gap-5 border-t border-olive/15 py-9 sm:flex-row sm:gap-10 ${i === pillars.length - 1 ? "border-b" : ""}`}
            >
              <div className="flex shrink-0 items-start gap-4 sm:w-44">
                <span className="font-display text-2xl font-medium text-coral">{p.num}</span>
              </div>
              <div className="sm:flex-1">
                <h3 className="font-display text-xl font-semibold text-olive-deep">{p.title}</h3>
                <p className="mt-2.5 text-[0.97rem] font-light leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
