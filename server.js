// Require express to set up the server
var express = require('express');
var app 	= express();

// Set view engine to ejs
app.set('view engine', 'ejs');

// Assign local host port number 
var port 	= process.env.PORT || 3000;

app.listen(port, function(){
	console.log('listening to port ' + port);
})

// Respond to port 3000 http root request
app.get('/', function(req, res){
	console.log("Hi there");
});
