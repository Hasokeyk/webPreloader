/*
	Hasan Yüksektepe
	01.10.2017
	hasanhasokeyk@hotmail.com
	www.hayatikodla.net
*/
jQuery(function($){
	
	$.fn.webPreloader = function( options ) {
		
		var settings = $.extend({
            htmlCreate: true,
            cssCreate: true,
            loadGif: "//app.hayatikodla.net/webPreloader/assets/img/load.gif",
            sleep: 0,
			sound : "//app.hayatikodla.net/webPreloader/assets/sound/sound2.mp3",
        }, options );
		
		//SOUND LOAD
		var audioo = document.createElement("audio");
		audioo.src = settings.sound;
		//SOUND LOAD
		
		//Jquery versiyon control
		var JV = $().jquery;
		if (typeof jQuery != 'undefined') {  
			
			//cssCreate true
			if(settings.cssCreate==true){
				
				//$('head').append('<link rel="stylesheet" href="//app.hayatikodla.net/WebPreloader/assets/css/webPreloader.css" />');
			}
			//cssCreate true
			
			//htmlCreate true
			if(settings.htmlCreate==true){
				
				/*
				$('body').append(
				'<div class="webPreloader">'+
					'<div class="webPreloaderGif">'+
						'<img src="'+settings.loadGif+'" alt="Web Preloader" />'+
					'</div>'+
				'</div>');
				*/
				
			}
			//htmlCreate true
			
			//SOUND TRUE
			if(settings.sound != ''){
				audioo.addEventListener('ended', function() {
					this.currentTime = 0;
					this.play();
				}, false);
				audioo.play();
			}
			//SOUND TRUE
			
			//LOAD FINISH
			$(window).on('load',function(){
				$('.webPreloader').slideUp('slow');
				audioo.pause();
			});
			//LOAD FINISH
			
		}else{
			console.warn('Jquery Eklentisi Yok');
		}
		//Jquery versiyon control
		
	}
});