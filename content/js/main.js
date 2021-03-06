/**
* Template Name: Gp - v2.0.0
* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 90;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });




 

  // Porfolio isotope and filter
  $(window).on('load', function() {
 
    // // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
 
    });
  });

 

// setTimeout(() => {
//   // $('.main-carousel-people').flickity({
//   //   // options
//   //   cellAlign: 'left',
//   //   autoPlay: true,
//   //   contain: true,
//   //   pageDots: true,
//   //   prevNextButtons:true
//   // });
//   $('.slick.marquee.main-carousel-people').slick({
//     // speed: 5000,
//     dots: true,
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed:1500,
//     pauseOnHover:true,
//     // centerMode: true,
//     // centerPadding: '30px',
//     prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
//     nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',

//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 1,
//           dots: true,
//           centerMode: false
//         }
//       },
//       {
//         breakpoint: 1008,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           dots: true,
//           centerMode: false
//         }
//       },
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           dots: false,
//           centerMode: true,
//           centerPadding: '50px',
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: false,
//           centerMode: true,
//           cssEase: 'linear',
//           variableWidth: true,
//         }
//       } 

//     ]

//     // 
//     // autoplaySpeed: 200,
//     // centerMode: true,
//     // cssEase: 'linear',
//     // slidesToShow: 3,
//     // slidesToScroll: 1,
//     // variableWidth: true,
//     // infinite: true,
    
//     // 
//     // 
     
//   });
// }, 2500);


})(jQuery);

function Random(){
  var randm = parseInt(Math.random()*10000000);
  return randm;
}

app.controller('baseCtrl', function($scope,$http) {
 
   $scope.screenwidth = screen.width ;
   $scope.isPeopleLoad = false;
  //===============Events===================
  $http({
      method: 'GET',
      url: 'content/json/announcementEvents.json?v='+Random()
  }).then(function (response){
    $scope.EventsInfo = response.data;
  },function (error){  console.log(error)});

 
 //===============News===================
  $http({
    method: 'GET',
    url: 'content/json/announcementNews.json?v='+Random()
}).then(function (response){
  $scope.NewsInfo = response.data;
},function (error){  console.log(error)});


 //===============Announcements===================
$http({
  method: 'GET',
  url: 'content/json/announcements.json?v='+Random()
}).then(function (response){
$scope.AnnouncementsInfo = response.data;
},function (error){  console.log(error)});



 //===============People===================
 $http({
  method: 'GET',
  url: 'content/json/people.json?v='+Random()
}).then(function (response){
    var data = response.data;
    var keys = [];
    for(var k in data) keys.push(k);
    //console.log(keys);
    $scope.PeopleInfo = data;
    $scope.PeopleAllKeysInfo = keys;
    $scope.isPeopleLoad = true;
},function (error){  console.log(error)});






});


// arr.forEach((row, index)=>{
//   var dataas = row.split("\n");
//    var textdata =` {
//     "Name":"${dataas[0]}",
//     "Degree_Position":"${dataas[1]}",
//     "Year":"${dataas[2]}",
//     "Status":"",
//     "Institute":"",
//     "Email":"${dataas[3]}",
//     "Image":"content/images/people/test.jpg",
//     "External_Link":""
// },`
//  console.log(textdata)
// })

 



