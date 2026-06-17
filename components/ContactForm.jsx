"use client";

import { useState } from "react";

const initial = {
  name: "",
  email: "",
  phone: "",
  reason: "",
  visitType: "In-person (Suffern, NY)",
  message: "",
};

// Wire this to your form handler (e.g. Formspree, your CRM, or an API route).
// Set NEXT_PUBLIC_INTAKE_ENDPOINT in your environment to enable real submissions.
const ENDPOINT = process.env.NEXT_PUBLIC_INTAKE_ENDPOINT || "";

const field =
  "w-full rounded-xl border border-forest/15 bg-canvas px-4 py-3 text-ink placeholder:text-ink-muted/70 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20";
const label = "block text-sm font-medium text-forest-deep mb-1.5";

export default function ContactForm() {
  const [data, setData] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  const update = (e) =>
    setData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!data.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = "Please enter a valid email.";
    if (!data.phone.trim()) next.phone = "Please enter a phone number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    if (!ENDPOINT) {
      // No backend wired yet — simulate success so the UI is testable.
      setTimeout(() => setStatus("success"), 600);
      return;
    }

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl2 border border-forest/15 bg-sage-mist/60 p-8 text-center">
        <h3 className="text-2xl text-forest-deep">Thank you for reaching out.</h3>
        <p className="mt-3 text-ink-soft">
          We&apos;ve received your information and someone from State of Mind
          Health will be in touch soon to help you take the next step. We&apos;re
          glad you&apos;re here.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Full name</label>
          <input id="name" name="name" value={data.name} onChange={update}
            className={field} placeholder="Your name" />
          {errors.name && <p className="mt-1 text-sm text-apricot-deep">{errors.name}</p>}
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone</label>
          <input id="phone" name="phone" value={data.phone} onChange={update}
            className={field} placeholder="(000) 000-0000" />
          {errors.phone && <p className="mt-1 text-sm text-apricot-deep">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className={label} htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={data.email} onChange={update}
          className={field} placeholder="you@email.com" />
        {errors.email && <p className="mt-1 text-sm text-apricot-deep">{errors.email}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="visitType">Preferred visit type</label>
          <select id="visitType" name="visitType" value={data.visitType} onChange={update} className={field}>
            <option>In-person (Suffern, NY)</option>
            <option>Telehealth</option>
            <option>No preference</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="reason">What brings you in?</label>
          <select id="reason" name="reason" value={data.reason} onChange={update} className={field}>
            <option value="">Select one…</option>
            <option>Anxiety</option>
            <option>Depression</option>
            <option>ADHD</option>
            <option>Mood disorder</option>
            <option>OCD</option>
            <option>Medication management</option>
            <option>Genetic / hormone testing</option>
            <option>Something else</option>
          </select>
        </div>
      </div>

      <div>
        <label className={label} htmlFor="message">Anything you&apos;d like us to know? (optional)</label>
        <textarea id="message" name="message" value={data.message} onChange={update} rows={4}
          className={field} placeholder="Share as much or as little as you'd like." />
      </div>

      {status === "error" && (
        <p className="text-sm text-apricot-deep">
          Something went wrong sending your message. Please call us or try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-full bg-forest px-8 py-4 font-medium text-canvas shadow-card transition-all hover:-translate-y-0.5 hover:bg-forest-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Submit Intake Form →"}
      </button>

      <p className="text-xs leading-relaxed text-ink-muted">
        This form is for scheduling and general inquiries only — please don&apos;t
        share sensitive medical details here. If you&apos;re experiencing a mental
        health emergency, call 911 or dial 988.
      </p>
    </form>
  );
}
