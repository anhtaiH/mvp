var passport = require('passport');
var LocalStragegy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy ({
  usernameField: 'email'
  },
  function(username, password, done) {
    User.findOne({email: username}, function(err, user) {
      if (err) {
        return done(err);
      }

      if(!user || !user.validPassword(password)) {
        return done(null, false, {
          message: 'Nope. Try again'
        });
      }

      return done(null, user);
    })
  }
));
