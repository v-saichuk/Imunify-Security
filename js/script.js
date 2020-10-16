// menu link
$(function() {
    $("#open-menu").on('click', function() {
        $(".header__mob-menu-block").toggle();
    });
    $("#close-menu").on('click', function(){
        $(".header__mob-menu-block").toggle();
    })
  });

// compani slider
if ($(window).width() <= 600) { 
    $('.compani__slider--script').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'.compani-slider__control-left',
        nextArrow:'.compani-slider__control-right',
      });
 } else{
    $('.compani__slider--script').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'.compani-slider__control-left',
        nextArrow:'.compani-slider__control-right',
      });
 }

//   cybersecurity nav
$(function() {
    $("#cybersecurity-1").on('click', function() {
        $("#cybersecurity-1").removeClass("cybersecurity__nav-link--disabled");
        $("#cybersecurity-2").addClass("cybersecurity__nav-link--disabled");
        $("#cybersecurity-3").addClass("cybersecurity__nav-link--disabled");

        $("#cybersecurity__slider-block-1").removeClass("cybersecurity__slider-block--hidden");
        $("#cybersecurity__slider-block-2").addClass("cybersecurity__slider-block--hidden");
        $("#cybersecurity__slider-block-3").addClass("cybersecurity__slider-block--hidden");
    });

    $("#cybersecurity-2").on('click', function() {
        $("#cybersecurity-1").addClass("cybersecurity__nav-link--disabled");
        $("#cybersecurity-2").removeClass("cybersecurity__nav-link--disabled");
        $("#cybersecurity-3").addClass("cybersecurity__nav-link--disabled");

        $("#cybersecurity__slider-block-1").addClass("cybersecurity__slider-block--hidden");
        $("#cybersecurity__slider-block-2").removeClass("cybersecurity__slider-block--hidden");
        $("#cybersecurity__slider-block-3").addClass("cybersecurity__slider-block--hidden");
    });

    $("#cybersecurity-3").on('click', function() {
        $("#cybersecurity-1").addClass("cybersecurity__nav-link--disabled");
        $("#cybersecurity-2").addClass("cybersecurity__nav-link--disabled");
        $("#cybersecurity-3").removeClass("cybersecurity__nav-link--disabled");

        $("#cybersecurity__slider-block-1").addClass("cybersecurity__slider-block--hidden");
        $("#cybersecurity__slider-block-2").addClass("cybersecurity__slider-block--hidden");
        $("#cybersecurity__slider-block-3").removeClass("cybersecurity__slider-block--hidden");
    });
  });
