
// Change Logo

function changeLogo(){
	if ($(window).width() < 700) {
		$('.header_logo__image').attr('src', 'images/logo-mobile.png');
	} else{
		$('.header_logo__image').attr('src', 'images/logo.png');
	}
};

// Menu

function openMenu(){
	if ($(window).width() > 1040) {
		$('.header_nav').show();
	} else{
		$('.header_nav').hide();
	}
};

$(document).ready(function(){

	changeLogo();

	// Menu

	$('.open_menu').click(function(){
		$('.header_nav').css('display', 'flex');
		$(".header_nav").append("<a class='button button-close'>x</a>");
		$("body").addClass('body-overflow');
	});

	$(".header_nav").on('click', '.button-close',function(){
		
		$('.header_nav').hide();
		$(this).remove();
		$("body").removeClass('body-overflow');
	});
});


$(window).resize(function(){
	changeLogo();
	openMenu();
});
