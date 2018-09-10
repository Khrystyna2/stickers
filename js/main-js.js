$(document).ready(function() {

  if ($(window).width() > 1024) {
    $('.menu-dropdown').hover(function () {
      $(this).find('.wrapper-sub-menu').stop(true, true).fadeIn(200);
    }, function () {
      $('.wrapper-sub-menu').fadeOut(200);
    });
  }
  if ($(window).width() <= 1024) {
    $('.menu-dropdown').click(function () {
      $(this).find('.wrapper-sub-menu').slideToggle(400);
    });
  }

    // $('.menu-dropdown').click(function () {
    //   $(this).find('.wrapper-sub-menu').slideToggle(400);
    // });


    
    $('.top-slider').slick({
        infinite: true,
        // autoplay: true,
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
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
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
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });

      $('.slider-goods-mob').slick({
        infinite: true,
        arrows: true,
        // autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
  
      

      $('.filter-categories').click(function() {
        $(this).toggleClass('open');
        $(this).find('.filter-categories__items').slideToggle(500);
      });


      //menu mob
      $('.menu-btn').on('click', function() {
        $(this).toggleClass('menu-btn_active');
        $('.menu').slideToggle(600);

      });


     

      if ($(window).width() >= 1024) {
        $('.wrap-card-good').hover(function (event) {
          $(this).find('.cards-good-hide-block').stop(true, true).slideDown();
        }, function () {
          $(this).find('.cards-good-hide-block').slideUp();
        });
      }

      $('.btn-filter').click(function() {
        $('.filter').slideToggle(500);
      });





      //slider-card-good
      // $('.slider-card').slick({
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   arrows: false,
      //   fade: true,
      //   asNavFor: '.slider-card-nav'
      // });
      // $('.slider-card-nav').slick({
      //   slidesToShow: 9,
      //   slidesToScroll: 9,
      //   asNavFor: '.slider-card',
      //   dots: false,
      //   // centerMode: true,
      //   focusOnSelect: true
      // });


      $('.slider-card').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        speed: 400
      });
     
      $('.slider-card-nav')
        .on('init', function(event, slick) {
        })
        .slick({
          slidesToShow: 9,
          slidesToScroll: 9,
          dots: false,
          focusOnSelect: false,
          infinite: false,
          responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 7
              }
            },
            {
              breakpoint: 560,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4
              }
            }
          ]
        });

      $('.slider-card').on('afterChange', function(event, slick, currentSlide) {
        $('.slider-card-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-card-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
      });
     
      $('.slider-card-nav').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');
     
        $('.slider-card').slick('slickGoTo', goToSingleSlide);
      });


      $('.slider-blog').slick({
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
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });

});