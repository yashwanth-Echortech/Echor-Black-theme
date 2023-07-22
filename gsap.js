gsap.registerPlugin(ScrollTrigger);

gsap.to(".c",{
  scrollTrigger: ".c",
  x:-500,
  duration:3,
  rotation:360,
});