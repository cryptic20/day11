var express = require('express');
var app     = express();
var path    = require("path");

app.listen(process.env.PORT || 3000, function(){
	console.log('listening to port 3000');
});

app.use(express.static('files'))

 app.get('/',function(req, res){
 	res.sendFile('index.html');

 });

 app.get('/blog',function(req,res){
 	res.sendFile(path.join(__dirname, '/files', 'blog.html'));


 });

 app.get('/about',function(req,res){
 	res.sendFile(path.join(__dirname, '/files', 'about.html'));


 });

 
app.get('*', function(req,res){
	res.status(404).send("page doesn't exist!");

});