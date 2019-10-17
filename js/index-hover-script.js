var searchWrapper = document.querySelector(".search-form");
var loginWrapper = document.querySelector(".user-navigation-item:first-child");
var searchLabel = searchWrapper.querySelector(".search-form-label");
var popupSearch = searchWrapper.querySelector(".popup-search");
var searchInpt = searchWrapper.querySelector(".main-search");
var popupLogn = loginWrapper.querySelector(".popup-login");
var loginForm = popupLogn.querySelector(".login-form");
var loginLink = loginWrapper.querySelector(".login-link");
var loginEmail = loginWrapper.querySelector("[type=email]");
var loginPassword = loginWrapper.querySelector("[type=password]");

searchWrapper.addEventListener("mouseover", function () {
	popupLogn.classList.remove("show-popup-login");
	popupLogn.classList.remove("popup-login-error");
	popupSearch.classList.add("show-popup-search");
	searchInpt.focus();
})

searchWrapper.addEventListener("focus", function () {
	popupLogn.classList.remove("show-popup-login");
	popupLogn.classList.remove("popup-login-error");
	popupSearch.classList.add("show-popup-search");
})

loginLink.addEventListener("mouseover", function () {
	popupSearch.classList.remove("show-popup-search");
	popupLogn.classList.add("show-popup-login");
	loginEmail.focus();
})

loginLink.addEventListener("focus", function () {
	popupSearch.classList.remove("show-popup-search");
	popupLogn.classList.add("show-popup-login");
})

loginForm.addEventListener("submit", function (evt) {
	if (!loginEmail.value || !loginPassword.value) {
		evt.preventDefault();
		popupLogn.classList.remove("popup-login-error");
		popupLogn.offsetWidth = popupLogn.offsetWidth;
		popupLogn.classList.add("popup-login-error");
	}
})

document.body.addEventListener("click", function (event) {
	var tg = event.target;
	if (searchWrapper.contains(tg)) {
		return;
	} else if (loginWrapper.contains(tg)) {
		return;
	} else {
		popupSearch.classList.remove("show-popup-search");
		popupLogn.classList.remove("show-popup-login");
		popupLogn.classList.remove("popup-login-error");
	}
}, true)