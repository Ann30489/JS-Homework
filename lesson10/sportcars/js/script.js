const swiper = new Swiper('.swiper', {
  speed: 600,
  spaceBetween: 25,
  slidesPerView: 1,
  effect: 'cube',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});