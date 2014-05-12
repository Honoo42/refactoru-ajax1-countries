var express = require('express');
var bodyParser = require('body-parser');
var countryList = require('./countries.json');
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var displayCountry = countryList;
console.log(displayCountry);

// var countryObject = {displayCountry:}
app.get('/', function(req, res) {
	res.render('index');
});

app.get('/countries', function(req, res) {
	// console.log('Here are the countries: '+countryList)
	res.send(displayCountry);
});

app.post('/search', function(req, res) {
	req.query.query
	// console.log(req.body);
	res.send(req.body);
});

var server = app.listen(8260, function() {
	console.log('Express server listening on port ' + server.address().port);
});
