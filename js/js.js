var popup = document.querySelector(".popup");
var popupOpen = document.querySelector(".adress__button");
var popupClose = popup.querySelector(".write-us__close");
var sliderToggler = document.querySelector(".slider-controls-group");
var firstSlide = document.querySelector(".slider__item-1");
var secondSlide = document.querySelector(".slider__item-2");
var thirdSlide = document.querySelector(".slider__item-3");

popupOpen.addEventListener ("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
});

popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-show");
});

sliderToggler.addEventListener("click", function () {
    if (document.slider.slider__controls[0].checked) {
        firstSlide.classList.add("slider-show");
        secondSlide.classList.remove("slider-show");
        thirdSlide.classList.remove("slider-show");
    } else if (document.slider.slider__controls[1].checked) {
        secondSlide.classList.add("slider-show");
        firstSlide.classList.remove("slider-show");
        thirdSlide.classList.remove("slider-show");
    } else if (document.slider.slider__controls[2].checked) {
        thirdSlide.classList.add("slider-show");
        firstSlide.classList.remove("slider-show");
        secondSlide.classList.remove("slider-show");
    }
})
