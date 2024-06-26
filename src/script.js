// navbar-fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.add("flex");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

// hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik di luar hamburger menu

window.addEventListener("click", function (e) {
  if (!e.target.matches("#hamburger")) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// mode toggle

const modeToggle = document.querySelector("#mode-toggle");
const html = document.querySelector("html");

modeToggle.addEventListener("click", function () {
  if (modeToggle.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});
