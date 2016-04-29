function heightDetect(){
	$("#header").css("height", $(window).height()); 
	};

	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

	/*------------PARALAX------------*/
	$('#header').parallax({
		imageSrc: '../img/header_bg_1.jpg',
		zIndex: '-1'
	});

	$('.first').parallax({
		imageSrc: '../img/project_1.jpg',
		zIndex: '-1'
	});

	$('.second').parallax({
		imageSrc: '../img/project_2.jpg',
		zIndex: '-1'
	});

	$('.third').parallax({
		imageSrc: '../img/project_3.jpg',
		zIndex: '-1'
	});

	$('.fourth').parallax({
		imageSrc: '../img/project_4.jpg',
		zIndex: '-1'
	});
/*------------ menu fixing ------------*/
$(window).scroll(function () {
	var menu = $(window).height() - 50,
			styles = {
				'position': 'fixed',
				'top': '0px',
				'background-color': 'rgba(3, 3, 3, 0.6)'
			},
			clear = {
				'position': 'absolute',
				'top': '-100px',
				'background-color': 'transparent'
			}
	if ($(window).scrollTop() > menu){
		$('nav').css(styles);
	} else {
		$('nav').css(clear);
	}

});
			
