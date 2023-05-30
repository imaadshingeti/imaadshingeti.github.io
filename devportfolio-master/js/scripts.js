/*!
    
*/

// (function($) {

//     // Show current year
//     $("#current-year").text(new Date().getFullYear());

//     // Remove no-js class
//     $('html').removeClass('no-js');

//     // Animate to section when nav is clicked
//     $('header a').click(function(e) {

//         // Treat as normal link if no-scroll class
//         if ($(this).hasClass('no-scroll')) return;

//         e.preventDefault();
//         var heading = $(this).attr('href');
//         var scrollDistance = $(heading).offset().top;

//         $('html, body').animate({
//             scrollTop: scrollDistance + 'px'
//         }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

//         // Hide the menu once clicked if mobile
//         if ($('header').hasClass('active')) {
//             $('header, body').removeClass('active');
//         }
//     });

//     // Scroll to top
//     $('#to-top').click(function() {
//         $('html, body').animate({
//             scrollTop: 0
//         }, 500);
//     });

//     // Scroll to first element
//     $('#lead-down span').click(function() {
//         var scrollDistance = $('#lead').next().offset().top;
//         $('html, body').animate({
//             scrollTop: scrollDistance + 'px'
//         }, 500);
//     });

//     // Create timeline
//     $('#experience-timeline').each(function() {

//         $this = $(this); // Store reference to this
//         $userContent = $this.children('div'); // user content

//         // Create each timeline block
//         $userContent.each(function() {
//             $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
//         });

//         // Add icons to each block
//         $this.find('.vtimeline-point').each(function() {
//             $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
//         });

//         // Add dates to the timeline if exists
//         $this.find('.vtimeline-content').each(function() {
//             var date = $(this).data('date');
//             if (date) { // Prepend if exists
//                 $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
//             }
//         });

//     });

//     // Open mobile menu
//     $('#mobile-menu-open').click(function() {
//         $('header, body').addClass('active');
//     });

//     // Close mobile menu
//     $('#mobile-menu-close').click(function() {
//         $('header, body').removeClass('active');
//     });

//     // Load additional projects
//     $('#view-more-projects').click(function(e){
//         e.preventDefault();
//         $(this).fadeOut(300, function() {
//             $('#more-projects').fadeIn(300);
//         });
//     });

// })(jQuery);

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     // navText: ["<span>Next</span>","<span>Prev</span>"],
    
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })

// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c == "all") c = "";
//   // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// // Show filtered elements
// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }

// // Hide elements that are not selected
// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current control button (highlight it)
// var btnContainer = document.getElementById("mybtn");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    });
  });