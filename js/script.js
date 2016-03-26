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

		$('body').css('background-color' , myItem)
		$('#input').css('background-color' , myItem)
		$('#submit').css('background-color' , myItem)

		$('ul').sortable();

		if(myItem === "hello") {
			$('ul').append( '<li>' + "What's up?" + '</li>');
		}

		if(myItem === "not much, you?") {
			$('ul').append( '<li>' + "Same here dog" + '</li>');
		}

		if(myItem.toLowerCase() === "take me to facebook" || myItem === "where is everyone?"){
			window.open("http://www.facebook.com")
		}

		if(myItem === "where am I?"){

		window.open("https://www.google.com/maps/place/115+W+18th+St,+New+York,+NY+10011/@40.7403679,-73.997841,17z/data=!3m1!4b1!4m2!3m1!1s0x89c259bcc3ea399b:0x8cc7820627311c02")
		}

		if(myItem.toLowerCase() === "clear" || myItem.toLowerCase() === "cl" ){
			$('li').remove();
		}

		if(myItem.toLowerCase() === "hey jack" || myItem.toLowerCase() === "hello jack" ){
			$('ul').append( '<li>' + "Hey!  What's your name?" + '</li>');
		}

		$('#chat_scroll').scrollTop(1000000000000);

		return false;

	});



	











});