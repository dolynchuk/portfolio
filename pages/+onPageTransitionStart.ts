import type { OnPageTransitionStartAsync } from "vike/types";
import { initGA, trackPageView } from "./ga";

initGA();

export const onPageTransitionStart: OnPageTransitionStartAsync = async ({ urlPathname }) => {
  document.querySelector("body")?.classList.add("page-is-transitioning");
  trackPageView(urlPathname);
};