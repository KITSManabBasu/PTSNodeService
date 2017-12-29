var mongoose = require('mongoose');

module.exports = mongoose.model('Companies', {
	COMPANY_ID : {type : Number, default: 0},
	COMPANY_NAME : {type : String, default: ''}
});