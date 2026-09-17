"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import type { Role } from "@/data/careers";
import { contact } from "@/data/site";

/* The roles ledger and the application form share one piece of state: the
   role a visitor is applying for. Choosing "Apply" on a role fills the
   form and scrolls to it. Sending composes an email in the visitor's own
   mail app; the CV is attached there, since nothing here runs a server. */
export default function OpenRoles({ roles }: { roles: Role[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const [applying, setApplying] = useState<string>("");
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* Deep links like /career#iqc-head open that role; hashchange covers
       in-page navigation from the footer or nav. */
    const sync = () => {
      const slug = window.location.hash.replace("#", "");
      if (roles.some((r) => r.slug === slug)) setOpen(slug);
    };
    window.addEventListener("hashchange", sync);
    const id = window.requestAnimationFrame(sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.cancelAnimationFrame(id);
    };
  }, [roles]);

  function apply(slug: string) {
    setApplying(slug);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const role = roles.find((r) => r.slug === get("role"));
    const roleName = role ? role.title : get("role") || "General application";
    const subject = `Application: ${roleName}, ${get("first")} ${get("last")}`.trim();
    const body = [
      `Role: ${roleName}`,
      `Name: ${get("first")} ${get("last")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      "",
      get("note"),
      "",
      "(CV attached)",
    ].join("\n");
    window.location.href = `mailto:${contact.careersEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-1.5 w-full border-b border-line bg-transparent py-2.5 text-ink outline-none transition-colors focus:border-ink";

  return (
    <>
      <section id="roles" className="under-header-offset border-t border-line bg-white">
        <div className="shell py-16 sm:py-24">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-[clamp(1.75rem,3.4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
              Open roles
            </h2>
            <p className="text-sm text-muted">
              {roles.length} positions, all at the Bahadurgarh plant
            </p>
          </div>

          <ol className="mt-10 border-t border-line">
            {roles.map((r) => {
              const isOpen = open === r.slug;
              return (
                <li key={r.slug} id={r.slug} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : r.slug)}
                    aria-expanded={isOpen}
                    aria-controls={`${r.slug}-detail`}
                    className="role-row grid w-full grid-cols-[minmax(0,1fr)_2.5rem] items-center gap-4 py-6 text-left sm:grid-cols-[minmax(0,7fr)_minmax(0,2fr)_minmax(0,2fr)_2.5rem] sm:gap-8 sm:py-7"
                  >
                    <span className="min-w-0">
                      <span className="block text-sm text-muted">{r.team}</span>
                      <span className="mt-1 block font-display text-[clamp(1.35rem,2.4vw,2.125rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
                        {r.title}
                      </span>
                    </span>
                    <span className="hidden text-body sm:block">{r.experience}</span>
                    <span className="hidden text-body sm:block">{r.location}</span>
                    <span
                      className={`role-plus relative h-10 w-10 justify-self-end rounded-full border border-line ${isOpen ? "is-open" : ""}`}
                      aria-hidden
                    />
                  </button>

                  <div
                    id={`${r.slug}-detail`}
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="grid gap-10 pb-10 pt-2 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
                        <div>
                          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm sm:grid-cols-1">
                            <div>
                              <dt className="text-muted">Experience</dt>
                              <dd className="mt-0.5 text-ink">{r.experience}</dd>
                            </div>
                            <div>
                              <dt className="text-muted">Location</dt>
                              <dd className="mt-0.5 text-ink">{r.location}</dd>
                            </div>
                            <div>
                              <dt className="text-muted">Type</dt>
                              <dd className="mt-0.5 text-ink">{r.type}</dd>
                            </div>
                            {r.qualifications.length > 0 && (
                              <div>
                                <dt className="text-muted">Education</dt>
                                <dd className="mt-0.5 text-ink">{r.qualifications.join("; ")}</dd>
                              </div>
                            )}
                          </dl>
                          <button
                            type="button"
                            onClick={() => apply(r.slug)}
                            className="btn btn-primary mt-8"
                          >
                            Apply for this role
                          </button>
                        </div>
                        <div className="max-w-[68ch]">
                          <p className="text-lg leading-relaxed text-body">{r.summary}</p>
                          {r.responsibilities.length > 0 && (
                            <>
                              <h3 className="mt-8 font-semibold text-ink">What you will do</h3>
                              <ul className="mt-3 space-y-2 text-body">
                                {r.responsibilities.map((x) => (
                                  <li key={x} className="flex gap-3">
                                    <span className="mt-[0.7em] h-px w-4 shrink-0 bg-faint" aria-hidden />
                                    <span>{x}</span>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                          {r.skills.length > 0 && (
                            <>
                              <h3 className="mt-8 font-semibold text-ink">What you bring</h3>
                              <ul className="mt-3 space-y-2 text-body">
                                {r.skills.map((x) => (
                                  <li key={x} className="flex gap-3">
                                    <span className="mt-[0.7em] h-px w-4 shrink-0 bg-faint" aria-hidden />
                                    <span>{x}</span>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
            <li className="border-b border-line">
              <button
                type="button"
                onClick={() => apply("")}
                className="role-row grid w-full grid-cols-[minmax(0,1fr)_2.5rem] items-center gap-4 py-6 text-left sm:grid-cols-[minmax(0,7fr)_minmax(0,2fr)_minmax(0,2fr)_2.5rem] sm:gap-8 sm:py-7"
              >
                <span className="min-w-0">
                  <span className="block text-sm text-muted">Any team</span>
                  <span className="mt-1 block font-display text-[clamp(1.35rem,2.4vw,2.125rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
                    Open application
                  </span>
                </span>
                <span className="hidden text-body sm:col-span-2 sm:block">Tell us what you do well and we will find the line for it.</span>
                <span className="justify-self-end text-sm text-ink underline underline-offset-4">Apply</span>
              </button>
            </li>
          </ol>
        </div>
      </section>

      <section ref={formRef} id="apply" className="under-header-offset border-t border-line bg-soft">
        <div className="shell grid gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div>
            <h2 className="font-display text-[clamp(1.75rem,3.4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
              Submit your resume
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-body">
              Pick a role or apply generally. The form opens an email to the HR team with your details filled in. Attach your CV before you send it. We reply within five working days.
            </p>
            <dl className="mt-10 grid gap-5 text-body">
              <div className="border-t border-line pt-4">
                <dt className="text-sm text-muted">Careers email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${contact.careersEmail}`} className="hero-link !text-ink">{contact.careersEmail}</a>
                </dd>
              </div>
              <div className="border-t border-line pt-4">
                <dt className="text-sm text-muted">HR</dt>
                <dd className="mt-1">
                  <a href={contact.hrPhoneHref} className="hero-link !text-ink">{contact.hrPhone}</a>
                </dd>
              </div>
              <div className="border-t border-line pt-4">
                <dt className="text-sm text-muted">Plant</dt>
                <dd className="mt-1">{contact.plant}</dd>
              </div>
            </dl>
          </div>

          <form onSubmit={submit} className="grid gap-6 sm:grid-cols-2">
            <label className="block text-sm text-muted">
              First name
              <input name="first" required autoComplete="given-name" className={field} />
            </label>
            <label className="block text-sm text-muted">
              Last name
              <input name="last" required autoComplete="family-name" className={field} />
            </label>
            <label className="block text-sm text-muted">
              Email
              <input name="email" type="email" required autoComplete="email" className={field} />
            </label>
            <label className="block text-sm text-muted">
              Phone or mobile
              <input name="phone" type="tel" autoComplete="tel" className={field} />
            </label>
            <label className="block text-sm text-muted sm:col-span-2">
              Applying for
              <select
                name="role"
                value={applying}
                onChange={(e) => setApplying(e.target.value)}
                className={field}
              >
                <option value="">General application</option>
                {roles.map((r) => (
                  <option key={r.slug} value={r.slug}>{r.title}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm text-muted sm:col-span-2">
              A line about yourself
              <textarea name="note" rows={4} className={field} />
            </label>
            <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
              <button type="submit" className="btn btn-primary">Open email to apply</button>
              <span className="max-w-sm text-sm text-muted">
                {sent
                  ? "Your mail app should be open. Attach your CV, then send."
                  : "Attach your CV in the email that opens."}
              </span>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-night text-white">
        <div className="shell flex flex-col gap-6 py-16 sm:flex-row sm:items-end sm:justify-between sm:py-20">
          <div>
            <h2 className="max-w-[18ch] font-display text-[clamp(1.75rem,3.4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Don&apos;t see the right fit?
            </h2>
            <p className="mt-4 max-w-md text-white/75">
              Lines open every year. Send a CV anyway and we will keep it for the next one.
            </p>
          </div>
          <a href={`mailto:${contact.careersEmail}?subject=Open%20application`} className="btn btn-primary shrink-0">
            Email {contact.careersEmail}
          </a>
        </div>
      </section>
    </>
  );
}
