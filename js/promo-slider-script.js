var bgcolor = document.querySelector(".index-body");
var wrapperPromo = document.querySelector(".promo-slider-wrapper");
var slidesPromo = wrapperPromo.querySelectorAll(".promo-slides");

var radioList = document.createElement("ul");
radioList.classList.add("radio-in-slider-list");
wrapperPromo.appendChild(radioList);
var radioElement = [];
var radioButton = [];
for (var i = 0; i < slidesPromo.length; i++) {
	radioElement[i] = document.createElement("li");
	radioElement[i].classList.add("radio-in-slider-item");
	radioList.appendChild(radioElement[i]);
	radioButton[i] = document.createElement("button")
	radioElement[i].appendChild(radioButton[i]);
}

var radioButtonList = wrapperPromo.querySelectorAll(".radio-in-slider-item button");

radioButtonList[0].classList.add("current-radio-slider-btn");

var findCurrentSlideAndButtonPromo = function () {
	var currentSlide = 0;
	for (var i = 0; i < slidesPromo.length; i++) {
		if (slidesPromo[i].classList.contains("show-promo-slide")) {
			currentSlide = i;
		}
	}
	return currentSlide;
}

var changeSlidePromo = function (btn, slide, bg) {
	btn.addEventListener("click", function (evt) {
		evt.preventDefault();
		var currentSlideAndButtonPromo = findCurrentSlideAndButtonPromo();
		var bgColorCounterBefore = "body-slider-color-" + currentSlideAndButtonPromo;
		var bgColorCounterNow = "body-slider-color-" + bg;

		radioButtonList[currentSlideAndButtonPromo].classList.remove("current-radio-slider-btn");
		slidesPromo[currentSlideAndButtonPromo].classList.remove("show-promo-slide");
		bgcolor.classList.remove(bgColorCounterBefore);

		slide.classList.add("show-promo-slide");
		btn.classList.add("current-radio-slider-btn");
		bgcolor.classList.add(bgColorCounterNow);
	})
}

for (var i = 0; i < slidesPromo.length; i++) {
	changeSlidePromo(radioButtonList[i], slidesPromo[i], i);
}