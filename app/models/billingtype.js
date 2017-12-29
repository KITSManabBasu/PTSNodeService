var mongoose = require('mongoose');

module.exports = mongoose.model('BillingType', {
	BILL_TYPE_ID : {type : Number, default: 0},
	BILL_TYPE_DESC : {type : String, default: ''}
});