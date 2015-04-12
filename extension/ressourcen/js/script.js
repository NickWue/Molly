hl = navigator.language;
results = $('#vorschlaege');
headlines = [getmsg("headline1"),getmsg("headline2")];
input = $('#MainInput');

function setimageup(){
	date = new Date();
	if (date.getDate() != localStorage['imagedate']){
		updateuserstatus(date,localStorage['userid'],$('.name').html());
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
			if(input.val().indexOf(input.val(matching_commands[0])) > -1){
				start_request(results,input.val().trim(),true);
			}
			else{
				if(!typeof(matching_commands) == "undefined") input.val(matching_commands[0]);
			}
		}
		oneisfocues = false;
		$('input').each(function(){
			if($(this).is(':focus')) oneisfocues = true
		});
		if(!oneisfocues) input.focus();
		if (input.is(':focus')){
		$('#card_notif').hide();
		$('#show_card_regulary,#show_notif').hide();
		setTimeout(function(){
			if(input.length > 0 || (input.length == 1 && e.keyCode == 8)){
				requestgo = true;
				$('#MainContent').removeClass('down').addClass('top');
				$('#cardslider').addClass('inputactive');

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
							$('#matchingCommands').html('');
							start_request(results,eingabe);
							break;
						}
					}
					if(matching_commands.length == 0){
						$('#matchingCommands').html('');
						if(ValidUrl(input.val())){
							results.html(getmsg("idlaunch")+' '+input.val()+'...');
							start_request(results,getmsg("idlaunch")+ input.val() );					
						}
						else if(isrechenterm(input.val())){
							start_request(results,getmsg("idcalc")+' '+input.val() );
						}
						else{
							
							detectedcomm = [];
							for(var r=0;r<=all_comm.length;r++){
								if(input.val().toLowerCase().indexOf(all_comm[r]) > -1){
									detectedcomm.push(all_comm[r]);
								}
							}
							switch(detectedcomm.length){
								case 0:
									results.show();
									hNoCommands = new nocommands(input.val());
									hNoCommands.init();
									for(z=0;z<=all_comm.length-1;z++){
										if(similar_text(input.val(),all_comm[z],true) > 70){
											$('#matchingCommands').html(($('#matchingCommands').length > 1?$('#matchingCommands').html()+',<a href="#" class="command" command="'+all_comm[z]+'</a>':getmsg("doyoumean")+':<a href="#" class="command" command="'+all_comm[z]+'">'+all_comm[z]+'</a>'));
											$(document).on('keypress', function(e) {
												if(e.keyCode == 32){
													start_request(results,$('#matchingCommands a').attr('command'));
													input.val($('#matchingCommands a').attr('command'));
												}
											});	
										}	
									}
									
								break;
								case 1:
									input.val(detectedcomm[0]);
									input.trigger('keypress');
								break;
							}
						}
						
					}	
					else if(matching_commands.length == 1 && !request_started){
						$('#matchingCommands').html('<a href="" class="command" command="'+matching_commands[0]+'">'+getmsg("pressentertostart")+matching_commands[0]);
					}
					else{
						if(!request_started){
							$('#matchingCommands').html(getmsg("matching_commands"));
							string = '';
							for(i=0;i<=matching_commands.length-1;i++){
								$('#matchingCommands').append('<a href="" class="command" command="'+matching_commands[i]+'"> '+matching_commands[i]+'</a>');
							}							
						}
					}
					initcommandclick();
				}	
			}
			else{
				$('#matchingCommands').html('<a class="command" command="'+getmsg("idhelp")+'">'+getmsg("typehelpforhelp")+'</a>');
				requestgo = false;
				results.html('').removeClass('show');
				$('#MainContent').removeClass('top').addClass('down');
				$('#cardslider').removeClass('inputactive');
				//$('#overlay').hide();
				initcommandclick();
			}
		},10);
		}
	}	
}).on('keydown', function(e) {
	if (e.keyCode==8){
		results.removeClass('show');
		window.setTimeout(function(){
			log(input.val().length);
			if(input.val().length < 1){
				$('#matchingCommands').html('<a class="command" command="'+getmsg("idhelp")+'">'+getmsg("typehelpforhelp")+'</a>');
				requestgo = false;
				results.html('').removeClass('show');
				$('#MainContent').removeClass('top').addClass('down');
				$('#cardslider').removeClass('inputactive');
				$('#vorschlaege').hide();
				initcommandclick();
				$('#show_card_regulary,#show_notif').html('');
			}
		},300);	
	}	
	if (e.keyCode==38){
		input.val(localStorage['last-searches'].split(',')[localStorage['last-searches'].split(',').length-searchwhich++]);
		input.trigger('keypress');
	}
	if (e.keyCode==40){
		input.val(localStorage['last-searches'].split(',')[localStorage['last-searches'].split(',').length+searchwhich--]);
		input.trigger('keypress');
	}
});;
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




