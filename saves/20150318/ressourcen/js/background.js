chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.create({url:'chrome://newtab?id=2'});
});

chrome.alarms.onAlarm.addListener(function(data){
	chrome.tabs.create({url:'https://www.youtube.com/watch?v=cWJeIL27V1Q'});
});
