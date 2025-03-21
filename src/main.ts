import { Application } from "@splinetool/runtime";

const dataLayer =
  (window as Window & typeof globalThis & { dataLayer: any[] | undefined })
    .dataLayer || [];
function gtag(
  _p0: string,
  _p1: Date | string,
  _p2?: { event_category: string; event_label?: string }
) {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-V7PDVH0PW3");

const elements = {
  canvas: document.getElementById("splineCanvas") as HTMLCanvasElement | null,
  splineEl: document.getElementById("spline") as HTMLElement | null,
  loaderText: document.getElementById("loaderText") as HTMLElement | null,
  imageNight: document.getElementById("imageNight") as HTMLElement | null,
  secondImg: document.getElementById("secondImg") as HTMLImageElement | null,
  scrollButton: document.getElementById("scrollButton") as HTMLElement | null,
  backdrop: document.getElementById("backdrop") as HTMLElement | null,
  careerHeading: document.getElementById("career") as HTMLElement | null,
  callButton: document.getElementById("callButton") as HTMLButtonElement | null,
  linkedInButton: document.getElementById(
    "callButton"
  ) as HTMLButtonElement | null,
  showLunButton: document.getElementById("showLun") as HTMLButtonElement | null,
  showCortexButton: document.getElementById(
    "showCortex"
  ) as HTMLButtonElement | null,
  showBirdButton: document.getElementById(
    "showBird"
  ) as HTMLButtonElement | null,
  lunDialog: document.getElementById("lunDialog") as HTMLDialogElement | null,
  cortexDialog: document.getElementById(
    "cortexDialog"
  ) as HTMLDialogElement | null,
  birdDialog: document.getElementById("birdDialog") as HTMLDialogElement | null,
};

async function initSpline() {
  if (!elements.canvas) return;

  try {
    const spline = new Application(elements.canvas);
    await spline.load(
      "https://prod.spline.design/53Ay5avPimaRMEOn/scene.splinecode"
    );

    elements.splineEl?.classList.add("splineLoaded");
    elements.loaderText?.classList.add("hidden");

    elements.canvas.addEventListener(
      "wheel",
      (event: WheelEvent) => {
        window.scrollBy({ top: event.deltaY });
      },
      { passive: true }
    );
  } catch (error) {
    console.error("Spline initialization failed:", error);
  }
}

let ticking = false;
let lastScrollY = 0;
const SCROLL_THRESHOLD = 10;

function updateScroll() {
  const scrollY = window.scrollY;
  const screenHeight = window.innerHeight;
  const scrollPercentage = Math.min((scrollY / screenHeight) * 100, 100);

  if (elements.imageNight) {
    elements.imageNight.classList.toggle("visible", scrollPercentage > 50);
  }

  if (elements.secondImg && scrollPercentage > 5 && !elements.secondImg.src) {
    const dataSrc = elements.secondImg.getAttribute("data-src");
    if (dataSrc) elements.secondImg.src = dataSrc;
  }

  if (elements.scrollButton) {
    elements.scrollButton.classList.toggle(
      "arrowScrollHidden",
      scrollPercentage > 5
    );
  }

  if (elements.backdrop) {
    elements.backdrop.classList.toggle(
      "backdropVisible",
      scrollPercentage > 50
    );
  }

  ticking = false;
  lastScrollY = scrollY;
}

const handleScroll = () => {
  if (ticking) return;

  const scrollDiff = Math.abs(window.scrollY - lastScrollY);
  if (scrollDiff < SCROLL_THRESHOLD) return;

  ticking = true;
  requestAnimationFrame(updateScroll);
};

const init = () => {
  requestAnimationFrame(() => {
    initSpline();
  });

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
  if (elements.scrollButton) {
    elements.scrollButton.addEventListener("click", () => {
      gtag("event", "click", {
        event_category: "scroll_button",
      });
      elements.careerHeading?.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
  if (elements.callButton) {
    elements.callButton.addEventListener("click", () => {
      gtag("event", "click", {
        event_category: "call_button",
      });
    });
  }
  if (elements.linkedInButton) {
    elements.linkedInButton.addEventListener("click", () => {
      gtag("event", "click", {
        event_category: "linkedin_button",
      });
    });
  }
  if (elements.showCortexButton) {
    elements.showCortexButton.addEventListener("click", () => {
      if (elements.cortexDialog) {
        document.body.style.overflow = "hidden";
        elements.cortexDialog.open = true;
        gtag("event", "click", {
          event_category: "cortex_button",
        });
      }
    });
  }
  if (elements.showLunButton) {
    elements.showLunButton.addEventListener("click", () => {
      if (elements.lunDialog) {
        document.body.style.overflow = "hidden";
        elements.lunDialog.open = true;

        gtag("event", "click", {
          event_category: "lun_button",
        });
      }
    });
  }
  if (elements.showBirdButton) {
    elements.showBirdButton.addEventListener("click", () => {
      if (elements.birdDialog) {
        document.body.style.overflow = "hidden";
        elements.birdDialog.open = true;
        gtag("event", "click", {
          event_category: "bird_button",
        });
      }
    });
  }
  const closeModalButtons = document.getElementsByClassName("closeModal");
  [...closeModalButtons].forEach((button) => {
    button.addEventListener("click", () => {
      const dialogs = [
        ...(document.getElementsByTagName(
          "dialog"
        ) as HTMLCollectionOf<HTMLDialogElement>),
      ];
      dialogs.forEach((dialog) => {
        dialog.close();
        document.body.style.overflow = "auto";
      });
    });
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
