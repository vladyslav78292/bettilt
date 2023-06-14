'use strict';
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    menu.classList.toggle('menu-open');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      select.classList.remove('select-clicked');
      menu.classList.remove('menu-open');
    });
  });
});

$(document).ready(function(){
  $(".SlickCarousel").slick({
    rtl:false,
    autoplay:true, 
    autoplaySpeed: 4000,
    speed: 700,
    slidesToShow:5,
    slidesToScroll:1,
    pauseOnHover:true,
    appendArrows:$(".Container .Head .Arrows"),
    prevArrow:'<span class="Slick-Prev"></span>',
    nextArrow:'<span class="Slick-Next"></span>',
    easing:"linear",
    responsive:[
      {breakpoint:1201,settings:{
        slidesToShow:3,
      }},
      {breakpoint:721,settings:{
        slidesToShow:2,
      }},
    ],
  })
})

$(document).ready(function(){
  $(".MainSliderCarousel").slick({
    rtl:false,
    autoplay:true,
    autoplaySpeed: 4500,
    speed: 500,
    dots: true,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:true,
    appendArrows:$(".SliderArrows"),
    prevArrow:'<span class="Slider-Slick-Prev"></span>',
    nextArrow:'<span class="Slider-Slick-Next"></span>',
    easing:"linear",
  })
})