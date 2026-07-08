

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
 $('.menu').addClass('black');
}
else {
 $('.menu').removeClass('black');
}
})