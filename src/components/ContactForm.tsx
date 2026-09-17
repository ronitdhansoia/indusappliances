"use client";

import { useState, type FormEvent } from "react";
import { contact, divisions } from "@/data/site";

const volumes = ["Under 10,000", "10,000 to 50,000", "50,000 to 200,000", "Over 200,000", "Not sure yet"];
const needs = ["ODM design from a brief", "Build to your drawings", "Tooling only", "Certification support"];

/* Composes an email in the visitor's own mail client. No server, nothing
   stored, and the address is shown in plain text beside it. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const picked = f.getAll("need").map(String);
    const subject = `Enquiry: ${get("category") || "General"} from ${get("company") || get("name")}`;
    const body = [
      "Contact",
      `Name: ${get("name")}`,
      `Company: ${get("company")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      "",
      "Product",
      `Line: ${get("category")}`,
      `Annual volume: ${get("volume")}`,
      `Need: ${picked.join(", ") || "Not specified"}`,
      `Target date: ${get("timing")}`,
      "",
      "Brief",
      get("message"),
      "",
      "(Drawings or specs can be attached to this email.)",
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field = "mt-1.5 w-full border-b border-line bg-transparent py-2.5 text-ink outline-none transition-colors focus:border-ink";
  const legend = "mb-2 text-sm font-semibold text-ink";

  return (
    <form onSubmit={submit} className="space-y-10">
      <fieldset className="grid gap-6 pt-1 sm:grid-cols-2">
        <legend className={legend}>Contact</legend>
        <label className="block text-sm text-muted">
          Name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm text-muted">
          Company
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className="block text-sm text-muted">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="block text-sm text-muted">
          Phone
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </fieldset>

      <fieldset className="grid gap-6 pt-1 sm:grid-cols-2">
        <legend className={legend}>Product</legend>
        <label className="block text-sm text-muted">
          Product line
          <select name="category" className={field} defaultValue="">
            <option value="">Choose one</option>
            {divisions.map((d) => (
              <option key={d.id} value={d.name}>{d.name}</option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </label>
        <label className="block text-sm text-muted">
          When do you need first units?
          <input name="timing" placeholder="e.g. Q2 2027" className={field} />
        </label>
        <div className="text-sm text-muted sm:col-span-2">
          Annual volume
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-ink">
            {volumes.map((v, i) => (
              <label key={v} className="inline-flex items-center gap-2">
                <input type="radio" name="volume" value={v} defaultChecked={i === volumes.length - 1} className="accent-brand" />
                {v}
              </label>
            ))}
          </div>
        </div>
        <div className="text-sm text-muted sm:col-span-2">
          What you need
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-ink">
            {needs.map((n) => (
              <label key={n} className="inline-flex items-center gap-2">
                <input type="checkbox" name="need" value={n} className="accent-brand" />
                {n}
              </label>
            ))}
          </div>
        </div>
      </fieldset>

      <fieldset className="pt-1">
        <legend className={legend}>Brief</legend>
        <label className="block text-sm text-muted">
          What are you looking to build?
          <textarea name="message" rows={5} required className={field} />
        </label>
        <p className="mt-3 text-sm text-muted">Drawings and specs can be attached to the email, or shared after a first call.</p>
      </fieldset>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button type="submit" className="btn btn-primary">Send enquiry</button>
        <span className="text-sm text-muted">
          {sent ? "Your mail app should now be open with the enquiry ready to send." : `Opens your mail app addressed to ${contact.email}.`}
        </span>
      </div>
      <p className="border-t border-line pt-6 text-body">
        Not ready for a brief?{" "}
        <a href={contact.salesPhoneHref} className="hero-link !text-ink">Call sales, {contact.salesPhone}</a>
        {" "}or{" "}
        <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hero-link !text-ink">message on WhatsApp</a>.
      </p>
    </form>
  );
}
