$(document).ready(function() {
    
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
        slidesToScroll: 1
      });
      $('.slider-news').slick({
        infinite: true,
        arrows: true,
        // autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1
      });
	
});