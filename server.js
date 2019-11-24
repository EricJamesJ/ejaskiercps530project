const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/angular-build'));

app.get('/', function(req,res){
res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
})
app.get('/page1', function(req,res){
res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
})
app.get('/page2', function(req,res){
res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
})
app.get('/page3', function(req,res){
res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
})
app.get('/page4', function(req,res){
res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
})
app.get('/page5', function(req,res){
res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
})
app.get('/page6', function(req,res){
res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
})
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
	"This app just takes a random image url from the subreddit that is tored on the server",
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
var urls = [
	"https://i.redd.it/eeu3eit5sua31.jpg",
	"https://i.redd.it/db00bf6r8wu31.png",
	"https://i.redd.it/6htqm78noq131.jpg",
	"https://i.redd.it/komdqtvt1hf31.png",
	"https://i.imgur.com/4wxiQ04.jpg",
	"https://i.redd.it/25au8vz7up431.jpg",
	"https://i.redd.it/suvv3u8il6l31.jpg",
	"https://i.redd.it/327w7ffymp131.png",
	"https://i.redd.it/2rgu70tbnkm31.jpg",
	"https://preview.redd.it/uhk8e5wkczz21.gif?format=mp4&s=83938f2f5a6e242229cdaa59fa62ca12bb199188",
	"https://i.redd.it/2l8hazvglqq31.jpg",
	"https://i.redd.it/4j6t5oh685331.png",
	"https://i.redd.it/i57o562zn6a31.jpg",
	"https://i.redd.it/oz7nn3qxkv931.png",
	"https://i.redd.it/kb21uzz9wr031.jpg",
	"https://i.redd.it/ialeye8ejcp31.jpg",
	"https://i.redd.it/uu1g6oazenb31.jpg",
	"https://i.redd.it/044nl5iqn6g31.jpg",
	"https://i.redd.it/eew02a0y7d131.jpg",
	"https://i.redd.it/7evyzafb6f331.png",
	"https://i.redd.it/ro8tz8nudb731.jpg",
	"https://i.redd.it/jtmtr68fmpv31.jpg",
	"https://i.redd.it/twtin4frqzk31.png",
	"https://i.redd.it/oie5f3qkd2c31.jpg",
	"https://i.redd.it/yoxk5aysym731.jpg",
	"https://i.redd.it/1ky9qdwas5031.jpg",
	"https://i.redd.it/3t3r3oesu7x21.jpg",
	"https://i.redd.it/jlxgzizdieg31.jpg",
	"https://i.redd.it/9vt5o43quij31.png",
	"https://i.redd.it/3hvfcs931yy21.png",
	"https://i.redd.it/791qv4x6x9l31.jpg",
	"https://i.redd.it/s2p941qv7ez21.jpg",
	"https://i.redd.it/zejqus1320331.jpg",
	"https://i.redd.it/ptti7dm8c4731.png",
	"https://i.redd.it/pwfr31e0jfi31.jpg",
	"https://i.redd.it/vg1pxvhq2sz21.jpg",
	"https://i.redd.it/nh1wimu10j231.png",
	"https://i.redd.it/joxtaf4rufy31.jpg",
	"https://i.redd.it/x9trykf4z1v21.jpg",
	"https://i.imgur.com/lLZir6a.jpg"
];
app.get('/api/caption/:captionId', function (req, res){
  res.setHeader('Access-Control-Allow-Origin', '*');
  var captionId = req.params["captionId"];
  var randNum = Math.floor(Math.random() * urls.length); 
  if(captionId >= captions.length){
	    console.log('Sent ' + "");	
	    res.send({caption:"", url:urls[randNum]});
  }
  else{
	console.log('Sent ' + captions[captionId]);
	res.send({caption:captions[captionId], url:urls[randNum]});
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
