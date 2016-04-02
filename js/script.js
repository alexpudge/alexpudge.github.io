var myItem;

$('document').ready(function(){
	console.log("ready");

	$('#chat_scroll').scrollTop(1000000);

	var input = document.getElementById('input');
	input.focus();
	input.select();

	$('#submit').click(function(){
		console.log("click is working");



		myItem = $('#input').val();
		$('ul').append( '<li class="usertext">' + myItem + '</li>');
		$('#input').val("");

		$('li').click(function(){
		console.log("li click is working");
		$(event.target).remove();
		});

		$('#main_1').css('background-color' , myItem)

		$('ul').sortable();


		switch ( myItem ) {

			case "clear":
			$('li').remove();
			break;

			case "what's your name?" :
			$('ul').append( '<li id="jack_text">' + "My name is Jack." + '</li>');
			break;


			case "hello" :
			$('ul').append( '<li id="jack_text">' + "What's your name?" + '</li>');
			break;

			case "my name is alex" :
			$('ul').append( '<li id="jack_text">' + "Hey Alex!  Nice to meet you." + '</li>');
			break;

			case "what do you do?" :
			$('ul').append( '<li id="jack_text">' + "I can do tons of cool stuff...like show you the weather." + '</li>');
			$('ul').append( '<li id="jack_text">' + "I also love colors!" + '</li>');
			break;

			case "show me something trippy" :
			$('#main_1').css('display' , 'none');
			$('#main_trippy').css('display' , 'block');
			$('#bottom').css('opacity' , '.2');
			$('li').remove();
			break;

			case "show me the forecast" :
			$('#main_1').css('display' , 'none');
			$('#main_weather').css('display' , 'block');
			$('li').remove();
			break;

			case "is it raining?" :
			$('ul').append( '<li id="jack_text">' + "To see the forecast, say" + '<br>' + "[show me the forecast]" + '</li>');
			break;

			case "you are awesome" :
			$('ul').append( '<li id="jack_text">' + "No.  You are!" + '</li>');
			break;

			case "deuces" :
			$('ul').append( '<li id="jack_text">' + "Goodbye." + '</li>');
			break;

			case "where am I?" :
			$('#main_1').css('display' , 'none');
			$('#main_map').css('display' , 'block');
			$('li').remove();
			break;

		

			case "enough" :
			$('#main_1').css('display' , 'block');
			$('#main_trippy').css('display' , 'none');
			$('#bottom').css('opacity' , '1');
			$('#main_map').css('display' , 'none');
			$('#main_weather').css('display' , 'none');

			$('li').remove();

			$('ul').append( '<li id="jack_text">' + "Pretty cool.  Huh?" + '</li>');
			break;

			case "stop" :
			$('#main_1').css('display' , 'block');
			$('#main_trippy').css('display' , 'none');
			$('#main_map').css('display' , 'none');
			$('#main_weather').css('display' , 'none');

			$('li').remove();
			break;

		};

		$('#chat_scroll').scrollTop(1000000000000);

		return false;

	});



	











});