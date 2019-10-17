$(function(){

  if ($('.products__inner-box').length) {
    var mixer = mixitup('.products__inner-box');
  } 
  else 
  {
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

  $('.icon-th-list').on('click', function(){
    $('.product-page__items>.product__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active');
  });
  
  $('.icon-th-large').on('click', function(){
    $('.product-page__items>.product__item').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});

$('.scrollup').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

$('.menu__icon').on('click', function() {
  $('.menu__list').toggleClass('active');
  $('.menu').toggleClass('drop__menu')
  $('.menu, .adaptive__userbar, .adaptive__userbar-inner>.adaptive__drop-down, .adaptive__userbar-inner').removeClass('active');
});

$('.adaptive__userbar-btn').on('click', function() {
$('.adaptive__userbar, .adaptive__userbar-inner').toggleClass('active');
$('.menu__list, .menu, .adaptive__userbar-inner.adaptive__drop-down').removeClass('active');
$('.menu').removeClass('drop__menu')
});

$('.adaptive__userbar-inner>.user__box').on('click', function() {
$('.adaptive__userbar-inner>.adaptive__drop-down').toggleClass('active');
$('.menu').toggleClass('active');

});

$('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
  var id = $(this).attr('data-id');
    $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
  });

  $('.header__btn-login').magnificPopup({
    type:'inline',
    midClick: true,
    closeBtnInside: true
  });

  $('input[type="file"], select').styler();

});