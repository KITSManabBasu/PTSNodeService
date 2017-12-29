var mongoose = require('mongoose');

// module.exports = mongoose.model('Todo', {
// 	text : {type : String, default: ''}
// });


// module.exports = mongoose.model('application', {
// 	text : {type : String, default: ''}},

// 	'userid', {
// 	text : {type : String, default: ''}},

// 	'password', {
// 	text : {type : String, default: ''}}
// );


module.exports = mongoose.model('Todo', {
	application : {type : String, default: ''},
	userid : {type : String, default: ''},
	password : {type : String, default: ''}
});