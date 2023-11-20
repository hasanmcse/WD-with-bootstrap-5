$(document).ready(function($){



	//hero slider
	$('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:1,
    smartSpeed:1000,
    dots:false,
    navText:['Prev','Next'],
    responsive:{
        0:{
            
        },
        600:{
            
        },
        1000:{
            
        }
    }
});

//project slider
    $('#projects-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    smartSpeed:1000,
    dots:false,
    margin:18,
   responsive:{
        0:{
            
        },
        600:{
            
        },
        1000:{
            
        }
    }
})
    

});