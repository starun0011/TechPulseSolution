const mobile_nav = document.querySelector(".mob-nav-icon");
const mobile_nav2 = document.querySelector(".nav-elements");
const nav_header = document.querySelector(".navigation");
const toggleNavbar = () => {
  nav_header.classList.toggle("mob-active");

};
mobile_nav.addEventListener("click", () => toggleNavbar());
mobile_nav2.addEventListener("click", () => toggleNavbar());


//  GSAP ANIMATION SECTION

var tl = gsap.timeline();

tl.from(".nav-logo", {
  y: -100,
  opacity: 0,
  duration: 0.5
});

tl.from(".home-heading, .home-para", {
  x: -190,
  opacity: 0,
  duration: 0.7,
  stagger: 0.6,
})
tl.from(".home-btn", {
  y: 50,
  opacity: 0,
  stagger: 0.3
})
gsap.from(".home-img", {
  opacity: 0,
  scale: 0,
  y: 100,
  duration: 1,
  delay: 1.5,
})


