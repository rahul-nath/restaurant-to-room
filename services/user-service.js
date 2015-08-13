// load the user class we created
var User = require('../models/user').User;

// define a user function called addUser that is exported
// exports points to model.exports so we can assign it properties
exports.addUser = function(user, next){
    var newUser = new User({
        firstName = user.firstName,
        lastName = user.lastName,
        roomNumber = user.roomNumber,
        email = user.email,
        password = user.password
    });
    
    newUser.save(function(err){
       if(err) return next(err);
       next(null);
    });
}
