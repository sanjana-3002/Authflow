/**
 * Lightweight analytics helpers.
 * Wraps window.gtag / window.plausible so callers don't need to guard for undefined.
 */

type EventProperties = Record<string, string | number | boolean>;

export function trackEvent(name: string, props?: EventProperties): void {
  try {
    if (typeof window === "undefined") return;
    if ("gtag" in window && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", name, props);
    }
    if ("plausible" in window && typeof (window as any).plausible === "function") {
      (window as any).plausible(name, { props });
    }
  } catch {
    // Never let analytics errors surface to users
  }
}

export function trackPageView(url: string): void {
  trackEvent("page_view", { url });
}
