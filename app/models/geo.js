var mongoose = require('mongoose');

module.exports = mongoose.model('Geos', {
	LOC_ID : {type : Number, default: 0},
	LOCATION : {type : String, default: ''}
});