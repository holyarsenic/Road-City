// Initialize Lenis
const lenis = new Lenis(
  {
    duration: 1.2,
    smooth: true
  }
);
// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



function navbar() {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".page4",
    start: "bottom center",

    onEnter: () => {
      document.querySelector("nav").classList.add("nav-white");
    },

    onLeaveBack: () => {
      document.querySelector("nav").classList.remove("nav-white");
    }
  });
};

navbar();


function scrollingEffect() {
  window.addEventListener("wheel", (dets) => {
    if (dets.deltaY > 0) {
      gsap.to(".scroll", {
        x: "+=1000",
        duration: 4,
        repeat: -1,
        ease: "none",
        overwrite: "auto"
      });
    } else {
      gsap.to(".scroll", {
        x: "-=1000",
        duration: 4,
        repeat: -1,
        ease: "none",
        overwrite: "auto"
      });
    }
  });
}

scrollingEffect();