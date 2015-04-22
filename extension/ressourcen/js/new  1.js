function initkeypress(){
	$(document).on('keypress', function(e) {
		var oneisfocues = false; // Ist schon ein Formularfeld im fokus?
		$('input,textarea').each(function(){
			if($(this).is(':focus')) oneisfocues = true
		});
		if(!oneisfocues) input.focus();
		if (input.is(':focus')){ //Wenn Input im Fokus ist.
			$('#MainContent').removeClass('down').addClass('top');
			$('#cardslider').addClass('inputactive');
			$('#matchingCommands2 .top').html('Molly schlägt vor:');
			results.hide();
			matching_Commands = [];
			eingabe = input.val().trim();
			command = eingabe.split(' ')[0];
			for (var i=0; i<= all_comm.length-1; i++){
				if (all_comm[i].toLowerCase().startsWith(command.toLowerCase())) matching_commands.push(all_comm[i]);
				if (all_comm[i].toLowerCase() == command.toLowerCase()){
					if(typeof(timer) != 'undefined') clearTimeout(timer)
					$('#suchergebnisse').hide();
					request_started = true;
					start_request(results,eingabe);
					break;
				}
			}
			if(request_started){
				switch(matching_Commands.length){
					case 0:
						$('#suchergebnisse').hide();
						if(ValidUrl(input.val())){
							results.html(getmsg("idlaunch")+' '+input.val()+'...');
							start_request(results,getmsg("idlaunch")+ input.val() );					
						}
						else if(isrechenterm(input.val())){
							start_request(results,getmsg("idcalc")+' '+input.val() );
						}
						else{
							$('#suchergebnisse').show();
							$('#suchergebnisse .matchinglits').append('<li><a href="#"><span class="icon-'++'"></span>Rechne (Enter zum Starten)</a></li>');
						}
					break;
					default:
					
					break;
				}	
			}
		}	
	
		switch(e.KeyCode){
			case 13:
				//Enter -> Eingabe starten, oder Google Suche starten.
				
			break;
		}
	
	}).on('keydown', function(e) {
		switch(e.keyCode){
			case 8: 
				input.trigger('keypress');
			break;
			case 38:
			case 40:
				if(e.keyCode==38 && !searchwhich > localStorage['last-searches'].length) searchwhich++;
				if(e.keyCode==40 && !searchwhich < 1) searchwhich--;
				input.val(localStorage['last-searches'].split(',')[searchwhich]);
				input.trigger('keypress');
			break;
		}	
	});
}

