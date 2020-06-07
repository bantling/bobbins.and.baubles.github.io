
/*====================================================
                        
====================================================*/
$(document).ready(function() {
    
    'use strict';
   
    new WOW().init();
    
});


/*====================================================
                        NAVIGATION
====================================================*/


// Smooth scrolling
$(".navbar a").click(function(){
	$("body,html").animate({
		scrollTop:$("#" + $(this).data('value')).offset().top
	},1000)
})

// Close mobile menu on click

$(function(){
    
    $(".navbar-collapse ul li a").on("click touch", function(){
       
        $(".navbar-toggler").click();
    });
});


// Show/Hide transparent black navigation
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("top-nav");
            $("#back-to-top").fadeOut();

        } else {
            // show nav
            $("nav").addClass("top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});



// highlight menu item on scroll
$(document).ready(function() {
    
    'use strict';
    
    $(window).scroll( function() {
        
        'use strict';
        
        $("section").each(function()  {
            
            'use strict';
            
            var bb = $(this).attr("id");  // ABOUT, 
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
             
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
           
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
                
            }
            
            
        });
    
    
    });
    
    
});


// Add bx slider to screens

$(document).ready(function() {
    
    $('.bxslider').bxSlider({
        
        slideWidth: 292.5,
        auto: true,
        minSlides: 1, 
        maxSlides: 3, 
        slideMargin: 50
    });
    
});



// back-to-top button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
