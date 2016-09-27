import passport from 'passport';
import passportLocal from 'passport-local';
import mongoose from 'mongoose';

let LocalStrategy = passportLocal.Strategy();
let User = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(username, password, done) {
    User.findOne({email: username}, (err, user) => {
      if (err) done(err);

      //Return if user is not in DB
      if(!user){
        return done(null, false, {
          message: 'User not found'
        });
      }

      //Return if pass is wrong
      if (!user.validPassword(password)){
        return done(null, false, {
          message: 'Password is wrong'
        });
      }

      //If credentials are correct, return the user object
      return done(null, user)
    })
  }
))