var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");
navMain.classList.add("main-nav--closed");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--opened")) {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
  } else {
    navMain.classList.add("main-nav--opened");
    navMain.classList.remove("main-nav--closed");
  }
});

navToggle.addEventListener("click", function() {
  if (navToggle.classList.contains("main-nav__toggle--closed")) {
    navToggle.classList.remove("main-nav__toggle--closed");
    navToggle.classList.add("main-nav__toggle--opened");
  } else {
    navToggle.classList.add("main-nav__toggle--closed");
    navToggle.classList.remove("main-nav__toggle--opened");
  }
});
