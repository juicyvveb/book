import gsap from 'gsap';

export const appear = function (selector) {
  console.log(document.querySelector(selector))
  gsap.fromTo(selector, {
  // gsap.to(selector, {
    opacity: 0,
    x: 100,
    y: 100,
  }, {
    opacity: 1,
    x: 0,
    y: 0,
    ease:"elastic.out(1, 0.5)",
    duration: 1.5
  })
}