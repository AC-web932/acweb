$(function(){
    

	$('nav a').click(function(){

	var href = $(this).attr('href');
	var offset = $(href).offset().top;


		$('html,body').animate({
			scrollTop:offset,

		},1000)

	})
})