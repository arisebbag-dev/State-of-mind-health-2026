import PageHeader from "@/components/PageHeader";
import IntakeForm from "@/components/IntakeForm";

export const metadata = {
  title: "New Patient Intake | State of Mind Health",
  description:
    "Start your care at State of Mind Health. Share a few details and we'll call you back within one business day to schedule your consultation.",
};

export default function IntakePage() {
  return (
    <>
      <PageHeader
        eyebrow="New patient intake"
        title="Schedule your consultation"
        intro="Share a few details below and we'll call you back — usually within one business day — to find a time and answer your questions."
      />
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <IntakeForm />
        </div>
      </section>
    </>
  );
}
