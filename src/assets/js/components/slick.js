var portfolio = $("#portfolio");

portfolio.slick({
    arrows: false,
    dots: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

$("#portfolio-arrow-prev").on("click", function(event) {
    event.preventDefault();

    portfolio.slick('slickPrev');
});

$("#portfolio-arrow-next").on("click", function(event) {
    event.preventDefault();

    portfolio.slick('slickNext');
});



var iztt = $("#iztt");

iztt.slick({
    arrows: false,
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,

});

$("#iztt-arrow-prev").on("click", function(event) {
    event.preventDefault();

    iztt.slick('slickPrev');
});

$("#iztt-arrow-next").on("click", function(event) {
    event.preventDefault();

    iztt.slick('slickNext');
});


