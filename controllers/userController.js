//This Controller deals with all functionalities of User
function UserController() {
    var UserEntity = require('../models/usermodel');

    // Creating New User
    this.createUser = function(req, res, next) {       
        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var address = req.body.address;
        var city = req.body.city;
        var state = req.body.state;
        var zip = req.body.zip;
        var phnumber = req.body.phnumber;

        UserEntity.create({
            firstname: firstname,
            lastname: lastname,
            address: address,
            city: city,
            state: state,
            zip: zip,
            phonenumber: phnumber
        }, function(err, result) {
            if (err) {
                console.log(err);
                return res.send({
                    'error': err
                });
            } else {
                //return res.send({'result':result,'status':'successfully saved'});
                res.render('confirmation.ejs');
            }
        });
    };

    // Fetching Details of User
    this.getUser = function(req, res, next) {

        UserEntity.find({}, function(err, result) {
            if (err) {
                console.log(err);
                return res.send({
                    'error': err
                });
            } else {
                return res.send(result);
            }
        });
    };

    return this;

};

module.exports = new UserController();