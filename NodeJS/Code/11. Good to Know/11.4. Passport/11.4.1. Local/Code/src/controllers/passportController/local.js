import passport from "passport";
import passportLocal from "passport-local";
import UserModel from "./../../models/userModel";

let LocalStratery = passportLocal.Strategy;

/**
 * Valid user account type local
 */
let initPassportLocal = () => {
  passport.use(
    new LocalStratery({
        usernameField: "email",
        passwordField: "psw",
        passReqToCallback: true
      },
      async (req, email, password, done) => {
        try {
          let user = await UserModel.findByEmail(email);
          if (!user) return done(null, false, console.log("Login fail"));
          if (!user.local.isActive) return done(null, false, console.log("Account have no active"));

          let checkPassword = await user.comparePassword(password);
          if (!checkPassword) return done(null, false, console.log("Password invalid."));
          return done(null, user, console.log("Login successfuly"));
        } catch (error) {
          console.log(error);
          return done(null, false, console.log("Server error"));
        }
      }
    )
  );
  
  //Save userId to session
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      let user = await UserModel.findUserByIdForSessionToUse(id);
      user = user.toObject();
      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  });
};

module.exports = initPassportLocal;
