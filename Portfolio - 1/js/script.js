

//responsive menu

$(document).ready(function() {
    $('.menu-icon').on('click', function() {
       $('nav ul').toggleClass('showing');
   });           
});

//largescreen menu


// $(window).on('scroll', function(){
// if($(window).scrollTop()) {
//  $('nav').addClass('black-1');
// }
// else {
//  $('nav').removeClass('black-1');
// }
// })

$(window).on('scroll', function(){
if($(window).scrollTop()) {
 $('.navbar').addClass('black');
}
else {
 $('.navbar').removeClass('black');
}
})

var $backToTop = $(".back-to-top");
$backToTop.hide();


$(window).on('scroll', function() {
  if ($(this).scrollTop() > 500) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 500);
});