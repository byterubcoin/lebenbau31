$(document).ready(function() {    
    function sliderSerts() {
      $('.CardProduct_SertsSlider').slick({
            centerMode: true,
            infinite: true,
           // variableWidth: true,
           // autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 5,
            lazyLoad: 'progressive',
            responsive: [
            {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
                }
            ]
        });
    }

    setTimeout(sliderSerts, 7000);
});

