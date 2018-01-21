var express = require("express");


var app = express();

var port = process.env.PORT || 8080;


app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get("/employees", function(req, res) {
	res.json({"name": "Peeter", "dept": "IT"});
});

app.listen(port, function() {
	console.log("App listening on port ", port);
});