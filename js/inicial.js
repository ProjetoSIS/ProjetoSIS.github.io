//fixar header

$(window).scroll(function(){

if ($(this).scrollTop() > 440){
$('.header-lista').addClass('fixed');}       //fixed

else{
$('.header-lista').removeClass('fixed');}       //scroll
});
