chrome.commands.onCommand.addListener(function(command) {
	localStorage['einmalurlaction'] = 'false';
	if (command == 'startwithlanguageinput') id = 1;
	if (command == 'startwithcardslider') id = 2;
	chrome.tabs.create({url:'chrome://newtab?id='+id});
});

chrome.alarms.onAlarm.addListener(function(data){
	chrome.tabs.create({url:'https://www.youtube.com/watch?v=cWJeIL27V1Q'});
});
