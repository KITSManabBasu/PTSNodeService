var mongoose = require('mongoose');

module.exports = mongoose.model('Team', {
	TEAM_ID : {type : Number, default: 0},
	TEAM_NAME : {type : String, default: ''}
});