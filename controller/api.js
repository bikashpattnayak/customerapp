var dbConnect = require('../model/connectMongo');
var Todo = require('../model/model');
var cors = require('cors');
var bodyParser = require('body-parser');




var apis = function (app) {
	app.use(cors());
	app.options('*', cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

	app.get('/api/todos', function (req, res) {
		Todo.find({},function(err, todos){
			res.send(todos);
		});
	
	})
	
	app.post('/api/todos', function (req, res) {
		 var value = (req.body.isDone == "on") ? true : false;
		 var newTodo = new Todo({
		 	task: req.body.todo || 'blank',
			owner: req.body.user || 'bikash',
			complete: value || false,
			date: req.body.date

		 });
		 newTodo.save(function(err){
		 	if(err) throw err;
		 	res.send('success '+ JSON.stringify(req.body));

		 });

	});

};

module.exports = apis;