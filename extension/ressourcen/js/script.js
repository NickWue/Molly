hl = navigator.language;
results = $('#vorschlaege');
headlines = [getmsg("headline1"),getmsg("headline2")];
input = $('#MainInput');

function setimageup(){
	date = new Date();
	if (date.getDate() != localStorage['imagedate']){
		updateuserstatus();
		localStorage['imagedate'] = date.getDate();
		localStorage['image']++;
		if (localStorage['image'] > 44) localStorage['image'] = 1;
	}	
}

function styles(){
	windowH = $(window).height();
	windowW = $(window).width();	
	
	//$('#MainContent').css('top',windowH/3);
	//cur_headline = headlines[Math.floor(Math.random() * (headlines.length))];
	//$('h3').html(cur_headline.substring(0,cur_headline.length-1)+', Nick'+cur_headline[cur_headline.length-1]+' ');
	loadtopsites();
	menu = new gnMenu(document.getElementById( 'gn-menu' ));

	switch(localStorage['settingscur_theme']){
		case 'standart':
			setimageup();
			$('body').css('background','url(./ressourcen/full.bgs/'+localStorage['image']+'.jpg) no-repeat center center fixed');
		break;
		case 'minimal':
			backgroundColors = ['#911146','#9ab26b','#783E7F','#911146','#CF4A30','#ED8C2B','#9ab26b'];
			$('body').css('background',backgroundColors[Math.floor(Math.random() * (backgroundColors.length))]);
			
			$('#alarm').hide();
			
		break;
	}
	if(localStorage['settingssprachsuche'] == 'false') $('#mic').hide();
	$('#cardslider').css('top',$('#MainContent').offset().top+$('#MainContent').height()+50)
}

$(window).resize(function(){
	styles();
});

function initkeypress(){
	$('body').keypress(function(e){
		oneisfocues = false;
		$('input,textarea').each(function(){
			if($(this).is(':focus')) oneisfocues = true
		});
		if(!oneisfocues) input.focus();
	});
	input.keyup(function(e){
		if(input.is(':focus')){ //Sonst passiert alles auch bei anderen Formularen.

		switch(e.keyCode){
				case 8: //Backslash
					results.hide();
					if(input.val().length == 0){
						results.html('').removeClass('show');
						$('#MainContent').removeClass('top').addClass('down');
						$('#cardslider').removeClass('inputactive');
						$('#vorschlaege').hide();
						$('#show_card_regulary,#show_notif').html('');
						$('#suchergebnisse').hide();	
						$('#suchergebnisse .matchinglits').html('');
					}
					else{
						input.keyup();
					}
				break;
				case 13: //Enter
					if($('#suchergebnisse').css('display') == 'none'){
						start_request(results,input.val(),true);
					}	
					else{
						if($('#suchergebnisse li.active').parent().attr('class') == "matchingsearchs"){
							location = $('#suchergebnisse li.active a').attr('href');
						}
						else if($('.EnterToGo').length > 0){ //Weil auch wenn EnterToGo bei einem Sucheintrag darf nur das oben passieren.
							log('set');
							input.val($('.EnterToGo a .command').html());
							start_request(results,input.val());
						}
					}
				case 38: //Pfeil Hoch
				case 40: //Pfeil Runter
					if($('#suchergebnisse li').not('.top').length > 0){
						$('.entercaption').html('');
						$('.EnterToGo').removeClass('EnterToGo');
						active = -1;
						if($('#suchergebnisse li.active').length == 1){
							for (var z = 0;z <= $('#suchergebnisse li:not(.top)').length; z++){
								if (jQuery($('#suchergebnisse li:not(.top)')[z]).hasClass('active')){
									active = z;
								}
							}
						}
						if(e.keyCode == 40) active ++;
						if(e.keyCode == 38) active --;
						
						if(active < 0) active = $('#suchergebnisse li:not(.top)').length-1;
						if(active > $('#suchergebnisse li:not(.top)').length-1) active = 0;

						$('#suchergebnisse li:not(.top)').removeClass('active');
						jQuery($('#suchergebnisse li:not(.top)')[active]).addClass('active EnterToGo').children('a').children('.entercaption').html('(Enter)');
					}
					else{
						//letzten Suchanfragen laden.
					}
				break;
				case 999: //Special keycode, to make design if a request start but don't start it. (Voice Input);
					results.addClass('show');
					$('#MainContent').addClass('top').removeClass('down');
					$('#cardslider').addClass('inputactive');
				break;
				default: //Jeder andere Buchstabe.
					if(input.val().length > 0){
						start_request(results,input.val(),false);
						results.addClass('show');
						$('#MainContent').addClass('top').removeClass('down');
						$('#cardslider').addClass('inputactive');
					}	
				break;
			}	
		}	
	});
}


function shownachricht(message){
	$('#nachricht').show().html(message);
	$('#overlay').show();
	$('#nachricht a, #overlay').click(function(){
		$('#nachricht,#overlay').hide();
	});	
	initcommandclick();
}


$(document).ready(function(){		
	
	/* Start funcs*/
	initvars();
	styles();
	searchwhich = 0;
	if(typeof(localStorage['firstStart']) == 'undefined' || localStorage['firstStart'] == 'false'){
		$("body").html('');
		$("body").load( "./ressourcen/html/new.html", function() {
			return false;
		});	
		return false;	
	}
	else{
		initkeypress();
	}
	//getnotifications($('#notifications'));
	/*window.setInterval(function(){
		getnotifications($('#notifications'));
	},3000);*/
	$('.headline,.captionfirstbubble').html(getrandomheadline());
	input.focus();
	
	getlanguagestrings();
	
	localStorage['starts']++;
	if (localStorage['starts'] == 1){
		firststepsobj = new firststeps();
		firststepsobj.init();
	}
	if (localStorage['starts'] == 1000){
		shownachricht('<p>'+getmsg("thousandtimesused")+'<a href="#" class="command support" command="info support"> '+getmsg("support")+'</a><a href="#" class="ok">'+getmsg("ok")+'</a> </p>');
	}
	if(localStorage['starts'] < 50){
		$('#matchingCommands').html('<a class="command" command="'+getmsg("idhelp")+'">'+getmsg("typehelpforhelp")+'</a>');		
	}
	else{
		switch(Math.round(Math.random() * 4 - 0)){
			case 0:
				$('#matchingCommands').html('<a class="command" command="info support"> '+getmsg("support")+' </a>');
			break;
			case 1:
			case 2:
			case 3:
			case 4:
				$('#matchingCommands').html('<a class="command" command="'+getmsg("idhelp")+'">'+getmsg("typehelpforhelp")+'</a>');
			break;
		}
	}
	refreshClock();
	setInterval(refreshClock,1000);
	
	newRecognition = new webkitSpeechRecognition();
	newRecognition.lang = hl;
	newRecognition.hasstarted = false;
	
	alwayslisten = false;
	if(alwayslisten){
		// Create  the webkitSpeechRecognition object which provides the speech interface 
		var rec = new webkitSpeechRecognition(); 
		// Ensure that the recogniser is listening continously, even if the user pauses (default value is false) 
		rec.continuous = true; 
		rec.interimResults = true;
		// Start recognising 
		rec.start();
		rec.onresult = function(e) { 
			for (var i = e.resultIndex; i < e.results.length; ++i) { 
				if(e.results[i][0].transcript.indexOf('Molly') > -1){
					rec.stop();
					startspracheingabe();
				}
		   } 
		}
	}

	$('.cardslideropener').click(function(){
		opencardslider($('#cardslider'));
	});
	opencardslider($('#cardslider'));
	if(localStorage['showcardslider'] == 'false'){
		$('#cardslider').addClass('inputactive');
		$('#showcardslider').addClass('icon-eye-blocked').removeClass('icon-eye');
	}
	else{
		$('#cardslider').removeClass('inputactive');	
		$('#showcardslider').addClass('icon-eye').removeClass('icon-eye-blocked');
	}
	if($('#cardslider').hasClass('nocards')) $('#showcardslider').hide();
	
	$('#showcardslider').click(function(){
		if($('#showcardslider').hasClass('icon-eye')){
			$('#cardslider').addClass('inputactive');
			localStorage['showcardslider'] = 'false';
		}
		else{
			$('#cardslider').removeClass('inputactive');
			localStorage['showcardslider'] = 'true';			
		}
		$('#showcardslider').toggleClass('icon-eye').toggleClass('icon-eye-blocked');	
	});
	
	start = false;	

	initcommandclick();
	
	if(input.val().length > 0) start_request(results,input.val(),false);
	
	$('#mic').click(function(){
		messagetostartspracheingabe();
	});
	$('#spracheingabe .stop').click(function(){
		stopspracheingabeP();
	});
	
	if(localStorage['version'] != chrome.app.getDetails().version){
		//Update!!! :)
		/**
			Init new vars, remove old vars here before update! BUT: REMOVE BEFORE THE NEXT UPDATE!
		**/
			localStorage['last-searches'] = '';
			chrome.runtime.setUninstallURL('http://nickw.de/molly/uninstall.php?id='+localStorage['userid']);
		/** End **/
		shownachricht('<p>'+getmsg("newupdate")+'<a href="#" class="ok">'+getmsg("ok")+'</a> </p>');
		localStorage['version'] = chrome.app.getDetails().version;
	}
	
	if(location.search.indexOf('?') > -1){
		if(localStorage['einmalurlaction'] == 'false'){
			switch(location.search[4]){
				case '1': 
					messagetostartspracheingabe();
				break;
				case '2':
					opencardslider($('#cardslider'));
				break;
				case '3': break;
				default: //Karte soll geöffnet werden
					id = location.search.substr(location.search.indexOf('=')+1,location.search.length);
					input.val(id+' ');
					input.trigger('keypress');
				break;
			}
			localStorage['einmalurlaction'] = 'true';	
		}
	}

	
	toggleregulary($('.toggleregulary'));
	$('.toggleregulary').click(function(){
		if(localStorage['showcardslideronstart'] == 'false') localStorage['showcardslideronstart'] = 'true';
		else localStorage['showcardslideronstart'] = 'false';
		toggleregulary($(this));
	});
	
	$('#menuopener').hover(function(){
		menu._openMenu();
	});
	$('.gn-trigger').mouseleave(function(){
		menu._closeMenu();
	});

});

function toggleregulary(obj){
	if (localStorage['showcardslideronstart'] == 'true'){
		obj.removeClass('icon-eye').addClass('icon-eye-blocked');
		obj.attr('title','Don\'t show on start');
		opencardslider($('.cardslideropener'),$('#cardslider .scroller'));
	}
	else{
		obj.removeClass('icon-eye-blocked').addClass('icon-eye');
		obj.attr('title','Show on start');
	}	
}




