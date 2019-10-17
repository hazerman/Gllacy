var writeUsWrapper = document.querySelector(".popup-write-us");
var writeUsBtn = document.querySelector(".write-us-btn");
var overlay = document.querySelector(".overlay");
var closeButton = writeUsWrapper.querySelector(".close-btn");
var form = writeUsWrapper.querySelector(".write-us-form");
var nameInpt = writeUsWrapper.querySelector(".write-us-form input:first-of-type");
var emailInpt = writeUsWrapper.querySelector(".write-us-form input:nth-of-type(2)");
var textInpt = writeUsWrapper.querySelector(".write-us-form textarea");

writeUsBtn.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeUsWrapper.classList.add("show-popup-write-us");
	overlay.classList.add("show-overlay");
	nameInpt.focus();
})

form.addEventListener("submit", function(evt) {
	if (!nameInpt.value || !emailInpt.value || !textInpt.value) {
		evt.preventDefault();
		writeUsWrapper.classList.remove("popup-error");
		writeUsWrapper.offsetWidth = writeUsWrapper.offsetWidth;
		writeUsWrapper.classList.add("popup-error");
	}
})

closeButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeUsWrapper.classList.remove("show-popup-write-us");
	overlay.classList.remove("show-overlay");
	writeUsWrapper.classList.remove("popup-error");
})

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (writeUsWrapper.classList.contains("show-popup-write-us")) {
			evt.preventDefault();
			writeUsWrapper.classList.remove("show-popup-write-us");
			overlay.classList.remove("show-overlay");
			writeUsWrapper.classList.remove("popup-error");
		}
	}
})

overlay.addEventListener("click", function () {
	writeUsWrapper.classList.remove("show-popup-write-us");
	overlay.classList.remove("show-overlay");
	writeUsWrapper.classList.remove("popup-error");
})