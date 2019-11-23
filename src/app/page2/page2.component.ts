import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor() { }
code: string;
  ngOnInit() {
	this.code = 
		"const path = require(\"path\");\n"+
		"const express = require(\"express\");\n"+
		"const app = express();\n"+
		"app.use(express.static(__dirname + '/angular-build'));\n"+
		"app.get('/*', function(req,res){\n"+
		"	res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))\n"+
		"});\n"+
		"// Start the app by listening on the default Heroku port\n"+
		"var port = process.env.PORT || 8080;\n"+
		"app.listen(port, function(){\n"+
		"	console.log('Running on port ' + port);\n"+
		"});";
  }
}
