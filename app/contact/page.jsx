import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Schedule an Appointment | State of Mind Health",
  description:
    "Contact State of Mind Health in Suffern, NY. Schedule your psychiatric appointment or intake form — in-person or telehealth.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Schedule your appointment."
        intro="Whether you're ready to book your first visit or you have questions, we're here to help — with no judgment and complete confidentiality."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Form */}
              <div>
                <h2 className="mb-8 text-2xl text-forest-deep">Intake Form</h2>
                <ContactForm />
              </div>

              {/* Contact info */}
              <div>
                <h2 className="mb-8 text-2xl text-forest-deep">Contact Information</h2>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-apricot-deep">
                      Office
                    </p>
                    <p className="mt-2 text-lg text-ink-soft">
                      Suffern, NY
                      <br />
                      Rockland County
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-apricot-deep">
                      Phone
                    </p>
                    <p className="mt-2">
                      <a
                        href="tel:+10000000000"
                        className="text-lg text-forest hover:text-apricot-deep transition-colors"
                      >
                        (000) 000-0000
                      </a>
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-apricot-deep">
                      Email
                    </p>
                    <p className="mt-2">
                      <a
                        href="mailto:hello@stateofmindhealth.com"
                        className="text-lg text-forest hover:text-apricot-deep transition-colors"
                      >
                        hello@stateofmindhealth.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-apricot-deep">
                      Availability
                    </p>
                    <p className="mt-2 text-lg text-ink-soft">
                      In-person appointments in Suffern
                      <br />
                      Telehealth across the tri-state area
                    </p>
                  </div>

                  <div className="rounded-xl2 border border-apricot/20 bg-apricot-soft/20 p-4">
                    <p className="text-sm text-ink">
                      <strong>In a mental health emergency?</strong>
                      <br />
                      Call 911 or dial 988 for the Suicide & Crisis Lifeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
