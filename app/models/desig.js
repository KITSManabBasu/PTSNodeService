var mongoose = require('mongoose');

module.exports = mongoose.model('Desigs', {
	DESGN_ID : {type : Number, default: 0},
	DESGN_DESC : {type : String, default: ''}
});