$(function(){
	slideProjeto();
	function slideProjeto(){
		$('.slide-wraper').slick({
			infinite:true,
			centerMode:true,
			slidesToShow:4,
			arrows:false,
                  autoplay:true,
                  autoplaySpeed:1000,
			responsive:[


            {
            	breakpoint:768,
            	 settings:{
            		slidesToShow:3,
            		centerMode:false,
            		arrows:false,
            		infinite:true,

            	}
            },
            {
            	breakpoint:500,
            	settings:{
            		slidesToShow:1,
            		centerMode:true,
            		arrows:false,
            		infinite:true

            	}
            }

			]
		});
	}
})