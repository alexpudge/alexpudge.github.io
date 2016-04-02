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
			$('#main_1').css('display' , 'none');
			$('#main_weather').css('display' , 'block');
			$('li').remove();
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


		// if(myItem === "hello") {
		// 	$('ul').append( '<li>' + "What's up?" + '</li>');
		// }

		// if(myItem === "not much, you?") {
		// 	$('ul').append( '<li>' + "Same here dog" + '</li>');
		// }

		// if(myItem.toLowerCase() === "take me to facebook" || myItem === "where is everyone?"){
		// 	window.open("http://www.facebook.com")
		// }

		// if(myItem === "where am I?"){

		// window.open("https://www.google.com/maps/place/115+W+18th+St,+New+York,+NY+10011/@40.7403679,-73.997841,17z/data=!3m1!4b1!4m2!3m1!1s0x89c259bcc3ea399b:0x8cc7820627311c02")
		// }

		// if(myItem.toLowerCase() === "clear" || myItem.toLowerCase() === "cl" ){
		// 	$('li').remove();
		// }

		// if(myItem.toLowerCase() === "hey jack" || myItem.toLowerCase() === "hello jack" ){
		// 	$('ul').append( '<li>' + "Hey!  What's your name?" + '</li>');
		// }

		$('#chat_scroll').scrollTop(1000000000000);

		return false;

	});



	











});