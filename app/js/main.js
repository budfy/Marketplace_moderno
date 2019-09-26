$(function(){

  if ($('.products__inner-box').length) {
    var mixer = mixitup('.products__inner-box');
  } else {
  
  }
  
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    ratedFill: "#ffa726",
    readOnly: true,
    spacing: "3px",
  });

  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  $(".js-range-slider").ionRangeSlider({
  type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });

});