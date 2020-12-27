'use strict';

(function () {
  const SCROLL_STEP = 30;
  var buttonTop = document.getElementById('top');

  buttonTop.addEventListener('click', function () {
    var scrollToTop = window.setInterval(function() {
      var positionY = window.pageYOffset;
      if (positionY > 0) {
          window.scrollTo(0, positionY - SCROLL_STEP);
      } else {
          window.clearInterval(scrollToTop);
      }
    }, 16);
  });
})();
