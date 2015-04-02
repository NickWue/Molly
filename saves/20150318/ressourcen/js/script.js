hl = navigator.language;
results = $('#vorschlaege');
headlines = [getmsg("headline1"),getmsg("headline2")];

function setimageup(){
	date = new Date();
	if (date.getDate() != localStorage['imagedate']){
		localStorage['imagedate'] = date.getDate();
		localStorage['image']++;
	}	
}

function styles(){
	windowH = $(window).height();
	windowW = $(window).width();	
	
	//$('#MainContent').css('top',windowH/3);
	//cur_headline = headlines[Math.floor(Math.random() * (headlines.length))];
	//$('h3').html(cur_headline.substring(0,cur_headline.length-1)+', Nick'+cur_headline[cur_headline.length-1]+' ');
	loadtopsites();
	new gnMenu(document.getElementById( 'gn-menu' ));

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
	
	if(typeof(localStorage['cards']) == 'undefined') localStorage['cards'] = '';
}

$(window).resize(function(){
	styles();
});

$(document).on('keypress', function(e) {
	if(!request_started){
		//$('#overlay').show();
		if(e.keyCode == 13) {
			$('input').val(matching_commands[0]);
		}
		oneisfocues = false;
		$('input').each(function(){
			if(!$(this).is(':focus')) oneisfocues = true
		});
		if(!oneisfocues) $('input').focus();
		$('#card_notif').hide();
		$('#show_card_regulary,#show_notif').hide();
		setTimeout(function(){
			if($('input').val().length > 0){
				requestgo = true;
				$('#MainContent').removeClass('down').addClass('top');
				

				if(!request_started){
					matching_commands = []; 
					if(typeof(cur_view) != 'undefined') if(typeof(cur_view.onleave) == 'function') cur_view.onleave(results);
					results.hide();
					eingabe = $('input').val().trim();
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
						if(ValidUrl($('input').val())){
							results.html(getmsg("idlaunch")+' '+$('input').val()+'...');
							start_request(results,"launch "+$('input').val() );					
						}
						else{
							results.show();
							hNoCommands = new nocommands($('input').val());
							hNoCommands.init();
							for(z=0;z<=all_comm.length-1;z++){
								if(similar_text($('input').val(),all_comm[z],true) > 70){
									$('#matchingCommands').html(($('#matchingCommands').length > 1?$('#matchingCommands').html()+',<a href="#" class="command" command="'+all_comm[z]+'</a>':getmsg("doyoumean")+':<a href="#" class="command" command="'+all_comm[z]+'">'+all_comm[z]+'</a>'));
								}	
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
				setTimeout(function(){$('#loading').width(0);},500);
				$('input').css('border','2px solid white');
				results.html('').removeClass('show');
				$('#MainContent').removeClass('top').addClass('down');
				//$('#overlay').hide();
			}
		},10);
	}	
}).on('keydown', function(e) {
	if (e.keyCode==8){
		results.removeClass('show');
		$('input').trigger('keypress');
	}	
	if (e.keyCode==38){
		$('input').val(localStorage['last-searches'].split(',')[localStorage['last-searches'].split(',').length-searchwhich++]);
		$('input').trigger('keypress');
	}
	if (e.keyCode==40){
		$('input').val(localStorage['last-searches'].split(',')[localStorage['last-searches'].split(',').length+searchwhich--]);
		$('input').trigger('keypress');
	}
});;

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
	getnotifications($('#notifications'));
	/*window.setInterval(function(){
		getnotifications($('#notifications'));
	},3000);*/
	$('.headline').html(getrandomheadline());
	$('input').focus();
	
	getlanguagestrings();
	
	localStorage['starts']++;
	if (localStorage['starts'] == 1){
		shownachricht('<p>'+getmsg('welcome')+'<a href="#" class="ok">'+getmsg("ok")+'</a> </p>');
	}
	if (localStorage['starts'] == 1000){
		shownachricht('<p>'+getmsg("thousandtimesused")+'<a href="#" class="command support" command="info support"> '+getmsg("typehelpforhelp")+'</a><a href="#" class="ok">'+getmsg("ok")+'</a> </p>');
	}
	if(localStorage['starts'] < 50){
		$('#matchingCommands').html('<a class="command" command="'+getmsg("idhelp")+'">'+getmsg("typehelpforhelp")+'</a>');		
	}
	else{
		switch(Math.round(Math.random() * 2 - 0)){
			case 0:
				$('#matchingCommands').html('<a class="command" command="info support"> '+getmsg("support")+' </a>');
				initcommandclick();
			break;
			case 1: 
				$('#matchingCommands').html(getmsg("doyouevenknow")+':'+getmsg("wusstensie"+Math.round(Math.random() * 8 - 0)));
			break;
			case 2:
				$('#matchingCommands').html('<a class="command" command="'+getmsg("idhelp")+'">'+getmsg("typehelpforhelp")+'</a>');
			break;
		}
	}
	initcommandclick();
	refreshClock();
	setInterval(refreshClock,1000);
	
	newRecognition = new webkitSpeechRecognition();
	newRecognition.lang = hl;

	$('.cardslideropener').click(function(){
		opencardslider($('#cardslider .scroller'));
	});
	
	start = false;	

	initcommandclick();
	
	if($('input').val().length > 0) start_request(results,$('input').val(),false);
	
	$('#mic').click(function(){
		startspracheingabe();
	});
	$('#spracheingabe .stop').click(function(){
		stopspracheingabe();
	});
	
	if(location.search.substr(location.search.indexOf('=')+1,1)){ //Opened with Shortcut CTRL+Shift+Y
		opencardslider($('#cardslider .scroller'));
	}
	toggleregulary($('.toggleregulary'));
	$('.toggleregulary').click(function(){
		if(localStorage['showcardslideronstart'] == 'false') localStorage['showcardslideronstart'] = 'true';
		else localStorage['showcardslideronstart'] = 'false';
		toggleregulary($(this));
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




