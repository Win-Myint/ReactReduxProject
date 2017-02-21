// Require express to set up the server
var express = require('express');
var app 	= express();

// Assign local host port number 
var port 	= process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));

// Set view engine to ejs
app.set('view engine', 'ejs');

app.listen(port,function(){
	console.log('lsitening to port ' + port);
})

// Respond to port 3000 http root request
app.get('/',function(req,res){
	res.render('index');
})