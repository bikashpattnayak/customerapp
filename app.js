var express = require('express');
var connectDb = require('./model/connectMongo');
var api = require('./controller/api');
var app = express();
app.use(express.static(__dirname + '/public'));
connectDb();
api(app);
app.listen(3000);