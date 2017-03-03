$(document).ready(function(){

	var lon;
	var lat;
	var tempSwamp = true;
	if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
			lon = position.coords.longitude;
			lat = position.coords.latitude;
			
			var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat.toFixed(1)+"&lon="+lon.toFixed(1)+"&APPID=4c26275f434b5985ae657747177db122";
			console.log(api);
			$.getJSON(api, function(data){
				var country = data.sys.country;
				var weather = data.weather[0].description;
				var kelvin = data.main.temp;
				var windSpeed = data.wind.speed;
				windSpeed - windSpeed * 1.6;
				var city = data.name;
				var fahrenheit = kelvin * 9/5 - 459.67;
				fahrenheit = fahrenheit.toFixed(0);
				var celsius = kelvin - 273.15;
				celsius = celsius.toFixed(0);

				$("#city").html(city + ", " + country);
				$("#weather").html("Weather: " + weather);
				$("#windSpeed").html("Wind speed: " + windSpeed + " km/h");
				$("#kelvin").html(kelvin);
				$("#temp").html("Temperature: " + celsius + " &#8451");
				$("#tempSwamp").html("Display in fahrenheit");
				$("#tempSwamp").addClass("btn btn-primary");
				
				$("#tempSwamp").click(function(){
					if(tempSwamp == false){
						$("#temp").html("Temperature: " + celsius + " &#8451");
						$("#tempSwamp").html("Display in fahrenheit");
						tempSwamp = true;
					}
					else {
						$("#temp").html("Temperature: " + fahrenheit + " &#8457");
						$("#tempSwamp").html("Display in celsius");
						tempSwamp = false;
					}
				});
				
				if(weather == "clear sky")
					$("#container").css('background-image', 'url("http://www.textures.wpgallery.com/images/almost-clear-sky-texture-for-2200x1463-40-210.jpg")');
				if(weather == "clouds")
					$("#container").css('background-image', 'url("http://combiboilersleeds.com/images/cloudy/cloudy-7.jpg")');
				if(weather == "Drizzle")
					$("#container").css('background-image', 'url("https://www.ibiza2day.com/wp-content/uploads/2015/03/rain.jpg")');
				if(weather == "snow")
					$("#container").css('background-image', 'url("https://s-media-cache-ak0.pinimg.com/originals/9b/ae/c6/9baec66deb80547e470a0ab04f275cae.jpg")');
				if(weather == "thunder")
					$("#container").css('background-image', 'url("http://s.hswstatic.com/gif/thunderstorm-orig.jpg")');
				
				$("body").fadeIn('slow');
			});	
		});
	}
	
	

});