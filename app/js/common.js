$(function() {

	//SVG Fallback
	/*if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
*/
/*$(window).scroll(function(){
  var scroll = $(this).scrollTop();

  $('.girl').css({
    "transform" : "translate(0%, " + scroll + "%"
  });
});*/

  $('.slide_container').slick({
  	arrows:true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	prevArrow:'<div class="prev"></div>',
  	nextArrow:'<div class="next"></div>'
  });
  $('.slider_container_2').slick({
  	arrows:true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	prevArrow:'<div class="prev2"></div>',
  	nextArrow:'<div class="next2"></div>'
  });
    
	 $(".about_factoring").waypoint(function() {
    $(".about_factoring .txt-center").each(function(index) {
      var ths = $(this);
      setInterval(function() {
     ths.addClass('animated slideInUp')
      }, 200*index);
    });

  },
  {
    offset : "550px"
  }); 
   $(".finance_conditions").waypoint(function() {
    $(".finance_conditions h2").addClass('animated fadeInDownBig visible')
 
 },{
  offset:'550px'
 });
   $(".white_sect").waypoint(function() {
    $(".white_sect h2").addClass('animated fadeInDownBig visible');
 
 },{
  offset:'550px'
 });
    $(".white_sect").waypoint(function() {
    $(".circle-small").each(function(index){
      var th = $(this);
        setInterval(function(){
          th.addClass('animated fadeInDownBig visible');
        }, 100 * index);
    });
 
 },{
  offset:'550px'
 });
    $(".white_sect").waypoint(function() {
    $(".white_sect h3, .white_sect p").each(function(index){
      var th = $(this);
        setInterval(function(){
          th.addClass('animated zoomIn visible');
        }, 100 * index);
    });
 
 },{
  offset:'500px'
 });
     $(".finance_conditions").waypoint(function() {
    $(".finance_conditions h3, .finance_conditions p").each(function(index){
      var th = $(this);
        setInterval(function(){
          th.addClass('animated zoomIn visible');
        }, 100 * index);
    });
 
 },{
  offset:'500px'
 });
    $(".partners").waypoint(function() {
    $(".partners h2").addClass('animated fadeInDownBig visible');
    $('.partners li').each(function(index){
        var th = $(this);
        setInterval(function(){
            th.addClass('animated rotateIn');
        }, 200* index);
    });
 },{
  offset:'550px'
 });
    $('.girl').waypoint(function(){
        $('.top, .bottom').addClass('animated slideInLeft');
    },{
      offset:'550px'
    });
    $('.just_text').waypoint(function(){
        $('.just_text p').addClass('animated zoomIn');
    },{
      offset:'550px'
    });
     $('.blur').waypoint(function(){
        $('.block_container').addClass('animated slideInRight visible');
    },{
      offset:'550px'
    });
     $('.second_slider').waypoint(function(){
        $('.second_slider h2').addClass('animated slideInDown visible');
    },{
      offset:'550px'
    });
     $('.about_factoring').waypoint(function(){
        $('.about_factoring h2').addClass('animated slideInDown visible');
    },{
      offset:'550px'
    });
   

$('.small_menu').click(function(){
  $('.men').slideToggle();
});




	
});


