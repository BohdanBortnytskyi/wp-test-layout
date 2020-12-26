var userLink = document.querySelector(".page-header__avatar");
var loginPopup = document.querySelector(".popup--login");
console.log(loginPopup);
if (loginPopup) {
  var popupClose = loginPopup.querySelector(".popup__button-close");

  userLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.add("popup-show");
  });

  popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.remove("popup-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (loginPopup.classList.contains("popup-show")) {
        evt.preventDefault();
        loginPopup.classList.remove("popup-show");
      }
    }
  });
}
