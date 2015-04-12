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
		localStorage['last-searches'] += ','+this.id+' '+params.join(' ');
		this.getview(view,params);
	}
	this.speak = function(view,string){
		if(typeof(results) != 'undefined'){
			if(localStorage['sprachausgabe'] == 'true' && view.attr('id') == results.attr('id')){
				chrome.tts.speak(string,{'lang': getmsg("langcode")});
			}
		}	
	}
}	
function commands(){
	this.apps = function(){
		this.constructor(getmsg('idapps'),'grid-alt',true,true,'management','',false,'');
		this.getview = function(view,params){
			view.html('');
			chrome.management.getAll(function(data){
				for (i=0;i<=data.length-1;i++){
					if (data[i].type == 'hosted_app'){
						view.append("<li><a href='"+data[i].appLaunchUrl+"'><img width='16' src='"+data[i].icons[0].url+"'/>"+(data[i].name.length>30?data[i].name.substr(0,27)+'...':data[i].name)+"</a></li>");		
					}	
				}
				cur_obj['apps'].speak(view,getmsg("sprachausgabeapps").replace('{i}',i));
			});
			
		}
	}
	this.help = function(){
		this.constructor(getmsg('idhelp'),'support',true,false,'','',false,'');
		this.getview = function(view,params){
			if($('#help .commands').html().length < 150){
				for (i= 0; i <= objkeys.length-1; i++){
					lObj = new objcommands[objkeys[i]];
					$('#help .commands').append('<li title="'+getmsg('description'+objkeys[i])+'"><span class="icon icon-'+lObj.icon+'"></span><span class="command" command="'+lObj.id+'">'+lObj.id+'</span></li>');
				}
				initcommandclick();
			}
			$('#help .closehelp').click(function(){
				input.val('');
				cur_obj['help'].onleave();
			});
			$('#help .commands li').hover(function(){
				$('#help .answer h3').html($(this).html());
				$('#help .answer p').html($(this).attr('title'));
				$('#help .answer').addClass('show');
				$('#help .sonstigehilfe').addClass('hide');
			}).mouseleave(function(){
				$('#help .answer').removeClass('show');
				$('#help .sonstigehilfe').removeClass('hide');
			});
			$('#help').addClass('show');
			$('body').addClass('showhelp');
			view.hide();
			cur_obj['help'].speak(view,getmsg("sprachausgabehilfe"));
			
			$('#help .sonstigehilfe a').click(function(){
				$('#help .answer h3').html($(this).html());
				$('#help .answer p').html(getmsg('msg'+$(this).attr('msg')));
				$('#help .answer').addClass('show');
				$('#help .sonstigehilfe').addClass('hide');
				return false;
			});
			$('#help .answer .back').click(function(){
				$('#help .answer').removeClass('show');
				$('#help .sonstigehilfe').removeClass('hide');
				return false;
			});
		}
		this.onleave = function(){
			$('#help').removeClass('show');
			$('body').removeClass('showhelp');
		}
	}
	this.clock = function(){
		this.constructor(getmsg('idclock'),'alarm',true,true,'','',true,[getmsg('stadt')]);
		this.synonyms = getmsg('idtime');
		this.getview = function(view,params){
			$.get("https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURI(params.join(" "))+"&sensor=false", function( data ) {
				if (data.results.length > 1) view.html(getmsg("morethanonecity"));
				else if (data.results.length == 0){
					view.html(getmsg("nocityfound"));
					this.speak(view,getmsg("nocityfound"));
				}
				else{
					ajax("https://maps.googleapis.com/maps/api/timezone/json?location="+data.results[0].geometry.location.lat+","+data.results[0].geometry.location.lng+"&timestamp=1331161200&sensor=false",function(data2){
						log(data2);
						now = new Date();
						time = (now.getUTCHours()+data2.rawOffset/60/60)+":"+now.getUTCMinutes();
						view.html(getmsg("clockausgabe").replace('{time}',time).replace('{city}',params.join(" ")));
						cur_obj['clock'].speak(view,view.html());
					});	
				}
			});
		}
	}
	this.weather = function(){
		this.constructor(getmsg('idweather'),'cloud',true,true,'','',true,[getmsg('stadt')]);
		this.getweather = function(view,urlplus){			
			ajax("http://api.openweathermap.org/data/2.5/weather?" + urlplus + "&units="+localStorage["units"]+"&lang="+navigator.language,function(data){
				if (typeof(data.main) == 'undefined'){		
						view.append( '<div style="color:red">'+data.cod+'//'+data.message);
					}	
					else{
						cur_obj['weather'].weatherdata = [];
						cur_obj['weather'].weatherdata.push([getmsg("stadt"),data.name+', '+data.sys.country],[getmsg("wetter"),data.weather[0].description],[getmsg("temperature"),Math.round(data.main.temp)+'&deg;'],[getmsg("maxtemp"),Math.round(data.main.temp_max)+'&deg;'],[getmsg("mintemp"),Math.round(data.main.temp_min)+'&deg;']);
						content = '<table>';
						
						for(var t = 0; t<= cur_obj['weather'].weatherdata.length-1; t++){
							content += '<tr><td>'+cur_obj['weather'].weatherdata[t][0]+'</td><td>'+cur_obj['weather'].weatherdata[t][1]+'</td></tr>';
						}
						content += '</table>';
						
						view.append(content);
						cur_obj['weather'].speak(view,getmsg("weatherforcast").replace('{temp}',Math.round(data.main.temp)).replace('{city}',data.name).replace('{weather}',data.weather[0].description));
					}	
			});
		}
		this.notallparams = function(view){
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(data){
					view.html('');
					cur_obj['weather'].getweather(view,'lat='+data.coords.latitude+'&lon='+data.coords.longitude);
				});
			}	
		}
		this.getview = function(view,params){
			view.html('');
			cur_obj['weather'].getweather(view,'q='+params.join(" "));
		}	
	}
	this.bookmarks = function(){
		this.constructor(getmsg('idbookmarks'),'bookmarks',true,true,'bookmarks','',false,'');
		this.getview = function(view,params){
			var hResults = new ObjResults();
			view.html('');
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
				cur_obj['bookmarks'].speak(view,getmsg("herebookmarks"));
			});
		}
	}
	this.launch = function(){
		this.constructor(getmsg('idlaunch'),'earth',false,false,'','',false,[getmsg('url')]);
		this.getview = function(view,params){
			this.speak(view,getmsg("launchnow")+params[0]);
			location = params[0].startsWith('http')?params[0]:'http://'+params[0];
		}
	}
	this.google = function(){
		this.constructor(getmsg('idgoogle'),'google',false,false,'','',false,['search']);
		this.getview = function(view,params){
			cur_obj['google'].speak(view,getmsg("googlenow")+params.join(" "));
			location = 'https://www.google.com/#q='+params.join(" ")+'&hl='+navigator.language;	
		}
	}
	this.recently = function(){
		this.constructor(getmsg('idrecently'),'files-empty',true,true,'history','',false,'');
		this.getview = function(view,params){
			var hresults = new ObjResults();
			hresults.addrows('','<a id="showhistory" href="#">'+getmsg("showverlauf")+'</a>');
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
				cur_obj['recently'].speak(view,getmsg("hererecentlyclosed"));
				$('#showhistory').click(function(){
					chrome.tabs.create({url:'chrome://history/'});
				});				
			});
			
		}
	}
	this.info = function(){
		this.constructor(getmsg('idinfo'),'files-empty',true,true,'','',false,[getmsg("appdevelopersupport")]);
		this.getview = function(view,params){
			if(params[0].trim() == 'app' || params[0].trim() == 'developer' || params[0].trim() == 'support'){
				view.css('font-size','1em');
				switch(params[0].trim()){
					case 'support':
						view.html('<h2> '+getmsg("support")+' </h2>');
						$("<div>").load('./ressourcen/html/donate.html', function(data) {
							  view.append(data);
						});
						view.append('<a href="https://chrome.google.com/webstore/detail/molly-chrome-assisant/oemmomdbclmlngplmnajopeopjeckobo">'+getmsg("bewerten")+'</a><br/><a href="https://github.com/NickWue/molly">'+getmsg("contributetomolly")+'</a> ');
					break;
					case 'app':
						view.html(getmsg("aboutapp"));
					break;
					case 'developer':
						view.html(getmsg("aboutdeveloper"));
					break;
				}
			}	
			else view.html(getmsg("pleaseenterparam"));
		}
		this.onleave = function(view){
			view.css('font-size','2em');
		}
	}
	this.system = function(){
		this.constructor(getmsg('idsystem'),'files-empty',true,true,'system.cpu','',true,'');
		this.getview = function(view,params){
			auslastung = 0;
			usage = 0;
			chrome.system.cpu.getInfo(function(data){
				for(t=0;t<=data.processors.length-1;t++){
					usage = data.processors[t].usage;
					auslastung += usage.total / usage.idle;
				}
				view.html(getmsg("cpuuseisat").replace('{data}',(100-Math.round(auslastung/(t+1)*100))));
				cur_obj['system'].speak(view,getmsg("cpuuseisat").replace('{data}',(100-Math.round(auslastung/(t+1)*100))));
			});
			/*chrome.system.memory.getInfo(function(data){
				view.append('<br/>'+getmsg("memoryuseisat").replace('{data}',(data.availableCapacity/data.capacity*100)));
				cur_obj['system'].speak(view,getmsg("memoryuseisat").replace('{data}',(data.availableCapacity/data.capacity*100)));
			});*/
		}
	}
	this.topsites = function(){
		this.constructor(getmsg('idtopsites'),'trophy',true,true,'','',false,'');
		this.getview = function(view,params){
			var hresults = new ObjResults();
			chrome.topSites.get (function(urls) {
				for (var i=0;i<=urls.length-1;i++){
					hresults.addrows("<img src='chrome://favicon/"+urls[i].url+"'/>","<a href="+urls[i].url+" class='gn-icon'>"+(urls[i].title.length >20?urls[i].title.substr(0,20)+'...' : urls[i].title)+"</a>");
				}
				view.html(hresults.returnview([]));
				cur_obj['topsites'].speak(view,getmsg("heretopsites"));
			});	
		}
	}
	this.suggest = function(){
		this.constructor(getmsg('idsuggest'),'pencil2',true,true,'','',false,'');
		this.synonyms = 'feedback';
		this.getview = function(view,params){
			cur_obj['suggest'].speak(view,getmsg("suggestacard"));
			view.load("./ressourcen/html/suggest.html");
		}
	}
	this.downloads = function(){
		this.constructor(getmsg('iddownloads'),'download',true,true,'downloads','',false,'');
		this.getview = function(view,params){
			var hresults = new ObjResults();
			chrome.downloads.search({query:[]}, function(data){
				for(i=data.length-100;i<=data.length-1;i++){
					hresults.addrows('<img src="chrome://favicon/'+data[i].referrer+'"/>','<a href="'+data[i].url+'">'+data[i].url+'</a>');
				}
				view.html(hresults.returnview([]));
				cur_obj['downloads'].speak(view,getmsg("heredownloads"));
			});
		}
	}
	this.news = function(){
		this.constructor(getmsg('idnews'),'newspaper',true,true,'','https://news.google.com/*',true,'');
		this.getview = function(view,params){
			var hresults = new ObjResults();
			ajax('https://news.google.com/news/feeds?hl='+navigator.language+'&q='+params.join(' '),function(XMLmediaArray){
				$(XMLmediaArray).find("item").each(function(){ 
					hresults.addrows('','<a href="'+$(this).find("link").text()+'">'+$(this).find("title").text()+'</a>');
				});
				view.html(hresults.returnview([]));	
				if(params.join(" ").length > 0){
					view.prepend(getmsg("searchfor")+params.join(" ")+':');
				}
				cur_obj['news'].speak(view,getmsg("herenews"));
			});
		}
	}
	this.notes = function(){
		this.constructor(getmsg('idnotes'),'pencil2',true,true,'','',false,'');
		this.shownotes = function(view){
			if(typeof(localStorage['notes']) == 'undefined') localStorage['notes'] = '';
			var hresults = new ObjResults();
			notesarray = localStorage['notes'].split(',');
			var applyed= 0;
			for(r=0;r<=notesarray.length-1;r++){
				if(notesarray[r].length > 2){
					hresults.addrows(notesarray[r],'<a href="" class="deleat" note="'+notesarray[r]+'">x</a>');
					applyed++;
				}
			}
			view.html(hresults.returnview([]));	
			if (applyed == 0) view.append(getmsg("nonotes"));
			cur_obj['notes'].speak(view,getmsg("hereareyournotes"));
			$('.deleat').click(function(){			
				localStorage['notes'] = localStorage['notes'].replace($(this).attr('note'),'');
				$(this).parent().parent().remove();
				cur_obj['notes'].getview(view);
				return false;
			});
		}
		this.getview = function(view,params){
			cur_obj['notes'].shownotes(view);
			if(view.attr('id') == results.attr('id')) view.prepend('<span> Hinzuf&uuml;gen </span><input class="addnotes" placeholder="Note" type="text"><a href="#" class="ok"> OK </a>');
			$('.ok').click(function(){
				if($('.addnotes').val().length > 0){
					localStorage['notes'] = localStorage['notes']+$('.addnotes').val()+',';
					cur_obj['notes'].getview(view);
				}	
			});
		}
	}
	this.quote = function(){
		this.constructor(getmsg('idquote'),'newspaper',true,true,'','http://iheartquotes.com/api/v1/random',true,'');	
		this.getview = function(view,params){
			var hresults = new ObjResults();
			ajax("http://iheartquotes.com/api/v1/random?format=json&max_lines=5",function(data){	
				hresults.addrows('','<a href="'+data.link+'">'+data.quote+'</a>');
				view.html(hresults.returnview([]));	
				cur_obj['quote'].speak(view,data.quote);
			});
		}	
	}
	this.alarm = function(){
		this.constructor(getmsg('idalarm'),'alarm',true,true,'alarms','',true,'');
		this.getallalarms = function(view){
			var hresults = new ObjResults();
			chrome.alarms.getAll(function(data){
				var count = 0;
				data.forEach(function(data2){
					hresults.addrows('<span class="icon-alarm"></span>',getmsg("alarmringin").replace('{min}',Math.round((data2.scheduledTime-Date.now())/10/60)/100));
					cur_obj['alarm'].speak(view,getmsg("alarmringin").replace('{min}',Math.round((data2.scheduledTime-Date.now())/10/60)/100));
					count++;
				});
				log(count);
				if(count > 0) view.html(hresults.returnview([]));	
				else view.html(getmsg("keinalarm"));
				if(view.attr('id') == results.attr('id')) view.prepend('<span> Hinzuf&uuml;gen </span><input class="addalarm" placeholder="time in min" type="text"><a href="#" class="ok"> OK </a>');
				$('.ok').click(function(){
					if($('.addalarm').val().length > 0){
						chrome.alarms.create('Alarm'+Date.now(),{delayInMinutes:parseInt($('.addalarm').val())});
						view.html(getmsg("alarmringin").replace('{min}',$('.addalarm').val()));
						cur_obj['alarm'].speak(view,getmsg("alarmringin").replace('{min}',$('.addalarm').val()));
						cur_obj['alarm'].getview(view);
					}	
				});
			});
		}
		this.getnotif = function(view){
			locarray = [];
			chrome.alarms.getAll(function(data){
				data.forEach(function(data2){
					view.append('<li><span class="icon icon-'+cur_obj['alarm'].icon+'"></span>Alarm:'+Math.round((data2.scheduledTime-Date.now())/10/60)/100+'min</li>');
					locarray.push();
				});
				if(locarray.length > 0) return locarray;
				else return [];
			});
		}
		this.getview = function(view,params){
			cur_obj['alarm'].getallalarms(view);
		}
	}	
	this.joke = function(){
		this.constructor(getmsg('idjoke'),'grin2',true,true,'','',true,'');
		this.synonyms = "9gag";
		this.getview = function(view,params){
			view.html('');
			self = this;
			ajax("http://infinigag.eu01.aws.af.cm/hot/0",function(data){
				random = Math.floor((Math.random() * 10) + 1);
				view.html('<h3>'+data.data[random].caption+'</h3><a href="'+data.data[random].link+'"><img src="'+data.data[random].images.normal+'"/></a>');
				view.css('width',475);
				cur_obj['joke'].speak(view,getmsg("lachen"));
			});
			/*$.get('http://infinigag.eu01.aws.af.cm/hot/0', function(data){	
				random = Math.floor((Math.random() * 10) + 1);
				view.html('<h3>'+data.data[random].caption+'</h3><a href="'+data.data[random].link+'"><img src="'+data.data[random].images.normal+'"/></a>');
				view.css('width',475);
				cur_obj['joke'].speak(view,getmsg("lachen"));
			});*/
		}
		this.onleave = function(view){
			view.css('width',370);	
		}
	}
	this.buy = function(){
		this.constructor(getmsg('idbuy'),'cart',false,false,'','',false,[getmsg("suchbegriff")]);
		this.synonym = getmsg("idshopping");
		this.getview = function(view,params){		
			cur_obj['buy'].speak(view,getmsg("searchingfor").replace('{search}',params.join(" ")));
			location = 'https://www.google.de/search?q='+params.join(" ")+'&tbm=shop&hl='+navigator.language;
		}
	}
	this.image = function(){
		this.constructor(getmsg('idimage'),'image',false,false,'','',false,[getmsg("suchbegriff")]);
		this.getview = function(view,params){
			cur_obj['image'].speak(view,getmsg("searchingfor").replace('{search}',params.join(" ")));
			location = 'https://www.google.com/search?site=imghp&tbm=isch&hl='+navigator.language+'&q='+params.join(" ");
		}
	}	
	this.wiki = function(){
		this.constructor(getmsg('idwiki'),'library',false,true,'','',false,[getmsg("suchbegriff")]);
		this.synonym = 'wiki';
		this.getview = function(view,params){
			cur_obj['wiki'].speak(view,getmsg("searchingfor").replace('{search}',params.join(" ")));
			location = 'http://'+navigator.language+'.wikipedia.org/wiki/'+params.join(" ");
		}
	}
	this.solve = function(){
		this.constructor(getmsg('idcalc'),'calculate',true,true,'','',false,'');
		this.synonym = getmsg('idsynonymcalc');
		this.getview = function(view,params){
			if (params.join('').length > 2){
				try {
					view.html(params.join('')+'='+ eval(params.join(''))); 
					cur_obj['solve'].speak(view,view.html());
				} catch (e) {
					if (e instanceof SyntaxError) {
						//nothing
					}
				}
			}
			else{
				view.html(getmsg("enteraufgabe"));
			}
		}
	}
	this.rss = function(){
		this.constructor(getmsg('idrss'),'feed2',true,true,'','*://*/*',true,[getmsg("rssfeedurl")]);
		this.getnotif = function(){
			return '';
		}
		this.getview = function(view,params){
			if (ValidUrl(params.join(''))){
				hresults = new ObjResults();
				ajax(params.join(' '), function(XMLmediaArray){
					$(XMLmediaArray).find("item").each(function(){ 
						hresults.addrows('','<a href="'+$(this).find("link").text()+'">'+$(this).find("title").text()+'</a>');
					});
					view.html(hresults.returnview([]));
				});
			}
			else{
				view.html(getmsg("entervalidstream"));
			}	
		}
	}
	
	this.gmail = function(){
		this.constructor(getmsg('idgmail'),'bubbles',true,true,'','https://mail.google.com/mail/*',true,'');
		this.getview = function(view){
			ajax("https://mail.google.com/mail/feed/atom", function(XMLmediaArray){
				$(XMLmediaArray).find("fullcount").each(function(){	
					view.html($(this).text()+'Unread Email').addClass('maincolor');
				});
				$(XMLmediaArray).find("entry").each(function(){
					view.append('<li><a href="'+$(this).find("link").attr("href")+'">'+$(this).find("title").text()+'</a></li>');
				});
			});	
		}
	}
	this.chucknorris = function(){
		this.constructor(getmsg('idcucknorris'),'bubbles',true,true,'',"https://api.icndb.com/jokes/random",true,'');
		this.getview = function(view){
			ajax("http://api.icndb.com/jokes/random", function(data){
				view.html(data.value.joke);
			});
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
		//this.innercontent += '<tr><td>'+left+'</td><td>'+right+'</td></tr>';
		this.innercontent += '<li>'+left+right+'</li>';
	}
	this.returnview = function(rowsarray){
		if(rowsarray.length > 0) this.init(rowsarray);
		return this.innercontent;
	}
}
