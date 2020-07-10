"use strict";

$(document).ready(function () {
//   $('.scrollTop').click(function (e) {
//     e.preventDefault();
//     var target = $(this).attr('href');
//     var targetPos = $(target).offset().top;
//     $('html,body').animate({
//       scrollTop: targetPos - 55
//     }, 1000);
//   });
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
      $('#slideIn').each(function(){
          var slideTop = $('#slideIn').offset().top;
      if (windowHeight + scrollPos >= slideTop){
          $('#slideIn').addClass('animate__fadeInDown');
      }
    })
      $('#slidedown').each(function () {
          var slideTop = $('#slidedown').offset().top;
          if (windowHeight + scrollPos >= slideTop) {
              $('#slidedown').addClass('animate__fadeInDown');
          }
      })
      $('#slidedown2').each(function () {
          var slideTop = $('#slidedown2').offset().top;
          if (windowHeight + scrollPos >= slideTop) {
              $('#slidedown2').addClass('animate__fadeInDown');
          }
      })
      $('#slideup').each(function () {
          var slideTop = $('#slideup').offset().top;
          if (windowHeight + scrollPos >= slideTop) {
              $('#slideup').addClass('animate__fadeInUp');
          }
      })
  });
});
//# sourceMappingURL=all.js.map
