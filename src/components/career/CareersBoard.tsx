"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties, type FormEvent } from "react";
import { apply as applyCopy, departmentOrder, positions, type Department, type Role } from "@/data/careers";
import { contact } from "@/data/site";
import InView from "./InView";
import SheetHeader from "./SheetHeader";
import Lines from "./Lines";
import Arrow from "./Arrow";
import RoleDrawer from "./RoleDrawer";
import { pad } from "./format";

/* The roles ledger, the role drawer and the application form share one
   piece of state: the role a visitor is applying for. Sending composes an
   email in the visitor's own mail app; the CV is attached there, since
   nothing here runs a server. */
export default function CareersBoard({ roles }: { roles: Role[] }) {
  const [filter, setFilter] = useState<Department | "All">("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [applying, setApplying] = useState("");
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const scrollToForm = useRef(false);

  const departments = useMemo(
    () =>
      departmentOrder
        .map((name) => ({ name, count: roles.filter((r) => r.department === name).length }))
        .filter((d) => d.count > 0),
    [roles],
  );
  const visible = filter === "All" ? roles : roles.filter((r) => r.department === filter);
  const openRole = openSlug ? (roles.find((r) => r.slug === openSlug) ?? null) : null;

  /* Deep links like /career#iqc-head open that role. */
  useEffect(() => {
    const sync = () => {
      const slug = window.location.hash.slice(1);
      if (roles.some((r) => r.slug === slug)) setOpenSlug(slug);
    };
    const id = window.requestAnimationFrame(sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.cancelAnimationFrame(id);
      window.removeEventListener("hashchange", sync);
    };
  }, [roles]);

  function open(slug: string, from: HTMLElement) {
    returnFocus.current = from;
    setOpenSlug(slug);
    window.history.replaceState(null, "", `#${slug}`);
  }
  function close() {
    setOpenSlug(null);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }
  function closed() {
    if (scrollToForm.current) {
      scrollToForm.current = false;
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    returnFocus.current?.focus();
  }
  function applyFor(slug: string) {
    setApplying(slug);
    setSent(false);
    if (openSlug) {
      scrollToForm.current = true;
      close();
    } else {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const role = roles.find((r) => r.slug === get("role"));
    const roleName = role ? role.title : "General application";
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

  return (
    <>
      <section id="roles" className="cr-section under-header-offset border-t border-line" aria-labelledby="cr-roles-title">
        <div className="shell">
          <InView>
            <SheetHeader n="07" title="Open positions" note={positions.note} />
            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end">
              <h2 id="cr-roles-title" className="cr-display text-[clamp(2.25rem,7.2vw,7rem)] text-ink">
                <Lines lines={positions.lines} />
              </h2>
              <p className="cr-rise flex items-end gap-5 lg:justify-end" style={{ "--i": 2 } as CSSProperties}>
                <span className="cr-display cr-count text-ink">{pad(roles.length)}</span>
                <span className="mb-1 max-w-[13ch] text-base leading-snug text-body">open positions at the Bahadurgarh plant</span>
              </p>
            </div>
          </InView>

          <div className="cr-filters" role="group" aria-label="Filter roles by department">
            <button type="button" className="cr-filter" aria-pressed={filter === "All"} onClick={() => setFilter("All")}>
              All
              <span className="cr-filter-count cr-mono">{pad(roles.length)}</span>
            </button>
            {departments.map((d) => (
              <button
                key={d.name}
                type="button"
                className="cr-filter"
                aria-pressed={filter === d.name}
                onClick={() => setFilter(d.name)}
              >
                {d.name}
                <span className="cr-filter-count cr-mono">{pad(d.count)}</span>
              </button>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">
            Showing {visible.length} of {roles.length} roles
          </p>

          <ol className="cr-rows">
            {visible.map((r) => {
              const i = roles.indexOf(r);
              return (
                <li key={r.slug} id={r.slug} className="under-header-offset">
                  <button
                    type="button"
                    className="cr-row"
                    onClick={(e) => open(r.slug, e.currentTarget)}
                    aria-haspopup="dialog"
                  >
                    <span className="cr-row-index cr-mono">{pad(i + 1)}</span>
                    <span className="min-w-0">
                      <span className="cr-row-title cr-display">{r.title}</span>
                      <span className="cr-row-sub">{r.location}</span>
                      <span className="cr-row-sub" data-desktop="hide">
                        {r.team}, {r.experience}
                      </span>
                    </span>
                    <span className="cr-row-meta">{r.team}</span>
                    <span className="cr-row-meta">{r.experience}</span>
                    <span className="cr-row-meta">{r.type}</span>
                    <span className="cr-row-cta">
                      <span className="cr-row-cta-text">View role</span>
                      <Arrow />
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <RoleDrawer
        role={openRole}
        index={openRole ? roles.indexOf(openRole) : 0}
        total={roles.length}
        onClose={close}
        onClosed={closed}
        onApply={applyFor}
      />

      <section
        ref={formRef}
        id="apply"
        className="cr-section under-header-offset border-t border-line bg-soft"
        aria-labelledby="cr-apply-title"
      >
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <InView>
            <SheetHeader n="08" title="Apply" />
            <h2 id="cr-apply-title" className="cr-display mt-10 text-[clamp(2.25rem,6.4vw,5.75rem)] text-ink">
              <Lines lines={applyCopy.lines} />
            </h2>
            <p className="cr-rise mt-6 max-w-[42ch] text-lg leading-relaxed text-body" style={{ "--i": 2 } as CSSProperties}>
              {applyCopy.body}
            </p>
            <dl className="cr-contact cr-rise" style={{ "--i": 3 } as CSSProperties}>
              <div>
                <dt className="cr-mono">Careers email</dt>
                <dd>
                  <a href={`mailto:${contact.careersEmail}`} className="hero-link !text-ink">
                    {contact.careersEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="cr-mono">HR</dt>
                <dd>
                  <a href={contact.hrPhoneHref} className="hero-link !text-ink">
                    {contact.hrPhone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="cr-mono">Plant</dt>
                <dd>{contact.plant}</dd>
              </div>
            </dl>
          </InView>

          <form onSubmit={submit} className="grid gap-7 sm:grid-cols-2 lg:pt-14">
            <label className="block text-sm text-muted">
              First name
              <input name="first" required autoComplete="given-name" className="cr-field" />
            </label>
            <label className="block text-sm text-muted">
              Last name
              <input name="last" required autoComplete="family-name" className="cr-field" />
            </label>
            <label className="block text-sm text-muted">
              Email
              <input name="email" type="email" required autoComplete="email" className="cr-field" />
            </label>
            <label className="block text-sm text-muted">
              Phone
              <input name="phone" type="tel" autoComplete="tel" className="cr-field" />
            </label>
            <label className="block text-sm text-muted sm:col-span-2">
              Role
              <select name="role" value={applying} onChange={(e) => setApplying(e.target.value)} className="cr-field">
                <option value="">General application</option>
                {roles.map((r) => (
                  <option key={r.slug} value={r.slug}>
                    {r.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm text-muted sm:col-span-2">
              A short introduction
              <textarea name="note" rows={4} className="cr-field" />
            </label>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:col-span-2">
              <button type="submit" className="btn btn-primary">
                Open email to apply
              </button>
              <p role="status" className="max-w-sm text-sm text-muted">
                {sent ? applyCopy.sentNote : applyCopy.attachNote}
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
