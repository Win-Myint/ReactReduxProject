// Require express to set up the server
var express = require('express');
var app 	= express();

// Assign local host port number 
var port 	= process.env.PORT || 3000;

app.listen(port, function(){
	console.log('listening to port ' + port);
})
