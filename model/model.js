const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var todoSchema = new Schema({
	task: String,
	owner: String,
	complete: Boolean,
	date: Date
});

var Todo = mongoose.model('todo',todoSchema);

module.exports = Todo;