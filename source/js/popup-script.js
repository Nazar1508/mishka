var link = document.querySelector(".knitted-baskets__button");
var popup = document.querySelector(".popup");
var popupBackground = document.querySelector(".popup-background");

link.addEventListener("click", function(e) {
  e.preventDefault(),
  popup.classList.add("popup--show"),
  popupBackground.classList.add("popup-background--show")
});

popupBackground.addEventListener("click", function(e) {
  popupBackground.classList.remove("popup-background--show"),
  popup.classList.remove("popup--show")
});

window.addEventListener("keydown", function(e) {
  27 === e.keyCode && popup.classList.contains("popup--show") && popup.classList.remove("popup--show"),
  27 === e.keyCode && popupBackground.classList.contains("popup-background--show") && popupBackground.classList.remove("popup-background--show")
});
