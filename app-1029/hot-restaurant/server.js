// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Restaurant list (DATA)
// =============================================================
// var nextLine = [];
// var waiting = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/reserve', function (req, res) {
	res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/tables', function (req, res) {
	res.sendFile(path.join(__dirname, 'tables.html'));
});





var tableData = [
	{
		customerName: 'Ahmed',
		customerEmail: 'afhaque89@gmail.com',
		customerID: 'afhaque89',
		phoneNumber: '979-587-0887'

	}
];

app.get('/api/tables', function (req, res) {
		res.json(tableData);
});


var waitListData = [
	{
		customerName: 'Saima',
		customerEmail: 'saima@gmail.com',
		phoneNumber: '979-587-0887',
		customerID: 'saimacool'
	}
];

app.get('/api/waitlist', function (req, res) {
		res.json(waitListData);
});


	app.post('/api/tables', function (req, res) {
		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table
		if (tableData.length < 5) {
			tableData.push(req.body);
			res.json(true); // KEY LINE
		} else { // Or false if they don't have a table
			waitListData.push(req.body);
			res.json(false); // KEY LINE
		}
	});

/*

// Search for Specific Character (or all characters) - provides JSON
app.get('/api/:customer?', function (req, res) {
	var add = req.params.customer;
	if (add) {
		console.log(chosen);

		for (var i = 0; i < characters.length; i++) {
			if (chosen === characters[i].routeName) {
				res.json(characters[i]);
				return;
			}
		}

		res.json(false);
	} else {
		res.json(characters);
	}
});

// Create New Characters - takes in JSON input
app.post('/api/new', function (req, res) {
	var newcustomer = req.body;
	newcustomer.routeName = newcustomer.name.replace(/\s+/g, '').toLowerCase();

	console.log(newcustomer);
	if(nextLine.length <= 5){
		nextLine.push(newcustomer);
	} else {
		waiting.push(newcustomer);
	}
	res.json(newcustomer);
});

*/

// app.get('/api/tables', function (req, res) {

// });




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
