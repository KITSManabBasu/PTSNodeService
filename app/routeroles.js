var Role = require('./models/role');

function getRoleMasters(res){
	Role.find(function(err, roles) {

			res.header("Access-Control-Allow-Origin", "*");
      		res.header("Access-Control-Allow-Headers", "X-Requested-With");

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(roles); // return all todos in JSON format
			//res.json(encrdecr.decrypt(todos));

		});
};

module.exports = function(app) {
	// api ---------------------------------------------------------------------
	app.get('/api/roles', function(req, res) {

		// use mongoose to get all todos in the database
		getRoleMasters(res);
	});	
};