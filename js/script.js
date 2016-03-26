$('document').ready(function(){
	console.log("page ready");

	$('#hamburger').click(function(){

		console.log("click");

		if( $('#nav_ul').css('display') === 'none'){
		$('#nav_ul').slideDown("100");
		} else {
		$('#nav_ul').slideUp("100", function(){
			$('#nav_ul').removeAttr("style");})
		}
	});

	$('.infinite-slider').unslider({
		infinite: true,
		autoplay: true,
		speed: 1000,
		delay: 5000


		});

});		






	

