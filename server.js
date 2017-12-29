//console.log("I am ready");

// var encrdecr=require('./security/encrdecr.js');
 
// var hw = encrdecr.encrypt("hello world");
// // outputs hello world
// console.log(hw);
// console.log(encrdecr.decrypt(hw));


// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb
var port  	 = process.env.PORT || 8080; 				// set the port
var database = require('./config/database'); 			// load the database config
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

var options = {
  useMongoClient: true,
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30
};
// configuration ===============================================================
mongoose.connect(database.url,options); 	// connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request
app.use(cors());


// routes ======================================================================
require('./app/routes.js')(app);
//require('./app/routeroles.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);

//C:\Manab\Education\nodedemo\HalloweenNode\node_modules\mongoose\node_modules\mongodb\node_modules\bson\ext\index.js
//change bson = require('../build/Release/bson');  to	  bson = require('../browser_build/bson');  
