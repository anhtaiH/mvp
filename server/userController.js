var UserModel = require('./userModel');

var addUser = function(user, cb) {

  var newUser = new UserModel({
    email: user.email,
    name: user.name,
  });

  newUser.setPassword(user.password);

  newUser.save(function(err, result) {
    if (err) {
      console.log('Error in adding user to database from usercontroller server ==>', err);
    } else {
      console.log('User has been saved to the database! ==>', result);
      cb('Success!');
    }
  })
}

var loginUser = function(userBody, cb) {
  UserModel.findOne({email: userBody.email}, function(err, user) {
    if (err) { console.log('Error in loggin in', err) }

    if (!user || !user.validPassword(userBody.password)) {
      console.log('Wrong, try again');
      cb(null);
    } else {
      cb('Success!');
    }

  });
}

module.exports = {
  addUser: addUser,
  loginUser: loginUser
};
