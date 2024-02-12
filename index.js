const mobile_nav = document.querySelector(".mob-nav-icon");
const mobile_nav2 = document.querySelector(".nav-elements");
const nav_header = document.querySelector(".navigation");
const toggleNavbar = () => {
  nav_header.classList.toggle("mob-active");
  // alert("hello");
};
mobile_nav.addEventListener("click", () => toggleNavbar());
mobile_nav2.addEventListener("click", () => toggleNavbar());
