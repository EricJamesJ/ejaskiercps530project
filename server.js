const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/angular-build'));
app.get('/*', function(req,res){
res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
});
var cat= { name: 'lilly' };
app.get('/api/cat', function (req, res){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(cat);
});
// Start the app by listening on the default Heroku port
var port = process.env.PORT || 8080;
app.listen(port, function(){
	console.log('Running on port ' + port);
});
