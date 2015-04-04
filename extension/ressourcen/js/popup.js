$(document).ready(function(){
	initvars();
	if(typeof(localStorage['firstStart']) == 'undefined'){
		$('body').html(getmsg("startnewtabfirst"));
	}
	loadcards($('#cardspopup'));
	getnotifications($('#notifications'));
	window.setInterval(function(){
		getnotifications($('#notifications'));
	},1000);
	
	$('#mic').click(function(){
		localStorage['einmalurlaction'] = 'false';
		chrome.tabs.create({url:'chrome://newtab?id=1'});
	});
	
	getlanguagestrings();
	
	$('body').on('click', 'a', function(){
		chrome.tabs.create({url: $(this).attr('href')});
		return false;
	});
});	

