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
	$(document).on('keypress', function(e) {
	if(!request_started){
		//$('#overlay').show();
		if(e.keyCode == 13) {
			if($('#suchergebnisse').css('display') != 'none'){
				if($('#suchergebnisse li.active').length == 1){
					if($('#suchergebnisse li.active').parent().parent().attr('id') == 'matchingCommands2'){
						$('#suchergebnisse').hide();
						input.val($('#suchergebnisse li.active .command').html());
						start_request(results,$('#suchergebnisse li.active .command').html());
					}
					else{
						location.href =$('#suchergebnisse li.active a').attr('href');
					}
				}
			}	
			else{
				start_request(results,input.val().trim(),true);
			}	
		}
		oneisfocues = false;
		$('input,textarea').each(function(){
			if($(this).is(':focus')) oneisfocues = true
		});
		if(!oneisfocues) input.focus();
		if (input.is(':focus')){
		$('#card_notif').hide();
		$('#show_card_regulary,#show_notif').hide();
		setTimeout(function(){
			if(input.length > 0){
				requestgo = true;
				$('#MainContent').removeClass('down').addClass('top');
				$('#cardslider').addClass('inputactive');
				$('#matchingCommands2 .top').html(getmsg("matching_commands"));
				$('#matchingCommands').hide();
				
				if(!request_started){
					matching_commands = []; 
					if(typeof(cur_view) != 'undefined') if(typeof(cur_view.onleave) == 'function') cur_view.onleave(results);
					results.hide();
					eingabe = input.val().trim();
					eingabearray = eingabe.split(' ');
					for (i=0; i<= all_comm.length-1; i++){
						if (all_comm[i].toLowerCase().startsWith(eingabearray[0].toLowerCase())) matching_commands.push(all_comm[i]);
						if (all_comm[i].toLowerCase() == eingabearray[0].toLowerCase()){
							if(typeof(timer) != 'undefined') clearTimeout(timer)
							$('#suchergebnisse').hide();
							start_request(results,eingabe);
							break;
						}
					}
					if(matching_commands.length == 0){
						if(ValidUrl(input.val())){
							results.html(getmsg("idlaunch")+' '+input.val()+'...');
							start_request(results,getmsg("idlaunch")+ input.val() );					
						}
						else if(isrechenterm(input.val())){
							start_request(results,getmsg("idcalc")+' '+input.val() );
						}
						else{
							detectedcomm = [];

							$('#matchingCommands2 .top').html(getmsg("nocommands"));
							$('#matchingCommands2 .matchinglits').html('');
							$('#suchergebnisse .aehnliche').html('');
							setgooglevorschlaege(input.val());
							for(var z=0;z<=all_comm.length-1;z++){
								if(similar_text(input.val(),all_comm[z],true) > 70){
									$('#suchergebnisse #matchingCommands2 .top').html(getmsg("doyoumean"));
									$('#suchergebnisse .aehnliche').show();
										$('#suchergebnisse .aehnliche').append('<li><a href="#"><span class="icon-'+all_icons[all_comm[z]]+'"></span><span class="command">'+all_comm[z]+'</span></a></li>');
									
									$(document).on('keypress', function(e) {
										if(e.keyCode == 13){
											start_request(results,$('.matchinglits a').attr('command'));
											input.val($('.matchinglits a').attr('command'));
										}
									});	
								}	
							}
	
						}
						
					}	
					else if(matching_commands.length == 1 && !request_started){
						$('#suchergebnisse').show();
						$('#suchergebnisse .matchinglits').html('<li><a href="#"><span class="icon-'+all_icons[matching_commands[0]]+'"></span><span class="command">'+matching_commands[0]+'</span>(Enter)</a></li>');
						setgooglevorschlaege(input.val());
						$('#suchergebnisse .matchinglits li:first()').addClass('active')
					}
					else{
						if(!request_started){
							$('#suchergebnisse').show();
							$('#suchergebnisse .matchinglits').html('');
							for(i=0;i<=matching_commands.length-1;i++){
								$('#suchergebnisse .matchinglits').append('<li><a href="#"><span class="icon-'+all_icons[matching_commands[i]]+'"></span><span class="command">'+matching_commands[i]+'</span></a></li>');
								$('#suchergebnisse .matchinglits li:first()').addClass('active')
							}	
							setgooglevorschlaege(input.val());							
						}
					}
					initcommandclick();
				}	
			}
			else{
				requestgo = false;
				
				$('#matchingCommands').show();
				
				results.html('').removeClass('show');
				$('#MainContent').removeClass('top').addClass('down');
				$('#cardslider').removeClass('inputactive');
				//$('#overlay').hide();
				initcommandclick();
				
				$('#suchergebnisse').hide();	
				$('#suchergebnisse .matchinglits').html('');	
			}
		},10);
		}
	}	
}).on('keydown', function(e) {
	if (e.keyCode==8){
		results.removeClass('show');
		window.setTimeout(function(){
			if(input.val().length < 1){
				$('#matchingCommands').show();
				requestgo = false;
				results.html('').removeClass('show');
				$('#MainContent').removeClass('top').addClass('down');
				$('#cardslider').removeClass('inputactive');
				$('#vorschlaege').hide();
				initcommandclick();
				$('#show_card_regulary,#show_notif').html('');
				
				$('#suchergebnisse').hide();	
				$('#suchergebnisse .matchinglits').html('');
			}
			else{
				input.trigger('keypress');
			}
		},50);	
	}	
	if (e.keyCode==38 || e.keyCode==40){
		if($('#suchergebnisse li').not('.top').length > 0){
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
			jQuery($('#suchergebnisse li:not(.top)')[active]).addClass('active')
		}
	}
});
}

function bounce(obj,times){
	i = 0;
	setInterval(function(){
		if(i % 2 == 0){
			width = obj.width()+20;
			height = obj.height()+20;
		}
		else{
			width = obj.width()-20;
			height = obj.height()-20;
		}
		obj.animate({
			width:width,
			height:height,

		},500);
		i++;
	},1000);
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
	$('.headline').html(getrandomheadline());
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
	
	$('#mic').mouseover(function(){
		$('#michover').addClass('hover');
		setTimeout(function(){
			log($('#michover').height());
			if($('#michover').height() > 120){
				startspracheingabe();
			}
		},520);	
	});
	$('#mic').mouseleave(function(){
		$('#michover').removeClass('hover');
	});
	$('#mic').click(function(){
		startspracheingabe();
	});
	$('#spracheingabe .stop').click(function(){
		stopspracheingabe();
	});
	
	if(localStorage['version'] != chrome.app.getDetails().version){
		//Update!!! :)
		shownachricht('<p>'+getmsg("newupdate")+'<a href="#" class="ok">'+getmsg("ok")+'</a> </p>');
		localStorage['version'] = chrome.app.getDetails().version;
	}
	
	if(location.search.indexOf('?') > -1){
		if(localStorage['einmalurlaction'] == 'false'){
			switch(location.search[4]){
				case '1': 
					startspracheingabe();
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




