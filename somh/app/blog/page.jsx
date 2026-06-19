import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Blog | State of Mind Health",
  description:
    "Insights on root-cause psychiatry — genetics, hormones, the nervous system, and the science conventional outpatient care often overlooks.",
};

const upcoming = [
  { t: "MTHFR and mood: what your genes can tell us", tag: "Genetics" },
  { t: "Hormones and mental health: the missing conversation", tag: "Hormonal psychiatry" },
  { t: "When the nervous system won't settle", tag: "Nervous system" },
  { t: "Beyond serotonin: a broader view of the brain", tag: "Neuroscience" },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Notes on root-cause psychiatry"
        intro="Plain-language writing on the science behind our approach. New articles are on the way — here's what's coming."
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
            {upcoming.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.05} className="flex flex-col rounded-xl2 border border-olive/12 bg-white/60 p-7">
                <span className="mb-3 inline-flex w-fit rounded-full bg-olive-soft px-3 py-1 text-xs font-medium text-olive-deep">
                  {p.tag}
                </span>
                <h2 className="font-display text-lg font-medium text-olive-deep">{p.t}</h2>
                <span className="mt-3 text-xs font-medium uppercase tracking-wider text-ink-muted">Coming soon</span>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" delay={0.1} className="mx-auto mt-10 max-w-xl text-center text-sm text-ink-muted">
            Want to be notified when new articles publish? Email{" "}
            <a href="mailto:office@stateofmindhealth.com" className="font-medium text-olive-deep hover:text-coral-deep">office@stateofmindhealth.com</a>.
          </Reveal>
        </div>
      </section>
    </>
  );
}
