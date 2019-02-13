$(function(){
		 $(window).scroll(function (){
				 $('.fadein').each(function(){
						 var elemPos = $(this).offset().top;
						 var scroll = $(window).scrollTop();
						 var windowHeight = $(window).height();
						 if (scroll > elemPos - windowHeight + windowHeight/5){
								 $(this).addClass('scrollin');
								 $(this).css("opacity","1" );

							} else {

								$(this).css("opacity","0" );

							}

				 });
		 });
 });
