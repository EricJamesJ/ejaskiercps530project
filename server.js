const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/angular-build'));

app.get('/', function(req,res){
res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
});
var captions = [
	"HELLO!",
	"Your're probably wondering what this is",
	"Well, if you keep clicking, I'll tell you",
	"",
	"",
	"",
	"You're still clicking???",
	"wow",
	"I guess I might as well explain what all this",
	"Its pretty simple to be honest",
	"Every image you see in the background is taken from a subbreddit called",
	"imsorryjon",
	"It's a forum site where people upload images expressing their sympathies towards Jon",
	"Jon being the name of Garfield's owner",
	"Garfield being the demonic presence as the source of these images",
	"This app just takes a random image from the subreddit",
	"and displays it as the background for this div",
	"the text that you are reading",
	"is coming from a server call that is being made every time you click",
	"Well, thats it",
	"That's the app",
	"If you refresh or go to another page, the text will reset from the beginning",
	"but for now, this will be the last text caption",
	"",
	"",
	"",
	"",
	"BOO",
	"Did I scare you?",
	"No, oh, sorry",
	"Ok, I'll stop with the text"
];
app.get('/api/caption/:captionId', function (req, res){
  res.setHeader('Access-Control-Allow-Origin', '*');
  var captionId = req.params["captionId"];
  if(captionId >= captions.length){
	    console.log('Sent ' + "");	
	    res.send({caption:""});
  }
  else{
	console.log('Sent ' + captions[captionId]);
	res.send({caption:captions[captionId]});
  }
});
var cat= { name: 'Project' };
app.get('/api/cat', function (req, res){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(cat);
});
// Start the app by listening on the default Heroku port
var port = process.env.PORT || 8080;
app.listen(port, function(){
	console.log('Running on port ' + port);
});
