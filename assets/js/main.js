
$('.clientslist').owlCarousel({
  loop: true,
  responsiveClass: true,
  autoplay: true,
  nav: false,
  dots: true,
  slideTransition: 'linear',
//   autoplaySpeed: 6000,
  smartSpeed: 6000,
  center: true,
  margin: 30,
  responsive: {
      0: {
          items: 2,
      },
      600: {
          items: 2,
      },
      1000: {
          items: 4,
      }
  }
});
$('.productslist').owlCarousel({
  loop: true,
  responsiveClass: true,
  autoplay: true,
  nav: false,
  responsive: {
      0: {
          items: 1,
      },
      600: {
          items: 2,
      },
      1000: {
          items: 3,
          margin: 10,
      }
  }
});