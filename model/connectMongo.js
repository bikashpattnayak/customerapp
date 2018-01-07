const mongoose = require('mongoose');

var dbConnection = function () {
	var db = mongoose.connect('mongodb://bikash:bikash@ds245687.mlab.com:45687/sample');

};

module.exports = dbConnection;

