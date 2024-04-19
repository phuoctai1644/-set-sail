document.addEventListener('DOMContentLoaded', function() {
  const splide1 = document.querySelector('#splide1');
  const splide2 = document.querySelector('#splide2');
  const splide3 = document.querySelector('#splide3');
  
  new Splide(splide1, { type: 'loop', autoplay: true }).mount();
  new Splide(splide2, {
    type: 'loop',
    autoplay: true,
    perPage: 4,
    gap: '24px',
    classes: {
      arrows: 'splide__arrows d-none'
    }
  }).mount();
  new Splide(splide3, {
    type: 'loop',
    autoplay: true,
    classes: {
      pagination: 'splide__pagination feedback__pagination',
      prev: 'splide__arrow--prev feedback__arrow-prev',
      next: 'splide__arrow--next feedback__arrow-next'
    }
  }).mount();
} );
