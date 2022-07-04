 //on scroll change backfround color of navbar
 //
 let aboutoffset = $('#about').offset().top;
 let gallertOffset = $('#gallery').offset().top;
 $(window).scroll(function() {

         if ($(window).scrollTop() > aboutoffset) {
             $('.navbar').css({ 'backgroundColor': '#A8A076', 'transition': '1s' });
             // $('.navbar .nav-link').css('color', 'red');
             $('.navbar-brand').attr('src', 'images/bakery-color.png');

         } else {
             $('.navbar').css({ 'backgroundColor': 'transparent', 'transition': '1s' });
             $('.navbar-brand').attr('src', 'images/bakery-light-1.png');
         }

         if ($(window).scrollTop() > gallertOffset) {
             $('.scrollUp').fadeIn(1000);
         } else {
             $('.scrollUp').fadeOut(1000);
         }
     })
     // ********End of scroll function*********//


 //on click navbar links
 $('.nav-link').click(function() {
         let currentHref = $(this).attr('href');
         let currentOffset = $(currentHref).offset().top;
         $('body,html').animate({ scrollTop: currentOffset }, 1000)
     })
     //***********end navbar scroll to the section********** */


 // color setting 
 let colors = ['#C7844D', '#A47F61', ' #A4B8BF', '#F0E6BD'];
 for (let i = 0; i < colors.length; i++) {
     $('.colors-option li').eq(i).css('backgroundColor', colors[i])
 };
 $('.colors-option li').click(function() {
     let currentColor = $(this).css('backgroundColor');
     $('.changeColor').css('color', currentColor)
     $('p').css('color', currentColor)
     $('.navbar').css('backgroundColor', currentColor)
         // $('.nav-item .nav-link').css('color', currentColor)

 })

 $('.color-box i').click(function() {
         let boxWidth = $('.colors-option').outerWidth();
         if ($('.color-box').css('left') == '0px') {
             $('.color-box').animate({ 'left': -boxWidth }, 800)
         } else {
             $('.color-box').animate({ 'left': 0 }, 800)
         }
     })
     //**********************end color setting******************//

 //  scroll to up

 $('.scrollUp').click(function() {
     $('body,html').animate({ scrollTop: 0 }, 2000)
 })

 //  *********************end scroll to top*******************//

 //  loading page 
 $(document).ready(function() {
     $('#loading').fadeOut(1000, function() {
         $('body').css('overflow', 'visible')
     })
 })