gsap.from(".logo a img", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
});
gsap.from("#desktop-nav .nav-links li  ", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 0.3,
});
gsap.from(".section__text .title  ", {
  x: 50,
  opacity: 0,
  duration: 0.5,
  delay: 1.5,
});
gsap.from(".section__text__p2  ", {
  x: 50,
  opacity: 0,
  duration: 0.5,
  delay: 2,
});

gsap.from("#about .title  ", {
  x: 50,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#about .title ",
    scroller: "body",
    start: "top 50%",
  },
});


gsap.from("#experience .title  ", {
  x: 50,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#experience .title ",
    scroller: "body",
    start: "top 50%",
  },
});

gsap.from("#projects .title  ", {
  x: 50,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#projects .title ",
    scroller: "body",
    start: "top 50%",
  },
});


gsap.from("#contact .title  ", {
  x: 50,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#contact .title ",
    scroller: "body",
    start: "top 50%",
   
  },
});
gsap.from(".nav-links-container .nav-links li ", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".nav-links-container .nav-links li   ",
    scroller: "body",
    start: "top 80%",
  },
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
