
function changeLogo(){
	if ($(window).width() < 700) {
		$('.header_logo__image').attr('src', 'images/logo-mobile.png');
	} else{
		$('.header_logo__image').attr('src', 'images/logo.png');
	}
};

$(document).ready(function(){console.log('ff');changeLogo();});
$(window).resize(function(){console.log('ff');changeLogo();});

$(document).ready(function(){
	$('.open_menu').click(function(){
		$('.header_nav').css('display', 'flex');
		$(".header_nav").append("<a class='button button-close'>x</a>");
	});

	$(".header_nav").on('click', '.button-close',function(){
		console.log('gfdg');
		$('.header_nav').hide();
		$(this).remove();
	});
});
