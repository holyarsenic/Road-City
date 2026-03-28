gsap.registerPlugin(ScrollTrigger);


const lenis = new Lenis(
  {
    duration: 1.4,
    smooth: true
  }
);
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



function navbar() {

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

  window.addEventListener("wheel", (dets) => {
    if (dets.deltaY > 0) {
      gsap.to("nav", {
        y: "-100%",
        ease: "power1.out",
        duration: 0.5
      })
    }
    else {
      gsap.to("nav", {
        y: "0%",
        ease: "power1.out",
        duration: 0.5
      })
    }
  });
};

navbar();

function scrollingEffect() {
  const marque = gsap
    .to(".scroll-effect", {
      xPercent: -100,
      ease: "none",
      repeat: -1,
      duration: 14,
    })
    .totalProgress(0.5);

  const arrow = gsap.to(".scroll img", {
    transform: 'rotateY(180deg)',
  });

  let scrollDown = true;
  window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0 && !scrollDown) {
      scrollDown = true;
      marque.play();
      arrow.play();
    } else if (e.deltaY < 0 && scrollDown) {
      scrollDown = false;
      marque.reverse();
      arrow.reverse();
    }
  });
}

scrollingEffect();


function respNavbar() {
  const ntg = document.querySelector('.resp-nav .ntg');
  const respnav = document.querySelector('.sec1 .resp-nav');
  const respMenu = document.querySelector('.resp-menu');

  let isOpen = false;

  respnav.addEventListener('click', () => {

    if (isOpen === false) {
      ntg.style.opacity = '0';
      respMenu.classList.toggle('open');
      gsap.to(".first", {
        rotation: 45,
        y: 7,
        duration: 0.3
      });
      gsap.to(".second", {
        rotation: -45,
        y: -7,
        duration: 0.3
      });

      isOpen = true;
    } else {
      ntg.style.opacity = '1';
      respMenu.classList.toggle('open');
      gsap.to(".first", {
        rotation: 0,
        y: 0,
        duration: 0.3
      });
      gsap.to(".second", {
        rotation: 0,
        y: 0,
        duration: 0.3
      });

      isOpen = false;
    }
  });
}
respNavbar();

function herosection() {

  gsap.to(".card1", {
    scale: 0.6,
    opacity: 0,
    y: 100,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".card1",
      start: "top 15%",
      end: "bottom 15%",
      scrub: true
    }
  });
  gsap.to(".card2", {
    scale: 0.6,
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".card2",
      start: "top 15%",
      end: "bottom 15%",
      scrub: true
    }
  });
  gsap.to(".card3", {
    scale: 0.6,
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".card3",
      start: "top 15%",
      end: "bottom 15%",
      scrub: true
    }
  });
  gsap.to(".card4", {
    scale: 0.6,
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".card4",
      start: "top 15%",
      end: "bottom 15%",
      scrub: true
    }
  });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".card5",
      start: "top 15%",
      end: "bottom 15%",
      scrub: true
    }
  });

  tl.to(".hero .hero-header", {
    opacity: 0
  })

    .to(".card5", {
      scale: 1.1
    })

    .to(".card5 img", {
      scale: 1.4
    }, 0);
}


herosection();


function horizontalScroll() {
  const track = document.querySelector('.sec2-track');
  const cards = document.querySelectorAll('.panel-card');
  const mainScroll = gsap.to(track, {
    x: () => -(track.scrollWidth - window.innerWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: '.sec2',
      start: 'top top',
      end: () => '+=' + track.scrollWidth,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true
    }
  });

  cards.forEach(card => {
    gsap.fromTo(card,
      { scale: 0.7 },
      {
        scale: 1,
        yoyo: true,
        repeat: 1,
        ease: 'none',
        border: '2px solid #ff8c00',
        scrollTrigger: {
          trigger: card,
          containerAnimation: mainScroll,
          start: 'left 80%',
          end: 'right 30%',
          scrub: true,
        }
      }
    )
  });
}


if (window.innerWidth > 900) {
  horizontalScroll();
};


const button = document.querySelector(".contact-bottom")

button.addEventListener("click", () => {
  const n = document.querySelector('.cont-num').value.trim();
  const e = document.querySelector('.cont-email').value.trim();
  if (!n || !e) return;
  document.querySelector('.contact-ok').classList.add('show');
  document.querySelector('.cont-num').value = '';
  document.querySelector('.cont-email').value = '';
  document.querySelector('.contact-ta').value = '';
}
);

function galleryButton() {

  const galleryView = document.querySelector(".gallery-view");
  const visitItems = document.querySelectorAll(".visit-item");
  const closeBtn = document.querySelector(".gallery-view button");
  const leftBtn = document.querySelector(".left-button");
  const rightBtn = document.querySelector(".right-button");
  const pictures = document.querySelectorAll(".picture1");

  let current = 0;

  gsap.set(pictures, {
    opacity: 0
  });


  visitItems.forEach((item, i) => {
    item.addEventListener("click", () => {
      current = i;
      galleryView.style.display = "flex";
      showPic(current);
    });
  });

  function showPic(index) {

    gsap.set(pictures, {
      opacity: 0,
      display: "none"
    });

    gsap.set(pictures[index], {
      display: "flex"
    });

    gsap.fromTo(pictures[index],
      {
        opacity: 0,
        scale: 0.9
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4
      }
    );
  }


  rightBtn.addEventListener("click", () => {
    gsap.to(pictures[current], {
      opacity: 0,
      x: -30,
      duration: 0.2,
      onComplete: () => {
        gsap.set(pictures[current], {
          display: "none",
          x: 0
        });

        current = (current + 1) % pictures.length;
        gsap.set(pictures[current], {
          display: "flex"
        });

        gsap.fromTo(pictures[current],
          {
            x: 30,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.3
          }
        );
      }
    });
  });


  leftBtn.addEventListener("click", () => {
    gsap.to(pictures[current], {
      opacity: 0,
      x: 30,
      duration: 0.2,
      onComplete: () => {
        gsap.set(pictures[current], {
          display: "none",
          x: 0
        });
        current = (current - 1 + pictures.length) % pictures.length;
        gsap.set(pictures[current], {
          display: "flex"
        });
        gsap.fromTo(pictures[current],
          {
            x: -30,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.3
          }
        );
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    gsap.to(galleryView, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        galleryView.style.display = "none";
        gsap.set(galleryView, {
          opacity: 1
        });
      }
    });
  });
}

galleryButton();