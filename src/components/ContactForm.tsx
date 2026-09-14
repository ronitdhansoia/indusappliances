"use client";

import { useState, type FormEvent } from "react";
import { contact, divisions } from "@/data/site";

/* Composes an email in the visitor's own mail client. No server, nothing
   stored, and the address is shown in plain text beside it. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const subject = `Enquiry: ${get("category") || "General"} from ${get("company") || get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Product line: ${get("category")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field = "mt-1.5 w-full border-b border-line bg-transparent py-2.5 text-ink outline-none transition-colors focus:border-ink";

  return (
    <form onSubmit={submit} className="grid gap-6 sm:grid-cols-2">
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
      <label className="block text-sm text-muted sm:col-span-2">
        Product line
        <select name="category" className={field} defaultValue="">
          <option value="">Choose one</option>
          {divisions.map((d) => (
            <option key={d.id} value={d.name}>{d.name}</option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </label>
      <label className="block text-sm text-muted sm:col-span-2">
        What are you looking to build?
        <textarea name="message" rows={5} required className={field} />
      </label>
      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button type="submit" className="btn btn-primary">Send enquiry</button>
        <span className="text-sm text-muted">
          {sent ? "Your mail app should now be open with the enquiry ready to send." : `Opens your mail app addressed to ${contact.email}.`}
        </span>
      </div>
    </form>
  );
}
