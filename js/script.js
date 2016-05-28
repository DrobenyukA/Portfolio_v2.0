function heightDetect(){
	$("#header").css("height", function(){
			var height = $(window).height()
			if (height < 500){
				return '500px';
			} else {
				return height;
			}
		}); 
	};

	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

	/*------------PARALAX------------*/
	$('#header').parallax({
		imageSrc: 'Portfolio_v2.0/img/header_bg_1.jpg',
		zIndex: '-1'
	});

	$('.first').parallax({
		imageSrc: 'Portfolio_v2.0/img/project_1.jpg',
		zIndex: '-1'
	});

	$('.second').parallax({
		imageSrc: 'Portfolio_v2.0/img/project_2.jpg',
		zIndex: '-1'
	});

	$('.third').parallax({
		imageSrc: 'Portfolio_v2.0/img/project_3.jpg',
		zIndex: '-1'
	});

	$('.fourth').parallax({
		imageSrc: 'Portfolio_v2.0/img/project_4.jpg',
		zIndex: '-1'
	});

/*------------ menu fixing ------------*/
$(window).scroll(function () {
	var menu = $(window).height() - 50;
			
	if ($(window).scrollTop() < menu){
		$('nav').removeClass('fixed');
	} else {
		$('nav').addClass('fixed');
	}

});

/*------------- slider -------------*/
function getSlideFirst(){
	/*hide second slider*/
	$('.slider_second .personal_descr').css({
		'height': '400px',
		'padding-top': '60px',
		'opacity': '0.6',
		'box-shadow': 'none'
	});
	$('.slider_second .personal_descr h3').css({
		'margin-top': '75px',
		'font-size': '22px'
	});
	$('.slider_second .personal_descr h4').css({
		'margin-top': '2px',
		'font-size': '18px'
	});
	$('.slider_second .personal_descr p').css({
		'font-size': '14px'
	});
	$('.slider_second').animate({
		'top': '50px',
		'left': '95%',
		'margin-left': '0'
		}, 500, function(){
			$(this).css({
				'top': '50px',
				'left': '95%',
				'margin-left': '0',
				'cursor': 'pointer'
			})
			$(this).attr('onclick', 'getSlideSecond();');
	});

	/* Show this slider */
	$('.slider_first').animate({
		'top': '0',
		'left': '50%',
		'margin-left': '-450px'
		}, 500, function(){
			$(this).css({
				'top': '0',
				'left': '50%',
				'margin-left': '-450px',
				'cursor': 'initial'
			})
			$(this).removeAttr('onclick', null)
	});

	$('.slider_first .personal_descr').css({
		'height': '500px',
		'padding-top': '105px',
		'opacity': '1',
		'box-shadow': '3px 3px 15px #030303'
	});

	$('.slider_first .personal_descr h3').css({
		'margin-top': '75px;',
		'font-size': '24px'
	});

	$('.slider_first .personal_descr h4').css({
		'margin-top': '25px',
		'font-size': '18px'
	});

	$('.slider_first .personal_descr p').css({
		'font-size': '16px'
	});
	/*Move third slider*/
	$('.slider_third').css('left', '100%');

	/*hide button*/
	$('.slider_left').css('visibility', 'hidden');
	$('.slider_right').attr('onclick', 'getSlideSecond()');
};

/*----- Second slider -----*/
function getSlideSecond(){
	/* Hide first slider*/
	$('.slider_first .personal_descr').css({
		'height': '400px',
		'padding-top': '60px',
		'opacity': '0.6',
		'box-shadow': 'none'
	});
	$('.slider_first .personal_descr h3').css({
		'margin-top': '75px',
		'font-size': '22px'
	});
	$('.slider_first .personal_descr h4').css({
		'margin-top': '2px',
		'font-size': '18px'
	});
	$('.slider_first .personal_descr p').css({
		'font-size': '14px'
	});
	$('.slider_first').animate({
		'top': '50px',
		'left': '-53%',
		'margin-left': '0'
		}, 500, function(){
			$(this).css({
				'top': '50px',
				'left': '-53%',
				'margin-left': '0',
				'cursor': 'pointer'
			})
			$(this).attr('onclick', 'getSlideFirst();');
	});
	/* Shiw this slider */
	$('.slider_second').animate({
		'top': '0',
		'left': '50%',
		'margin-left': '-450px'
		}, 500, function(){
			$(this).css({
				'top': '0',
				'left': '50%',
				'margin-left': '-450px',
				'cursor': 'initial'
			})
			$(this).removeAttr('onclick', null)
	});

	$('.slider_second .personal_descr').css({
		'height': '500px',
		'padding-top': '105px',
		'opacity': '1',
		'box-shadow': '3px 3px 15px #030303'
	});

	$('.slider_second .personal_descr h3').css({
		'margin-top': '75px;',
		'font-size': '24px'
	});

	$('.slider_second .personal_descr h4').css({
		'margin-top': '25px',
		'font-size': '18px'
	});

	$('.slider_second .personal_descr p').css({
		'font-size': '16px'
	});
	/*Show third slider*/
	$('.slider_third').css('left', '95%');
	
	/*Show right button*/
	$('.slider_left').css('visibility', 'visible');
	$('.slider_right').attr('onclick', 'getSlideThird()');

};

/*------- Third slider -------*/
function getSlideThird(){
	/* Hide second slider*/
	$('.slider_second .personal_descr').css({
		'height': '400px',
		'padding-top': '60px',
		'opacity': '0.6',
		'box-shadow': 'none'
	});
	$('.slider_second .personal_descr h3').css({
		'margin-top': '75px',
		'font-size': '22px'
	});
	$('.slider_second .personal_descr h4').css({
		'margin-top': '2px',
		'font-size': '18px'
	});
	$('.slider_second .personal_descr p').css({
		'font-size': '14px'
	});
	$('.slider_second').animate({
		'top': '50px',
		'left': '-53%',
		'margin-left': '0'
		}, 500, function(){
			$(this).css({
				'top': '50px',
				'left': '-53%',
				'margin-left': '0',
				'cursor': 'pointer'
			})
			$(this).removeAttr('onclick', null);
			$(this).attr('onclick', 'getSlideSecondBack();');
	});
	/*change left function*/
	$('.slider_left').attr('onclick', 'getSlideSecondBack()');

	/* Show third slider*/
	$('.slider_third').animate({
		'top': '0',
		'left': '50%',
		'margin-left': '-450px'
		}, 500, function(){
			$(this).css({
				'top': '0',
				'left': '50%',
				'margin-left': '-450px',
				'cursor': 'initial'
			})
			$(this).removeAttr('onclick', null)
	});

	$('.slider_third .personal_descr').css({
		'height': '500px',
		'padding-top': '105px',
		'opacity': '1',
		'box-shadow': '3px 3px 15px #030303'
	});

	$('.slider_third .personal_descr h3').css({
		'margin-top': '75px;',
		'font-size': '24px'
	});

	$('.slider_third .personal_descr h4').css({
		'margin-top': '25px',
		'font-size': '18px'
	});

	$('.slider_third .personal_descr p').css({
		'font-size': '16px'
	});

	$('.slider_fourth').css('left', '95%');

	/**/
	$('.slider_right').attr('onclick', 'getSlideFourth()');
}

/*----- get second slider back-----*/
function getSlideSecondBack(){
	/*hide second slider*/
	$('.slider_third .personal_descr').css({
		'height': '400px',
		'padding-top': '60px',
		'opacity': '0.6',
		'box-shadow': 'none'
	});
	$('.slider_third .personal_descr h3').css({
		'margin-top': '75px',
		'font-size': '22px'
	});
	$('.slider_third .personal_descr h4').css({
		'margin-top': '2px',
		'font-size': '18px'
	});
	$('.slider_third .personal_descr p').css({
		'font-size': '14px'
	});
	$('.slider_third').animate({
		'top': '50px',
		'left': '95%',
		'margin-left': '0'
		}, 500, function(){
			$(this).css({
				'top': '50px',
				'left': '95%',
				'margin-left': '0',
				'cursor': 'pointer'
			})
			$(this).attr('onclick', 'getSlideThird();');
	});
	/*change right button*/
	$('.slider_left').attr('onclick', 'getSlideFirst()');
	$('.slider_right').attr('onclick', 'getSlideThird()');

	/* Show back second slider */
	$('.slider_second').animate({
		'top': '0',
		'left': '50%',
		'margin-left': '-450px'
		}, 500, function(){
			$(this).css({
				'top': '0',
				'left': '50%',
				'margin-left': '-450px',
				'cursor': 'initial'
			})
			$(this).removeAttr('onclick', null)
	});

	$('.slider_second .personal_descr').css({
		'height': '500px',
		'padding-top': '105px',
		'opacity': '1',
		'box-shadow': '3px 3px 15px #030303'
	});

	$('.slider_second .personal_descr h3').css({
		'margin-top': '75px;',
		'font-size': '24px'
	});

	$('.slider_second .personal_descr h4').css({
		'margin-top': '25px',
		'font-size': '18px'
	});

	$('.slider_second .personal_descr p').css({
		'font-size': '16px'
	});
	/*Move first slider*/
	$('.slider_firs').css('left', '-53%');
	$('.slider_third').css('left', '95%');
	$('.slider_fourth').css('left', '105%');
}

/*----- Fourth slider-----*/
function getSlideFourth(){
	/* Hide second slider*/
	$('.slider_third .personal_descr').css({
		'height': '400px',
		'padding-top': '60px',
		'opacity': '0.6',
		'box-shadow': 'none'
	});
	$('.slider_third .personal_descr h3').css({
		'margin-top': '75px',
		'font-size': '22px'
	});
	$('.slider_third .personal_descr h4').css({
		'margin-top': '2px',
		'font-size': '18px'
	});
	$('.slider_third .personal_descr p').css({
		'font-size': '14px'
	});
	$('.slider_third').animate({
		'top': '50px',
		'left': '-53%',
		'margin-left': '0'
		}, 500, function(){
			$(this).css({
				'top': '50px',
				'left': '-53%',
				'margin-left': '0',
				'cursor': 'pointer'
			})
			$(this).removeAttr('onclick', null);
			$(this).attr('onclick', 'getSlideThirdBack();');
	});
	/*hide right button*/
	$('.slider_right').css('visibility', 'hidden');

	/* Show third slider*/
	$('.slider_fourth').animate({
		'top': '0',
		'left': '50%',
		'margin-left': '-450px'
		}, 500, function(){
			$(this).css({
				'top': '0',
				'left': '50%',
				'margin-left': '-450px',
				'cursor': 'initial'
			})
			$(this).removeAttr('onclick', null)
	});

	$('.slider_fourth .personal_descr').css({
		'height': '500px',
		'padding-top': '105px',
		'opacity': '1',
		'box-shadow': '3px 3px 15px #030303'
	});

	$('.slider_fourth .personal_descr h3').css({
		'margin-top': '75px;',
		'font-size': '24px'
	});

	$('.slider_fourth .personal_descr h4').css({
		'margin-top': '25px',
		'font-size': '18px'
	});

	$('.slider_fourth .personal_descr p').css({
		'font-size': '16px'
	});

	$('.slider_second').css('left', '-63%');

	/*change left buttom*/
	$('.slider_left').attr('onclick', 'getSlideThirdBack()');
}

/*----- get third slider back-----*/
function getSlideThirdBack(){
	/*hide fourth slider*/
	$('.slider_fourth .personal_descr').css({
		'height': '400px',
		'padding-top': '60px',
		'opacity': '0.6',
		'box-shadow': 'none'
	});
	$('.slider_fourth .personal_descr h3').css({
		'margin-top': '75px',
		'font-size': '22px'
	});
	$('.slider_fourth .personal_descr h4').css({
		'margin-top': '2px',
		'font-size': '18px'
	});
	$('.slider_fourth .personal_descr p').css({
		'font-size': '14px'
	});
	$('.slider_fourth').animate({
		'top': '50px',
		'left': '95%',
		'margin-left': '0'
		}, 500, function(){
			$(this).css({
				'top': '50px',
				'left': '95%',
				'margin-left': '0',
				'cursor': 'pointer'
			})
			$(this).attr('onclick', 'getSlideFourth();');
	});
	$('.slider_left').attr('onclick', 'getSlideSecondBack()');

	/* Show back second slider */
	$('.slider_third').animate({
		'top': '0',
		'left': '50%',
		'margin-left': '-450px'
		}, 500, function(){
			$(this).css({
				'top': '0',
				'left': '50%',
				'margin-left': '-450px',
				'cursor': 'initial'
			})
			$(this).removeAttr('onclick', null)
	});

	$('.slider_third .personal_descr').css({
		'height': '500px',
		'padding-top': '105px',
		'opacity': '1',
		'box-shadow': '3px 3px 15px #030303'
	});

	$('.slider_third .personal_descr h3').css({
		'margin-top': '75px;',
		'font-size': '24px'
	});

	$('.slider_third .personal_descr h4').css({
		'margin-top': '25px',
		'font-size': '18px'
	});

	$('.slider_third .personal_descr p').css({
		'font-size': '16px'
	});
	/*Move first slider*/
	$('.slider_second').css('left', '-53%');
	$('.slider_fourth').css('left', '95%');

	/*show right button*/
	$('.slider_right').css('visibility', 'visible');
}
