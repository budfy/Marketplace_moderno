$(function(){


  var mixer = mixitup('.products__inner-box');

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

});