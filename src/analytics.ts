const dataLayer =
  (window as Window & typeof globalThis & { dataLayer: any[] | undefined })
    .dataLayer || [];
export function gtag(
  _p0: string,
  _p1: Date | string,
  _p2?: { event_category: string; event_label?: string }
) {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-V7PDVH0PW3");