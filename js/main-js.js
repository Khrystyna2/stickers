$(document).ready(function() {

  // if ($(window).width() > 1024) {
  //   $('.menu-dropdown').hover(function () {
  //     $(this).find('.wrapper-sub-menu').fadeIn(200);
  //   }, function () {
  //     $('.wrapper-sub-menu').fadeOut(200);
  //   });
  // }
  // if ($(window).width() <= 1024) {
  //   $('.top-menu').click(function () {
  //     $('.wrapper-sub-menu').slideToggle(500);
  //   });
  // }

    $('.menu-dropdown').click(function () {
      $(this).find('.wrapper-sub-menu').slideToggle(400);
    });


    
    $('.top-slider').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      });

      $('.slider-comments').slick({
        infinite: true,
        arrows: true,
        // autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      });
      $('.slider-news').slick({
        infinite: true,
        arrows: true,
        // autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      });
  
      

      $('.filter-categories').click(function() {
        $(this).toggleClass('open');
        $(this).find('.filter-categories__items').slideToggle(500);
      });
});