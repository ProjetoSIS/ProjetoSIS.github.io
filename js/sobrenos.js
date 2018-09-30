//fixar header

$(window).scroll(function(){

if ($(this).scrollTop() > 0){
$('.header').addClass('fixed');}       //fixed

else{
$('.header').removeClass('fixed');}       //scroll
});
