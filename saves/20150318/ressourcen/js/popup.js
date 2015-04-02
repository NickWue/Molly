$(document).ready(function(){
	initvars();
	if(typeof(localStorage['firstStart']) == 'undefined'){
		$('body').html(getmsg("startnewtabfirst"));
	}
	$('#mic').click(function(){
		startspracheingabe();
	});
	$('#spracheingabe .stop').click(function(){
		stopspracheingabe();
	});
	loadcards($('#cardspopup'));
	getnotifications($('#notifications'));
	window.setInterval(function(){
		getnotifications($('#notifications'));
	},1000);
	
	getlanguagestrings();
});	

