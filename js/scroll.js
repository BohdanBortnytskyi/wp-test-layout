'use strict';

(function () {
  // Scroll down to the advantages
  var btnLearnMore = document.querySelector('.page-header-buttons__learn-more');

  btnLearnMore.addEventListener('click', function () {
    var scrollToBlock = document.querySelector(".advantages");
    scrollToBlock.scrollIntoView({ behavior: 'smooth', block: 'start'});
  });

  // Scroll to top
  var buttonTop = document.getElementById('top');

  buttonTop.addEventListener('click', function () {
    var scrollToBlock = document.querySelector(".page-header");
    scrollToBlock.scrollIntoView({ behavior: 'smooth', block: 'start'});
  });
})();
