"use client";

import { useEffect } from "react";

/* Discourages saving site imagery: no "Save image as" menu and no dragging
   images out of the page. Paired with the img/video rules in globals.css,
   which stop the long-press save menu on phones. */
export default function ImageGuard() {
  useEffect(() => {
    const block = (e: Event) => {
      if (e.target instanceof Element && e.target.closest("img, video, picture, svg image")) e.preventDefault();
    };
    document.addEventListener("contextmenu", block, true);
    document.addEventListener("dragstart", block, true);
    return () => {
      document.removeEventListener("contextmenu", block, true);
      document.removeEventListener("dragstart", block, true);
    };
  }, []);
  return null;
}
