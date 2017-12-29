var mongoose = require('mongoose');

module.exports = mongoose.model('Locs', {
	LOC_ID : {type : Number, default: 0},
	LOCATION : {type : String, default: ''}
});