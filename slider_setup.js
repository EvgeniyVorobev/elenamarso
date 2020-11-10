$(document).ready(function(){
 $('.multiple-items').slick({
      infinite: true,
      dots: true,
      slidesToShow: 5,
      arrows:true,
      speed:1200,
      slidesToScroll: 5,
      centermode: true,
      nextArrow: $('#btnnext__slide_one'),
      prevArrow: $('#btnprev__slide_one'),
       responsive: [
    {
      breakpoint: 1557,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1171,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:false
      }
    },
    {
      breakpoint: 961,
      settings: {
      	dots:false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
       {
      breakpoint: 580,
      settings: {
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

    });

 $('.slider_two').slick({
     infinite: true,
      dots: true,
      slidesToShow: 5,
      arrows:true,
      speed:1200,
      slidesToScroll: 5,
      centermode: true,
      nextArrow: $('#btnnext__slide_two'),
      prevArrow: $('#btnprev__slide_two'),
       responsive: [
    {
      breakpoint: 1557,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1171,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:false
      }
    },
    {
      breakpoint: 961,
      settings: {
        dots:false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
       {
      breakpoint: 580,
      settings: {
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

    });

 });