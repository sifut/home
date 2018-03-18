$(document).ready(function(){
    var listCarousel = $('.carousel'); 
    listCarousel.each(function(){
        var $idCarousel = $(this)[0]['id'];
        var $item = $('#'+$idCarousel+' .item'); 
        var $numberofSlides = $item.length;
        var $currentSlide = Math.floor((Math.random() * $numberofSlides));
        $item.eq($currentSlide).addClass('active');
    });
});