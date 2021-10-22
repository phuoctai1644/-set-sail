var splide = new Splide('.splide', {
  type: 'loop',
  autoplay: true,
  classes: {
  // pagination: 'splide__pagination feedback__pagination',
    // page: 'splide__pagination__page feedback__pagination',
  },
});

var splide2 = new Splide('.splide2', {
  type: 'loop',
  autoplay: true,
  perPage: 4,
  gap: '24px'
})

var splide3 = new Splide('.splide3', {
  type: 'loop',
  autoplay: true,
})

splide.mount();
splide2.mount();
splide3.mount();