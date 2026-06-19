import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Contact | State of Mind Health",
  description:
    "Reach State of Mind Health in Suffern, NY. Call (845) 653-7330 or request a callback through our new patient intake form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We're glad you reached out"
        intro="Call us, email us, or start the intake form and we'll call you back — usually within one business day."
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-2">
            <Reveal className="rounded-xl3 border border-olive/12 bg-white/60 p-8">
              <h2 className="font-display text-xl font-semibold text-olive-deep">Reach the office</h2>
              <dl className="mt-6 space-y-5 text-[0.97rem]">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Phone</dt>
                  <dd className="mt-1"><a href="tel:+18456537330" className="font-medium text-olive-deep hover:text-coral-deep">(845) 653-7330</a></dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Email</dt>
                  <dd className="mt-1"><a href="mailto:office@stateofmindhealth.com" className="text-ink-soft hover:text-coral-deep">office@stateofmindhealth.com</a></dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Office</dt>
                  <dd className="mt-1 text-ink-soft">222 NY-59, Suite 304<br />Suffern, NY 10901</dd>
                  <dd className="mt-1.5 text-sm text-ink-muted">In the newly renovated Ramapo Medical &amp; Professional Building on Rt. 59 — comfortable, private offices.</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Care options</dt>
                  <dd className="mt-1 text-ink-soft">In person in Suffern · Telehealth across the tri-state area</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.08} className="flex flex-col justify-center rounded-xl3 bg-olive-deep p-8 text-sand">
              <h2 className="font-display text-xl font-semibold">Ready to begin?</h2>
              <p className="mt-3 text-[0.97rem] font-light leading-relaxed text-sand/80">
                The easiest way to start is our new patient intake form. Share a few details and we'll call you back to find a time that works.
              </p>
              <div className="mt-7">
                <CTAButton href="/intake" variant="ghost" className="bg-coral text-white hover:bg-coral-deep">
                  Start the intake form
                </CTAButton>
              </div>
              <p className="mt-6 text-xs text-sand/60">
                In crisis? Call 911 or the Suicide &amp; Crisis Lifeline at 988.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
