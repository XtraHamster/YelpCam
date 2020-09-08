var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('landing');
});

app.get('/campgrounds', function(req, res){
	var campgrounds = [
		{name: 'Salmon Creek', image: "https://pixabay.com/get/57e8d0424a5bae14f1dc84609620367d1c3ed9e04e5074407c2a7adc944fc6_340.jpg"},
		{name: 'Iceland Hill', image: "https://images.pexels.com/photos/2419278/pexels-photo-2419278.jpeg?auto=compress&cs=tinysrgb&h=350"}, 
		{name: 'Mountain Site', image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350"}
	]
	res.render('campgrounds', {campgrounds: campgrounds});
});

app.listen(3000, function(){
	console.log('The YelpCamp Server has started!');
});