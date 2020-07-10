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
    $('#slideIn').each(function () {
      var slideTop = $('#slideIn').offset().top;

      if (windowHeight + scrollPos >= slideTop) {
        $('#slideIn').addClass('animate__fadeInDown');
      }
    });
    $('#slidedown').each(function () {
      var slideTop = $('#slidedown').offset().top;

      if (windowHeight + scrollPos >= slideTop) {
        $('#slidedown').addClass('animate__fadeInDown');
      }
    });
    $('#slidedown2').each(function () {
      var slideTop = $('#slidedown2').offset().top;

      if (windowHeight + scrollPos >= slideTop) {
        $('#slidedown2').addClass('animate__fadeInDown');
      }
    });
    $('#slideup').each(function () {
      var slideTop = $('#slideup').offset().top;

      if (windowHeight + scrollPos >= slideTop) {
        $('#slideup').addClass('animate__fadeInUp');
      }
    });
  });
});
"use strict";

(function () {
  'use strict';

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation'); // Loop over them and prevent submission

    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
//# sourceMappingURL=all.js.map
