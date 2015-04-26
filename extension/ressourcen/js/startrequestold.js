$.ajax({
		url: "http://nickw.de/molly/suchen.php",
		data: { id: localStorage['userid'],search: eingabe},
		method: "POST"
	});

	//$('#overlay').show();
	if(typeof(start) == 'undefined') start = false;
	
	request_started = true;
	if(typeof(eingabe) != 'string') eingabe.join(" ");
	eingabe = eingabe.split(" ");
	
	for(var propertyName in objcommands) { //welches Object hat ID von command?
		cur_view = new objcommands[propertyName];
		if((cur_view.id.toLowerCase() == eingabe[0].toLowerCase()) || (typeof(cur_view.synonyms) != 'undefined' && cur_view.synonyms.toLowerCase()  == eingabe[0].toLowerCase() )){
			view.html('').show().addClass('show');		
		
			window.setTimeout(function(){
				if (cur_view.hasOwnProperty('permission')){
					permissonsallowed = checkpermission(cur_view.id,cur_view.permission);
				}
				if (cur_view.hasOwnProperty('origin')){
					originsallowed = checkorigin(cur_view.id,cur_view.origin);
				}
			},300);	
			
			//view.append(getmsg('description'+propertyName)+'<br/>');
		
			eingabe.shift();
			command = propertyName;
			
			while (eingabe.indexOf('') > -1) eingabe.splice(eingabe.indexOf(''),1); //Falls viele Lehrzeichen eingegeben.
			
			if(cur_view.hasOwnProperty('params')){
				if (eingabe.length < cur_view.params.length){
					if(cur_view.hasOwnProperty('notallparams')){
						cur_view.notallparams(view);
						initregulary(view,cur_view,eingabe);
					}
					else{
						view.append('<li class="top">'+getmsg("needed_params")+cur_view.params.join()+'</li>');
						if(input.val()[input.val().length-1] != ' ')  input.val(input.val()+' ');
					}	
					setTimeout(function(){request_started = false;},200);
				}
				else{
					log('start:'+start)
					if (!cur_view.startdirectly && !start){
						request_started = false;
						setTimeout(function(){
							start_request(results,eingabe.join(" "),true);
						},3000);
					}
					else{
						cur_view.initview(view,eingabe);
						initregulary(view,cur_view,eingabe);
						setTimeout(function(){
							request_started = false;
						},200);
						return false;	
					}					
				}
			}
			else{
				cur_view.initview(view,eingabe);
				initregulary(view,cur_view,eingabe);
				setTimeout(function(){request_started = false;},200);
				return false;
			}
			break;break;
		}
		
	}