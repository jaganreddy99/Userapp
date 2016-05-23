// Model for the User 
module.exports = (function UserEntity() {

    var mongoose = require('../database_util').mongoose;

    var schema = {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zip: {
            type: String,
            required: true
        },
        phonenumber: {
            type: String,
            required: true
        }
    };
    var collectionName = 'User';
    var userSchema = mongoose.Schema(schema);
    var UserEntity = mongoose.model(collectionName, userSchema);
    return UserEntity;
})();
