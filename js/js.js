var popup = document.querySelector(".popup");
var popupOpen = document.querySelector(".adress__button");
var popupClose = popup.querySelector(".write-us__close");

popupOpen.addEventListener ("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
});

popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-show");
});