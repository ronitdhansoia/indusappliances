"use client";

import { useEffect, useRef, useState } from "react";
import type { Role } from "@/data/careers";
import { contact } from "@/data/site";
import { pad } from "./format";

/* Role details in a native modal dialog: the browser handles the top
   layer, Escape and keeping focus inside. Slides in from the right, or up
   from the bottom on phones. The Apply button stays pinned at the foot. */

function lock() {
  const gutter = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.setProperty("--cr-sbw", `${gutter}px`);
  document.body.classList.add("cr-lock");
}
function unlock() {
  document.body.classList.remove("cr-lock");
  document.body.style.removeProperty("--cr-sbw");
}

export default function RoleDrawer({
  role,
  index,
  total,
  onClose,
  onClosed,
  onApply,
}: {
  role: Role | null;
  index: number;
  total: number;
  onClose: () => void;
  onClosed: () => void;
  onApply: (slug: string) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [shown, setShown] = useState(false);
  const finishing = useRef(false);

  /* The last role keeps rendering while the drawer slides out. */
  const [current, setCurrent] = useState<Role | null>(role);
  if (role && role !== current) setCurrent(role);

  /* Latest callbacks, so the open/close effect depends on the role alone. */
  const closedCb = useRef(onClosed);
  const closeCb = useRef(onClose);
  useEffect(() => {
    closedCb.current = onClosed;
    closeCb.current = onClose;
  });

  useEffect(() => {
    const d = ref.current;
    if (!d) return;

    if (role) {
      if (!d.open) {
        lock();
        d.showModal();
        d.querySelector(".cr-drawer-body")?.scrollTo(0, 0);
      }
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
      return () => cancelAnimationFrame(id);
    }

    if (!d.open) return;
    const id = requestAnimationFrame(() => setShown(false));
    const finish = () => {
      if (finishing.current) return;
      finishing.current = true;
      d.close();
      unlock();
      finishing.current = false;
      closedCb.current();
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return () => cancelAnimationFrame(id);
    }
    const onEnd = (e: TransitionEvent) => {
      if (e.target === d && e.propertyName === "transform") finish();
    };
    d.addEventListener("transitionend", onEnd);
    const fallback = window.setTimeout(finish, 900);
    return () => {
      cancelAnimationFrame(id);
      d.removeEventListener("transitionend", onEnd);
      window.clearTimeout(fallback);
    };
  }, [role]);

  /* If the browser closes the dialog itself, keep the page in step. */
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const onNativeClose = () => {
      if (finishing.current) return;
      unlock();
      setShown(false);
      closeCb.current();
    };
    d.addEventListener("close", onNativeClose);
    return () => {
      d.removeEventListener("close", onNativeClose);
      unlock();
    };
  }, []);

  return (
    <dialog
      ref={ref}
      className="cr-drawer"
      data-shown={shown ? "true" : "false"}
      aria-labelledby="cr-role-title"
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
    >
      {current && (
        <>
          <div className="cr-drawer-head">
            <p className="cr-mono flex flex-wrap gap-x-4 text-muted">
              <span>
                Role {pad(index + 1)} of {pad(total)}
              </span>
              <span>{current.department}</span>
            </p>
            <button type="button" className="cr-close" onClick={onClose} aria-label="Close role details" />
          </div>

          <div className="cr-drawer-body">
            <p className="cr-mono text-muted">{current.team}</p>
            <h2 id="cr-role-title" className="cr-display cr-drawer-title mt-3 text-ink">
              {current.title}
            </h2>

            <dl className="cr-drawer-meta text-sm">
              <div>
                <dt className="cr-mono">Department</dt>
                <dd>{current.team}</dd>
              </div>
              <div>
                <dt className="cr-mono">Location</dt>
                <dd>{current.location}</dd>
              </div>
              <div>
                <dt className="cr-mono">Experience</dt>
                <dd>{current.experience}</dd>
              </div>
              <div>
                <dt className="cr-mono">Employment type</dt>
                <dd>{current.type}</dd>
              </div>
              {current.qualifications.length > 0 && (
                <div className="col-span-2">
                  <dt className="cr-mono">Education</dt>
                  <dd>{current.qualifications.join("; ")}</dd>
                </div>
              )}
            </dl>

            <section className="cr-drawer-section" aria-labelledby="cr-role-about">
              <h3 id="cr-role-about" className="cr-display text-ink">
                About the role
              </h3>
              <p>{current.summary}</p>
            </section>

            {current.responsibilities.length > 0 && (
              <section className="cr-drawer-section" aria-labelledby="cr-role-do">
                <h3 id="cr-role-do" className="cr-display text-ink">
                  What you&rsquo;ll do
                </h3>
                <ul className="cr-drawer-list">
                  {current.responsibilities.map((x, i) => (
                    <li key={x}>
                      <span className="cr-mono">{pad(i + 1)}</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {current.skills.length > 0 && (
              <section className="cr-drawer-section" aria-labelledby="cr-role-bring">
                <h3 id="cr-role-bring" className="cr-display text-ink">
                  What you bring
                </h3>
                <ul className="cr-drawer-list">
                  {current.skills.map((x, i) => (
                    <li key={x}>
                      <span className="cr-mono">{pad(i + 1)}</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <div className="cr-drawer-foot">
            <button type="button" className="btn btn-primary" onClick={() => onApply(current.slug)}>
              Apply for this role
            </button>
            <a
              href={`mailto:${contact.careersEmail}?subject=${encodeURIComponent(`Application: ${current.title}`)}`}
              className="hero-link !text-ink text-sm"
            >
              or email {contact.careersEmail}
            </a>
          </div>
        </>
      )}
    </dialog>
  );
}
