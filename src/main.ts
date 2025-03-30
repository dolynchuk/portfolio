import * as THREE from 'three';
import { EffectComposer, RenderPass, RGBShiftShader, ShaderPass, } from 'three/examples/jsm/Addons.js';
import { loadPlayerModel } from './modelLoader';
import { gtag } from './analytics';

const elements = {
  canvas: document.getElementById("sceneCanvas") as HTMLCanvasElement | null,
  canvasContainerEl: document.getElementById("spline") as HTMLElement | null,
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

document.addEventListener("DOMContentLoaded", () => {
  if (!elements.canvasContainerEl || !elements.canvas) {
    console.error(".spline element not found");
    return;
  }
  const { width, height } = elements.canvasContainerEl.getBoundingClientRect();

  const renderer = new THREE.WebGLRenderer({ canvas: elements.canvas, alpha: true, antialias: false, preserveDrawingBuffer: true, });
  renderer.setSize(width, height);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(10, 8, -4);
  camera.lookAt(new THREE.Vector3(0,5.5, 0));

  const composer = new EffectComposer(renderer);
  composer.setSize(width, height);
  
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  renderer.setClearColor(0x000000, 0); 

  const animatePlayer = loadPlayerModel("/portfolio/player.gltf", scene);

  scene.background = null;

  const computerLight =  new THREE.DirectionalLight(0xffffff, 3);
  scene.add(
    computerLight
  )
  computerLight.position.set(0.01, -0.05, 0)
  computerLight.lookAt(-10, 0.1, -10);

  const light =   new THREE.SpotLight('white', 10, 100, Math.PI / 2, 0, 1);
  light.position.set(0, 15, 0);

  light.lookAt(0,0,0);
  scene.add(
   light
  )

  const ambientLight = new THREE.AmbientLight('white', 2);
  scene.add(ambientLight)

  const rgbShiftPass = new ShaderPass(RGBShiftShader);
  rgbShiftPass.uniforms['amount'].value = 0.004;
  composer.addPass(rgbShiftPass);

  elements.loaderText?.classList.add("hidden");

  elements.canvasContainerEl?.classList.add("splineLoaded");
  elements.loaderText?.classList.add("hidden");

  function resize() {
      requestAnimationFrame(() => {
        if (!elements.canvasContainerEl) {
          return;
        }
        const { width, height } = elements.canvasContainerEl?.getBoundingClientRect();
        renderer.setSize(width, height);
  
        const LOW_RES_SCALE = 0.25;
        renderer.setSize(width * LOW_RES_SCALE, height * LOW_RES_SCALE, false);
        renderer.domElement.style.imageRendering = "pixelated";
    
        composer.setSize(width, height); // Update composer size too
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      })
  }

  window.addEventListener("resize", resize);
  resize();

  function animate() {
    requestAnimationFrame(animate);

    animatePlayer();

    composer.render();
  }

  animate();
});

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
