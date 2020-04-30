$(function(){
   //back to top
   $(".back-to-top").click(function(){
    $('html,body').animate({scrollTop:'0'},2000);
 });
 $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
     if(scrolling >100){
         $(".back-to-top").fadeIn(500);
     }
     else{
         $(".back-to-top").fadeOut(500);
     }
     //sticky menu
     if(scrolling > 50){
         $(".navbar").addClass("head-bg");
     }
     else{
         $(".navbar").removeClass("head-bg");
     }
 }); 
 //animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 30
            }, 2000);
            return false;
        }
    }
}); 
//preloader js
$(window).load(function(){
  $(".preloader").delay(1500).fadeOut(500);
});
    //banner slider
  $('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
      arrows:false,
      fade:true,
      speed:2500,
});
	//team slider
$('.member-slide').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
    arrows:false,
    speed:2500,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          
        } 
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          
        } 
      },
      
      
    ]
});		
    //testimonial slider
$('.test-slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
    arrows:false,
    dots:true,
    
});	   
  // wow js
  new WOW().init();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});