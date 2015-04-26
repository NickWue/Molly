chrome.commands.onCommand.addListener(function(command) {
	localStorage['einmalurlaction'] = 'false';
	if (command == 'startwithlanguageinput') id = 1;
	if (command == 'startwithcardslider') id = 2;
	chrome.tabs.create({url:'chrome://newtab?id='+id});
});

if(typeof(chrome.alarms) != 'undefined'){ //wenn Rechte noch nicht gegeben.
	chrome.alarms.onAlarm.addListener(function(data){
		chrome.tabs.create({url:'https://www.youtube.com/watch?v=cWJeIL27V1Q'});
	});
}	

chrome.browserAction.onClicked.addListener(function(data){
	chrome.tabs.query({},function(data){
		var changed = false;
		for(var i = 0; i <= data.length-1; i++){
			if(data[i].url.substr(0,15) == "chrome://newtab"){
				chrome.tabs.update(data[i].id,{url:'chrome://newtab?id=1',active:true});
				changed = true;
				currentid = data[i].id;
			}	
		}
		localStorage['einmalurlaction'] = 'false';
		if(!changed) chrome.tabs.create({url:'chrome://newtab?id=1'},function(data){currentid = data.id;});
	});
});