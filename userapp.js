var express = require('express'),
http = require('http');

var bodyParser = require('body-parser')
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

http.createServer(app).listen(3000, function() {
  console.log("Server is listening on port 3000"); 
});
var routes = require('./routes')(app);
