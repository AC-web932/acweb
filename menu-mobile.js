$(function(){


AbrirMenuMobile();
function AbrirMenuMobile(){
  $('.mobile').click(function(e){
  	e.stopPropagation()
  	 $('.mobile ul').slideToggle();
  })
}

FecharMenuMobile();
function FecharMenuMobile(){
	$('body').click(function(){
		$('.mobile ul').fadeOut();
	})

}


})