var mongoose = require('mongoose');
var config = require('./database_config');
 
mongoose.connect(config.dbPath);
var dbConnection = mongoose.connection;
 
dbConnection.on('error', function () {
	console.log('error occured from db');
});
 
dbConnection.once('open', function dbOpen() {
	console.log('successfully opened the db');
});
 
exports.mongoose = mongoose;
