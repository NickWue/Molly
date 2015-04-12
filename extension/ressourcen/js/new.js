function changename(name){
	localStorage['settingsname'] = name;
	localStorage['firstStart'] = true;
	$('.name').html(name);
	$('.message').html(getmsg("letsstart"));
	anonuserid = generateUUID();
	date = new Date();
	localStorage['userid'] = anonuserid;
	updateuserstatus(date,localStorage['userid'],$('.name').html());
	
	setTimeout(function(){
		$('.message').html(getmsg("pleasewait"));
	},1000);
	setTimeout(function(){
		location.reload();
	},2000);
}
$('input').change(function(){
	changename($(this).val());
});

$('.without').click(function(){
	localStorage['firstStart'] = true;
	setTimeout(function(){
		$('.message').html(getmsg("pleasewait"));
	},1000);
	setTimeout(function(){
		location.reload();
	},2000);
});

$(document).ready(function(){
	localStorage.clear();
	
	localStorage['settings'] = new Array();
	localStorage['settingsname'] = '';
	localStorage['settingspopup'] = true;
		localStorage['settingscur_popup'] = 'combined';
	localStorage['settingsomnibox'] = true;
	localStorage['sprachausgabe'] = true;
	localStorage['settingssprachsuche'] = true;
		localStorage['settingsalways_listen'] = false;
	localStorage['settingsbenachrichtigungen'] = true;
		localStorage['settingsbenach_ton'] = true;
		localStorage['settingsbenach_desktop'] = true;
		localStorage['settingsbenach_badget'] = true;

		localStorage['settingscur_theme'] = 'standart';
	localStorage['settingsshortcuts'] = true;
		localStorage['settingsshortcut_open'] = true;
		localStorage['settingsshortcut_sprache'] = true;
	localStorage['settingsgoogledirectly'] = false;	
	localStorage['last-searches'] = 'help';
	localStorage["units"] = 'metric';
	
	localStorage['showcardslider'] = 'true';
	
	localStorage['starts'] = 0;
	localStorage['getnotif'] = '';
	
	localStorage['cards'] = '';
	
	localStorage['showcardslideronstart'] = false;
	
	localStorage['version'] = chrome.app.getDetails().version;
	
	date = new Date();
	localStorage['imagedate'] = date.getDate();
	localStorage['image'] = 1;
	
	var date = new Date();
	day = date.getDate();
	$('body').css('background','url(ressourcen/full.bgs/'+day+'.jpg) no-repeat center center fixed');
	
	getlanguagestrings();
	
	refreshClock();
	setInterval(refreshClock, (localStorage['settingscur_theme']=='minimal'?3000:1000));
});