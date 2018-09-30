//fixar header

$(window).scroll(function(){

if ($(this).scrollTop() > 400){
$('.header-lista').addClass('fixed');}       //fixed

else{
$('.header-lista').removeClass('fixed');}       //scroll
});
