/* eslint-disable */
// El movimiento del hero de la home: lo que quedó del landing original.
//
// De aquel archivo sobrevive SOLO lo que el hero usa — la intro de palabras
// enmascaradas, el pop del chip y la píldora, su flotación, el hover elástico
// y el fade al scrollear. El resto (header, esferas, features, contador) se
// fue con las secciones del template.
//
// Queda en .js y no en .ts porque referencia los globals que inyectan las
// librerías de CDN (gsap, ScrollTrigger); lo dispara HomeScripts.tsx cuando
// terminaron de cargar.
export default function run() {
  // Sin ganas de movimiento no se corre nada: como los estados iniciales los
  // pone GSAP (no el CSS), saltearse esto deja el hero completo y quieto.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const inlineImg = document.getElementById("inlineImg");
  const ideaPill = document.getElementById("ideaPill");
  if (!inlineImg || !ideaPill) return;

  gsap.registerPlugin(ScrollTrigger);

  // Initial states
  gsap.set(".headline .word > span", { y: "105%" });
  gsap.set("#inlineImg, #ideaPill", { scale: 0 });
  gsap.set(".monax-cta", { opacity: 0, y: 24 });

  // ============================================================
  // INTRO TIMELINE
  // ============================================================
  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
  intro
      .to(".line-1 .word > span", { y: "0%", duration: 0.9, stagger: 0.1 }, 0.2)
      .to(".line-2 .word > span", { y: "0%", duration: 0.9 }, 0.45)
      .to("#inlineImg", { scale: 1, duration: 0.9, ease: "back.out(1.6)" }, 0.4)
      .to("#ideaPill", { scale: 1, duration: 0.9, ease: "back.out(1.6)" }, 0.6)
      .to(".line-3 .word > span", { y: "0%", duration: 0.9, stagger: 0.1 }, 0.65)
      .to(".monax-cta", { opacity: 1, y: 0, duration: 0.8 }, 1.05);

  // ============================================================
  // CONTINUOUS: inline img + idea pill bob
  // ============================================================
  gsap.to("#inlineImg", {
      y: "+=6",
      rotation: 2,
      duration: 2.8,
      delay: 1.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
  });
  gsap.to("#ideaPill", {
      y: "+=5",
      rotation: -1.5,
      duration: 3.2,
      delay: 2.0,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
  });

  // ============================================================
  // HOVER ELÁSTICO
  // ============================================================
  inlineImg.addEventListener("mouseenter", (e) => {
      gsap.to(e.target, {
          scale: 1.08,
          rotation: 4,
          duration: 0.4,
          ease: "back.out(1.6)"
      });
  });
  inlineImg.addEventListener("mouseleave", (e) => {
      gsap.to(e.target, {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.6)"
      });
  });
  ideaPill.addEventListener("mouseenter", (e) => {
      gsap.to(e.currentTarget, {
          scale: 1.06,
          rotation: -3,
          duration: 0.4,
          ease: "back.out(1.6)"
      });
      gsap.to(e.currentTarget.querySelector(".leaf"), {
          rotation: 360,
          duration: 0.8,
          ease: "power2.inOut"
      });
  });
  ideaPill.addEventListener("mouseleave", (e) => {
      gsap.to(e.currentTarget, {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.6)"
      });
  });

  // ============================================================
  // SCROLL: el headline se corre y apaga suave al scrollear
  // ============================================================
  ScrollTrigger.create({
      trigger: ".monax",
      start: "top top",
      end: "bottom top",
      scrub: 0.8,
      onUpdate: (self) => {
          const p = self.progress;
          gsap.set(".headline", { y: -50 * p, opacity: 1 - p * 0.4 });
      }
  });
}
