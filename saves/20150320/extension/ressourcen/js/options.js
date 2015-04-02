$(document).ready(function(){
	var date = new Date();
	day = date.getDate();
	$('body').css('background','url(../full.bgs/'+day+'.jpg) no-repeat center center fixed');
	loadcursettings();
	
	$('form').change(function(){
		apply();
	});
	$('.back').click(function(){
		apply();
	});
	$('.reset').click(function(){
		var really = confirm("Do you really want to reset everything? (Can\'t undo this)");
		if (really == true) {
			reset();
		} else {
			
		}
	});
	$('.startwithfirststepassistant').click(function(){
		localStorage['starts'] = 0;
	});
	getlanguagestrings();
});

function reset(){
	localStorage.clear();
	location = '../../start.html';
}

function loadcursettings(){
	$('input').prop('disabled', false);
	
	$('.name').val(localStorage['settingsname']);
	

	$('.popup_'+localStorage['settingscur_popup']).attr('checked','checked');		
	
	if(localStorage['settingsomnibox'] == 'true') $('.omniboxtop').attr('checked','checked');
	
	if(localStorage['settingssprachsuche'] == 'true'){
		$('.sprachetop').attr('checked','checked');
		if(localStorage['settingsalways_listen'] == 'true') $('.sprache_always').attr('checked','checked');
	}
	else{
		$("input[name='alwayslisten']").prop('disabled', true);
	}
	if(localStorage['sprachausgabe'] == 'true') $('.sprachausgabetop').attr('checked','checked');
	if(localStorage['settingsbenachrichtigungen'] == 'true'){
		$('.benachrichtiungentop').attr('checked','checked');
		if(localStorage['settingsbenach_ton'] == 'true') $('.benachrichtiungen1').attr('checked','checked');
		if(localStorage['settingsbenach_desktop'] == 'true') $('.benachrichtiungen2').attr('checked','checked');
		if(localStorage['settingsbenach_badget'] == 'true') $('.benachrichtiungen3').attr('checked','checked');
	}
	else{
		$("input[name='settingnotif']").each(function(){
			$(this).prop('disabled', true);
		});	
	}
	$('.themes'+localStorage['settingscur_theme']).attr('checked','checked');
	
	if(localStorage['settingsshortcuts'] == 'true'){
		$('.shortcutstop').attr('checked','checked');
		if(localStorage['settingsshortcut_open'] == 'true') $('.shortcuts1').attr('checked','checked');
		if(localStorage['settingsshortcut_sprache'] == 'true') $('.shortcuts2').attr('checked','checked');
	}
	else{
		$("input[name='settingshortcuts']").each(function(){
			$(this).prop('disabled', true);
		});			
	}
	
	$('.'+localStorage['units']).attr('checked','checked');
}

function apply(){
	$('.saved').html('Loading..').css('background','#FFDE00');
	
	localStorage['settingsname'] = $('.name').val();
		localStorage['settingscur_popup'] = $("input[name='settingpopup']:checked").attr('value');
	localStorage['settingsomnibox'] = $('.omniboxtop').is(':checked');
	
	localStorage['sprachausgabe'] = $('.sprachausgabetop').is(':checked');
	localStorage['settingssprachsuche'] = $('.sprachetop').is(':checked');
		localStorage['settingsalways_listen'] = $('.sprache_always').is(':checked');
	localStorage['settingsbenachrichtigungen'] = $('.benachrichtiungentop').is(':checked');
		localStorage['settingsbenach_ton'] = $('.benachrichtiungen1').is(':checked');
		localStorage['settingsbenach_desktop'] = $('.benachrichtiungen2').is(':checked');
		localStorage['settingsbenach_badget'] = $('.benachrichtiungen3').is(':checked');
		localStorage['settingscur_theme'] = $("input[name='settingtheme']:checked").attr('value');
	localStorage['settingsshortcuts'] = $('.shortcutstop').is(':checked');
		localStorage['settingsshortcut_open'] = $('.shortcuts1').is(':checked');
		localStorage['settingsshortcut_sprache'] = $('.shortcuts2').is(':checked');
	
	localStorage['units'] = $("input[name='units']:checked").attr('value');
	
	setTimeout(function(){
		$('.saved').html('All Changes are Saved!').css('background','#91cd85');
		loadcursettings(); //z.B. um vorher disablete Felder wählen zu können		
	},200);
}