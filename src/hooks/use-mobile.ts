"use client";

import { useEffect, useState } from "react";

/**
 * useIsMobile hook — SSR safe.
 * Returns true when the media query matches in the browser.
 */
export function useIsMobile(query: string, initial = false) {
  const [matches, setMatches] = useState<boolean>(initial);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mq = window.matchMedia(query);

    // Set initial value to match real CSS behavior
    setMatches(mq.matches);

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    // Older browsers use addListener
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handler as any);
      return () => mq.removeEventListener("change", handler as any);
    } else {
      mq.addListener(handler as any);
      return () => mq.removeListener(handler as any);
    }
  }, [query]);

  return matches;
}
