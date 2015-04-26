$(document).keypress(function(e) {
	if(!request_started){
		//$('#overlay').show();
		if(e.keyCode == 13) {
			if($('#suchergebnisse').css('display') != 'none'){
				if($('#suchergebnisse li.active').length == 1){
					if($('#suchergebnisse li.active').parent().parent().attr('id') == 'matchingCommands2'){
						$('#suchergebnisse').hide();
						input.val($('#suchergebnisse li.active .command').html());
						start_request(results,$('#suchergebnisse li.active .command').html());
					}
					else{
						location.href =$('#suchergebnisse li.active a').attr('href');
					}
				}
			}	
			else{
				start_request(results,input.val().trim(),true);
			}	
		}
		oneisfocues = false;
		$('input,textarea').each(function(){
			if($(this).is(':focus')) oneisfocues = true
		});
		if(!oneisfocues) input.focus();
		if (input.is(':focus')){
		$('#card_notif').hide();
		$('#show_card_regulary,#show_notif').hide();
		setTimeout(function(){
			if(input.length > 0){
				requestgo = true;
				$('#MainContent').removeClass('down').addClass('top');
				$('#cardslider').addClass('inputactive');
				$('#matchingCommands2 .top').html(getmsg("matching_commands"));
				$('#matchingCommands').hide();
				
				if(!request_started){
					matching_commands = []; 
					if(typeof(cur_view) != 'undefined') if(typeof(cur_view.onleave) == 'function') cur_view.onleave(results);
					results.hide();
					eingabe = input.val().trim();
					eingabearray = eingabe.split(' ');
					
					for (i=0; i<= all_comm.length-1; i++){
						if (all_comm[i].toLowerCase().startsWith(eingabearray[0].toLowerCase())) matching_commands.push(all_comm[i]);
						if (all_comm[i].toLowerCase() == eingabearray[0].toLowerCase()){
							if(typeof(timer) != 'undefined') clearTimeout(timer)
							$('#suchergebnisse').hide();
							start_request(results,eingabe);
							break;
						}
					}
					if(matching_commands.length == 0){
						if(ValidUrl(input.val())){
							results.html(getmsg("idlaunch")+' '+input.val()+'...');
							start_request(results,getmsg("idlaunch")+ input.val() );
							$('#suchergebnisse').hide();
						}
						else if(isrechenterm(input.val())){
							start_request(results,getmsg("idcalc")+' '+input.val() );
							$('#suchergebnisse').hide();
						}
						else{
							detectedcomm = [];
							for(var r = 0;r <= eingabearray.length-1; r ++){
								if(all_comm.join(" ").indexOf(eingabearray[r].toLowerCase()) > -1){
									log(eingabearray[r]);
									input.val(eingabearray[r]);
									start_request(results,eingabearray[r],true);
								}
							}

							$('#matchingCommands2 .top').html(getmsg("nocommands"));
							$('#matchingCommands2 .matchinglits').html('');
							$('#suchergebnisse .aehnliche').html('');
							setgooglevorschlaege(input.val());
							for(var z=0;z<=all_comm.length-1;z++){
								if(similar_text(input.val(),all_comm[z],true) > 70){
									$('#suchergebnisse #matchingCommands2 .top').html(getmsg("doyoumean"));
									$('#suchergebnisse .aehnliche').show();
										$('#suchergebnisse .aehnliche').append('<li><a href="#"><span class="icon-'+all_icons[all_comm[z]]+'"></span><span class="command">'+all_comm[z]+'</span></a></li>');
									
									$(document).on('keypress', function(e) {
										if(e.keyCode == 13){
											start_request(results,$('.matchinglits a').attr('command'));
											input.val($('.matchinglits a').attr('command'));
											$('#suchergebnisse').hide();
										}
									});	
								}	
							}
	
						}
						
					}	
					else if(matching_commands.length == 1 && !request_started){
						$('#suchergebnisse').show();
						$('#suchergebnisse .matchinglits').html('<li><a href="#"><span class="icon-'+all_icons[matching_commands[0]]+'"></span><span class="command">'+matching_commands[0]+'</span>(Enter)</a></li>');
						setgooglevorschlaege(input.val());
						$('#suchergebnisse .matchinglits li:first()').addClass('active')
					}
					else{
						if(!request_started){
							$('#suchergebnisse').show();
							$('#suchergebnisse .matchinglits').html('');
							for(i=0;i<=matching_commands.length-1;i++){
								$('#suchergebnisse .matchinglits').append('<li><a href="#"><span class="icon-'+all_icons[matching_commands[i]]+'"></span><span class="command">'+matching_commands[i]+'</span></a></li>');
								$('#suchergebnisse .matchinglits li:first()').addClass('active')
							}	
							setgooglevorschlaege(input.val());							
						}
					}
					initcommandclick();
				}	
			}
			else{
				requestgo = false;
				
				$('#matchingCommands').show();
				
				results.html('').removeClass('show');
				$('#MainContent').removeClass('top').addClass('down');
				$('#cardslider').removeClass('inputactive');
				//$('#overlay').hide();
				initcommandclick();
				
				$('#suchergebnisse').hide();	
				$('#suchergebnisse .matchinglits').html('');	
			}
		},10);
}}}).on('keydown', function(e) {
	if (e.keyCode==8){
		results.removeClass('show');
		window.setTimeout(function(){
			if(input.val().length < 1){
				$('#matchingCommands').show();
				requestgo = false;
				results.html('').removeClass('show');
				$('#MainContent').removeClass('top').addClass('down');
				$('#cardslider').removeClass('inputactive');
				$('#vorschlaege').hide();
				initcommandclick();
				$('#show_card_regulary,#show_notif').html('');
				
				$('#suchergebnisse').hide();	
				$('#suchergebnisse .matchinglits').html('');
			}
			else{
				input.trigger('keypress');
			}
		},50);	
	}	
	if (e.keyCode==38 || e.keyCode==40){
		if($('#suchergebnisse li').not('.top').length > 0){
			active = -1;
			if($('#suchergebnisse li.active').length == 1){
				for (var z = 0;z <= $('#suchergebnisse li:not(.top)').length; z++){
					if (jQuery($('#suchergebnisse li:not(.top)')[z]).hasClass('active')){
						active = z;
					}
				}
			}
			if(e.keyCode == 40) active ++;
			if(e.keyCode == 38) active --;
			
			if(active < 0) active = $('#suchergebnisse li:not(.top)').length-1;
			if(active > $('#suchergebnisse li:not(.top)').length-1) active = 0;

			$('#suchergebnisse li:not(.top)').removeClass('active');
			jQuery($('#suchergebnisse li:not(.top)')[active]).addClass('active')
		}
	}
});
