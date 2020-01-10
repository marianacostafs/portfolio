$(document).ready(function(){


	$('.hamburguesa').click(function(){
		$('section.menu').toggleClass('abrir-m')
	})

	$('.a-hamb').click(function(){
		$('section.menu').removeClass('abrir-m')
	})



	$(window).scroll(function(){
		var p = $(window).scrollTop()

		if (p >= 400){
			$('header').addClass('blanco');
			$('.hamburguesa').addClass('scroll');
			$('a.hamb div').addClass('morados')}
		else {
			$('header').removeClass('blanco');
			$('.hamburguesa').removeClass('scroll');
			$('.hamb').removeClass('morados')}
	})

})
