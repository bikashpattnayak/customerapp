const mongoose = require('mongoose');

var dbConnection = function () {
	var db = mongoose.connect('put your mongo url/sample');

};

module.exports = dbConnection;

