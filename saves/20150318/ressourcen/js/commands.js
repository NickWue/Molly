function ObjCommand(pId,pIcon,pStartdirectly,pRegulary,pPermission,pOrigin,pHasRefresh,pParams){
	this.id = pId;
	this.icon = pIcon;
	this.startdirectly = pStartdirectly;
	this.regulary = pRegulary;
	this.permission = pPermission;
	this.origin = pOrigin;
	this.hasrefresh = pHasRefresh;
	this.params = pParams;
	this.initview = function(view,params){
		view.html(getmsg("loading"));
		localStorage['last-searches'] += ','+this.id+' '+params.join(' ');
		this.getview(view,params);
	}
	this.speak = function(view,string){
		if(typeof(results) != 'undefined'){
			if(localStorage['sprachausgabe'] == 'true' && view.attr('id') == results.attr('id')){
				chrome.tts.speak(string);
			}
		}	
	}
}	
function commands(){
	this.apps = function(){
		this.constructor(getmsg('idapps'),'grid-alt',true,true,'management','',false,'');
		this.getview = function(view,params){
			self = this;
			chrome.management.getAll(function(data){
				for (i=0;i<=data.length-1;i++){
					if (data[i].type == 'hosted_app'){
						view.append("<li><a href='"+data[i].appLaunchUrl+"'><img width='16' src='"+data[i].icons[0].url+"'/>"+data[i].name+"</a></li>");		
					}	
				}
				self.speak(view,'Here are all of '+ i +' apps!');
			});
			
		}
	}
	this.help = function(){
		this.constructor(getmsg('idhelp'),'support',true,false,'','',false,'');
		this.getview = function(view,params){
			if(params.length == 0){
				if($('.help-scroller').html().length < 150){
					for (i= 0; i <= objkeys.length-1; i++){
						lObj = new objcommands[objkeys[i]];
						$('#help .help-scroller .first-ten').append('<li title="'+getmsg('description'+objkeys[i])+'"><span class="icon icon-'+lObj.icon+'"></span><span class="command" command="'+lObj.id+'">'+lObj.id+'</span></li>');
					}
					initcommandclick();
				}	
				$('#help').show(500);
				view.hide();
				this.speak(view,'Here you see all the commands you need using Molly.');
			}
			else{
				view.html(getmsg('helpnotifications'));
			}
		}
		this.onleave = function(){
			$('#help').hide(300);	
		}
	}
	this.clock = function(){
		this.constructor(getmsg('idclock'),'alarm',true,true,'','',true,['city']);
		this.synonyms = getmsg('idtime');
		this.getview = function(view,params){
			self = this;
			$.get("https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURI(params.join(" "))+"&sensor=false", function( data ) {
				if (data.results.length > 1) view.html("sorry there are more than one city. Please specify with country.");
				else if (data.results.length == 0){
					view.html("Please enter a correct city.");
					this.speak(view,'Please enter a correct city.');
				}
				else{
					
					$.get("https://maps.googleapis.com/maps/api/timezone/json?location="+data.results[0].geometry.location.lat+","+data.results[0].geometry.location.lng+"&timestamp=1331161200&sensor=false",function(data2){
						now = new Date();
						view.html("It's "+(now.getUTCHours()+data2.rawOffset/60/60)+ ":"+now.getUTCMinutes()+"Clock in "+params.join(" "));
						self.speak(view,view.html());
					});	
				}
			});
		}
	}
	this.weather = function(){
		this.constructor(getmsg('idweather'),'cloud',true,true,'','',true,['city']);
		this.getweather = function(view,urlplus){
			self = this;			
			$.ajax({
				url: "http://api.openweathermap.org/data/2.5/weather?" + urlplus + "&units="+localStorage["units"]+"&lang=en",
				dataType: 'JSON',
				success: function(data){
					if (typeof(data.main) == 'undefined'){		
						view.append( '<div style="color:red">'+data.cod+'//'+data.message);
					}	
					else{
						self.weatherdata = [];
						self.weatherdata.push(["city",data.name+', '+data.sys.country],["weather",data.weather[0].description],["temp",Math.round(data.main.temp)+'&deg;'],["max-temp",Math.round(data.main.temp_max)],["min-temp",Math.round(data.main.temp_min)]);
						content = new ObjResults();
						view.append(content.returnview(self.weatherdata));
						self.speak(view,'It\'s '+Math.round(data.main.temp)+ 'degrees in '+ data.name +'. Weather is '+data.weather[0].description);
					}	
				}
			});	
		}
		this.notallparams = function(view){
			self = this;
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(data){
					view.html(getmsg("weatheratlocation"));
					self.getweather(view,'lat='+data.coords.latitude+'&lon='+data.coords.longitude);
				});
			}	
		}
		this.getview = function(view,params){
			view.html('Weather in '+params.join(" "));
			this.getweather(view,'q='+params.join(" "));
		}	
	}
	this.bookmarks = function(){
		this.constructor(getmsg('idbookmarks'),'bookmarks',true,true,'bookmarks','',false,'');
		this.getview = function(view,params){
			view.html('');
			hResults = new ObjResults();
			self = this;
			chrome.bookmarks.getTree(function(list){		
				for (a=0;a<=list[0].children.length-1;a++){
					if (typeof(list[0].children[a].children) != 'undefined'){
						for (b=0;b<=list[0].children[a].children.length;b++){
							if (typeof(list[0].children[a].children[b]) != 'undefined'){
								if (typeof(list[0].children[a].children[b].children) == 'undefined'){
									hResults.addrows('<img src="chrome://favicon/'+list[0].children[a].children[b].url+'" width="25"/>','<a href="'+list[0].children[a].children[b].url+'">&nbsp;'+ list[0].children[a].children[b].title+'&nbsp;</a>');
								}
							}	
						}
					}	
				}
				view.append(hResults.innercontent);
				self.speak(view,'Here are your Bookmarks');
			});
		}
	}
	this.launch = function(){
		this.constructor(getmsg('idlaunch'),'earth',false,false,'','',false,['website']);
		this.getview = function(view,params){
			this.speak(view,'Molly now starts '+params[0]);
			location = params[0].startsWith('http')?params[0]:'http://'+params[0];
		}
	}
	this.google = function(){
		this.constructor(getmsg('idgoogle'),'google',false,false,'','',false,['search']);
		this.getview = function(view,params){
			this.speak(view,'Molly now starts googling for '+params.join(" "));
			location = 'https://www.google.com/#q='+params.join(" ")+'&hl='+hl;	
		}
	}
	this.recently = function(){
		this.constructor(getmsg('idrecently'),'files-empty',true,true,'history','',false,'');
		this.getview = function(view,params){
			hresults = new ObjResults();
			hresults.addrows('','<a id="showhistory" href="#">Gesamten Verlauf anzeigen</a>');
			self = this;
			chrome.history.search({text:'',maxResults:100}, function(callback){
				for (i=0;i<=callback.length-1;i++){
					if (callback[i].url.indexOf('www') != -1){
						title = callback[i].url.substring(callback[i].url.indexOf('www.')+4,callback[i].url.length);
					}
					else{
						if (callback[i].url.indexOf('://') == -1) title = callback[i].url;
						else title = callback[i].url.substring(callback[i].url.indexOf('://')+3,callback[i].url.length);	
					}	
					if(title.length > 34) title = title.substring(0,30)+'...';
					hresults.addrows('<img src="chrome://favicon/'+callback[i].url+'"/>','<a href="'+callback[i].url+'">'+title+'</a>');	
				}
				view.html(hresults.innercontent);
				self.speak(view,'Here are your recently closed websites.');
				$('#showhistory').click(function(){
					chrome.tabs.create({url:'chrome://history/'});
				});				
			});
			
		}
	}
	this.info = function(){
		this.constructor(getmsg('idinfo'),'files-empty',true,true,'','',false,['app/developer/support']);
		this.getview = function(view,params){
			log(params[0]);
			if(params[0] == 'app' || params[0] == 'developer' || params[0] == 'support'){
				view.load('./ressourcen/html/'+params[0]+'.html');
				this.speak(view,'Here are some information about '+params[0]);	
			}	
			else view.html('You have to enter "app","developer" or "support"');
		}
	}
	this.system = function(){
		this.constructor(getmsg('idsystem'),'files-empty',true,true,'system.cpu','',true,'');
		this.getview = function(view,params){
			auslastung = 0;
			usage = 0;
			self = this;
			chrome.system.cpu.getInfo(function(data){
				for(t=0;t<=data.processors.length-1;t++){
					usage = data.processors[t].usage;
					auslastung += usage.total / usage.idle;
				}
				view.html('CPU Auslastung: '+(100-Math.round(auslastung/(t+1)*100))+'%');
				self.speak(view,'You CPU use is at '+(100-Math.round(auslastung/(t+1)*100))+'%');
			});
			chrome.system.memory.getInfo(function(data){
				view.append('<br/>Memory Auslastung: '+(data.availableCapacity/data.capacity*100)+'%');
				self.speak(view,'You Memory use is at '+(data.availableCapacity/data.capacity*100)+'%');
			});
		}
	}
	this.topsites = function(){
		this.constructor(getmsg('idtopsites'),'trophy',true,true,'','',false,'');
		this.getview = function(view,params){
			hresults = new ObjResults();
			self = this;
			chrome.topSites.get (function(urls) {
				for (i=0;i<=urls.length-1;i++){
					hresults.addrows("<img width='20px' src='chrome://favicon/"+urls[i].url+"'/>","<a href="+urls[i].url+" class='gn-icon'>"+(urls[i].title.length >20?urls[i].title.substring(0,20)+'...' : urls[i].title)+"</a>");
				}
				view.html(hresults.returnview([]));
				self.speak(view,'Here are your top sites.');
			});	
		}
	}
	this.suggest = function(){
		this.constructor(getmsg('idsuggest'),'pencil2',true,true,'','',false,'');
		this.getview = function(view,params){
			this.speak(view,'Suggest a card.');
			view.load("./ressourcen/html/suggest.html");
		}
	}
	this.downloads = function(){
		this.constructor(getmsg('iddownloads'),'download',true,true,'downloads','',false,'');
		this.getview = function(view,params){
			self = this;
			hresults = new ObjResults();
			chrome.downloads.search({query:params}, function(data){
				console.log(data);
				for(i=data.length-100;i<=data.length-1;i++){
					hresults.addrows('<img src="chrome://favicon/'+data[i].referrer+'"/>','<a href="'+data[i].url+'">'+data[i].filename+'</a>');
				}
				view.html(hresults.returnview([]));
				self.speak(view,'Here are your downloads.');
			});
		}
	}
	this.news = function(){
		this.constructor(getmsg('idnews'),'newspaper',true,true,'','https://news.google.com/*',true,'');
		this.getview = function(view,params){
			hresults = new ObjResults();
			self = this;
			$.get('https://news.google.com/news/feeds?hl='+navigator.language+'&q='+params.join(' '), function(XMLmediaArray){
				$(XMLmediaArray).find("item").each(function(){ 
					hresults.addrows('','<a href="'+$(this).find("link").text()+'">'+$(this).find("title").text()+'</a>');
				});
				view.html(hresults.returnview([]));	
				if(params.join(" ").length > 0){
					view.prepend('Search for '+params.join(" ")+':');
				}
				else{
					view.prepend('To search the news, just type now.');
				}
				self.speak(view,'Here are the news!');
			});
		}
	}
	this.notes = function(){
		this.constructor(getmsg('idnotes'),'pencil2',false,true,'','',false,['action']);
		this.shownotes = function(view){
			if(typeof(localStorage['notes']) == 'undefined') localStorage['notes'] = '';
			hresults = new ObjResults();
			if(typeof(results) != 'undefined') if(view.attr('id') == results.attr('id')) hresults.addrows('type "add", to add a new note!','');
			notesarray = localStorage['notes'].split(',');
			for(r=0;r<=notesarray.length-1;r++){
				if(notesarray[r].length > 2) hresults.addrows(notesarray[r],'<a href="" class="deleat" note="'+notesarray[r]+'">x</a>');
			}
			view.html(hresults.returnview([]));	
			this.speak(view,'Here are your Notes.');
			$('.deleat').click(function(){			
				localStorage['notes'] = localStorage['notes'].replace($(this).attr('note'),'');
				$(this).parent().remove();
				return false;
			});
		}
		this.notallparams = function(view){
			this.shownotes(view);
		}
		this.getview = function(view,params){
			log(params[0]);
			switch(params[0]){
				case 'add':
					params.shift();
					if (params.join(" ").length > 3){
						log(params.join(" "));
						localStorage['notes'] = localStorage['notes']+(localStorage['notes'].length > 1?','+params.join(" "):params.join(" "));
						view.html('added '+ params.join(" ") + ' to notes');
					}
					else{
						view.html('schreiben Sie nun Ihre Notiz.');
					}
				break;
				default:
					this.shownotes(view);
				break;
			}
		}
	}
	this.quote = function(){
		this.constructor(getmsg('idquote'),'newspaper',true,true,'','http://iheartquotes.com/api/v1/random',true,'');	
		this.getview = function(view,params){
			hresults = new ObjResults();
			self = this;
			$.get('http://iheartquotes.com/api/v1/random?format=json&max_lines=5', function(data){	
				hresults.addrows('','<a href="'+data.link+'">'+data.quote+'</a>');
				view.html(hresults.returnview([]));	
				self.speak(view,data.quote);
			});
		}	
	}
	this.alarm = function(){
		this.constructor(getmsg('idalarm'),'alarm',false,true,'alarms','',true,['add/view']);
		this.synonyms = "reminder";
		this.getallalarms = function(view){
			hresults = new ObjResults();
			view.html('Type "add" to add an alarm');
			self = this;
			chrome.alarms.getAll(function(data){
				var count = 0;
				data.forEach(function(data2){
					hresults.addrows('Alarm klingelt in:',Math.round((data2.scheduledTime-Date.now())/10/60)/100+'min');
					self.speak(view,'Alarm klingelt in:',Math.round((data2.scheduledTime-Date.now())/10/60)/100+'min');
					count++;
				});
				if(count > 0) view.html(hresults.returnview([]));	
				else view.html('Noch keinen Alarm hinzugefügt. "add" und anschließend die Minuten in denen er klingeln soll eingeben um das zutun');
			});
		}
		this.notallparams =function (view){
			this.getallalarms(view);
		}
		this.getnotif = function(view){
			locarray = [];
			self = this;
			chrome.alarms.getAll(function(data){
				data.forEach(function(data2){
					view.append('<li><span class="icon icon-'+self.icon+'"></span>Alarm:'+Math.round((data2.scheduledTime-Date.now())/10/60)/100+'min</li>');
					locarray.push();
				});
				if(locarray.length > 0) return locarray;
				else return [];
			});
		}
		this.getview = function(view,params){
			switch(params[0]){
				case 'add':
					if(typeof(params[1]) != 'undefined' && params[1].length > 0 && !isNaN(params[1])){
						chrome.alarms.create('Alarm'+Date.now(),{delayInMinutes:parseInt(params[1])});
						view.html('The alarm will ring in '+params[1]+ ' minutes!');
						this.speak(view,'The alarm will ring in '+params[1]+ 'minutes!');
					}
					else{
						view.html('Now enter a number (time the alarm should ring)');
					}
				break;
				default:
					this.getallalarms(view);
				break;
			}
		}
	}
	this.joke = function(){
		this.constructor(getmsg('idjoke'),'grin2',true,true,'','',true,'');
		this.synonyms = "9gag";
		this.getview = function(view,params){
			view.html('');
			self = this;
			$.get('http://infinigag.eu01.aws.af.cm/hot/0', function(data){	
				random = Math.floor((Math.random() * 10) + 1);
				view.html('<h3>'+data.data[random].caption+'</h3><a href="'+data.data[random].link+'"><img src="'+data.data[random].images.normal+'"/></a>');
				view.css('width',475);
				self.speak(view,'Hahaha');
			});
		}
		this.onleave = function(view){
			view.css('width',370);	
		}
	}
	this.buy = function(){
		this.constructor(getmsg('idbuy'),'cart',false,false,'','',false,['search']);
		this.synonym = getmsg("idshopping");
		this.getview = function(view,params){
			this.speak(view,'Searching for '+params.join(" ")+ ' at google shopping');
			location = 'https://www.google.de/search?q='+params.join(" ")+'&tbm=shop&hl='+hl;
		}
	}
	this.image = function(){
		this.constructor(getmsg('idimage'),'image',false,false,'','',false,['search']);
		this.getview = function(view,params){
			this.speak(view,'Searching for '+params.join(" ")+ ' at google images');
			location = 'https://www.google.com/search?site=imghp&tbm=isch&hl='+hl+'&q='+params.join(" ");
		}
	}	
	this.wiki = function(){
		this.constructor(getmsg('idwiki'),'library',false,true,'','',false,'');
		this.synonym = 'wiki';
		this.getview = function(view,params){
			this.speak(view,'Searching for '+params.join(" ")+ ' at wikipedia');
			location = 'http://'+hl+'.wikipedia.org/wiki/'+params.join(" ");
		}
	}
	this.solve = function(){
		this.constructor(getmsg('idcalc'),'calculate',true,true,'','',false,'');
		this.synonym = getmsg('idsynonymcalc');
		this.getview = function(view,params){
			//view.html('You can use all language features of javascript. Like Math.sqrt() for square root.');
			if (params.join('').length > 2){
				try {
					solve = view.html(params.join('')+'='+ eval(params.join(''))); 
				} catch (e) {
					if (e instanceof SyntaxError) {
						//nothing
					}
				}
			}
			else{
				view.html('Aufgabe eingeben.');
			}
		}
	}
	this.rss = function(){
		this.constructor(getmsg('idrss'),'feed2',true,true,'','*://*/*',true,["rss feed url"]);
		this.getnotif = function(){
			return '';
		}
		this.getview = function(view,params){
			if (ValidUrl(params.join(''))){
				hresults = new ObjResults();
				$.get(params.join(' '), function(XMLmediaArray){
					$(XMLmediaArray).find("item").each(function(){ 
						hresults.addrows('','<a href="'+$(this).find("link").text()+'">'+$(this).find("title").text()+'</a>');
					});
					view.html(hresults.returnview([]));
				});
			}
			else{
				view.html('Please enter a valid url from a rss stream.');
			}	
		}
	}

	/* *** COMMING SOON WITH THE NEXT UPDATES!!! ***
	
	
	this.call = function(){
		this.constructor(getmsg('idcall'),'phone',false,false,'','',false,['platform','number']);
		this.getview = function(view,params){
			view.html('call with '+params[0]+' number: '+params[1]);
		}
	}

	this.calendar = function(){
		this.constructor(getmsg('idcalendar'),'calendar',true,true,'','https://calendar.google.com/*',false,'');
		this.getnotif = function(){
			return '';
		}
		this.getview = function(view,params){
			view.html('here is your calendar');
		}
	}

	this.mail = function(){
		this.constructor(getmsg('idmail'),'envelop',false,true,'','https://mail.google.com/*',true,['write/view']);
		this.getnotif = function(){
			return '';
		}
		this.getview = function(view,params){
			view.html(params[0]+ 'mail');
		}
	}
	this.music = function(){
		this.constructor(getmsg('idmusic'),'music',true,true,'','https://spotify.com/*',false,['search']);
		this.getview = function(view,params){
			view.html('search music '+params.join(" "));
		}
	}
	this.game = function(){
		this.constructor(getmsg('idgame'),'pacman2',true,true,'','https://best-game.com/*',false,['search']);
		this.getview = function(view,params){
			view.html('search games '+params.join(" "));
		}
	}
	this.movie = function(){
		this.constructor(getmsg('idmovie'),'film',true,true,'','',false,['search']);
		this.synonyms = "imbd";
		this.getview = function(view,params){
			view.html('search for movie '+params.join(" "));
		}
	}
	this.sport = function(){
		this.constructor(getmsg('idsport'),'trophy',true,true,'','',false,['search']);
		this.getview = function(view,params){
			view.html('here are some sport results');
		}
	}
	this.tv = function(){
		this.constructor(getmsg('idtv'),'tv',true,true,'','https://tv.com/*',false,['time']);
		this.getview = function(view,params){
			view.html('at '+params[0]+ 'in TV: ...');
		}
	}
	this.wolfram = function(){
		this.constructor(getmsg('idwolfram'),'library',true,true,'','https://wolfram.com/*',false,['search']);
		this.getview = function(view,params){
			view.html('search wolfram alpha');
		}
	}
	this.reddit = function(){
		this.constructor(getmsg('idreddit'),'reddit',false,true,'','',false,['search']);
		this.getview = function(view,params){
			view.html('here is what\'s going on at reddit');
		}
	}
	this.youtube = function(){
		this.constructor(getmsg('idyoutube'),'youtube3',false,true,'','',false,['search']);
		this.getview = function(view,params){
			view.html('here are some interesting youtube videos');
		}
	}
	this.stocks = function(){
		this.constructor(getmsg('idstocks'),'stats-dots',false,true,'','https://stocks.com/*',false,['search']);
		this.getnotif = function(){
			return '';
		}
		this.getview = function(view,params){
			view.html(params[0]+' is at kurs...');
		}
	}
	this.blog = function(){
		this.constructor(getmsg('idblog'),'feed2',false,true,'','',false,['search']);
		this.getview = function(view,params){
			view.html('search for blogs');
		}
	}



	
	*/
}	



function ObjResults(){
	this.innercontent = '';
	this.init = function(rowsarray){
		for ( i = 0; i <= rowsarray.length-1 ; i ++){
			this.addrows(rowsarray[i][0],rowsarray[i][1]);
		}
	}	
	this.addrows = function(left,right){
		this.innercontent += '<tr><td>'+left+'</td><td>'+right+'</td></tr>';
	}
	this.returnview = function(rowsarray){
		if(rowsarray.length > 0) this.init(rowsarray);
		return '<table>'+this.innercontent+'</table>';
	}
}
