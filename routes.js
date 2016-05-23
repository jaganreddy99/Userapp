module.exports = function(app) {
    var user = require('./controllers/userController');
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });
    app.post('/create', user.createUser); //Create User API
    app.get('/get', user.getUser); // Get User Details API
};
