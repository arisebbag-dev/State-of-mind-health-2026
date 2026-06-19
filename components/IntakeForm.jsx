"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  bestTime: "Morning",
  contactMethod: "Phone",
  referral: "",
  message: "",
};

export default function IntakeForm() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const er = {};
    if (!form.firstName.trim()) er.firstName = "Please enter your first name";
    if (!form.lastName.trim()) er.lastName = "Please enter your last name";
    if (!form.phone.trim()) er.phone = "Please enter a phone number";
    if (!form.email.trim()) er.email = "Please enter an email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "Please enter a valid email";
    return er;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const er = validate();
    if (Object.keys(er).length) {
      setErrors(er);
      return;
    }
    setErrors({});
    /*
      No backend yet — this simulates submission and shows the callback confirmation.
      To make it live, POST `form` to your intake endpoint or email service here
      (e.g. Formspree, a serverless route, or your EHR's intake API).
    */
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Reveal className="mx-auto max-w-xl rounded-xl3 border border-olive/12 bg-white/70 p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-olive-soft">
          <svg className="h-7 w-7 text-olive-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-5 font-display text-2xl font-semibold text-olive-deep">Thank you — we've got it.</h2>
        <p className="mt-3 text-[0.97rem] font-light leading-relaxed text-ink-soft">
          A member of our team will call you within one business day to find a time that works and answer any questions. If you'd like to reach us sooner, call{" "}
          <a href="tel:+18456537330" className="font-medium text-olive-deep hover:text-coral-deep">(845) 653-7330</a>.
        </p>
      </Reveal>
    );
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-olive/20 bg-white/80 px-4 py-2.5 text-[0.97rem] text-ink outline-none transition-colors focus:border-olive focus:ring-2 focus:ring-olive/20";
  const label = "text-sm font-medium text-olive-deep";
  const err = "mt-1 text-xs text-coral-deep";

  return (
    <Reveal className="mx-auto max-w-2xl rounded-xl3 border border-olive/12 bg-white/60 p-8 sm:p-10">
      <form onSubmit={onSubmit} noValidate className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="firstName">First name</label>
            <input id="firstName" className={field} value={form.firstName} onChange={update("firstName")} />
            {errors.firstName && <p className={err}>{errors.firstName}</p>}
          </div>
          <div>
            <label className={label} htmlFor="lastName">Last name</label>
            <input id="lastName" className={field} value={form.lastName} onChange={update("lastName")} />
            {errors.lastName && <p className={err}>{errors.lastName}</p>}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="email">Email</label>
            <input id="email" type="email" className={field} value={form.email} onChange={update("email")} />
            {errors.email && <p className={err}>{errors.email}</p>}
          </div>
          <div>
            <label className={label} htmlFor="phone">Phone</label>
            <input id="phone" type="tel" className={field} value={form.phone} onChange={update("phone")} />
            {errors.phone && <p className={err}>{errors.phone}</p>}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="bestTime">Best time to call</label>
            <select id="bestTime" className={field} value={form.bestTime} onChange={update("bestTime")}>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>
          <div>
            <label className={label} htmlFor="contactMethod">Preferred contact</label>
            <select id="contactMethod" className={field} value={form.contactMethod} onChange={update("contactMethod")}>
              <option>Phone</option>
              <option>Email</option>
              <option>Text</option>
            </select>
          </div>
        </div>

        <div>
          <label className={label} htmlFor="referral">How did you hear about us? <span className="font-normal text-ink-muted">(optional)</span></label>
          <input id="referral" className={field} value={form.referral} onChange={update("referral")} />
        </div>

        <div>
          <label className={label} htmlFor="message">What brings you in? <span className="font-normal text-ink-muted">(optional)</span></label>
          <textarea id="message" rows={4} className={field} value={form.message} onChange={update("message")} />
        </div>

        <p className="text-xs leading-relaxed text-ink-muted">
          Please don't include sensitive medical details here. This form simply lets us reach out — we'll discuss everything privately by phone.
        </p>

        <button
          type="submit"
          className="w-full rounded-full bg-coral px-7 py-3.5 font-medium text-white shadow-soft transition-all hover:bg-coral-deep active:scale-[0.98]"
        >
          Request my callback
        </button>
      </form>
    </Reveal>
  );
}
